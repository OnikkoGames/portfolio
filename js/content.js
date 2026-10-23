/* =========================================================================
   PORTFOLIO CONTENT  ―  文章・画像・公開状態はすべてこのファイルで編集します
   -------------------------------------------------------------------------
   ・見た目（色/フォント/余白）は css/tokens.css を編集
   ・文字列内の **強調** は <strong> に変換されます
   ・画像は assets/images/ に置き、src に相対パスを書くだけ
   ・Case 2 を追加するとき:
       1) chapters[0] > blocks > type:"cases" > items の id:"case-2" を探す
       2) status を "coming-soon" → "published" に変更
       3) title / stages 内の文章・画像を書き換える（雛形は入力済み）
   ========================================================================= */

window.PORTFOLIO = {
  /* ---------- サイト全体 ---------- */
  site: {
    lang: "ja",
    title: "Kaoruko Kito | UI/UX Designer Portfolio",
    description:
      "UI/UXデザイナー 鬼頭薫子のポートフォリオ。課題定義からビジュアル設計、AIを駆使したプロトタイピングまで、デザインと技術の境界を越えてプロダクトの価値を最速で形にします。BtoB向けCMSのデザインシステム構築や、インディーゲームのUX改修事例を紹介。",
    footer: "© 2026 Kaoruko Kito. All rights reserved.",
  },

  /* ---------- HERO ---------- */
  hero: {
    eyebrow: "PORTFOLIO 2026",
    nameLine1: "KAORUKO",
    nameLine2: "KITO",
    nameJa: "鬼頭 薫子",
    role: "UI/UX Designer",
    lead:
      "課題定義からUI/UX・ビジュアル設計、AIを活用した実装・プロトタイピングまで。デザインの構造を深く理解し、プロダクトの価値を最短で形にします。",
    chips: [
      "UI/UX Design", 
      "Graphic Design", 
      "Typography", 
      "Illustration", 
      "Design System", 
      "Prototyping", 
      "AI-Driven Dev"
    ],
    scrollLabel: "SCROLL",
  },

  /* ---------- PROFILE ---------- */
  profile: {
    overview: {
      label: "OVERVIEW",
      title: "自己紹介",
      paragraphs: [
        "美大で培ったデザイン基礎をベースに活動するUI/UXデザイナー。",
        "画面設計やビジュアル表現にとどまらず、AIツールを活用したプロトタイピングからフロントエンド実装まで領域を横断してアプローチします。",
        "個人開発（OnikkoGames）でのインディーゲーム制作や俳優活動など、デジタルとリアルの枠を超えて「つくる・表現する」ことを探求しています。"
      ],
    },

    background: {
      label: "BACKGROUND",
      title: "略歴・学歴",
      items: [
        {
          meta: "2020.03",
          title: "聖心女子学院 高等科卒業",
          quiet: true,
        },
        {
          meta: "2020.04",
          title: "武蔵野美術大学 基礎デザイン学科入学",
          quiet: true,
        },
        {
          meta: "2023.01",
          title: "イギリスで語学留学（2ヶ月）",
          quiet: true,
        },
        {
          meta: "2023.09",
          title: "ドイツ・KISD デザイン留学",
          body: "デザイン留学（1年間）",
        },
        {
          meta: "2025.03",
          title: "武蔵野美術大学 基礎デザイン学科卒業",
          body: "卒業制作で学科賞を受賞。",
        },
        {
          meta: "2025.04",
          title: "都内IT企業 インハウスWebデザイナー",
          body: "全社表彰「Do Fast賞（PMVVアワード）」を受賞。",
        },
        {
          meta: "2025.04",
          title: "都内IT企業 インハウスUI/UXデザイナー",
          body: "新規CMSのUI/UX責任者兼フロントエンドエンジニア。",
        },
      ],
    },

    tools: {
      label: "TOOLS / TECH",
      title: "使用ツール・技術",
      groups: [
        {
          name: "UI/UX & Graphic Design",
          items: [
            "Figma",
            "Adobe XD",
            "Adobe",
            "Adobe InDesign",
            "Illustrator",
            "Photoshop",
            "CLIP STUDIO PAINT",
            "After Effects",
            "Cinema 4D",
            "Canva",
          ],
        },
        {
          name: "Development",
          items: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "C#",
            "Unity",
            "VS Code",
            "Xcode",
          ],
        },
        {
          name: "AI & Workflow",
          items: [
            "Claude Code",
            "Cursor",
            "Antigravity",
            "Gemini",
            "ChatGPT",
            "Microsoft Copilot",
          ],
        },
        {
          name: "Version Control",
          items: ["Git", "GitHub", "GitLab", "Sourcetree"],
        },
      ],
    },

    workStyle: {
      label: "PERSPECTIVE & STYLE",
      title: "デザインを支える視点・働き方",
      items: [
        {
          title: "自律的なワークスタイル",
          body: "本業・開発・舞台表現の3軸を自律的に循環。相乗効果を生み出すことで、高いパフォーマンスと価値を維持・提供しています。",
        },
        {
          title: "ライフワークとしてのゲーム開発",
          body: "企画から実装・リリース・運用までを一気通貫で完遂。プロダクトを世に出すプロセス全体を実践で学び、自走力を高めています。",
        },
        {
          title: "演劇経験とデザインへの応用",
          body: "演技で培った人間観察力と対話姿勢を深く探求。多角的な視点をユーザー理解とUI/UXの課題解決に還元しています。",
        },
      ],
    },

    skills: {
      label: "CORE SKILLS",
      title: "コアスキル",
      items: [
        {
          title: "課題定義・要件整理",
          body: "ユーザーや事業の本質的な課題を抽出し、解くべき明確な問題として定義する力。",
        },
        {
          title: "UI/UX & ビジュアル設計",
          body: "美大で培ったグラフィックの知見を活かし、論理的かつ高品質なUI/UXを構築する力。",
        },
        {
          title: "一貫した開発プロセス",
          body: "Figmaでの画面設計から、AIを活用したプロトタイピングや実装工程への接続までを主導。",
        },
        {
          title: "AIワークフロー最適化",
          body: "生成AIを駆使してデザイン・開発プロセスを効率化し、プロダクトの価値を最速で形にする力。",
        },
      ],
    },
  },

  /* ---------- CHAPTERS ---------- */
  chapters: [
    /* ================= 第1章 ================= */
    {
      id: "chapter-1",
      number: "01",
      eyebrow: "CHAPTER 01 — IN-HOUSE PRODUCT",
      title: "BtoB向け新規CMSの\nUI/UX改善",
      sitemapNote: "IN-HOUSE PRODUCT",
      heroImage: {
        src: "assets/images/LENSAhub_kv.png",
        alt: "LENSAhubのサービスキービジュアル",
        sourceLabel: "自社新規CMS「LENSAhub」キービジュアル",
      },

      blocks: [
        {
          type: "cards",
          id: "ch1-features",
          variant: "glow",
          label: "PRODUCT FEATURES",
          title: "対象プロダクト「LENSAhub」の特徴",
          intro: "専門知識がない企業のWeb担当者でも、ノーコードで直感的にサイト構築・運用ができるBtoB向け自社新規CMSです。",
          items: [
            {
              title: "ノーコードで直感的なページ構築",
              body: "専門知識がなくても、ブロックやテンプレートを選ぶだけで迷わずページを作成・更新可能。",
            },
            {
              title: "企業運用を支える承認・権限管理",
              body: "部署ごとの権限設定や公開前の承認ワークフロー、操作ログなどBtoB向けガバナンス機能を搭載。",
            },
            {
              title: "デザインとサイト資産の一元管理",
              body: "ページ・ファイル・お知らせ・フォームを統合管理し、ブランドの一貫性と運用効率を両立。",
            },
          ],
        },
        {
          type: "table",
          id: "ch1-overview",
          label: "OVERVIEW",
          title: "プロジェクト概要",
          rows: [
            [
              "対象プロダクト",
              "**BtoB向け自社新規CMS「LENSAhub」**\n企業のWeb担当者向け・ノーコードWebサイト構築・運用クラウドCMS",
            ],
            ["役割", "UI/UX責任者 兼 フロントエンド開発（チーム内唯一のデザイナー）"],
            ["担当範囲", "課題抽出、要件定義、UI/UX設計、デザインシステム構築、フロントエンド実装・リファクタリング"],
            ["使用技術・ツール", "Figma, HTML/CSS, TypeScript, Git (Sourcetree), VS Code, Claude Code 等"],
            ["主要実績", "**異動後の直近リリース（v2.4.0）から継続的にUI/UX改善と基盤統制を反映**"],
          ],
        },
        {
          type: "text",
          id: "ch1-challenges",
          label: "CHALLENGES",
          title: "課題",
          body: "参画当初は「今年度中にUI/UXを改善できたらいい」という曖昧な要件のみで、専任デザイナーも不在のまま開発が進んでいました。表層のデザイン崩れだけでなく、以下の**3つの構造的課題**を定義して改善に着手しました。\n\n・**「完成図」と「接着ルール」の不在**：最小単位の部品はあっても配置や組み合わせの基準がなく、実装者ごとの独自解釈で画面間の一貫性が破綻。\n・**技術的ガバナンスの欠如**：カラーコードや独自スタイルのハードコーディングを防ぐ仕組みがなく、目視レビュー依存でルールが形骸化。\n・**「デザイナー不在」に耐えうる運用フローの未構築**：Figmaや人間の記憶に頼らず、自律的に品質を維持できる仕組みが不足。",
        },
        {
          type: "processVisuals",
          id: "ch1-approach",
          label: "APPROACH & PROCESS",
          title: "アプローチと推進プロセス",
          intro: "曖昧な組織課題を突破するため、「合意形成の型化」「段階的なリリース統制」「AI前提のルール構造化」の3軸で仕組みを構築しました。",
          items: [
            {
              number: "01",
              kind: "flow",
              title: "開発組織を動かす「4点セット起票フォーマット」",
              summary: "単なる修正依頼ではなく、エンジニアが即断できる論理構造をテンプレート化し、メジャーアップデートへのUI改善組み込みを実現。",
              steps: [
                { step: "01", name: "現状", detail: "例：余白の初期値が「px」固定" },
                { step: "02", name: "課題", detail: "例：スマホで余白崩れが多発" },
                { step: "03", name: "ゴール", detail: "例：単位を意識せず自動最適化" },
                { step: "04", name: "対応策", detail: "例：初期値を「%」へ変更提案" },
              ],
              outcome: "エンジニアの判断スピード向上 ＆ 部署横断の合意形成を加速",
            },
            {
              number: "02",
              kind: "bars",
              title: "リリースに合わせた「点・線・面」の段階的UI統制",
              summary: "一度にすべてを縛るのではなく、バージョンごとに統制スコープを拡大して現場の信頼と品質を両立。",
              bars: [
                {
                  ver: "v2.4.0",
                  scope: "点の改善",
                  pct: 35,
                  desc: "新機能UI精査・アイコン制作・モーダルボタン分岐ルール策定で信頼獲得",
                },
                {
                  ver: "v2.5.0",
                  scope: "線の改善",
                  pct: 68,
                  desc: "一覧画面の検索ボックスやCSV出力等のアクション配置・配色パターンを統一",
                },
                {
                  ver: "v2.6.0",
                  scope: "面の改善",
                  pct: 100,
                  highlight: true,
                  desc: "全体の名称揺れ・メニュー構造の整理、設定パネル順序、検索コンポーネント化を完遂",
                },
              ],
            },
            {
              number: "03",
              kind: "architecture",
              title: "AI実装で「90%のUI」が自動で出るMarkdownデザインシステム",
              summary: "仕様をFigmaに閉じ込めずMarkdown（.md）化し、Claude Code等が実装時に自動参照するアーキテクチャを構築。",
              pipeline: [
                { tag: "INDEX", label: "目次（.md）の軽量参照", sub: "必要な機能のルールのみを選択しトークン圧迫を回避" },
                { tag: "AUTO (90%)", label: "定型UIの自動実装", sub: "一覧系・検索・モーダルはAIがルール準拠で自動生成" },
                { tag: "HUMAN (+10%)", label: "複雑画面の重点デザイン", sub: "ダッシュボードやページ編集等の例外のみデザイナーが介入" },
              ],
            },
          ],
        },
       {
          type: "cases",
          id: "ch1-cases",
          label: "CASE STUDIES",
          title: "画面別UI/UX改善の実績",
          items: [
            {
              id: "case-1",
              number: "01",
              status: "published",
              theme: "導線",
              title: "Welcome画面",
              subtitle: "初期設定フローの統合と迷いの解消",
              stages: [
                {
                  kind: "before",
                  label: "課題",
                  heading: "入力が分断され進行状況が見えない",
                  pointsLabel: "課題の背景と分析",
                  points: [
                    { title: "遷移過多によるUX低下", body: "挨拶・入力・完了案内が分断され、操作開始までに4回の画面遷移が必要でした。" },
                    { title: "作業フローの不透明さ", body: "案内やタイトルが未統一で、全体の進捗や残りステップ数が視覚的に不明確でした。" },
                    { title: "完了後の導線不足", body: "設定完了後の次のアクションが案内されず、ユーザーが迷う要因になっていました。" },
                  ],
                  imagesLabel: "Before画面・配置イメージ",
                  images: [
                    { src: "assets/images/case1/before_01_welcome.png", caption: "Before① Welcome画面（開始ボタンのみ）" },
                    { src: "assets/images/case1/before_02_site_settings.png", caption: "Before② サイト初期設定（別画面）" },
                    { src: "assets/images/case1/before_03_template.png", caption: "Before③ テンプレート選択（ステップ表示なし）" },
                    {
                      // ★1枚目のSVG（ボタン内のアイコンと文字の被りを修正済み）
                      src: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 450" width="100%" height="100%"><defs><style>.text-main{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:700;fill:#111111;text-anchor:middle;}.text-button{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:500;fill:#ffffff;}</style></defs><rect width="100%" height="100%" fill="#eff3f5"/><rect width="100%" height="100%" fill="none" stroke="#000000" stroke-width="2"/><rect x="240" y="40" width="520" height="100" fill="#ffffff"/><g stroke="#1a8ecb" stroke-width="1.5" fill="none"><circle cx="500" cy="68" r="10"/><path d="M495.5 68.5 l3 3 l6 -6"/></g><text x="500" y="98" class="text-main" font-size="14.5" letter-spacing="0.5">サイト設定が完了しました。</text><text x="500" y="120" class="text-main" font-size="16" letter-spacing="0.5">LENSAhub の世界をお楽しみください！</text><rect x="430" y="175" width="140" height="28" rx="2" fill="#1b8fcc"/><g fill="none" stroke="#ffffff" stroke-width="1.2"><rect x="451" y="184" width="3.8" height="3.8"/><rect x="456.8" y="184" width="3.8" height="3.8"/><rect x="451" y="189.8" width="3.8" height="3.8"/><rect x="456.8" y="189.8" width="3.8" height="3.8"/></g><text x="467" y="193" class="text-button" font-size="11" letter-spacing="0.3">ダッシュボードへ</text></svg>')}`,
                      caption: "Before④ 完了画面（別画面へ遷移）",
                    },
                  ],
                },
                {
                  kind: "approach",
                  label: "アプローチ",
                  heading: "画面をひとつにまとめて進行を示す",
                  pointsLabel: "改善方針",
                  points: [
                    { title: "フロー集約と遷移削減（4回→2回）", body: "モーダルと初期入力を統合し、モーダルを閉じる手間や説明の重複を解消しました。" },
                    { title: "「全体像・現在地・残り」の明示", body: "STEPインジケーターの導入とタイトル統一により、フロー全体と現在地を視覚化しました。" },
                    { title: "不安払拭と誘導強化", body: "「後から変更可能」と明記して心理的ハードルを下げ、完了モーダルから次の設定へスムーズに誘導しました。" },
                  ],
                },
                {
                  kind: "after",
                  label: "解決策と実装結果",
                  heading: "2ステップで終わる初期設定",
                  pointsLabel: "改善結果とデザインポイント",
                  points: [
                    { title: "1画面統合と遷移数の半減", body: "ウェルカム画面とSTEP01を統合し、主要機能へ素早く到達できる構成に刷新しました。" },
                    { title: "STEPインジケーターと配置の整理", body: "左カラムに全体像、右上に進捗を配置。現在地を常時把握できる安心感を提供しました。" },
                    { title: "完了状態の明示とシームレスな接続", body: "完了モーダルで次のアクションを明確化し、不要な画面遷移の不快感を払拭しました。" },
                  ],
                  imagesLabel: "After画面・配置イメージ",
                  images: [
                    { src: "assets/images/case1/after_01_welcome_step1.png", caption: "After① ウェルカム＋STEP01を統合" },
                    { src: "assets/images/case1/after_02_template_step2.png", caption: "After② STEP02 デザイン選択（進捗表示付き）" },
                    {
                      // ★2枚目のSVG（ダッシュボード上の完了モーダル）
                      src: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%"><defs><style>.text-main{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:700;fill:#333333;text-anchor:middle;}.text-button{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:400;fill:#ffffff;text-anchor:middle;}.shadow{filter:drop-shadow(0px 4px 6px rgba(0,0,0,0.1));}</style></defs><rect width="200" height="600" fill="#1e293b"/><rect x="200" width="800" height="40" fill="#e2e8f0"/><rect x="200" y="40" width="800" height="560" fill="#f1f5f9"/><line x1="200" y1="120" x2="1000" y2="120" stroke="#cbd5e1" stroke-width="2"/><rect x="250" y="160" width="700" height="400" fill="#ffffff"/><rect width="1000" height="600" fill="rgba(0,0,0,0.4)"/><rect x="300" y="60" width="400" height="460" fill="#ffffff" rx="4" class="shadow"/><g transform="translate(320, 80)"><rect width="360" height="220" fill="#9cdcf2"/><rect x="70" y="60" width="220" height="130" rx="5" fill="#2c2c2c"/><rect x="75" y="65" width="210" height="120" fill="#ffffff"/><path d="M40,190 L320,190 C325,190 325,195 320,195 L40,195 C35,195 35,190 40,190 Z" fill="#c0c0c0"/><path d="M50,195 L310,195 L310,197 L50,197 Z" fill="#999999"/><circle cx="120" cy="105" r="5" fill="#00b0f0"/><circle cx="132" cy="105" r="5" fill="#f05050"/><text x="145" y="111" font-family="sans-serif" font-weight="bold" font-size="18" fill="#111">LENSAhub</text><rect x="130" y="130" width="100" height="28" rx="2" fill="#d7f1fc"/><text x="180" y="150" class="text-main" font-size="13" fill="#0a88c2" font-weight="bold">準備完了！</text><circle cx="70" cy="65" r="35" fill="#ffffff" class="shadow"/><rect x="52" y="60" width="8" height="20" fill="#f05050" transform="rotate(-15 52 60)"/><rect x="65" y="50" width="8" height="30" fill="#fbbf24" transform="rotate(-15 65 50)"/><rect x="78" y="35" width="8" height="45" fill="#3b82f6" transform="rotate(-15 78 35)"/><circle cx="285" cy="115" r="35" fill="#ffffff" class="shadow"/><polyline points="265,120 275,105 285,110 295,100 305,115" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linejoin="round"/><polyline points="265,95 265,125 305,125" fill="none" stroke="#666" stroke-width="1.5"/><circle cx="80" cy="155" r="22" fill="#ffffff" class="shadow"/><path d="M68,145 L78,145 L82,150 L92,150 L92,165 L68,165 Z" fill="#10b981" transform="rotate(15 80 155)"/></g><g stroke="#0e8ac2" stroke-width="1.5" fill="none"><circle cx="500" cy="340" r="14"/><path d="M494 340.5 l4 4 l8 -8"/></g><text x="500" y="380" class="text-main" font-size="15">サイト設定が完了しました。</text><text x="500" y="405" class="text-main" font-size="15">LENSAhubの世界をお楽しみください！</text><rect x="320" y="445" width="360" height="42" rx="3" fill="#0d8bc3"/><text x="500" y="471" class="text-button" font-size="14" font-weight="bold">開始する</text></svg>')}`,
                      caption: "After③ 完了メッセージモーダル",
                    },
                  ],
                },
              ],
            },
            {
              id: "case-2",
              number: "02",
              status: "published",
              theme: "情報設計",
              title: "ダッシュボード配下のサイドメニュー",
              subtitle: "情報設計と視認性の向上",
              stages: [
                {
                  kind: "before",
                  label: "課題",
                  heading: "メニューが多く縦に伸びすぎる",
                  pointsLabel: "課題の背景と分析",
                  points: [
                    { title: "機能の散在と優先順位の不一致", body: "10個以上のメニューが未整理で並び、日常更新とシステム設定が混在して探す手間や誤操作が発生していました。" },
                    { title: "アイコン表現と用語の不一致", body: "機能の意図と合わないアイコンが使われ、承認関連の文言（依頼／申請）も区別しづらい状態でした。" },
                    { title: "動的データ展開によるナビの肥大化", body: "作成データがアコーディオンで展開・蓄積され、縦に長くなり一覧性を損なっていました。" },
                  ],
                  imagesLabel: "Before画面・配置イメージ",
                  galleryLayout: "nav",
                  images: [
                    {
                      src: "assets/images/case2/before_sidenav_full_1.png",
                      caption: "Before① サイドナビ全体（グループなし）",
                      desc: "見出しなく10個以上の項目が並び、設定系とコンテンツが混在した状態。",
                      fit: "contain",
                      pos: "top center",
                    },
                    {
                      src: "assets/images/case2/before_02_sidenav_1.png",
                      caption: "Before② 個別データの展開",
                      desc: "作成したデータがナビ項目として追加され肥大化する状態。",
                      aspect: "16 / 10",
                      fit: "cover",
                      pos: "0% 100%",
                      origin: "0% 65%",
                    },
                    {
                      src: "assets/images/case2/before_sidenav_microcopy.png",
                      caption: "Before③ 承認・申請管理の文言",
                      desc: "「承認依頼」「承認申請」と類似した表現が並び区別困難な状態。",
                      aspect: "16 / 10",
                      fit: "cover",
                      pos: "0% 88%",
                    },
                  ],
                },
                {
                  kind: "approach",
                  label: "アプローチ",
                  heading: "役割ごとに3つの塊へまとめる",
                  pointsLabel: "改善方針",
                  points: [
                    { title: "「3ブロック構成」への再編", body: "スクロール量を抑えつつ識別性を高めるため、「無見出し（全体・設定）/ コンテンツ / 運用」の3構造に集約しました。" },
                    { title: "アイコン刷新とコピーの直感化", body: "アイコンのメタファーを再定義し、承認メニューも「受信／送信」と対になる明確な表現へ変更しました。" },
                    { title: "機能とデータの分離", body: "ナビには「機能への入口」のみを残し、個別データは一覧画面側に集約してナビ長を固定化しました。" },
                  ],
                },
                {
                  kind: "after",
                  label: "解決策と実装結果",
                  heading: "迷わず探せるメニューへ刷新",
                  pointsLabel: "改善結果とデザインポイント",
                  points: [
                    { title: "3ブロック再編と見出しの導入", body: "機能性質ごとに3グループに整理し、セクション見出しと区切り線で視認性を強化しました。" },
                    { title: "メタファー適正化と用語統一", body: "操作ログや通知のアイコンを直感的な意図へ変更し、承認名称も「受信/送信」へ統一して認知負荷を軽減しました。" },
                    { title: "ナビ項目数の固定と導線連携", body: "データ展開を廃止して縦幅を固定し、ダッシュボードの履歴確認に連動するメニューを新設しました。" },
                  ],
                  imagesLabel: "After画面・配置イメージ",
                  galleryLayout: "nav",
                  images: [
                    {
                      src: "assets/images/case2/after_sidenav_full.png",
                      caption: "After① サイドナビ全体（3ブロック再編後）",
                      desc: "「無見出し」「コンテンツ」「運用」の3グループに整理。アイコンも一新。",
                      fit: "contain",
                      pos: "top center",
                    },
                    {
                      src: "assets/images/case2/after_sidenav_notice.png",
                      caption: "After② お知らせ（機能入口のみ）",
                      desc: "個別データを排除し入口のみに限定。データ増加時も長さを維持。",
                      aspect: "16 / 10",
                      fit: "contain",
                      pos: "center center",
                    },
                    {
                      src: "assets/images/case2/after_sidenav_microcopy.png",
                      caption: "After③ 承認管理の文言（受信／送信）",
                      desc: "「受信一覧」「送信一覧」とし、処理の向きを明確化。",
                      aspect: "16 / 10",
                      fit: "cover",
                      pos: "0% 100%",
                    },
                  ],
                },
              ],
            },
            {
              id: "case-3",
              number: "03",
              status: "published",
              theme: "操作の優先度づけ・密度",
              title: "ページ一覧",
              subtitle: "操作アイコンの整理と一覧性の向上",
              stages: [
                {
                  kind: "before",
                  label: "課題",
                  heading: "アイコンの並びすぎと押し間違い",
                  pointsLabel: "課題の背景と分析",
                  points: [
                    { title: "情報量の過剰と一覧性の阻害", body: "1行に10〜14個のアイコンが並び、ホバー時にデータ列と重なって文字を隠していました。" },
                    { title: "メタファー重複による機能誤認", body: "「目のアイコン」が他画面と異なり「プレビュー」を指すなど、画面間での一貫性が不足していました。" },
                    { title: "誤操作を招く危険な配置", body: "頻用する「編集」とリスクの高い「削除」が隣接し、誤クリックの危険がありました。" },
                  ],
                  imagesLabel: "Before画面・配置イメージ",
                  images: [
                    { src: "assets/images/case3/before_01_page_list.png", caption: "Before① ページ一覧（全体）", desc: "無数のアイコンが並び、一覧が煩雑に見える状態。" },
                    { src: "assets/images/case3/before_02_row_hover_icons.png", caption: "Before② 行ホバー時のアイコン表示", desc: "ホバー時に多数のアイコンがテキスト上に重なる課題。" },
                    { src: "assets/images/case3/before_03_icons_14.png", caption: "Before③ アイコンの羅列", desc: "補足が必要なほど多すぎるアイコンの様子。" },
                  ],
                },
                {
                  kind: "approach",
                  label: "アプローチ",
                  heading: "使う頻度でアイコンを3つに分ける",
                  pointsLabel: "改善方針",
                  points: [
                    { title: "操作の3段階分類とデータ列統合", body: "操作を「情報（列へ集約）」「高頻度（常時表示）」「低頻度（メニュー格納）」に再設計しました。" },
                    { title: "操作感の一貫性と安全性の配慮", body: "慣れた操作感を保つためアイコン表示を維持しつつ、「編集」と「削除」の距離を物理的に離しました。" },
                    { title: "メタファー統一とメニュー集約", body: "プレビューアイコンを統一し、低頻度機能はテキスト付きのバルーンメニューへまとめました。" },
                  ],
                },
                {
                  kind: "after",
                  label: "解決策と実装結果",
                  heading: "すっきり整理されて見やすい一覧",
                  pointsLabel: "改善結果とデザインポイント",
                  points: [
                    { title: "常時表示の削減とレイアウト固定", body: "常時表示を5個厳選して右端へ固定。「更新日」と「更新者」を統合して一覧性を向上させました。" },
                    { title: "配置の最適化と誤操作防止", body: "「編集」と「削除」を離して誤操作を回避。プレビュー表現の一貫性も確保しました。" },
                    { title: "バルーンメニュー化による拡張性向上", body: "低頻度操作を「…」メニューへ集約。テキストラベルで意図を明確化し、将来の機能追加にも強い構造としました。" },
                  ],
                  imagesLabel: "After画面・配置イメージ",
                  images: [
                    { src: "assets/images/case3/after_01_page_list.png", caption: "After① ページ一覧（改善後全体）", desc: "操作列を固定し、データ列の視認性と一覧性を向上。" },
                    { src: "assets/images/case3/after_02_fixed_column_menu.png", caption: "After② 「…」バルーンメニュー", desc: "「…」から文字ラベル付きメニューを展開した様子。" },
                    { src: "assets/images/case3/after_03_icons_menu.png", caption: "After③ 機能の3分類図", desc: "情報統合・常時表示・メニュー集約の切り分けを整理した図。" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    /* ================= 第2章 ================= */
    {
      id: "chapter-2",
      number: "02",
      eyebrow: "CHAPTER 02 — PERSONAL PROJECT / ONIKKOGAMES",
      title: "インディーゲームのUX大改修",
      sitemapNote: "PERSONAL PROJECT / ONIKKOGAMES",
      heroImage: {
        src: "assets/images/game/storepage.png",
        alt: "脱出ゲーム 1room 砂漠シェルターからの脱出 ストアページのメインビジュアル",
      },

      blocks: [
        {
          type: "appHeader",
          id: "ch2-overview",
          icon: "assets/images/game/icon.png",
          name: "脱出ゲーム ~1room~ 砂漠シェルターからの脱出",
          sub: "1room Escape: Desert Shelter  |  OnikkoGames（企画・デザイン・C#実装・5言語翻訳すべて単独完遂）",
          rating: "4.1",
          ratingCount: "335件の評価（App Store）",
          badges: ["iOS / Android", "5ヶ国語対応", "Unity (C#)", "ドット絵・UI/UX"],
          links: [
            { label: "App Store", url: "" },
            { label: "Google Play", url: "" },
            { label: "開発ログ（note）", url: "" },
          ],
        },
        {
          type: "stats",
          items: [
            { value: "7,685", unit: "DL", label: "累計ダウンロード数（※10月18日現在）" },
            { value: "×6", unit: "", label: "大規模アプデ後、約5ヶ月で1,289DLから急成長" },
            { value: "4.1", unit: "★", label: "初期★2.75から大幅改善（iOS版335件の平均評価）" },
            { value: "5", unit: "LANG", label: "日・英・韓・中（簡/繁）でグローバル展開＆返信対応" },
          ],
        },
        {
          type: "table",
          label: "OVERVIEW",
          title: "プロジェクト概要",
          rows: [
            ["対象プロダクト", "スマートフォン向けSF脱出ゲーム『脱出ゲーム~1room~ 砂漠シェルターからの脱出』"],
            ["役割 / 担当", "企画、ドット絵・UI/UXデザイン、C#実装、5ヶ国語ローカライズ、ストア運用・ユーザーサポート（すべて単独で完遂）"],
            ["使用ツール", "Unity (C#), Figma, Illustrator, Photoshop, CLIP STUDIO PAINT, Git, Claude Code"],
            ["主要実績", "**累計 7,685 DL突破**（大規模アプデ後、約5ヶ月で1,289DLから約6倍に成長） / **App Store平均評価 ★4.1（335件）**"],
          ],
        },
        {
          type: "text",
          label: "CHALLENGES",
          title: "課題",
          body: "2025年5月に先行リリースしたAndroid版（v1.5〜1.8）では、世界観やドット絵のセンスは評価されたものの、UIの視認性不足や操作の煩雑さ、ヒント機能の不備により**初期評価は平均★2.75と低迷**しました。\nそこで、寄せられたレビュー1件1件に返信しながら課題を徹底的に分析。2026年5月のiOS版リリースに向けた大規模リメイク（v3.3〜3.5）にて、「ノスタルジックなドット絵の世界観への没入感」を最大化しつつ、脱出ゲーム特有の「操作ストレスと詰まりによる途中離脱」をUI/UXの力で解消する抜本改修を実施しました。",
        },
        {
          type: "ratingChart",
          id: "ch2-rating",
          label: "RATING TRANSITION",
          title: "バージョン別 ★評価の推移とカイゼンの軌跡",
          intro: "初期Android版の厳しい指摘から逃げず、アップデートごとにUI/UXのボトルネックを解消。段階的な改善の積み重ねにより、iOS版を含む大型リメイク後には**平均★4.1（335件）**の高評価へとV字回復させました。",
          phases: [
            {
              version: "v1.5 – 1.8",
              period: "2025.05 初旬（初期リリース）",
              score: 2.75,
              status: "低迷期",
              title: "操作性と視認性の不備による離脱が発生",
              body: "「どこに使えばいいか分からない」「ボタンが小さく誤操作しやすい」「ヒントが機能しない」といったUI面の課題が集中し、世界観は好評ながら低評価が先行。",
            },
            {
              version: "v1.8.4",
              period: "2025.05 中旬（UI緊急改修）",
              score: 2.86,
              status: "改善着手",
              title: "アイテム選択UIの強化と即時アップデート",
              body: "「画面移動でアイテム選択が解除され無駄な手間がかかる」という指摘を受け、選択状態のハイライト保持UIへ即座に改修。対応後、**「★2から★4へ変更しました」**と追記するユーザーが出現。",
            },
            {
              version: "v1.9 – 2.0",
              period: "2025.05 下旬 – 10月（安定化・兆し）",
              score: 3.69,
              status: "回復期",
              title: "ヒント誘導の整理と、海外ユーザーからの反響獲得",
              body: "進行状況に応じたヒント分岐の修正により国内評価が回復（「いい味出してる」等）。さらに韓国や英語圏のプレイヤーからも「32min. love it」等の★5評価やレビューが届き始め、**グローバル展開（多言語化）への確かなポテンシャルを発見**。",
            },
            {
              version: "v3.3 – 3.5",
              period: "2026.05 – 現在（大型リメイク＆多言語化）",
              score: 4.10,
              highlight: true,
              status: "高評価定着（335件）",
              title: "縦画面UIへの刷新・独り言システム導入・5ヶ国語ローカライズ完遂",
              body: "iOS版公開に合わせ、片手操作に最適化した「縦画面固定UI」や主人公の独り言ダイアログ、自動クリア機能を導入。さらに初期の海外反響を元に**最新アップデートで5ヶ国語対応を完遂**し、DL数は約6倍（7,685DL）・評価★4.1へと飛躍。",
            },
          ],
        },
        {
          type: "solutions",
          id: "ch2-solutions",
          label: "UX DESIGN & SOLUTIONS",
          title: "何がどう変化したか（Before / After）",
          items: [
            {
              title: "「画面が煩雑で意図が掴めない」から「直感的な縦画面UIと感情導線」へ",
              body: "無機質な謎解きを防ぎ、探索のヒントを直感的に伝えるため、状況に応じて主人公がつぶやく「ダイアログ」と「立ち絵アニメーション」を新設しました。",
              changes: [
                {
                  kind: "before",
                  label: "BEFORE（初期版の課題）",
                  text: "「ドットで状況が分かりにくい」「全体的に煩雑」などの声があり、探索の糸口や世界観が不透明でした。",
                },
                {
                  kind: "approach",
                  label: "ACTION（実施したUX改善）",
                  text: "自然にヒントをつぶやく「独り言ダイアログ」を構築。あわせてタップ可能な場所を示す「光のガイド」を導入しました。",
                },
                {
                  kind: "after",
                  label: "AFTER（変化とユーザーの反応）",
                  text: "長文を読ませず世界観への没入と分かりやすさを両立。「説明がなくても世界観が伝わる（★5）」と高評価を獲得しました。",
                },
              ],
              images: [
                { src: "assets/images/game/dialogue_1.jpg", caption: "独り言ダイアログ", phone: true },
                [
                  { src: "assets/images/game/sotai-normal-1.png", caption: "表情1", phone: true },
                  { src: "assets/images/game/sotai-happy-0.png", caption: "表情2", phone: true },
                ],
                [
                  { src: "assets/images/game/sotai-sad-4.png", caption: "表情3", phone: true },
                  { src: "assets/images/game/sotai-angry-1.png", caption: "表情4", phone: true },
                ],
              ],
            },
            {
              title: "「操作ミスや詰まりによる離脱」から「最後まで遊べる摩擦ゼロのUX」へ",
              body: "「操作の迷い」や「パズルの詰まり」による離脱を抑えるため、選択状態の保持から段階的ヒント、スキップ機能までストレスのない操作環境を設計しました。",
              changes: [
                {
                  kind: "before",
                  label: "BEFORE（初期版の課題）",
                  text: "「画面移動でアイテム選択が解除される（★1）」「パズルで詰まってアンスト（★3）」など途中離脱が発生していました。",
                },
                {
                  kind: "approach",
                  label: "ACTION（実施したUX改善）",
                  text: "選択状態の保持処理を追加。さらに進行度に応じた「段階的ヒント・解答提示」と「パズル・セリフのスキップ機能」を導入しました。",
                },
                {
                  kind: "after",
                  label: "AFTER（変化とユーザーの反応）",
                  text: "操作ストレスや詰まりを解消。「スキップなど快適に遊べる工夫が良い（★5）」とクリア率と満足度が向上しました。",
                },
              ],
              images: [
                { src: "assets/images/game/puzzle.jpg", caption: "パズル画面とヒントアイコン", phone: true },
                { src: "assets/images/game/item.jpg", caption: "アイテム拡大・選択保持UI", phone: true },
              ],
            },
            {
              title: "実機検証に基づく「縦画面固定」と5ヶ国語ローカライズの完遂",
              body: "実機テストを通じてスマホの片手操作における指の届きやすさを検証。仕様を絞り込むことで、ビジュアルの表現力向上と多言語展開を同時に実現しました。",
              changes: [
                {
                  kind: "before",
                  label: "BEFORE（初期版の課題と発見）",
                  text: "端末サイズによる表示崩れがあった一方、海外ユーザーからも好評を得てグローバル展開の可能性が見えていました。",
                },
                {
                  kind: "approach",
                  label: "ACTION（実施したUX改善）",
                  text: "片手操作に最適化した「縦画面固定レイアウト」に刷新。削ったレイアウト工数を表現力強化にあて、5ヶ国語に対応させました。",
                },
                {
                  kind: "after",
                  label: "AFTER（変化とユーザーの反応）",
                  text: "快適な片手操作を実現し、国内外のプレイヤーから「ドットの世界観が面白い！（★5）」と世界中で支持される作品になりました。",
                },
              ],
              images: [
                { src: "assets/images/game/main_1.jpg", caption: "縦画面の操作UIレイアウト", phone: true },
                { src: "assets/images/game/title_ja.jpg", caption: "タイトル画面（日本語）", phone: true },
                { src: "assets/images/game/title_en.jpg", caption: "タイトル画面（英語）", phone: true },
              ],
            },
          ],
        },
    
        {
          type: "reviews",
          id: "ch2-reviews",
          label: "VOICE OF USERS",
          title: "ストアに寄せられた実際のレビューと対話",
          intro: "リリースして終わりではなく、日本語・英語・韓国語・中国語で寄せられるすべてのレビューに目を通し、1件ずつ返信・サポートを行いながら継続的なアップデートに繋げています。",
          items: [
            {
              stars: 5,
              title: "滞在したいポストアポカリプス",
              meta: "App Store (日本)  |  v3.5.0",
              body: "シェルターの中が居心地良すぎて出たり入ったりしてます（3周目）アポカリプス愛好者をひと目で惹きつける統一された質感と、オリジナリティ溢れるグラフィックが美しかったです…突如麗しい人類がぱちぱち瞬き（眉と口も動く！）し始めて心臓撃ち抜かれました。謎解きは世界観を邪魔せずに溶け込んでいてとても良かったです！",
              reply: "世界観やキャラクターの細かな動き、noteの開発ログまでご覧いただき感謝をお伝えし、次回作への励みとしました。",
            },
            {
              stars: 5,
              title: "雰囲気のいい完成された脱出ゲーム",
              meta: "App Store (日本)  |  v3.4.13",
              body: "短くサクッと終わる脱出ゲームながら、あまり他でみかけないギミックの謎解きもあって面白かった。光の場所を探すというのも絵柄に対して探索のアプローチがわかりやすいように調整されていて良かった。いきなり放り込まれて世界観の説明がないに等しい状態でも空気感が表現されているしキャラクター全てが魅力的。",
              reply: "探索ガイドの意図が正確に伝わったことを確認。あわせていただいた吹き出し表示のレスポンス改善要望を次期課題として記録。",
            },
            {
              stars: 5,
              title: "独自性が高い / 音や絵のこだわり",
              meta: "App Store (日本)  |  v3.3.9",
              body: "アイディアと世界観、そしてシステムが素晴らしい作品でした。1つひとつの動きが次に繋がって展開していく流れがとても面白い。タップすべき仕掛けのある場所を先に示してくれている点や、細切れで送りの面倒なセリフのスキップ機能など、快適にプレイする為のシステムも良かったです。",
              reply: "快適プレイのためのUX設計への評価に感謝しつつ、ご報告いただいた特定条件下でのカードスロット拡大時の不具合を検証・修正。",
            },
            {
              stars: 4,
              title: "★2から★4へ変更しました！",
              meta: "Google Play (日本)  |  v1.8.4",
              body: "個性的な世界観で好みですがヒントを見ても閃かず詰んでしまいました。ヒントだけでなく答えも欲しいです。【追記】★2から★4へ変更しました。考えまくって何とかクリアできました！次回作お待ちしてます。その際はヒントだけでなく答えもお願いします。",
              reply: "迅速な返信とサポートにより評価を★2→★4へ引き上げていただいた事例。この声を機に「最終的な答えまで見られる段階的ヒント」を実装。",
            },
            {
              stars: 5,
              title: "게임이 귀엽네요（ゲームが可愛いですね）",
              meta: "App Store (韓国)  |  v3.4.12",
              body: "짧지만 도트 그래픽이 귀엽고 쉽고 재밌습니다. 다만 back 버튼이 잘 안먹혀서 게임 껐다 다시 실행하기를 반복했어요.",
              reply: "英語・韓国語・中国語のレビューにもすべて個別返信。ご指摘いただいた戻るボタンの判定領域と挙動を調査し、アップデートで改善。",
            },
            {
              stars: 5,
              title: "丁寧で素早い対応のおかげで無事クリア",
              meta: "Google Play (日本)  |  v1.8.1",
              body: "丁寧で素早い対応のおかげで無事クリアできました！本当にありがとうございました。また、次回作がよりレベルアップして更新されるのを楽しみにお待ちしております。スライドパズルが苦手なので広告を見るとスキップとかにして欲しかったなぁ…",
              reply: "更新時の広告読み込み不具合の回避策を即座にご案内してクリアをサポート。ご要望の「パズルスキップ機能」も本実装へ反映。",
            },
          ],
        },
        {
          type: "cards",
          label: "ENGINEERING & OPERATION",
          title: "実装の裏側とグローバル運用体制",
          items: [
            {
              title: "データ駆動化（CSV一括管理）によるUI改善の高速化",
              body: "ヒントの分岐条件や5ヶ国語の翻訳データをCSVで一括管理するデータ駆動設計へC#基盤を刷新。レビューで指摘を受けた際にも、コード本体に手を入れず迅速にヒントテキストや誘導を調整できる体制を構築しました。",
            },
            {
              title: "セーブ基盤の最適化と機種依存バグの解消",
              body: "初期に発生した技術的課題に対し、Graphics APIの見直しやセーブシステムの抜本的なリファクタリングをC#で実施し、アプリの安定性を大幅に引き上げました。",
            },
            {
              title: "5ヶ国語でのユーザーサポートと継続的カイゼン",
              body: "日本国内だけでなく、韓国・北米・中国・台湾など世界中のプレイヤーから寄せられるレビューに対し、各言語で1件ずつ丁寧に返信。生の声からUIの摩擦やバグを吸い上げ、継続的にアップデートへ反映するプロダクト運用を一気通貫で完遂しています。",
            },
          ],
        },
      ],
    },

   /* ================= 第3章 ================= */
    {
      id: "chapter-3",
      number: "03",
      eyebrow: "CHAPTER 03 — IN-HOUSE PRODUCTION",
      title: "インハウスでのスピード制作\n（LP・プロモーションバナー）",
      sitemapNote: "IN-HOUSE PRODUCTION",
      // ★TOPの動くギャラリー＆Chapter 3冒頭用のインフォグラフィックKV（SVGデータ埋め込み）
    // ★サイトのトンマナ（白・水色グラデ・中抜きAnton数字・シアンの細線）に完全統一したシンプル図解KV
heroImage: {
  src: `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="100%" height="100%"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#e0f2fe"/><stop offset="60%" stop-color="#f0f9ff"/><stop offset="100%" stop-color="#ffffff"/></linearGradient><filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#00668a" flood-opacity="0.05"/></filter></defs><rect width="1200" height="630" fill="url(#bg)"/><circle cx="1060" cy="100" r="300" fill="none" stroke="rgba(56,189,248,0.12)" stroke-width="1"/><circle cx="140" cy="500" r="240" fill="none" stroke="rgba(125,211,252,0.15)" stroke-width="1"/><g stroke="rgba(56,189,248,0.15)" stroke-width="1" stroke-dasharray="4 4"><line x1="80" y1="90" x2="1120" y2="90"/><line x1="80" y1="540" x2="1120" y2="540"/><line x1="600" y1="90" x2="600" y2="540"/></g><text x="80" y="70" font-family="Inter, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#00668a" letter-spacing="3.5">CHAPTER 03 — SPEED PRODUCTION &amp; AI WORKFLOW</text><g transform="translate(80,120)" filter="url(#cardShadow)"><rect width="480" height="390" rx="20" fill="rgba(255,255,255,0.9)" stroke="rgba(56,189,248,0.35)" stroke-width="1.2"/><text x="40" y="55" font-family="Inter, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#00668a" letter-spacing="2">01 / LP DESIGN</text><g transform="translate(40,110)" fill="none" stroke="#38bdf8" stroke-width="1.2"><rect width="400" height="210" rx="8" stroke="rgba(56,189,248,0.2)" stroke-dasharray="3 3"/><rect x="20" y="20" width="360" height="32" rx="4" fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.3)"/><line x1="20" y1="85" x2="230" y2="85" stroke="#00668a" stroke-width="2.5" stroke-linecap="round"/><line x1="20" y1="105" x2="180" y2="105" stroke="rgba(56,189,248,0.4)" stroke-linecap="round"/><line x1="20" y1="125" x2="210" y2="125" stroke="rgba(56,189,248,0.4)" stroke-linecap="round"/><rect x="260" y="75" width="120" height="105" rx="6" fill="rgba(56,189,248,0.04)" stroke="rgba(0,102,138,0.3)"/><path d="M 280 145 L 305 115 L 325 130 L 345 105 L 370 155" stroke="#00668a" stroke-width="1.5" stroke-linejoin="round"/></g></g><g transform="translate(640,120)" filter="url(#cardShadow)"><rect width="480" height="390" rx="20" fill="rgba(255,255,255,0.9)" stroke="rgba(56,189,248,0.35)" stroke-width="1.2"/><text x="40" y="55" font-family="Inter, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#00668a" letter-spacing="2">02 / AI BANNER</text><g transform="translate(40,110)"><rect width="230" height="95" rx="8" fill="rgba(56,189,248,0.03)" stroke="#00668a" stroke-width="1.2"/><rect x="14" y="14" width="202" height="67" rx="4" fill="none" stroke="rgba(56,189,248,0.3)" stroke-dasharray="2 2"/><text x="115" y="53" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#00668a" letter-spacing="1">16 : 9</text><g transform="translate(250, 0)"><rect width="150" height="95" rx="8" fill="rgba(56,189,248,0.03)" stroke="#38bdf8" stroke-width="1.2"/><rect x="12" y="14" width="126" height="67" rx="4" fill="none" stroke="rgba(56,189,248,0.3)" stroke-dasharray="2 2"/><text x="75" y="53" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#00668a" letter-spacing="1">4 : 3</text></g><g transform="translate(0, 110)"><rect width="400" height="85" rx="8" fill="rgba(56,189,248,0.04)" stroke="rgba(0,102,138,0.4)" stroke-width="1.2"/><rect x="16" y="14" width="368" height="57" rx="4" fill="none" stroke="rgba(56,189,248,0.3)" stroke-dasharray="2 2"/><text x="200" y="49" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="#00668a" letter-spacing="1.5">WIDESPREAD BANNER (2 : 1)</text></g></g></g></svg>')}`,
  alt: "インハウスでのスピード制作（LP・プロモーションバナー）",
},
      blocks: [
        /* ---------- 1. スピード制作の実績ハイライト ---------- */
        {
          type: "stats",
          id: "ch3-stats",
          items: [
            { value: "1", unit: "DAY", label: "自社CMS採用パッケージLP ビジュアルデザイン（7:00〜16:00で完遂）" },
            { value: "2", unit: "DAYS", label: "BtoBメーカー様 新規DXサービスLP ワイヤーフレーム＆デザイン" },
            { value: "< 0.5", unit: "DAY", label: "AI活用ワークフローによるウェビナー集客バナー制作（1件あたり）" },
            { value: "6+", unit: "THEMES", label: "SEO・GA4・AI対策など多様なBtoBテーマのバナーを継続制作" },
          ],
        },

        /* ---------- 2. 超短納期Webページ・LP制作（2事例） ---------- */
        {
          type: "lpCases",
          id: "ch3-campaign-pages",
          label: "CAMPAIGN & LP DESIGN",
          title: "超短納期Webページ・LP制作",
          intro:
            "赤・黄色・黒・白の派手なカラーを活かすため、白・グレー基調に赤・黄をアクセントとして配置しました。特徴的な黄色の矢印で遊び心と視線誘導を出しつつ、セクションを明確に打ち出しています。",
          items: [
            {
              number: "01",
              badge: "制作期間：2人日",
              title: "BtoB向け 金属・部品メーカー様 DXサービス紹介LP",
              role: "ワイヤーフレーム作成、ビジュアルデザイン（※要件定義は別担当）",
              body: "図面不要で即時見積り・発注が可能な新規DXサービスのプロモーション用LP。サービスのメリット（機会損失の防止、手間の削減など）を直感的に伝える情報設計を実施しました。",
              confidential: true,
              note: "【※閲覧に関する注記】本件はクライアント企業様の規約上、実例の一般公開を行っておりません。サイト上ではブラー（ぼかし）処理を施したサムネイルのみを掲載しています。詳細なデザインや制作背景につきましては、面接等のクローズドな場に限り、直接ご共有させていただきます。",
              // ★後からLPのスクショ画像を置き、srcのファイル名を合わせるだけでブラー付きで表示されます
              images: [
                {
                  src: "assets/images/ch3/lp_btob_dx_01.png",
                  caption: "DXサービス紹介LP（全体構成・ファーストビュー）",
                  blur: true, // ←自動でブラー（ぼかし）＋拡大禁止になります
                },
                {
                  src: "assets/images/ch3/lp_btob_dx_02.png",
                  caption: "課題とメリットの対比セクション",
                  blur: true,
                },
              ],
            },
            {
              number: "02",
              badge: "制作期間：約1営業日（7:00〜16:00完遂）",
              title: "自社CMS「LENSAhub」 採用サイトパッケージLP",
              role: "ビジュアルデザイン（※コーディングは別担当）",
              body: "CMSの制約内で使用可能なブロックや仕様を把握し、色だけでなくセパレーターを活用してシンプルになりすぎないWebデザインを再現しました。",
              // ★後からLPのスクショ画像を置き、srcのファイル名を合わせるだけで表示されます
              images: [
                {
                  src: "assets/images/ch3/lp_lensahub_recruit_01.png",
                  caption: "LENSAhub 採用サイトパッケージLP（ファーストビュー）",
                },
                {
                  src: "assets/images/ch3/lp_lensahub_recruit_02.png",
                  caption: "採用課題セクション",
                },
              ],
            },
          ],
        },

        /* ---------- 3. バナー制作におけるアプローチとAI活用プロセス ---------- */
        {
          type: "processVisuals",
          id: "ch3-banner-workflow",
          label: "BANNER DESIGN & AI WORKFLOW",
          title: "バナー制作におけるアプローチとAI活用プロセス",
          intro:
            "自社開催ウェビナー（マーケティング、AI・SEO対策、GA4分析など）の集客用バナーを継続的に制作。依頼者の「要望の裏にある真の意図」を汲み取り、素早い初稿のアウトプットで迅速に合意形成を行うことを重視しています。",
          items: [
            {
              number: "01",
              kind: "flow",
              title: "「0.5人日弱」で完遂する超短納期AIワークフロー",
              summary:
                "セミナーの概要理解やペルソナ把握、キーワードからのトンマナ選定にAIを積極活用し、ヒアリングからシニア確認までを半日弱で回し切るフローを確立しています。",
              steps: [
                { step: "01", name: "ヒアリング", detail: "依頼の裏にある「真の意図」と訴求軸を抽出" },
                { step: "02", name: "AI要件・トンマナ整理", detail: "AIで概要理解・ペルソナ把握・配色/モチーフ選定" },
                { step: "03", name: "高速デザイン制作", detail: "長方形・正方形の2サイズ展開を素早く初稿化" },
                { step: "04", name: "レビュー＆完遂", detail: "シニアデザイナー確認・ブラッシュアップし納品" },
              ],
              outcome: "一連の工程を「0.5人日弱」で完遂し、素早い初稿提示によるスムーズな合意形成を実現",
            },
          ],
        },

        /* ---------- 4. ウェビナーバナー制作実績ギャラリー（全6タイトル・12枚） ---------- */
        {
          type: "bannerGallery",
          id: "ch3-banners",
          label: "BANNER ARCHIVE",
          title: "ウェビナー集客バナー制作一覧（長方形・正方形 2サイズ展開）",
          intro: "テーマの専門性（構造化データ・GA4・AI対策・採用歩留まり改善など）に合わせ、ターゲット層の目を引くタイポグラフィと配色でデザインしています。",
          copyright: "※掲載しているすべてのバナー画像の著作権は、株式会社インフォネットに帰属します。",
          items: [
            {
              date: "2025.09.09",
              title: "他社と差がつく“構造化データ”活用術",
              rectImg: "assets/images/banners/250909-seminar-banner.png",
              sqImg: "assets/images/banners/img_seminar_250909.png",
            },
            {
              date: "2025.10.14",
              title: "GA4で成果を出すための最初の第一歩",
              rectImg: "assets/images/banners/251014-seminar-banner.png",
              sqImg: "assets/images/banners/seminar_251014.png",
            },
            {
              date: "2026.01.22",
              title: "SNSや動画コンテンツを活用した顧客接点の増やし方！",
              rectImg: "assets/images/banners/260122-seminar-banner.png",
              sqImg: "assets/images/banners/seminar_260122.png",
            },
            {
              date: "2026.03.24",
              title: "今知りたい“キーイベント”の見方とAI新機能",
              rectImg: "assets/images/banners/260324-seminar-banner.png",
              sqImg: "assets/images/banners/seminar_260324.png",
            },
            {
              date: "2026.04.09",
              title: "今年度のWeb戦略は？ AI対策とサイトリニューアル",
              rectImg: "assets/images/banners/260409-seminar-banner.png",
              sqImg: "assets/images/banners/seminar_260409.png",
            },
            {
              date: "2026.04.22",
              title: "noteと採用サイトで歩留まりを改善",
              rectImg: "assets/images/banners/260422_2-seminar-banner.png",
              sqImg: "assets/images/banners/seminar_260422_2.png",
            },
          ],
        },
      ],
    },

   /* ================= 第4章 ================= */
    {
      id: "chapter-4",
      number: "04",
      eyebrow: "CHAPTER 04 — GRAPHIC & VISUAL DESIGN",
      title: "グラフィック・基礎造形",
      sitemapNote: "SCHOOL WORK",
      placeholder: false,
      heroImage: {
        src: "assets/images/ch4/interaction_kv.png",
        alt: "仮想展示会 interaction展 空間・ビジュアル展開",
        sourceLabel: "武蔵野美術大学 基礎デザイン学科 授業課題作品",
      },

      blocks: [
        {
          type: "cases",
          id: "ch4-cases",
          label: "SCHOOL WORK",
          title: "グラフィックデザインの事例",
          items: [
            /* --- 事例1：interaction展（PDF p.5〜12） --- */
            {
              id: "case-vi",
              number: "01",
              status: "published",
              theme: "VISUAL IDENTITY",
              compareHint: "CONCEPT & MEDIA EXPANSION  |  ↔ SCROLL",
              title: "仮想展示会「interaction展」",
              subtitle: "一貫した視覚表現への展開と媒体最適化（制作期間：1ヶ月 / Ai, Ps）",
              stages: [
                {
                  kind: "before",
                  badgeText: "CONCEPT & MOTIF",
                  label: "コンセプト",
                  heading: "双方向のコミュニケーションを視覚化",
                  pointsLabel: "テーマとモチーフの抽出",
                  points: [
                    {
                      title: "テーマ「インタラクション」",
                      body: "デザインは双方向のコミュニケーションであるという考えから、「影響するってわくわく」を副題に設定しました。",
                    },
                    {
                      title: "顔と飛沫のモチーフ",
                      body: "自身の顔を客観的に観察し、特徴的な「目つき」と「髪の生え際」を強調。影響を受けやすい象徴として「水飛沫」を構成要素に取り入れました。",
                    },
                  ],
                  imagesLabel: "メインビジュアル・ルール設計",
                  images: [
                    {
                      src: "assets/images/ch4/vi_01_overview.png",
                      caption: "作品概要・メインビジュアル",
                    },
                    {
                      src: "assets/images/ch4/vi_02_concept_poster.png",
                      caption: "コンセプトとメインポスター",
                    },
                    {
                      src: "assets/images/ch4/vi_03_priority_rule.png",
                      caption: "構成要素の優先度設定と文字組み",
                    },
                  ],
                },
                {
                  kind: "approach",
                  label: "APPROACH / アプローチ",
                  heading: "要素の優先順位づけとルール化",
                  pointsLabel: "ビジュアル展開のルール",
                  points: [
                    {
                      title: "要素の抽出と優先度設定",
                      body: "メインビジュアルの単なる焼き増しを防ぐため、「オレンジの四角・線画・しぶき」を必須要素とし、陰影や色の加工をオプションとしてルール化しました。",
                    },
                    {
                      title: "媒体ごとの最適化",
                      body: "エントランスの誘導サイン、持ち帰るパンフレット、遠くから見るバナーなど、用途に合わせてデザインを調整しつつ全体の統一感を保持しました。",
                    },
                  ],
                },
                {
                  kind: "after",
                  badgeText: "MEDIA EXPANSION",
                  label: "展開例",
                  heading: "空間から印刷物までのトータルデザイン",
                  pointsLabel: "主な制作物",
                  points: [
                    {
                      title: "空間デザイン・サイン",
                      body: "エントランスの壁面を利用した視線誘導や、しぶきの方向性を活かした足元のサインで、展示空間全体をデザインしました。",
                    },
                    {
                      title: "パンフレット（クリアファイル）",
                      body: "ポスターの多層性を想起させる透明素材を使用。裏面のしぶきが作品の場所を示すフロアマップとして機能します。",
                    },
                  ],
                  imagesLabel: "各媒体への展開",
                  images: [
                    {
                      src: "assets/images/ch4/vi_04_flyer.png",
                      caption: "フライヤー表裏",
                    },
                    {
                      src: "assets/images/ch4/vi_05_entrance.png",
                      caption: "エントランス空間・足元サイン",
                    },
                    {
                      src: "assets/images/ch4/vi_06_display_plan.png",
                      caption: "1F 展示計画・動線設計",
                    },
                    {
                      src: "assets/images/ch4/vi_07_pamphlet.png",
                      caption: "透明クリアファイル型パンフレット",
                    },
                    {
                      src: "assets/images/ch4/vi_08_banner.png",
                      caption: "2本1セットの屋外バナー（p.12）",
                    },
                  ],
                },
              ],
            },

            /* --- 事例2：countershading（PDF p.28〜30 全3枚・通常コンテンツ幅） --- */
            {
              id: "case-poster",
              number: "02",
              status: "published",
              fullbleed: false, // ★通常のコンテンツエリア幅（.container内）に収める
              theme: "POSTER",
              title: "ポスター「countershading」",
              subtitle: "生態系のメカニズムをグラフィックに翻訳（制作期間：2ヶ月 / Ai, Ps）",
              stages: [
                {
                  kind: "before",
                  badgeText: "CONCEPT & RESEARCH",
                  label: "コンセプト",
                  heading: "「mimicry（擬態）」の視覚的探求",
                  pointsLabel: "テーマの選定",
                  points: [
                    {
                      title: "カウンターシェーディング",
                      body: "全体のテーマ「擬態」に対し、光が当たる背中が暗色、影になる腹部が明色となる動物の習性「カウンターシェーディング」に着目しました。",
                    },
                    {
                      title: "ホタルイカを題材に",
                      body: "イカの生態を深掘りし、そのメカニズムと視覚的な面白さを2枚組のポスターで表現することを目指しました。",
                    },
                  ],
                  imagesLabel: "導入・プレゼンテーションポスター",
                  images: [
                    {
                      src: "assets/images/ch4/poster_01_intro.png",
                      caption: "1枚目：テーマ導入）",
                    },
                    {
                      src: "assets/images/ch4/poster_02_presentation.png",
                      caption: "2枚目：プレゼンテーションポスター",
                    },
                  ],
                },
                {
                  kind: "approach",
                  label: "PRESENTATION / プレゼンテーション",
                  heading: "仕組みの図解と情報の構造化",
                  pointsLabel: "プレゼンテーションポスター",
                  points: [
                    {
                      title: "生態のグラフィック化",
                      body: "カウンターシェーディングの仕組みを論理的に整理し、黄土色の球を用いてそれぞれの生き物の模様や特徴と対応させながら情報を構造化しました。",
                    },
                  ],
                },
                {
                  kind: "after",
                  badgeText: "MAIN POSTER",
                  label: "メインポスター",
                  heading: "現象の疑似体験",
                  pointsLabel: "メインポスターの表現",
                  points: [
                    {
                      title: "空と海のメタファー",
                      body: "「実際の現象はどう見えるのか」を想像し、空を海に見立てて雲の模様に紛れるホタルイカをグラフィックに落とし込みました。",
                    },
                  ],
                  imagesLabel: "メインポスター",
                  images: [
                    {
                      src: "assets/images/ch4/poster_03_main.png",
                      caption: "3枚目：メインポスター（空を海に見立てた擬態表現 / p.30）",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
