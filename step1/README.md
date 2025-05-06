# Next.js 学習ステップ1

このプロジェクトはNext.js学習ロードマップのステップ1「Next.jsの基礎と環境構築」の実践課題です。

## 学習内容

- Next.js とは何か
- React との違い
- 開発環境のセットアップ
- プロジェクトの作成方法

## 実践課題: 「Hello World」アプリケーション

- Next.js プロジェクトを新規作成
- トップページに「Hello World」と表示
- 簡単な自己紹介セクションを追加

## 起動方法

Dockerを使用して開発環境を起動します：

```bash
# Dockerコンテナをビルドして起動
docker-compose up

# または、バックグラウンドで実行する場合
docker-compose up -d
```

アプリケーションは http://localhost:3000 でアクセスできます。

## 開発方法

1. `pages/index.tsx` を編集してトップページを変更できます
2. `styles/Home.module.css` でスタイルを編集できます
3. 変更はホットリロードで即座に反映されます

## 学習のポイント

- ファイルベースのルーティングシステム
- React コンポーネントの基本構造
- Next.js の基本的な機能の理解 