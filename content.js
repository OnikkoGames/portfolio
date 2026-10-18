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

  /* ---------- ナビゲーション（id は各セクションの id と一致させる） ---------- */
  nav: [
    { id: "profile", label: "Profile" },
    { id: "skills", label: "Skills" },
    { id: "chapter-1", label: "Chapter 01" },
    { id: "chapter-2", label: "Chapter 02" },
  ],

  /* ---------- HERO ---------- */
hero: {
    eyebrow: "PORTFOLIO 2026",
    nameLine1: "KAORUKO",
    nameLine2: "KITO",
    nameJa: "鬼頭 薫子",
    role: "UI/UX Designer",
    lead:
      "ユーザーの課題定義からUI/UX・ビジュアル設計、そしてAIを駆使した実装・プロトタイピングまで。デザインを絵で終わらせず、構造を理解したアプローチで開発プロセスを最適化し、プロダクトの価値を最速で形にします。",
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
        "美大で培ったグラフィックや基礎デザインの知見をベースに、UI/UXデザイナーとして活動しています。画面設計やビジュアル表現にとどまらず、ClaudeなどのAIツールを駆使したプロトタイピングやフロントエンド実装まで、領域を限定せず形にすることを得意としています。",
        "本業のかたわら、個人開発「OnikkoGames」としてインディーゲームの企画からリリース・運用までを一人で手掛けているほか、プライベートでは俳優として舞台に立ち、演劇やアクロバットなどの身体表現も続けています。デジタルなプロダクトから生身の舞台まで、ジャンルを越えて「つくること・表現すること」そのものを楽しんでいます。",
      ],
  
    },

    background: {
      label: "BACKGROUND",
      title: "略歴・学歴",
      items: [
        {
          meta: "EDUCATION",
          title: "武蔵野美術大学 基礎デザイン学科 卒業",
          body: "卒業制作 学科賞受賞",
        },
        {
          meta: "STUDY ABROAD",
          title: "ドイツ・KISD（Köln International School of Design）",
          body: "1年間のデザイン留学、およびイギリスでの語学留学を経験。",
        },
        {
          meta: "2025.04 — NOW",
          title: "都内IT企業　インハウス UI/UXデザイナー",
          body: "現在は新規CMS開発プロジェクトにおけるUI/UX責任者兼フロントエンドエンジニアとして、Figmaでの画面設計からTypeScript実装までを一気通貫で牽引しています。",
        },
        {
          meta: "2025.05 — NOW",
          title: "個人開発（OnikkoGames）",
          body: "インディーゲーム『1room Escape: Desert Shelter』などを企画・開発し、iOS/Android両OSにて5ヶ国語対応でグローバルリリースしています。",
        },
      ],
    },

   skills: {
      id: "skills",
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
tools: {
      label: "TOOLS / TECH",
      title: "使用ツール・技術",
      groups: [
        {
          name: "UI/UX & Graphic Design",
          items: [
            "Figma",
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
          title: "ライフワークとしてのゲーム開発",
          // 63文字
          body: "個人開発で企画から実装、リリース後のサポートまで一気通貫で完遂。プロダクトを世に出し運用する全タスクを実地で乗り越えています。",
        },
        {
          title: "演劇・演技経験とデザインへの応用",
          // 64文字
          body: "世代を超え協働する演劇で対話の姿勢を磨き、役作りでの人間観察や非言語表現の探求を、UI/UXの問題提起と課題解決に活かしています。",
        },
        {
          title: "自律的なワークスタイル",
          // 64文字
          body: "フレックス等を活用した自律的な働き方を重視。本業・ゲーム開発・舞台表現の3軸で相乗効果を生み、継続的な価値提供を目指しています。",
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
      title: "BtoB向け新規CMSの\nUI/UX改善・デザインシステム構築",
      blocks: [
        {
          type: "table",
          label: "OVERVIEW",
          title: "プロジェクト概要",
          rows: [
            ["対象プロダクト", "BtoB向け自社新規CMS"],
            ["役割", "UI/UX責任者 兼 フロントエンド開発（チーム内唯一のデザイナー）"],
            ["担当範囲", "課題抽出、要件定義、UI/UX設計、デザインシステム構築、フロントエンド実装・リファクタリング"],
            ["使用技術・ツール", "Figma, HTML/CSS, TypeScript, Git (Sourcetree), VS Code, Claude Code 等"],
          ],
        },
{
  type: "cards",
  label: "CHALLENGES",
  title: "課題と背景",
  intro:
    "参画当初は「今年度中にUI/UXを改善できたらいい」という曖昧な要件のみでプロジェクトがスタート。専任者も以前から不在だったため、表層のデザイン崩れだけでなく以下の3つの構造的課題を定義して改善を進めていきました。",
  items: [
    {
      title: "「完成図」と「接着ルール」の不在",
      body: "最小単位の部品はあっても、全体をどう配置するかや要素間の組み合わせルールがないため、実装者ごとの独自解釈で画面を跨いだ際のプロダクトのUI一貫性が破綻していました。",
    },
    {
      title: "ルール違反を防ぐ「技術的・仕組み的なガバナンス」の欠如",
      body: "独自スタイルやカラーコードのハードコーディングをシステム的に弾く仕組みがなく、属人的な目視レビューに依存しているため、スピード優先の現場でルールが容易に形骸化していました。",
    },
    {
      title: "「デザイナー不在」に耐えうる運用フローの未構築",
      body: "Figmaや人間の記憶に依存したUI管理には限界があり、人間が細かくチェックし続けなくても品質を維持できる自律的な仕組みが不足していました。",
    },
  ],
},
        {
          type: "approach",
          label: "APPROACH & PROCESS",
          title: "アプローチと推進プロセス",
          items: [
           {
  title: "開発組織を動かす「起票フォーマット」の発案",
  body: "部門を超えて建設的な議論と素早い意思決定を行うため、課題起票のテンプレートを拡充しました。単なる修正依頼ではなく「現状・課題・ゴール・対応策」の4点を言語化して提示するフォーマットを発案・運用することで、エンジニアの判断スピードを向上させ、最初のメジャーアップデートへUI改善を組み込む合意形成を推進しました。",
  note: `情報の4点セットを用意して起票することで、エンジニア側の判断が早くなっている印象を受けました。具体的なフォーマットの例は以下の通りです。

■ 現状（現在の挙動）
・例：余白設定のデフォルト値が「px」になっている
■ 課題（ユーザーの困りごと）
・例：作業者がスマホ対応を忘れ、スマホ画面で余白が異常に空く表示崩れが多発している
■ ゴール（期待する状態）
・例：作業者が単位を意識せずとも、スムーズにスマホ対応（レスポンシブ）のレイアウトが組めること
■ 対応策（方法の提案）
・例：余白設定のデフォルト数値を「px」から「%」に変更する

なお、この4点を揃えて言語化するには起票者自身の問題提起能力にも依存するため、部署内外へさらに浸透させるにはテンプレート作成だけでなく、継続的な働きかけが必要であることも学びとなりました。`
},
            {
              title: "リリースサイクルに合わせた段階的なUI統制",
              body: "一度にすべてをルール化するのではなく、バージョンアップに合わせて「点から面へ」段階的に統制を拡大しました。",
              timeline: [
                { tag: "v2.4.0", kind: "点の改善", body: "新機能のUI監視・精査、新規アイコン制作、モーダル内ボタン分岐ルールの策定により信頼を獲得" },
                { tag: "v2.5.0", kind: "線の改善", body: "一覧系画面の検索ボックスや、CSVダウンロード等のアクションボタンの並び順・配色パターンを統一" },
                { tag: "v2.6.0", kind: "面の改善", body: "全体の名称揺れやメニュー構造の整理、設定パネルの並び順策定、検索機能周辺のコンポーネント化を完遂" },
              ],
            },
            {
              title: "AI実装を前提とした「Markdownデザインシステム」の構築",
              body: "エンジニアがAIで実装した際に、細かい指示なしで「90点のUI」が自動で出力される状態を目指し、ルールの整備とリファクタリングを推進しています。",
              bullets: [
                { title: "ルールのMarkdown化", body: "再定義したUIルールやコンポーネント仕様をFigmaに閉じ込めずMarkdown（.md）化し、Claude Code等が実装時に参照するテキストとして格納することで独自のハードコーディングを防止" },
                { title: "コンテキスト圧迫の回避", body: "全ルールの一括読み込みを避けるため、まずAIに目次（インデックス）をチェックさせて該当機能のルールのみを参照させる設計とし、トークン消費の抑制とルール遵守を両立" },
                { title: "適用範囲の明確化", body: "「一覧系・検索機能・モーダルボタン」は自動化対象とし、「ダッシュボード・ページ編集画面」等の複雑な例外機能はデザイナーへ相談する境界線を定義" },
              ],
            },
          ],
        },

        {
          type: "cases",
          label: "CASE STUDIES",
          title: "画面別UI/UX改善の具体例",
          items: [
            /* ---------- Case 1 ---------- */
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
                  heading: "分断された入力体験と見えないゴール",
                  pointsLabel: "課題の背景と分析",
                  points: [
                    { title: "遷移過多によるUXの低下", body: "挨拶・入力・完了案内が分断されており、ユーザーが実際に操作できる状態になるまでに「4回の画面遷移」が必要でした。" },
                    { title: "作業フローの不透明さ", body: "画面ごとのタイトルや案内が統一されておらず、「今どの段階か」「あと何ステップ残っているか」が視覚的に分からず、ユーザーが不安を抱きやすい状態でした。" },
                    { title: "完了後の導線不足", body: "初期設定完了後の案内が不明確（暫定的にアカウント設定へ遷移していた等）で、次に何をすべきか迷う要因になっていました。" },
                  ],
                  imagesLabel: "Before画面・配置イメージ",
                  images: [
                    { src: "assets/images/case1/before_01_welcome.png", caption: "Before① Welcome画面（開始するボタンのみ）" },
                    { src: "assets/images/case1/before_02_site_settings.png", caption: "Before② 別画面のサイト初期設定" },
                    { src: "assets/images/case1/before_03_template.png", caption: "Before③ テンプレート選択（ステップ表示なし）" },
                    { dummy: true, caption: "Before④ 完了画面", desc: "会社の規約上実画面が存在しないため、ダミー領域として配置" },
                  ],
                },
                {
                  kind: "approach",
                  label: "アプローチ",
                  heading: "認知負荷の低減と、フローの全体像の可視化",
                  pointsLabel: "改善方針",
                  points: [
                    { title: "フローの集約と遷移の削減（4回→2回）", body: "挨拶用モーダルと初期入力画面を統合し、ユーザーが複数のモーダルを順に閉じる手間や、重複する説明を排除する設計へ変更しました。" },
                    { title: "「全体像→現在地→残り」の明示", body: "STEPインジケーターを新たに導入し、作業フロー全体を可視化しました。あわせて各画面のタイトル表現を統一し、同じ作業フローの中にいることを分かりやすくしています。" },
                    { title: "心理的ハードルの払拭とフィードバックの強化", body: "入力時の不安を取り除くため「後から変更可能」な旨を明記しました。また、設定完了時にはモーダルを用いて明確にフィードバックを行い、次のアクション（ダッシュボード上の基本設定）へスムーズに誘導します。" },
                  ],
                },
                {
                  kind: "after",
                  label: "解決策と実装結果",
                  heading: "2ステップで完了する、スムーズなオンボーディング体験",
                  pointsLabel: "改善結果とデザインのポイント",
                  points: [
                    { title: "1画面への統合と画面遷移の半減", body: "ウェルカム画面と初期設定（STEP01）を1画面に統合しました。操作開始までのハードルを下げ、ユーザーがより早く本来の操作画面へ到達できる構成へ刷新しています。" },
                    { title: "STEPインジケーターの実装とレイアウト整理", body: "左カラムに全体像（STEP01/02）、右上に進捗を配置しました。タイトルとインジケーターの距離感やバランスを調整し、現在位置を常に把握できる安心感を提供しています。" },
                    { title: "完了状態の明示とシームレスな接続", body: "初期設定完了後、ダッシュボードの基本設定上に完了モーダルを表示し、設定が終わったことと次に確認すべき場所を明確化しました。また、モーダルにすることで実際のプロダクト画面ではない画面の表示回数を減らし、「待たされている」「手間である」という印象を払拭しました。" },
                  ],
                  imagesLabel: "After画面・配置イメージ",
                  images: [
                    { src: "assets/images/case1/after_01_welcome_step1.png", caption: "After① ウェルカム＋STEP01を1画面に統合" },
                    { src: "assets/images/case1/after_02_template_step2.png", caption: "After② STEP02 デザインを選ぶ（進捗表示付き）" },
                    { dummy: true, caption: "After③ 完了メッセージモーダル", desc: "会社の規約上実画面が存在しないため、ダミー領域として配置" },
                  ],
                },
              ],
            },

            /* ---------- Case 2（原稿準備中：後から追記） ---------- */
            {
              id: "case-2",
              number: "02",
              status: "coming-soon", // ← 原稿が揃ったら "published" に変更
              theme: "",
              title: "準備中", // ← 公開時に実際のタイトルへ変更
              subtitle: "",
              comingSoonText: "このケーススタディは現在準備中です。",
              stages: [
                {
                  kind: "before",
                  label: "課題",
                  heading: "（見出しを入力）",
                  pointsLabel: "課題の背景と分析",
                  points: [
                    { title: "（課題項目1）", body: "（詳細テキストを入力）" },
                    { title: "（課題項目2）", body: "（詳細テキストを入力）" },
                    { title: "（課題項目3）", body: "（詳細テキストを入力）" },
                  ],
                  imagesLabel: "Before画面・配置イメージ",
                  images: [
                    { dummy: true, caption: "Before①", desc: "（画面の説明を入力 / src に画像パスを指定すると差し替わります）" },
                    { dummy: true, caption: "Before②", desc: "（画面の説明を入力）" },
                  ],
                },
                {
                  kind: "approach",
                  label: "アプローチ",
                  heading: "（見出しを入力）",
                  pointsLabel: "改善方針",
                  points: [
                    { title: "（方針項目1）", body: "（詳細テキストを入力）" },
                    { title: "（方針項目2）", body: "（詳細テキストを入力）" },
                    { title: "（方針項目3）", body: "（詳細テキストを入力）" },
                  ],
                },
                {
                  kind: "after",
                  label: "解決策と実装結果",
                  heading: "（見出しを入力）",
                  pointsLabel: "改善結果とデザインのポイント",
                  points: [
                    { title: "（成果項目1）", body: "（詳細テキストを入力）" },
                    { title: "（成果項目2）", body: "（詳細テキストを入力）" },
                    { title: "（成果項目3）", body: "（詳細テキストを入力）" },
                  ],
                  imagesLabel: "After画面・配置イメージ",
                  images: [
                    { dummy: true, caption: "After①", desc: "（画面の説明を入力）" },
                    { dummy: true, caption: "After②", desc: "（画面の説明を入力）" },
                  ],
                },
              ],
            },

            /* ---------- Case 3 ---------- */
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
                  heading: "認知限界を超えたアイコンの羅列と、誤操作・機能誤認のリスク",
                  pointsLabel: "課題の背景と分析",
                  points: [
                    { title: "情報量の過剰と一覧性の阻害", body: "1行につき10〜14個の操作アイコンが横一列に並び、人が直感的に把握できる目安（4〜7個）を大幅に超過していました。さらに、行ホバー時にアイコンが「公開日・更新日」のデータ列に重なって表示され、情報を隠してしまっていました。" },
                    { title: "メタファーの重複・不統一による機能誤認", body: "他機能で「公開・非公開（表示・非表示）」を意味する「目のアイコン」がページ一覧では「プレビュー」に使われており（かつ編集画面のプレビューともアイコンが異なる）、画面間での一貫性が欠如していました。また、「ページ所有権」も別機能の「アカウント管理」と酷似しており、機能を誤認しやすい状態でした。" },
                    { title: "誤操作を誘発する危険な配置", body: "最も使う「編集」と、取り消しが難しい「削除」のアイコンが近接しており、誤クリックのリスクが高い状態でした。また、類似操作が離れた位置にあり、視線移動の負担も大きくなっていました。" },
                  ],
                  imagesLabel: "Before画面・配置イメージ",
                  images: [
                    { src: "assets/images/case3/before_01_page_list.png", caption: "Before① ページ一覧（全体画面）", desc: "一覧画面全体の引きのキャプチャです。各行の右側に無数のアイコンが並び、画面全体が煩雑に見えている状態を示します。" },
                    { src: "assets/images/case3/before_02_row_hover_icons.png", caption: "Before② 行ホバー時の操作アイコン表示", desc: "行にマウスを載せた際、10個以上のアイコンが「公開日」「更新日」のテキスト上にオーバーレイ（重なって）表示され、データ列を隠してしまっている課題をクローズアップした画像です。" },
                    { src: "assets/images/case3/before_03_icons_14.png", caption: "Before③ 操作アイコンの羅列（マニュアル切り抜き）", desc: "操作アイコンが多すぎるため、操作マニュアル上で各アイコンに1〜14の通し番号を振って解説せざるを得なかった状況を示す資料画像です。" },
                  ],
                },
                {
                  kind: "approach",
                  label: "アプローチ",
                  heading: "利用実態と「拡張性」を考慮した優先度設計",
                  pointsLabel: "改善方針",
                  points: [
                    { title: "操作の3段階振り分けとデータ列への統合", body: "操作を「情報（列に統合）」「高頻度（常時表示アイコン）」「低頻度（文字ラベル付き『…』メニュー）」に再設計しました。なお「編集履歴」は当初削除候補でしたが、デザイナー層が頻繁に使うという業務実態をヒアリングで確認し、削除せず「更新日列の時計アイコン」として残す判断を行いました。" },
                    { title: "UI学習コストを考慮したボタン化の見送り", body: "主操作である「編集」の視認性を高めるためセカンダリーボタン化も検討されましたが、一覧画面内でのUI学習や既存の操作感の一貫性を損なうリスクを考慮し、あえてボタンスタイルは採用せずアイコンUIを維持する判断を下しました。その上で、「編集」と危険な操作である「削除」の物理的な距離を離し、誤クリックを防ぐレイアウトへと調整しています。" },
                    { title: "メタファーの統一と、低頻度機能のバルーンメニュー集約", body: "「公開・非公開」と混同しやすかった目のアイコンをやめ、プレビューは編集画面と揃えて「モニター画面」のアイコンに統一しました。また、分散していた権限関連機能や低頻度な操作は、アイコンの羅列をやめて「…」メニューから開く文字ラベル付きのバルーンメニューへ集約する方針としました。" },
                  ],
                },
                {
                  kind: "after",
                  label: "解決策と実装結果",
                  heading: "迷わず安全に操作でき、機能拡張にも強い一覧UIの実現",
                  pointsLabel: "改善結果とデザインのポイント",
                  points: [
                    { title: "常時表示アイコンの大幅削減とレイアウト固定", body: "常時表示を厳選した5個（プレビュー・編集・子ページ追加・コピー・削除）に絞り込み、操作列を固定化しました。データ列が隠れる問題を解消し、「更新日（履歴アイコン含む）」と「最終更新者（アバター付き）」を1列に統合して一覧性を高めています。" },
                    { title: "配置の最適化による誤操作リスクの低減と、メタファーの統一", body: "ユーザーの学習コストを考慮してアイコン形式を保ちつつ、「編集」と「削除」の距離を離すことで誤クリックを防止し、削除不可ページ（トップページ）はグレーアウトして状態を明示しました。さらに、プレビューをモニター画面のアイコンへ刷新し、「公開・非公開（目）」との混同を解消しています。" },
                    { title: "バルーンメニュー集約による拡張性と保守性の向上", body: "分散していた権限系や低頻度操作を「…」クリック時のバルーンメニューへ集約しました。文字ラベルで意図を明確に伝達可能にしただけでなく、今後の機能拡張時にも「新しいアイコンの作成・重複・整合性」を議論する必要がなくなり、持続的にメンテナンスしやすいUI構造へと進化させています。" },
                  ],
                  imagesLabel: "After画面・配置イメージ",
                  images: [
                    { src: "assets/images/case3/after_01_page_list.png", caption: "After① ページ一覧（改善後の全体画面）", desc: "一覧画面全体の引きのキャプチャです。右端に固定された操作列が整然と配置され、データ列（更新日・更新者など）と明確に分離されたことで全体の視認性と一覧性が大幅に向上した様子を示します。" },
                    { src: "assets/images/case3/after_02_fixed_column_menu.png", caption: "After② 固定操作列と「…」バルーンメニュー", desc: "常時表示アイコンの右端にある「…」をクリックした状態の画像です。文字ラベル（アカウント権限一覧、ページ所有者変更など）が付いたバルーンメニューが展開され、直感的な操作が担保されている様子を示します。" },
                    { src: "assets/images/case3/after_03_icons_menu.png", caption: "After③ 機能の3分類・振り分け図", desc: "「情報として列に統合したもの（公開リンク・時計アイコン）」「常時表示の5アイコン」「バルーンメニュー内に収めた機能」の切り分け構造をビジュアルで整理した解説用キャプチャです。" },
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
      title: "インディーゲームのUX大改修・\nグローバル展開",
      heroImage: { src: "assets/images/game/storepage.png", alt: "脱出ゲーム 1room 砂漠シェルターからの脱出 ストアページのメインビジュアル" },
      blocks: [
        {
          type: "stats",
          items: [
            { value: "7,685", unit: "DL", label: "累計ダウンロード数（※10月18日現在）" },
            { value: "×6", unit: "", label: "大規模アプデ後、約5ヶ月で1,289DLから成長" },
            { value: "5", unit: "LANG", label: "5ヶ国語対応でグローバルリリース" },
          ],
        },

        {
          type: "table",
          label: "OVERVIEW",
          title: "プロジェクト概要",
          rows: [
            ["対象プロダクト", "スマートフォン向けSF脱出ゲーム『脱出ゲーム~1room~ 砂漠シェルターからの脱出』"],
            ["役割 / 担当", "企画、ドット絵・UI/UXデザイン、C#実装、5ヶ国語ローカライズ（すべて単独で完遂）"],
            ["使用ツール", "Unity (C#), Figma, Illustrator, Photoshop, Git, Claude Code"],
            ["実績", "**累計 7,685 DL突破**（大規模アプデ後、約5ヶ月で1,289DLから約6倍に成長）"],
          ],
          // リンクは url を入れると表示されます（空のままなら非表示）
          links: [
            { label: "App Store", url: "" },
            { label: "Google Play", url: "" },
            { label: "開発ログ（note）", url: "" },
          ],
        },

        {
          type: "text",
          label: "CONCEPT & CHALLENGES",
          title: "コンセプトと課題",
          body: "先行リリースしていたAndroid版のユーザーデータを分析し、iOS版リリースに向けた大規模リメイクを実施しました。「ノスタルジックなドット絵の世界観への没入感」を最大化しつつ、脱出ゲーム特有の「詰まりによる途中離脱」をUI/UXの力で解消することをコアテーマに設定しました。",
        },

        {
          type: "solutions",
          label: "UX DESIGN & SOLUTIONS",
          title: "UXデザインと解決策",
          items: [
            {
              title: "主人公の独り言と立ち絵アニメーションによる感情導線の設計",
              body: "無機質な謎解き作業になるのを防ぐため、ユーザーのプレイ状況に応じて主人公が状況をつぶやく「ダイアログシステム」を新設しました。最小限のテキスト量と立ち絵アニメーションを連動させ、プレイヤーが自然と世界観に没入できるUIを構築しています。",
          images: [
                // 1列目：基準となる大きな画像 1枚
                { src: "assets/images/game/dialogue_1.jpg", caption: "独り言ダイアログ", phone: true },
                
                // 2列目：半分の画像 2枚縦積み
                [
                  { src: "assets/images/game/sotai-normal-1.png", caption: "表情1", phone: true },
                  { src: "assets/images/game/sotai-happy-0.png", caption: "表情2", phone: true },
                ],
                
                // 3列目：半分の画像 2枚縦積み
                [
                  { src: "assets/images/game/sotai-sad-4.png", caption: "表情3", phone: true },
                  { src: "assets/images/game/sotai-angry-1.png", caption: "表情4", phone: true },
                ]
              ],
            },
            {
              title: "ユーザーの離脱ポイントを先回りして潰す「摩擦ゼロ」のUX改善",
              body: "「操作に迷う」「特定のパズルで詰まる」という離脱を防ぐため、チュートリアルの仕様策定や段階的なヒントシステムを実装しました。さらに、つまずきやすい高難易度ギミックには「自動クリア機能」を導入し、UI効果音のチューニングと合わせて最後までストレスなく遊べる体験導線を整えました。",
              images: [
                { src: "assets/images/game/puzzle.jpg", caption: "パズル画面とヒントアイコン", phone: true },
                { src: "assets/images/game/item.jpg", caption: "アイテム拡大UI", phone: true },
              ],
            },
            {
              title: "実機検証に基づく「縦画面固定」への割り切りとリソース集中",
              body: "iOS/Android両端末での実機テストを重ねる中で、画面比率やスマホでの片手操作における最適なレイアウトを検証しました。ユーザー体験と開発効率を天秤にかけ、「縦画面固定」へと仕様をシャープに絞り込むことで、浮いた工数をドット絵の表現力向上と多言語ローカライズへ集中させました。",
              images: [
                { src: "assets/images/game/main_1.jpg", caption: "縦画面の操作UIレイアウト", phone: true },
                { src: "assets/images/game/title_ja.jpg", caption: "タイトル画面（日本語）", phone: true },
                { src: "assets/images/game/title_en.jpg", caption: "タイトル画面（英語）", phone: true },
              ],
            },
          ],
        },

        {
          type: "cards",
          label: "ENGINEERING",
          title: "実装の裏側",
          items: [
            {
              title: "データ駆動化と基盤改修",
              body: "ヒントシステムや翻訳データのCSV一括管理化、およびセーブシステムの抜本的な最適化をC#で行い、UI調整の効率化とアプリの安定性向上を実現しました。",
            },
          ],
        },
      ],
    },
  ],
};
