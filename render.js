/* =========================================================================
   RENDER  ―  js/content.js のデータから DOM を組み立てる
   ・通常はこのファイルを触る必要はありません（文章は content.js、見た目は CSS）
   ・新しいブロック種別を足したいときは BLOCKS に関数を追加します
   ========================================================================= */
(function () {
  "use strict";

  const data = window.PORTFOLIO;
  if (!data) {
    console.error("[portfolio] window.PORTFOLIO が見つかりません。js/content.js を確認してください。");
    return;
  }

  /* ---------- DOM helpers ---------- */
  function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === undefined || v === null || v === false) continue;
        if (k === "class") el.className = v;
        else if (k === "text") el.textContent = v;
        else if (k.startsWith("data-") || k.startsWith("aria-") || k === "role") el.setAttribute(k, v);
        else if (k in el) el[k] = v;
        else el.setAttribute(k, v);
      }
    }
    appendAll(el, children);
    return el;
  }
  function appendAll(el, children) {
    for (const c of children.flat()) {
      if (c === null || c === undefined || c === false) continue;
      el.append(c.nodeType ? c : document.createTextNode(String(c)));
    }
  }
  /** **bold** と 改行(\n) を解釈してフラグメント化（innerHTMLは使わない） */
  function rich(text) {
    const frag = document.createDocumentFragment();
    String(text ?? "").split("\n").forEach((line, li) => {
      if (li > 0) frag.append(document.createElement("br"));
      line.split(/(\*\*[^*]+\*\*)/g).forEach((part) => {
        if (!part) return;
        if (part.startsWith("**") && part.endsWith("**")) {
          frag.append(h("strong", { text: part.slice(2, -2) }));
        } else frag.append(document.createTextNode(part));
      });
    });
    return frag;
  }
  const pad2 = (n) => String(n).padStart(2, "0");
  let revealIndex = 0;
  /** reveal用クラスを付与（兄弟間でディレイをずらす） */
  function reveal(el, delay) {
    el.classList.add("reveal");
    el.style.setProperty("--d", (delay ?? 0) + "ms");
    return el;
  }

  /* ---------- Shared parts ---------- */
  function blockHead({ label, title, intro }) {
    return reveal(
      h("header", { class: "block-head" },
        label && h("span", { class: "label-meta", text: label }),
        title && h("h3", { class: "block-head__title", text: title }),
        intro && h("p", { class: "block-head__intro" }, rich(intro))
      )
    );
  }

  function figure(img, opts = {}) {
    if (img.dummy || !img.src) {
      return h("figure", { class: "figure" },
        h("div", { class: "dummy" },
          h("span", { class: "dummy__tag", text: img.dummy ? "DUMMY" : "NO IMAGE" }),
          img.desc && h("span", { class: "dummy__text" }, rich(img.desc))
        ),
        img.caption && h("figcaption", { class: "figure__caption", text: img.caption })
      );
    }
    const image = h("img", {
      src: img.src, alt: img.alt || img.caption || "", loading: "lazy", decoding: "async",
    });
    const frame = h("button", {
      type: "button", class: "figure__frame", "aria-label": (img.caption || "画像") + "を拡大表示",
      "data-lightbox": "1", "data-src": img.src, "data-caption": img.caption || "",
      style: "appearance:none;font:inherit;text-align:left;",
    }, image, h("span", { class: "figure__zoom", "aria-hidden": "true", text: "⤢" }));
    return h("figure", { class: "figure" },
      frame,
      img.caption && h("figcaption", { class: "figure__caption", text: img.caption }),
      // 画像下の説明（長文）。不要なら content.js の desc を消すだけで非表示
      !opts.hideDesc && img.desc && h("p", { class: "figure__desc" }, rich(img.desc))
    );
  }

  /* ---------- Hero ---------- */
  function renderHero(hero) {
    return h("section", { class: "hero", id: "top" },
      h("div", { class: "container hero__inner" },
        reveal(h("div", { class: "hero__eyebrow" }, h("span", { class: "label-meta", text: hero.eyebrow }))),
        reveal(h("h1", { class: "hero__name", "aria-label": hero.nameLine1 + " " + hero.nameLine2 },
          h("span", { "aria-hidden": "true", text: hero.nameLine1 }),
          h("span", { "aria-hidden": "true", text: hero.nameLine2 })
        ), 100),
        h("div", { class: "hero__bottom" },
          reveal(h("div", null,
            h("p", { class: "hero__ja", text: hero.nameJa }),
            h("p", { class: "hero__role", text: hero.role }),
            h("p", { class: "hero__lead" }, rich(hero.lead))
          ), 220),
          reveal(h("ul", { class: "hero__chips" }, (hero.chips || []).map((c) => h("li", { class: "chip", text: c }))), 320)
        )
      ),
      h("div", { class: "hero__scroll label-meta", "aria-hidden": "true", text: hero.scrollLabel || "SCROLL" })
    );
  }

  /* ---------- Profile / Skills ---------- */
  function rowList(items, { numbered = false } = {}) {
    return h("div", { class: "rows" },
      items.map((it, i) =>
        reveal(
          h("div", { class: "row" + (numbered ? " row--skill" : "") },
            numbered ? h("span", { class: "row__num", text: pad2(i + 1) }) : h("span", { class: "row__meta", text: it.meta }),
            numbered
              ? [h("h4", { class: "row__title", text: it.title }), it.body && h("p", { class: "row__body" }, rich(it.body))]
              : h("div", { class: "row__main" },
                  h("h4", { class: "row__title", text: it.title }),
                  it.body && h("p", { class: "row__body" }, rich(it.body))
                )
          ),
          i * 60
        )
      )
    );
  }

  function renderProfile(p) {
    const wrapper = h("section", { class: "section", id: "profile" },
      h("div", { class: "container" },
        // overview
        h("div", { class: "block split split--wide" },
          reveal(h("div", null,
            h("span", { class: "label-meta", text: p.overview.label }),
            h("h2", { class: "headline-lg", text: p.overview.label === "OVERVIEW" ? "ABOUT" : p.overview.label, style: "margin-top:.5rem" }),
            h("p", { class: "block-head__title", text: p.overview.title, style: "margin-top:.75rem" })
          )),
          reveal(h("div", { style: "display:grid;gap:1.5rem" }, p.overview.paragraphs.map((t) => h("p", { class: "body-lg" }, rich(t)))), 120)
        ),
        // background
        h("div", { class: "block" },
          blockHead({ label: p.background.label, title: p.background.title }),
          rowList(p.background.items)
        ),
        // work style
        h("div", { class: "block" },
          blockHead({ label: p.workStyle.label, title: p.workStyle.title }),
          h("div", { class: "card-grid card-grid--3" },
            p.workStyle.items.map((it, i) =>
              reveal(h("article", { class: "card glass" },
                h("span", { class: "card__index", text: pad2(i + 1) }),
                h("h4", { class: "card__title", text: it.title }),
                h("p", { class: "card__body" }, rich(it.body))
              ), i * 90)
            )
          )
        )
      )
    );
    return wrapper;
  }

  function renderSkills(p) {
    return h("section", { class: "section", id: p.skills.id || "skills" },
      h("div", { class: "container" },
        h("div", { class: "block" },
          blockHead({ label: p.skills.label, title: p.skills.title }),
          rowList(p.skills.items, { numbered: true })
        ),
        h("div", { class: "block" },
          blockHead({ label: p.tools.label, title: p.tools.title }),
          h("div", { class: "tools" },
            p.tools.groups.map((g, i) =>
              reveal(h("div", { class: "tool-group glass" },
                h("h4", { class: "label-meta tool-group__name", text: g.name }),
                h("ul", { class: "tool-group__items" }, g.items.map((t) => h("li", { class: "chip", text: t })))
              ), i * 90)
            )
          )
        )
      )
    );
  }

  /* ---------- Chapter blocks ---------- */
  const BLOCKS = {
    table(b) {
      const links = (b.links || []).filter((l) => l.url);
      return h("div", { class: "block" },
        blockHead(b),
        reveal(h("div", { class: "spec glass" },
          b.rows.map(([k, v]) => h("div", { class: "spec__row" },
            h("span", { class: "spec__key", text: k }),
            h("span", { class: "spec__val" }, rich(v))
          )),
          links.length > 0 && h("div", { class: "spec__links" },
            links.map((l) => h("a", { class: "btn btn--glass", href: l.url, target: "_blank", rel: "noopener noreferrer" }, l.label, " ↗"))
          )
        ))
      );
    },

    text(b) {
      return h("div", { class: "block" },
        blockHead(b),
        reveal(h("p", { class: "body-lg", style: "max-width:52rem" }, rich(b.body)))
      );
    },

    cards(b) {
      const cols = b.items.length >= 3 ? " card-grid--3" : "";
      return h("div", { class: "block" },
        blockHead(b),
        h("div", { class: "card-grid" + cols, style: b.items.length === 1 ? "grid-template-columns:1fr" : undefined },
          b.items.map((it, i) =>
            reveal(h("article", { class: "card glass" },
              h("span", { class: "card__index", text: pad2(i + 1) }),
              h("h4", { class: "card__title", text: it.title }),
              h("p", { class: "card__body" }, rich(it.body))
            ), i * 90)
          )
        )
      );
    },

    approach(b) {
      return h("div", { class: "block" },
        blockHead(b),
        h("div", { class: "approach" },
          b.items.map((it, i) =>
            reveal(h("article", { class: "approach__item glass" },
              h("span", { class: "approach__num", text: pad2(i + 1) }),
              h("div", null,
                h("h4", { class: "approach__title", text: it.title }),
                it.body && h("p", { class: "approach__body" }, rich(it.body)),
                it.timeline && h("ol", { class: "timeline", style: "list-style:none" },
                  it.timeline.map((t) => h("li", { class: "timeline__item" },
                    h("div", null, h("span", { class: "timeline__tag", text: t.tag }), t.kind && h("span", { class: "timeline__kind", text: t.kind })),
                    h("p", { class: "timeline__body" }, rich(t.body))
                  ))
                ),
                it.bullets && h("ul", { class: "bullets" },
                  it.bullets.map((x) => h("li", { class: "bullets__item" },
                    h("span", { class: "bullets__title", text: x.title }),
                    h("span", { class: "bullets__body" }, rich(x.body))
                  ))
                ),
                it.note && h("p", { class: "approach__note" }, rich("※" + it.note.replace(/^※/, "")))
              )
            ))
          )
        )
      );
    },

    cases(b) {
      return h("div", { class: "block" },
        blockHead(b),
        h("div", { class: "cases" }, b.items.map(renderCase))
      );
    },

    stats(b) {
      return h("div", { class: "block" },
        h("div", { class: "stats" },
          b.items.map((s, i) =>
            reveal(h("div", { class: "stat glass" },
              h("div", { class: "stat__value" }, s.value, s.unit && h("span", { class: "stat__unit", text: s.unit })),
              h("p", { class: "stat__label", text: s.label })
            ), i * 90)
          )
        )
      );
    },

    solutions(b) {
      return h("div", { class: "block" },
        blockHead(b),
        h("div", { class: "solutions" },
          b.items.map((s, i) =>
            reveal(h("article", { class: "solution glass" },
              h("div", { class: "solution__text" },
                h("div", { class: "solution__num", text: pad2(i + 1) }),
                h("h4", { class: "solution__title", text: s.title }),
                h("p", { class: "solution__body" }, rich(s.body))
              ),
              h("div", { class: "phones" },
                (s.images || []).map((img) => {
                  // ▼ 配列の場合は縦積みグループ（phone-stack）で囲む
                  if (Array.isArray(img)) {
                    return h("div", { class: "phone-stack" },
                      img.map((m) => h("div", { class: "phone" }, figure(m, { hideDesc: true })))
                    );
                  }
                  // ▼ 通常の1枚画像
                  return h("div", { class: "phone" }, figure(img, { hideDesc: true }));
                })
              )
            ))
          )
        )
      );
    },
  };

  /* ---------- Case study ---------- */
  const STAGE_BADGE = { before: "BEFORE", approach: "APPROACH", after: "AFTER" };

  function renderCase(c) {
    const isSoon = c.status !== "published";
    const head = h("div", { class: "case__head" },
      h("div", { class: "case__num" }, h("small", { text: "CASE" }), c.number),
      h("div", { class: "case__titles" },
        h("h4", { class: "case__title", text: c.title }),
        c.subtitle && h("p", { class: "case__subtitle", text: c.subtitle })
      ),
      c.theme && h("span", { class: "chip chip--selected case__theme", text: "観点：" + c.theme })
    );

    if (isSoon) {
      return reveal(h("article", { class: "case", id: c.id },
        head,
        h("div", { class: "soon glass" },
          h("div", { class: "soon__tag", text: "COMING SOON" }),
          h("p", { class: "soon__text", text: c.comingSoonText || "このケーススタディは現在準備中です。" })
        )
      ));
    }

    return h("article", { class: "case", id: c.id },
      reveal(head),
      h("div", { class: "stages" }, c.stages.map(renderStage))
    );
  }

  function renderStage(s) {
    const hasImages = Array.isArray(s.images) && s.images.length > 0;
    const points = h("div", null,
      s.pointsLabel && h("span", { class: "label-meta stage__sub", text: "▼ " + s.pointsLabel, style: "display:block" }),
      h("div", { class: "points" + (hasImages ? "" : " points--cols") },
        s.points.map((p) => h("div", { class: "point" },
          h("h5", { class: "point__title", text: p.title }),
          h("p", { class: "point__body" }, rich(p.body))
        ))
      )
    );
    const gallery = hasImages && h("div", null,
      s.imagesLabel && h("span", { class: "label-meta stage__sub", text: "▼ " + s.imagesLabel, style: "display:block" }),
      h("div", { class: "gallery" },
        s.images.map((img) => figure(img))
      )
    );
    return reveal(h("section", { class: "stage glass stage--" + s.kind },
      h("div", { class: "stage__top" },
        h("span", { class: "badge badge--" + s.kind, text: STAGE_BADGE[s.kind] || s.kind }),
        h("span", { class: "stage__label", text: s.label })
      ),
      s.heading && h("h5", { class: "stage__heading", text: s.heading }),
      h("div", { class: "stage__body" + (hasImages ? " stage__body--split" : "") }, points, gallery)
    ));
  }

  /* ---------- Chapter ---------- */
  function renderChapter(ch) {
    return h("section", { class: "section", id: ch.id },
      h("div", { class: "container" },
        h("header", { class: "chapter-head" },
          reveal(h("div", { class: "chapter-head__num", "aria-hidden": "true", text: ch.number })),
          reveal(h("div", { class: "chapter-head__body" },
            h("span", { class: "label-meta", text: ch.eyebrow }),
            h("h2", { class: "chapter-head__title" }, rich(ch.title))
          ), 120),
          ch.heroImage && reveal(h("div", { class: "chapter-hero glass" },
            h("img", { src: ch.heroImage.src, alt: ch.heroImage.alt || "", loading: "lazy" })
          ), 160)
        ),
        ch.blocks.map((b) => {
          const fn = BLOCKS[b.type];
          if (!fn) { console.warn("[portfolio] 未対応のブロック種別:", b.type); return null; }
          return fn(b);
        })
      )
    );
  }

  /* ---------- Nav / Footer / Lightbox ---------- */
  function renderNav(nav) {
    return h("nav", { class: "nav glass glass--strong", "aria-label": "ページ内ナビゲーション" },
      h("a", { class: "nav__logo", href: "#top" }, "K", h("span", { text: "." }), "KITO"),
      h("ul", { class: "nav__list" },
        nav.map((n) => h("li", null, h("a", { class: "nav__link", href: "#" + n.id, "data-nav": n.id, text: n.label })))
      )
    );
  }

  function renderFooter(site, hero) {
    return h("footer", { class: "footer" },
      h("div", { class: "container footer__inner" },
        h("div", { class: "footer__name", "aria-hidden": "true" }, hero.nameLine1 + " " + hero.nameLine2),
        h("div", { class: "footer__meta" },
          h("span", { text: site.footer }),
          h("a", { class: "footer__top", href: "#top", text: "BACK TO TOP ↑" })
        )
      )
    );
  }

  function renderLightbox() {
    return h("div", { class: "lightbox", id: "lightbox", role: "dialog", "aria-modal": "true", "aria-label": "画像拡大表示" },
      h("button", { type: "button", class: "lightbox__close", "aria-label": "閉じる", text: "✕" }),
      h("div", { class: "lightbox__panel glass glass--strong" },
        h("img", { class: "lightbox__img", alt: "" }),
        h("p", { class: "lightbox__caption" })
      )
    );
  }

  /* ---------- Interactions ---------- */
  function setupLightbox() {
    const lb = document.getElementById("lightbox");
    const img = lb.querySelector(".lightbox__img");
    const cap = lb.querySelector(".lightbox__caption");
    let lastFocus = null;
    const close = () => { lb.classList.remove("is-open"); document.body.style.overflow = ""; lastFocus && lastFocus.focus(); };
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-lightbox]");
      if (trigger) {
        lastFocus = trigger;
        img.src = trigger.dataset.src; img.alt = trigger.dataset.caption || "";
        cap.textContent = trigger.dataset.caption || "";
        lb.classList.add("is-open"); document.body.style.overflow = "hidden";
        lb.querySelector(".lightbox__close").focus();
        return;
      }
      if (lb.classList.contains("is-open") && (e.target === lb || e.target.closest(".lightbox__close"))) close();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lb.classList.contains("is-open")) close(); });
  }

  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    const showAll = () => els.forEach((el) => el.classList.add("is-visible"));
    window.addEventListener("beforeprint", showAll);
    // 例: index.html?static で演出なしの全表示（確認・PDF書き出し用）
    if (!("IntersectionObserver" in window) || /[?&]static\b/.test(location.search)) { showAll(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    els.forEach((el) => io.observe(el));
  }

  function setupNavSpy(nav) {
    const links = new Map(nav.map((n) => [n.id, document.querySelector('[data-nav="' + n.id + '"]')]));
    const targets = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a && a.classList.remove("is-active"));
        const a = links.get(en.target.id); a && a.classList.add("is-active");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    targets.forEach((t) => io.observe(t));
  }

  function setupProgress() {
    const bar = document.querySelector(".progress__bar");
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ")";
      ticking = false;
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------- Boot ---------- */
  function boot() {
    document.documentElement.lang = data.site.lang || "ja";
    document.title = data.site.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", data.site.description);

    const root = document.getElementById("app");
    root.textContent = "";
    root.append(
      renderNav(data.nav),
      renderHero(data.hero),
      h("main", null,
        renderProfile(data.profile),
        renderSkills(data.profile),
        data.chapters.map(renderChapter)
      ),
      renderFooter(data.site, data.hero),
      renderLightbox()
    );

    setupLightbox();
    setupReveal();
    setupNavSpy(data.nav);
    setupProgress();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
