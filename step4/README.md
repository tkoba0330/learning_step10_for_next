# Step 4: スタイリングとコンポーネント設計 - ポートフォリオサイト

## 📚 学習内容

このステップでは以下の技術とコンセプトを学習します：

- **CSS Modules** - スタイルのモジュール化とスコープ分離
- **Styled JSX** - JavaScript内でのCSS記述
- **Tailwind CSS** - ユーティリティファーストなCSSフレームワーク
- **コンポーネント設計** - 再利用可能なコンポーネントの作成

## 🎯 実践課題：ポートフォリオサイト

美しく機能的なポートフォリオサイトを作成します。

### 主な機能

- ✨ **レスポンシブデザイン** - モバイルからデスクトップまで対応
- 🌙 **ダークモード/ライトモード** - テーマ切り替え機能
- 🎨 **アニメーション** - ホバーエフェクトとトランジション
- 📱 **モバイルナビゲーション** - ハンバーガーメニュー
- 🧩 **再利用可能コンポーネント** - Button、Card、Header、Footer

### 技術スタック

- **Next.js 15** - React フレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **next-themes** - ダークモード対応
- **CSS Modules** - コンポーネント固有スタイル

## 🚀 セットアップと実行

### 1. 依存関係のインストール

```bash
cd portfolio-site
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 3. Dockerを使用した実行

```bash
# プロダクションビルド
docker-compose up portfolio-app

# 開発環境
docker-compose --profile dev up portfolio-dev
```

## 📁 プロジェクト構造

```
portfolio-site/
├── src/
│   ├── app/
│   │   ├── globals.css          # グローバルスタイル
│   │   ├── layout.tsx           # レイアウトコンポーネント
│   │   └── page.tsx             # メインページ
│   ├── components/
│   │   ├── Button.tsx           # 再利用可能ボタン
│   │   ├── Card.tsx             # カードコンポーネント
│   │   ├── Header.tsx           # ヘッダー
│   │   └── Footer.tsx           # フッター
│   └── styles/
│       └── common.module.css    # 共通CSS Modules
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🎨 スタイリング手法

### 1. CSS Modules

```css
/* styles/common.module.css */
.button {
  background-color: var(--primary-color);
  transition: all 0.3s ease;
}
```

```tsx
import styles from '../styles/common.module.css'

<button className={styles.button}>Click me</button>
```

### 2. Tailwind CSS

```tsx
<div className="
  bg-white dark:bg-gray-800 
  rounded-lg shadow-md 
  hover:shadow-xl 
  transition-all duration-300
">
  Content
</div>
```

### 3. CSS変数

```css
:root {
  --primary-color: #3b82f6;
  --text-primary: #1f2937;
  --transition-normal: 0.3s ease;
}
```

## 🧩 コンポーネント設計

### Button コンポーネント

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}
```

### Card コンポーネント

```tsx
interface CardProps {
  title: string
  description?: string
  image?: string
  tags?: string[]
}
```

## 🌙 ダークモード実装

next-themesを使用したテーマ切り替え：

```tsx
import { useTheme } from 'next-themes'

const { theme, setTheme } = useTheme()
const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
```

## 📱 レスポンシブデザイン

Tailwindのブレークポイントを活用：

```tsx
<div className="
  grid 
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-4 md:gap-6 lg:gap-8
">
```

## 🎯 学習ポイント

1. **CSS Modules** でスタイルの衝突を防ぐ
2. **Tailwind CSS** で効率的なスタイリング
3. **コンポーネント設計** で再利用性を高める
4. **レスポンシブデザイン** でマルチデバイス対応
5. **ダークモード** でユーザビリティ向上

## 🔧 カスタマイズ

- `src/app/globals.css` でカラーパレットを変更
- `src/components/` で新しいコンポーネントを追加
- `tailwind.config.js` でTailwindをカスタマイズ

## 📚 参考資料

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

このプロジェクトを通じて、モダンなウェブ開発におけるスタイリング手法とコンポーネント設計の基礎を習得できます！ 