/* =========================================================================
   RENDER  ―  js/content.js のデータから DOM を組み立てる（マルチビュー完全版）
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
    for (const c of children.flat()) {
      if (c === null || c === undefined || c === false) continue;
      el.append(c.nodeType ? c : document.createTextNode(String(c)));
    }
    return el;
  }

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

  function rowList(items, opts = {}) {
    return h("div", { class: "rows" },
      items.map((item, i) =>
        h("div", { class: "row" + (opts.skill ? " row--skill" : "") },
          h("div", { class: "row__meta" },
            opts.numbered ? h("span", { class: "row__num", text: pad2(i + 1) }) : h("span", { text: item.meta || "" })
          ),
          h("div", { class: "row__main" },
            h("h4", { class: "row__title", text: item.title }),
            item.body && h("p", { class: "row__body" }, rich(item.body))
          )
        )
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

    const imgStyles = [];
    if (img.fit) imgStyles.push(`object-fit:${img.fit}`);
    if (img.pos) imgStyles.push(`object-position:${img.pos}`);
    if (img.aspect) imgStyles.push(`aspect-ratio:${img.aspect}`);
    if (img.maxH) imgStyles.push(`max-height:${img.maxH}`);
    if (img.zoom) {
      imgStyles.push(`transform:scale(${img.zoom})`);
      imgStyles.push(`transform-origin:${img.origin || img.pos || "left top"}`);
    }

    const image = h("img", {
      src: img.src,
      alt: img.alt || img.caption || "",
      loading: "lazy",
      decoding: "async",
      style: imgStyles.length ? imgStyles.join(";") : undefined,
    });

    const frame = h("button", {
      type: "button", class: "figure__frame", "aria-label": (img.caption || "画像") + "を拡大表示",
      "data-lightbox": "1", "data-src": img.src, "data-caption": img.caption || "",
      style: "appearance:none;font:inherit;text-align:left;",
    }, image, h("span", { class: "figure__zoom", "aria-hidden": "true", text: "⤢" }));

    return h("figure", { class: "figure" },
      frame,
      img.caption && h("figcaption", { class: "figure__caption", text: img.caption }),
      !opts.hideDesc && img.desc && h("p", { class: "figure__desc" }, rich(img.desc))
    );
  }

  /* ---------- Global Top-Right Navigation ---------- */
  function renderGlobalNav(chapters) {
    return h("header", { class: "gnav", id: "gnav" },
      h("nav", { class: "gnav__bar", "aria-label": "グローバルナビゲーション" },
        h("a", { class: "gnav__link is-active", href: "#top", "data-route-link": "top", text: "TOP" }),
        chapters.map((ch) =>
          h("a", {
            class: "gnav__link",
            href: "#" + ch.id,
            "data-route-link": ch.id,
            text: "CHAPTER " + ch.number,
          })
        )
      )
    );
  }

  /* ---------- Hero (TOP View) ---------- */
  function renderHero(hero) {
    return h("section", { class: "hero", id: "hero-kv" },
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

  /* ---------- Profile (TOP View) ---------- */
  function renderProfile(p) {
    const slides = [
      {
        id: "slide-profile",
        label: p.overview.title,
        title: p.overview.title,
        content: h("div", { class: "profile-slide__content" },
          h("div", { class: "profile-slide__paragraphs" },
            h("div", { id: "profile-intro" }, p.overview.paragraphs.map((t) => h("p", { class: "body-lg" }, rich(t))))
          ),
          h("section", { class: "profile-slide__background", id: "profile-background" },
            h("h4", { class: "profile-slide__section-title", text: p.background.title }),
            h("div", { class: "profile-history" },
              h("ol", { class: "profile-history__timeline" }, p.background.items.map((item, index) =>
                h("li", { class: "profile-history__item" + (item.quiet ? " profile-history__item--quiet" : ""), id: "profile-history-" + (index + 1) },
                  h("time", { class: "profile-history__meta", text: item.meta }),
                  h("div", { class: "profile-history__entry" },
                    h("h5", { class: "profile-history__title", text: item.title }),
                    item.body && h("p", { class: "profile-history__body" }, rich(item.body))
                  )
                )
              ))
            )
          )
        ),
      },
      ...(p.skills ? [{
        id: "slide-skills",
        label: p.skills.title,
        title: p.skills.title,
        content: rowList(p.skills.items, { numbered: true }),
      }] : []),
      {
        id: "slide-perspective",
        label: p.workStyle.title,
        title: p.workStyle.title,
        content: h("div", { class: "perspectives-stack" },
          p.workStyle.items.map((it, i) =>
            h("article", { class: "card glass", id: "perspective-item-" + (i + 1) },
              h("div", { class: "perspective-card__head" },
                h("span", { class: "card__index", text: pad2(i + 1) }),
                h("h4", { class: "card__title", text: it.title })
              ),
              h("p", { class: "card__body" }, rich(it.body))
            )
          )
        ),
      },
      {
        id: "slide-tools",
        label: p.tools.title,
        title: p.tools.title,
        content: h("div", { class: "profile-tools" },
          p.tools.groups.map((g, i) =>
            h("section", { class: "tool-group profile-tools__group", id: "tool-group-" + (i + 1) },
              h("h4", { class: "label-meta tool-group__name", text: g.name }),
              h("ul", { class: "tool-group__items" }, g.items.map((tool) => h("li", { text: tool })))
            )
          )
        ),
      },
    ];

    const slider = reveal(h("div", { class: "profile-slider glass glass--blur-area" },
      h("div", { class: "profile-slider__head" },
        h("div", null,
          h("h2", { class: "block-head__title", text: "プロフィール" })
        ),
        h("div", { class: "profile-slider__tabs", role: "tablist", "aria-label": "プロフィールの項目" },
          slides.map((s, idx) => h("button", {
            type: "button",
            role: "tab",
            id: "tab-" + s.id,
            class: "profile-tab" + (idx === 0 ? " is-active" : ""),
            "aria-selected": idx === 0 ? "true" : "false",
            "aria-controls": s.id,
            "data-scroll-to": idx,
            text: s.label,
          }))
        )
      ),
      h("div", { class: "profile-slider__track", id: "profile-track" },
        slides.map((s, idx) => h("section", {
          class: "profile-slide",
          id: s.id,
          role: "tabpanel",
          "aria-labelledby": "tab-" + s.id,
          "aria-label": s.title,
          tabindex: idx === 0 ? 0 : -1,
        },
          h("h3", { class: "profile-slide__title", text: s.title }),
          s.content
        ))
      ),
      renderScrollControls("profile-track", slides.length, "プロフィール")
    ));

    return h("section", { class: "section", id: "profile" },
      h("div", { class: "container" }, slider)
    );
  }

/* ---------- Chapter KV Carousel (TOP View下部) ---------- */
  function renderChapterDirectory(chapters) {
    const loopItems = [...chapters, ...chapters];
    const firstChapterHref = chapters[0] ? "#" + chapters[0].id : "#chapter-1";

    return h("section", { class: "section", id: "chapters-index" },
      h("div", { class: "container" },
        reveal(h("header", { class: "block-head block-head--link" },
          h("span", { class: "label-meta", text: "SELECTED WORKS" }),
          h("h3", { class: "block-head__title" },
            h("a", {
              class: "chapters-heading-link",
              href: firstChapterHref,
              "aria-label": "Chapter 01 へ移動",
            },
              h("span", { text: "CHAPTERS" }),
              h("span", { class: "chapters-heading-link__arrow", "aria-hidden": "true", text: "→" })
            )
          )
        ))
      ),
      reveal(h("div", { class: "kv-carousel", "aria-label": "チャプター一覧" },
        h("div", { class: "kv-carousel__track" },
          loopItems.map((ch, idx) => {
            const isClone = idx >= chapters.length;
            const thumb = ch.heroImage && ch.heroImage.src
              ? h("img", {
                  class: "kv-card__img",
                  src: ch.heroImage.src,
                  alt: ch.heroImage.alt || ch.title,
                  loading: "lazy",
                })
              : h("div", { class: "kv-card__placeholder" },
                  h("span", { class: "kv-card__placeholder-num", text: ch.number }),
                  h("span", { class: "kv-card__placeholder-tag", text: ch.placeholder ? "COMING SOON" : "CHAPTER " + ch.number })
                );

            return h("a", {
              class: "kv-card glass",
              href: "#" + ch.id,
              "aria-hidden": isClone ? "true" : undefined,
              tabindex: isClone ? -1 : undefined,
            },
              h("div", { class: "kv-card__thumb" },
                thumb,
                h("span", { class: "kv-card__badge", text: "VIEW →" })
              ),
              h("div", { class: "kv-card__meta" },
                h("span", { class: "label-meta kv-card__chap", text: "CHAPTER " + ch.number }),
                h("h3", { class: "kv-card__title" }, rich(ch.title.replace(/\n/g, " ")))
              )
            );
          })
        )
      ))
    );
  }

  function renderScrollControls(trackId, total, label) {
    return h("div", { class: "scroll-controls", "aria-label": label + " スライド操作" },
      h("span", { class: "scroll-controls__count", "data-scroll-count": trackId, "aria-live": "polite" }, "01 / " + pad2(total)),
      h("button", { class: "scroll-controls__button", type: "button", "data-scroll-prev": trackId, "aria-label": "前へ", text: "←" }),
      h("button", { class: "scroll-controls__button", type: "button", "data-scroll-next": trackId, "aria-label": "次へ", text: "→" })
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
      const glowClass = b.variant === "glow" ? " card--glow" : "";
      return h("div", { class: "block" },
        blockHead(b),
        h("div", { class: "card-grid" + cols, style: b.items.length === 1 ? "grid-template-columns:1fr" : undefined },
          b.items.map((it, i) =>
            reveal(h("article", { class: "card glass" + glowClass },
              h("span", { class: "card__index", text: pad2(i + 1) }),
              h("h4", { class: "card__title", text: it.title }),
              h("p", { class: "card__body" }, rich(it.body))
            ), i * 90)
          )
        )
      );
    },

    processVisuals(b) {
      return h("div", { class: "block" },
        blockHead(b),
        h("div", { class: "pv-list" },
          b.items.map((item, idx) => {
            let visualEl = null;

            if (item.kind === "flow" && item.steps) {
              visualEl = h("div", { class: "pv-flow" },
                h("div", { class: "pv-flow__steps" },
                  item.steps.map((st) =>
                    h("div", { class: "pv-step" },
                      h("span", { class: "pv-step__num", text: "STEP " + st.step }),
                      h("strong", { class: "pv-step__name", text: st.name }),
                      h("span", { class: "pv-step__detail", text: st.detail })
                    )
                  )
                ),
                item.outcome && h("div", { class: "pv-flow__outcome" },
                  h("span", { class: "badge badge--after", text: "IMPACT" }),
                  h("span", { class: "pv-flow__outcome-text", text: item.outcome })
                )
              );
            }

            if (item.kind === "bars" && item.bars) {
              visualEl = h("div", { class: "pv-bars" },
                item.bars.map((bar) =>
                  h("div", { class: "pv-bar" + (bar.highlight ? " pv-bar--highlight" : "") },
                    h("div", { class: "pv-bar__head" },
                      h("span", { class: "pv-bar__ver", text: bar.ver }),
                      h("span", { class: "pv-bar__scope", text: bar.scope }),
                      h("span", { class: "pv-bar__pct", text: "統制カバー率 " + bar.pct + "%" })
                    ),
                    h("div", { class: "pv-bar__track" },
                      h("div", { class: "pv-bar__fill", style: "width:" + bar.pct + "%" })
                    ),
                    h("p", { class: "pv-bar__desc", text: bar.desc })
                  )
                )
              );
            }

            if (item.kind === "architecture" && item.pipeline) {
              visualEl = h("div", { class: "pv-arch" },
                item.pipeline.map((node) =>
                  h("div", { class: "pv-arch__node" },
                    h("span", { class: "pv-arch__tag", text: node.tag }),
                    h("div", { class: "pv-arch__main" },
                      h("strong", { class: "pv-arch__label", text: node.label }),
                      h("p", { class: "pv-arch__sub", text: node.sub })
                    )
                  )
                )
              );
            }

            return reveal(h("article", { class: "pv-card glass" },
              h("div", { class: "pv-card__info" },
                h("span", { class: "pv-card__num", text: item.number || pad2(idx + 1) }),
                h("h4", { class: "pv-card__title", text: item.title }),
                item.summary && h("p", { class: "pv-card__summary" }, rich(item.summary))
              ),
              h("div", { class: "pv-card__visual" }, visualEl)
            ), idx * 90);
          })
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
      const cols = b.items.length === 4 ? " stats--4" : "";
      return h("div", { class: "block" },
        h("div", { class: "stats" + cols },
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
                h("p", { class: "solution__body" }, rich(s.body)),
                s.changes && h("div", { class: "solution__changes" },
                  s.changes.map((c) => h("div", { class: "sol-change sol-change--" + c.kind },
                    h("span", { class: "badge badge--" + c.kind, text: c.label }),
                    h("p", { class: "sol-change__text" }, rich(c.text))
                  ))
                )
              ),
              h("div", { class: "phones" },
                (s.images || []).map((img) => {
                  if (Array.isArray(img)) {
                    return h("div", { class: "phone-stack" },
                      img.map((m) => h("div", { class: "phone" }, figure(m, { hideDesc: true })))
                    );
                  }
                  return h("div", { class: "phone" }, figure(img, { hideDesc: true }));
                })
              )
            ))
          )
        )
      );
    },

    ratingChart(b) {
      return h("div", { class: "block" },
        blockHead(b),
        reveal(h("div", { class: "rating-chart glass" },
          b.phases.map((phase) => {
            const percent = Math.round((phase.score / 5) * 100);
            return h("div", { class: "rc-row" + (phase.highlight ? " rc-row--highlight" : "") },
              h("div", { class: "rc-row__meta" },
                h("span", { class: "rc-row__ver", text: phase.version }),
                h("span", { class: "rc-row__period", text: phase.period })
              ),
              h("div", { class: "rc-row__bar-wrap" },
                h("div", { class: "rc-row__track" }, h("div", { class: "rc-row__fill", style: "width:" + percent + "%" })),
                h("div", { class: "rc-row__score" },
                  h("span", { class: "rc-row__star", text: "★" }),
                  h("span", { class: "rc-row__num", text: Number(phase.score).toFixed(2) }),
                  phase.status && h("span", { class: "rc-row__status", text: phase.status })
                )
              ),
              h("div", { class: "rc-row__desc" },
                h("h4", { class: "rc-row__title", text: phase.title }),
                h("p", { class: "rc-row__body" }, rich(phase.body))
              )
            );
          })
        ))
      );
    },

    reviews(b) {
      return h("div", { class: "block" },
        blockHead(b),
        h("div", { class: "card-grid card-grid--3" },
          b.items.map((review, index) =>
            reveal(h("article", { class: "card review-card glass" },
              h("div", { class: "review-card__top" },
                h("span", { class: "review-card__stars", text: "★".repeat(review.stars) + "☆".repeat(5 - review.stars) }),
                h("span", { class: "review-card__meta", text: review.meta })
              ),
              h("h4", { class: "review-card__title", text: review.title }),
              h("p", { class: "review-card__body" }, "「", rich(review.body), "」"),
              review.reply && h("div", { class: "review-card__reply" },
                h("span", { class: "review-card__reply-label", text: "DEVELOPER ACTION" }),
                h("p", { class: "review-card__reply-text" }, rich(review.reply))
              )
            ), index * 80)
          )
        )
      );
    },

    appHeader(b) {
      const links = (b.links || []).filter((l) => l.url);
      return reveal(h("div", { class: "block app-header glass glass--strong" },
        h("div", { class: "app-header__main" },
          b.icon
            ? h("img", { class: "app-header__icon", src: b.icon, alt: b.name + " アイコン", loading: "lazy" })
            : h("div", { class: "app-header__icon app-header__icon--dummy", text: "1ROOM" }),
          h("div", { class: "app-header__info" },
            h("div", { class: "app-header__badges" },
              (b.badges || []).map((tag) => h("span", { class: "chip", text: tag }))
            ),
            h("h3", { class: "app-header__title", text: b.name }),
            b.sub && h("p", { class: "app-header__sub", text: b.sub })
          )
        ),
        h("div", { class: "app-header__side" },
          b.rating && h("div", { class: "app-rating" },
            h("div", { class: "app-rating__score" }, b.rating),
            h("div", { class: "app-rating__meta" },
              h("div", { class: "app-rating__stars", "aria-label": "5段階評価中 " + b.rating, text: "★★★★☆" }),
              b.ratingCount && h("div", { class: "app-rating__count", text: b.ratingCount })
            )
          ),
          links.length > 0 && h("div", { class: "app-header__links" },
            links.map((l) => h("a", { class: "btn btn--primary", href: l.url, target: "_blank", rel: "noopener noreferrer" }, l.label, " ↗"))
          )
        )
      ));
    },
    /* ---------- Chapter 3: 超短納期LP事例カード（ブラー＆未配置画像の自動プレースホルダー対応） ---------- */
    lpCases(b) {
      return h("div", { class: "block" },
        blockHead(b),
        h("div", { class: "lp-cases" },
          b.items.map((item, idx) =>
            reveal(h("article", { class: "lp-card glass" + (item.confidential ? " lp-card--confidential" : "") },
              h("div", { class: "lp-card__info" },
                h("div", { class: "lp-card__meta" },
                  h("span", { class: "lp-card__num", text: item.number || pad2(idx + 1) }),
                  item.badge && h("span", { class: "badge badge--after", text: "⏱ " + item.badge }),
                  item.confidential && h("span", { class: "badge badge--before", text: "🔒 面接時限定公開" })
                ),
                h("h4", { class: "lp-card__title", text: item.title }),
                item.role && h("p", { class: "lp-card__role" }, h("strong", { text: "担当範囲：" }), item.role),
                h("p", { class: "lp-card__body" }, rich(item.body)),
                item.note && h("div", { class: "lp-card__note" }, rich(item.note))
              ),
              h("div", { class: "lp-card__visuals" },
                (item.images || []).map((img) => {
                  const isBlur = Boolean(img.blur || item.confidential);
                  const imgEl = h("img", {
                    src: img.src,
                    alt: img.caption || item.title,
                    loading: "lazy",
                    class: isBlur ? "is-blurred-img" : undefined,
                  });
                  // ★まだLP画像ファイルが無い場合でも枠が崩れないよう自動でプレースホルダー表示に切替
                  imgEl.addEventListener("error", () => {
                    const frame = imgEl.closest(".lp-shot__frame");
                    if (frame) frame.classList.add("is-missing-img");
                  });

                  const innerFrame = h(isBlur ? "div" : "button", {
                    type: isBlur ? undefined : "button",
                    class: "figure__frame lp-shot__frame" + (isBlur ? " lp-shot__frame--Confidential" : ""),
                    "data-lightbox": isBlur ? undefined : "1",
                    "data-src": isBlur ? undefined : img.src,
                    "data-caption": isBlur ? undefined : (img.caption || item.title),
                    style: "appearance:none;font:inherit;text-align:left;width:100%;",
                  },
                    imgEl,
                    h("div", { class: "lp-shot__placeholder" },
                      h("span", { class: "dummy__tag", text: isBlur ? "CONFIDENTIAL LP (BLURRED)" : "LP SCREENSHOT" }),
                      h("span", { class: "lp-shot__path", text: img.src })
                    ),
                    isBlur
                      ? h("div", { class: "lp-shot__lock" },
                          h("span", { class: "lp-shot__lock-badge", text: "🔒 CONFIDENTIAL / 面接時に実画面をご共有します" })
                        )
                      : h("span", { class: "figure__zoom", "aria-hidden": "true", text: "⤢" })
                  );

                  return h("figure", { class: "figure lp-shot" },
                    innerFrame,
                    img.caption && h("figcaption", { class: "figure__caption", text: img.caption })
                  );
                })
              )
            ), idx * 90)
          )
        )
      );
    },

    /* ---------- Chapter 3: ウェビナーバナー2サイズ（長方形＋正方形）一覧ギャラリー ---------- */
    bannerGallery(b) {
      return h("div", { class: "block" },
        blockHead(b),
        h("div", { class: "banner-grid" },
          b.items.map((item, idx) =>
            reveal(h("article", { class: "banner-pair glass" },
              h("header", { class: "banner-pair__head" },
                h("span", { class: "label-meta banner-pair__date", text: item.date }),
                h("h4", { class: "banner-pair__title", text: item.title })
              ),
              h("div", { class: "banner-pair__images" },
                // 左：長方形サイズ (384×230)
                h("div", { class: "banner-pair__item banner-pair__item--rect" },
                  figure({
                    src: item.rectImg,
                    caption: "長方形 (384×230)",
                    alt: item.title + " 長方形バナー",
                  }, { hideDesc: true })
                ),
                // 右：正方形サイズ (1:1)
                h("div", { class: "banner-pair__item banner-pair__item--sq" },
                  figure({
                    src: item.sqImg,
                    caption: "正方形 (1:1)",
                    alt: item.title + " 正方形バナー",
                  }, { hideDesc: true })
                )
              )
            ), idx * 70)
          )
        ),
        b.copyright && reveal(h("p", { class: "banner-copyright", text: b.copyright }))
      );
    },
  };
/* ---------- Case Study（タイトルをフルWidthボックス内に統合 ＆ Case別画像最適化） ---------- */
  /* ---------- Case Study（通常幅/フル幅切替 ＆ 絵文字・三角飾りなし対応） ---------- */
  function renderCase(c) {
    const isSoon = c.status !== "published";
    const isFullbleed = c.fullbleed !== false;
    const STAGE_BADGE = {
      before: "BEFORE",
      approach: "APPROACH",
      after: "AFTER",
    };

    const head = h("header", { class: "case__head case__head--in-box" },
      h("div", { class: "case__num" }, h("small", { text: "CASE" }), c.number),
      h("div", { class: "case__titles" },
        h("h4", { class: "case__title", text: c.title }),
        c.subtitle && h("p", { class: "case__subtitle", text: c.subtitle })
      )
    );

    const wrapCaseBox = (innerBox) =>
      isFullbleed
        ? h("div", { class: "case-fullbleed", "data-fullbleed": "1" }, innerBox)
        : h("div", { class: "case-contained" }, innerBox);

    if (isSoon) {
      return reveal(h("article", { class: "case", id: c.id },
        wrapCaseBox(
          h("div", { class: "case-fullbleed__box glass" },
            head,
            h("div", { class: "soon" },
              h("div", { class: "soon__tag", text: "COMING SOON" }),
              h("p", { class: "soon__text", text: c.comingSoonText || "このケーススタディは現在準備中です。" })
            )
          )
        )
      ));
    }

    const beforeStage = (c.stages || []).find((s) => s.kind === "before");
    const approachStage = (c.stages || []).find((s) => s.kind === "approach");
    const afterStage = (c.stages || []).find((s) => s.kind === "after");
    const trackId = c.id + "-scroll-track";
    const showFlowArrow = c.id === "case-1";

    const renderCompareBand = (stage, kind) => {
      if (!stage) return null;
      const imgs = stage.images || [];
      const visualNodes = [];

      imgs.forEach((img, idx) => {
        const isNavFull = c.id === "case-2" && idx === 0;
        visualNodes.push(
          h("div", {
            class: "case-shot" + (isNavFull ? " case-shot--sidenav" : "") + " case-shot--" + c.id,
          }, figure(img, { hideDesc: false }))
        );
        if (showFlowArrow && idx < imgs.length - 1) {
          visualNodes.push(
            h("div", { class: "case-flow-arrow", "aria-hidden": "true" },
              h("span", { class: "case-flow-arrow__icon", text: "→" })
            )
          );
        }
      });

      const badgeLabel = stage.badgeText
        ? stage.badgeText + (stage.label ? " / " + stage.label : "")
        : (STAGE_BADGE[kind] || kind.toUpperCase());

      return h("section", { class: "case-band case-band--" + kind, id: c.id + "-stage-" + kind },
        h("div", { class: "case-band__info" },
          h("div", { class: "case-band__head" },
            h("span", { class: "badge badge--" + kind, text: badgeLabel }),
            stage.heading && h("h5", { class: "case-band__heading", text: stage.heading })
          ),
          stage.points && h("ul", { class: "case-band__points" },
            stage.points.map((p) =>
              h("li", { class: "case-chip-point" },
                h("strong", { class: "case-chip-point__title", text: p.title }),
                h("span", { class: "case-chip-point__body" }, rich(p.body))
              )
            )
          )
        ),
        h("div", { class: "case-band__visuals" }, visualNodes)
      );
    };

    const renderApproachBubble = (stage) => {
      if (!stage) return null;
      const pillCount = (stage.points || []).length;
      return h("div", { class: "case-bubble-row", id: c.id + "-stage-approach" },
        // ★ 💡絵文字と ▼三角飾り（case-bubble__arrow）を廃止
        h("div", { class: "case-bubble glass--strong" },
          h("div", { class: "case-bubble__head" },
            h("span", { class: "badge badge--approach", text: stage.label || "APPROACH" }),
            stage.heading && h("strong", { class: "case-bubble__heading", text: stage.heading })
          ),
          stage.points && h("div", {
            class: "case-bubble__pills",
            style: pillCount > 0 && pillCount < 3 ? `grid-template-columns: repeat(${pillCount}, minmax(0, 1fr)) !important;` : undefined,
          },
            stage.points.map((p, idx) =>
              h("div", { class: "case-bubble__pill" },
                h("span", { class: "case-bubble__num", text: pad2(idx + 1) }),
                h("div", null,
                  h("strong", { text: p.title }),
                  h("p", null, rich(p.body))
                )
              )
            )
          )
        )
      );
    };

    return h("article", { class: "case case--" + c.id, id: c.id },
      reveal(wrapCaseBox(
        h("div", { class: "case-fullbleed__box glass" },
          h("div", { class: "case-fullbleed__top" },
            head,
            // フル幅の時のみ横スクロール操作バーを表示（通常幅のイカポスターでは非表示）
            isFullbleed && h("div", { class: "case-fullbleed__controls" },
              h("span", { class: "label-meta", text: c.compareHint || "↕ BEFORE / AFTER COMPARE  |  ↔ SCROLL" }),
              h("div", { class: "case-fullbleed__btns" },
                h("button", { type: "button", class: "scroll-controls__button", "data-case-scroll": trackId, "data-dir": "-1", "aria-label": "左へスクロール", text: "←" }),
                h("button", { type: "button", class: "scroll-controls__button", "data-case-scroll": trackId, "data-dir": "1", "aria-label": "右へスクロール", text: "→" })
              )
            )
          ),
          h("div", { class: "case-fullbleed__viewport", id: trackId },
            h("div", { class: "case-board case-board--" + c.id },
              renderCompareBand(beforeStage, "before"),
              renderApproachBubble(approachStage),
              renderCompareBand(afterStage, "after")
            )
          )
        )
      ))
    );
  }
  /* ---------- Chapter TOC（コンテンツ外側の左余白固定 ＋ 自動ハンバーガー切替） ---------- */
  function renderChapterToc(ch) {
    const tocItems = ch.blocks.map((b, idx) => {
      const blockId = b.id || `${ch.id}-block-${idx + 1}`;
      const label = b.title || ({
        appHeader: "アプリ概要",
        stats: "成果サマリー",
        table: "プロジェクト概要",
      }[b.type]) || b.label || "セクション";

      const subItems = b.type === "cases" && Array.isArray(b.items)
        ? b.items.map((c) => ({ id: c.id, label: `CASE ${c.number}：${c.title}` }))
        : [];

      return { id: blockId, num: pad2(idx + 1), label, subItems };
    });

    const buildList = () =>
      h("ol", { class: "chapter-toc__list" },
        tocItems.map((item) =>
          h("li", { class: "chapter-toc__item" },
            h("a", { class: "chapter-toc__link", href: "#" + item.id, "data-toc-link": item.id },
              h("span", { class: "chapter-toc__num", text: item.num }),
              h("span", { text: item.label })
            ),
            item.subItems.length > 0 && h("ul", { class: "chapter-toc__sublist" },
              item.subItems.map((sub) =>
                h("li", null,
                  h("a", { class: "chapter-toc__sublink", href: "#" + sub.id, "data-toc-link": sub.id, text: sub.label })
                )
              )
            )
          )
        )
      );

    return h("div", { class: "chapter-toc-system", "data-toc-system": ch.id },
      h("aside", { class: "chapter-gutter-toc", "aria-label": "ページ内リンク" },
        h("nav", { class: "chapter-toc chapter-toc--side" },
          h("span", { class: "label-meta chapter-toc__heading", text: "INDEX" }),
          buildList()
        )
      ),
      h("button", {
        type: "button",
        class: "toc-burger glass glass--strong",
        "aria-label": "目次を開く",
        "aria-expanded": "false",
        "data-toc-burger": ch.id,
      },
        h("span", { class: "toc-burger__bars", "aria-hidden": "true" },
          h("span"), h("span"), h("span")
        ),
        h("span", { class: "label-meta", text: "INDEX" })
      ),
      h("div", { class: "toc-drawer glass glass--strong", "data-toc-drawer": ch.id, hidden: true },
        h("div", { class: "toc-drawer__head" },
          h("span", { class: "label-meta", text: "INDEX / ページ内リンク" }),
          h("button", { type: "button", class: "toc-drawer__close", "data-toc-close": ch.id, "aria-label": "閉じる", text: "✕" })
        ),
        h("nav", { class: "chapter-toc chapter-toc--side" }, buildList())
      )
    );
  }

  /* ---------- Chapter Page View（コンテンツは中央のまま・左外側余白に目次） ---------- */
  function renderChapterPage(ch, index, allChapters) {
    const prevCh = index > 0 ? allChapters[index - 1] : null;
    const nextCh = index < allChapters.length - 1 ? allChapters[index + 1] : null;

    return h("section", { class: "page-view page-view--chapter", id: "view-" + ch.id, "data-view": ch.id },
      // 1. チャプタータイトルバナー（通常の .container 幅）
      h("div", { class: "container" },
        h("header", { class: "chapter-head chapter-head--split", "data-kv": !ch.heroImage ? "1" : undefined },
          reveal(h("div", { class: "chapter-head__banner" },
            h("div", { class: "chapter-head__num", "aria-hidden": "true", text: ch.number }),
            h("div", { class: "chapter-head__body" },
              h("span", { class: "label-meta", text: ch.eyebrow }),
              h("h1", { class: "chapter-head__title", text: "" }, rich(ch.title))
            )
          ))
        )
      ),

      // 2. KV画像の上辺から始まるボディ領域（メインコンテンツは通常の .container で一切移動しない）
      h("div", { class: "chapter-body-wrap" },
        !ch.placeholder && renderChapterToc(ch),

        h("div", { class: "container chapter-main" },
          ch.heroImage && reveal(h("div", { class: "chapter-hero glass", "data-kv": "1" },
            h("img", { src: ch.heroImage.src, alt: ch.heroImage.alt || "", loading: "lazy" }),
            ch.heroImage.sourceLabel && h("p", { class: "chapter-hero__credit", text: ch.heroImage.sourceLabel })
          ), 100),

          ch.placeholder && h("p", { class: "chapter-placeholder", text: ch.placeholderText }),

          ch.blocks.map((b, idx) => {
            const fn = BLOCKS[b.type];
            if (!fn) return null;
            const blockId = b.id || `${ch.id}-block-${idx + 1}`;
            const el = fn({ ...b, id: blockId });
            if (el) el.id = blockId;
            return el;
          }),

          h("nav", { class: "chapter-pager", "aria-label": "チャプター移動" },
            prevCh
              ? h("a", { class: "chapter-pager__btn", href: "#" + prevCh.id },
                  h("span", { class: "label-meta", text: "← PREV CHAPTER " + prevCh.number }),
                  h("strong", { class: "chapter-pager__title", text: prevCh.title.replace(/\n/g, " ") })
                )
              : h("a", { class: "chapter-pager__btn", href: "#top" },
                  h("span", { class: "label-meta", text: "← BACK TO TOP" }),
                  h("strong", { class: "chapter-pager__title", text: "トップ・プロフィールへ戻る" })
                ),
            nextCh
              ? h("a", { class: "chapter-pager__btn chapter-pager__btn--next", href: "#" + nextCh.id },
                  h("span", { class: "label-meta", text: "NEXT CHAPTER " + nextCh.number + " →" }),
                  h("strong", { class: "chapter-pager__title", text: nextCh.title.replace(/\n/g, " ") })
                )
              : h("a", { class: "chapter-pager__btn chapter-pager__btn--next", href: "#top" },
                  h("span", { class: "label-meta", text: "BACK TO TOP ↑" }),
                  h("strong", { class: "chapter-pager__title", text: "トップページへ戻る" })
                )
          )
        )
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
    if (!("IntersectionObserver" in window) || /[?&]static\b/.test(location.search)) { showAll(); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });

    els.forEach((el) => io.observe(el));
  }

  function setupMultiPageRouter(chapters) {
    const views = new Map();
    views.set("top", document.getElementById("view-top"));
    chapters.forEach((ch) => views.set(ch.id, document.getElementById("view-" + ch.id)));

    const navLinks = [...document.querySelectorAll("[data-route-link]")];
    let currentViewId = null;

    const resolveViewFromHash = (hash) => {
      const clean = (hash || "").replace(/^#/, "");
      if (!clean || clean === "top" || clean === "profile" || clean.startsWith("slide-")) return { viewId: "top", anchorId: clean };
      const matchedChapter = chapters.find((ch) => ch.id === clean);
      if (matchedChapter) return { viewId: matchedChapter.id, anchorId: null };

      const targetEl = document.getElementById(clean);
      const parentView = targetEl?.closest("[data-view]");
      if (parentView) return { viewId: parentView.dataset.view, anchorId: clean };

      return { viewId: "top", anchorId: null };
    };

    const applyRoute = () => {
      const { viewId, anchorId } = resolveViewFromHash(location.hash);
      const isViewChanged = currentViewId !== viewId;
      currentViewId = viewId;

      views.forEach((el, id) => {
        if (!el) return;
        const active = id === viewId;
        el.hidden = !active;
        el.classList.toggle("is-active-view", active);
      });

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.dataset.routeLink === viewId);
      });

      const activeViewEl = views.get(viewId);
      if (activeViewEl) {
        activeViewEl.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
      }

      if (anchorId && anchorId !== "top" && anchorId !== viewId) {
        const target = document.getElementById(anchorId);
        if (target) {
          requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth" }));
          return;
        }
      }
      if (isViewChanged) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    document.addEventListener("click", (e) => {
      const tocLink = e.target.closest(".chapter-toc__link, .chapter-toc__sublink");
      if (!tocLink) return;
      const targetId = tocLink.getAttribute("href")?.replace(/^#/, "");
      const targetEl = targetId && document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        history.pushState(null, "", "#" + targetId);
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });

    window.addEventListener("hashchange", applyRoute);
    applyRoute();
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

  function setupProfileSliderAndGnavScroll() {
    document.querySelectorAll("[data-scroll-count]").forEach((counter) => {
      const track = document.getElementById(counter.dataset.scrollCount);
      if (!track) return;
      const panels = [...track.children];
      const tabs = track.id === "profile-track" ? [...document.querySelectorAll(".profile-tab")] : [];
      const prev = document.querySelector(`[data-scroll-prev="${track.id}"]`);
      const next = document.querySelector(`[data-scroll-next="${track.id}"]`);

      const getActiveIndex = () => panels.reduce((best, panel, idx) => {
        const offset = panel.offsetLeft - panels[0].offsetLeft;
        const bestOffset = panels[best].offsetLeft - panels[0].offsetLeft;
        return Math.abs(offset - track.scrollLeft) < Math.abs(bestOffset - track.scrollLeft) ? idx : best;
      }, 0);

      const goTo = (idx, behavior = "smooth") => {
        const bounded = Math.max(0, Math.min(idx, panels.length - 1));
        const left = panels[bounded].offsetLeft - panels[0].offsetLeft;
        track.scrollTo({ left, behavior });
      };

      const update = () => {
        const idx = getActiveIndex();
        counter.textContent = pad2(idx + 1) + " / " + pad2(panels.length);
        if (prev) prev.disabled = idx === 0;
        if (next) next.disabled = idx === panels.length - 1;
        tabs.forEach((tab, tabIdx) => {
          const active = tabIdx === idx;
          tab.classList.toggle("is-active", active);
          tab.setAttribute("aria-selected", String(active));
          panels[tabIdx].tabIndex = active ? 0 : -1;
        });
      };

      prev?.addEventListener("click", () => goTo(getActiveIndex() - 1));
      next?.addEventListener("click", () => goTo(getActiveIndex() + 1));
      tabs.forEach((tab, idx) => tab.addEventListener("click", () => goTo(idx)));
      track.addEventListener("scroll", update, { passive: true });
      update();
    });

    document.addEventListener("click", (e) => {
      const scrollBtn = e.target.closest("[data-case-scroll]");
      if (scrollBtn) {
        const track = document.getElementById(scrollBtn.dataset.caseScroll);
        const dir = Number(scrollBtn.dataset.dir || 1);
        if (track) track.scrollBy({ left: dir * 420, behavior: "smooth" });
        return;
      }

      const burger = e.target.closest("[data-toc-burger]");
      if (burger) {
        const chId = burger.dataset.tocBurger;
        const drawer = document.querySelector(`[data-toc-drawer="${chId}"]`);
        if (drawer) {
          const isOpen = !drawer.hidden;
          drawer.hidden = isOpen;
          burger.setAttribute("aria-expanded", String(!isOpen));
        }
        return;
      }
      const closeBtn = e.target.closest("[data-toc-close]");
      if (closeBtn) {
        const chId = closeBtn.dataset.tocClose;
        const drawer = document.querySelector(`[data-toc-drawer="${chId}"]`);
        const burgerBtn = document.querySelector(`[data-toc-burger="${chId}"]`);
        if (drawer) drawer.hidden = true;
        if (burgerBtn) burgerBtn.setAttribute("aria-expanded", "false");
        return;
      }
      if (e.target.closest(".toc-drawer [data-toc-link]")) {
        document.querySelectorAll(".toc-drawer").forEach((d) => { d.hidden = true; });
        document.querySelectorAll("[data-toc-burger]").forEach((b) => b.setAttribute("aria-expanded", "false"));
      }
    });

     const gnav = document.getElementById("gnav");
      const updateScrollState = () => {
      const activeView = document.querySelector(".page-view.is-active-view");
      const isChapterView = activeView && activeView.id !== "view-top";
      const kv = activeView?.querySelector("#hero-kv, [data-kv]");
      const threshold = kv ? kv.getBoundingClientRect().bottom - 72 : 280;
      const passedKv = threshold <= 0;

      // ★Chapterページに入っている時は常時ぼやけ（true）、TOPページの時はKV通過後にぼやけさせる
      document.body.classList.toggle("is-bg-blurred", isChapterView || passedKv);
      if (gnav) gnav.classList.toggle("is-solid", passedKv);

      if (activeView) {
        const tocLinks = [...activeView.querySelectorAll("[data-toc-link]")];
        if (tocLinks.length > 0) {
          const marker = Math.min(window.innerHeight * 0.32, 240);
          let currentId = tocLinks[0].dataset.tocLink;
          tocLinks.forEach((link) => {
            const target = document.getElementById(link.dataset.tocLink);
            if (target && target.getBoundingClientRect().top <= marker) {
              currentId = link.dataset.tocLink;
            }
          });
          tocLinks.forEach((link) => {
            link.classList.toggle("is-active", link.dataset.tocLink === currentId);
          });
        }

        // ★左外側の余白が足りない時、またはフル幅Caseボックスと重なった時だけハンバーガーに切替
        const tocSystem = activeView.querySelector(".chapter-toc-system");
        if (tocSystem) {
          const containerEl = activeView.querySelector(".chapter-main");
          const leftSpace = containerEl ? containerEl.getBoundingClientRect().left : 0;
          const isNarrowWindow = leftSpace < 195;

          const sideNavEl = tocSystem.querySelector(".chapter-gutter-toc > .chapter-toc--side");
          const navRect = sideNavEl?.getBoundingClientRect();
          const navTop = navRect && navRect.height > 0 ? navRect.top : 88;
          const navBottom = navRect && navRect.height > 0 ? navRect.bottom : 380;

          const fullbleeds = [...activeView.querySelectorAll("[data-fullbleed]")];
          const isOverlappingFullbleed = fullbleeds.some((fb) => {
            const r = fb.getBoundingClientRect();
            return r.top < navBottom + 20 && r.bottom > navTop - 20;
          });

          const useBurger = isNarrowWindow || isOverlappingFullbleed;
          tocSystem.classList.toggle("is-burger-mode", useBurger);
          if (!useBurger) {
            const drawer = tocSystem.querySelector(".toc-drawer");
            if (drawer) drawer.hidden = true;
          }
        }
      }
    };

    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    window.addEventListener("hashchange", () => requestAnimationFrame(updateScrollState));
    updateScrollState();
  }

  /* ---------- Boot ---------- */
  function boot() {
    document.documentElement.lang = data.site.lang || "ja";
    document.title = data.site.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", data.site.description);

    const root = document.getElementById("app");
    root.textContent = "";

    const topView = h("div", { class: "page-view is-active-view", id: "view-top", "data-view": "top" },
      renderHero(data.hero),
      renderProfile(data.profile),
      renderChapterDirectory(data.chapters)
    );

    root.append(
      renderGlobalNav(data.chapters),
      h("main", null,
        topView,
        data.chapters.map((ch, idx) => renderChapterPage(ch, idx, data.chapters))
      ),
      renderFooter(data.site, data.hero),
      renderLightbox()
    );

    setupLightbox();
    setupReveal();
    setupMultiPageRouter(data.chapters);
    setupProgress();
    setupProfileSliderAndGnavScroll();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
