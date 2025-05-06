FROM node:18-alpine

WORKDIR /app

# 依存関係のインストールに必要なファイルをコピー
COPY package.json package-lock.json* ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションのビルド
RUN npm run build

# 開発サーバーのポートを公開
EXPOSE 3000

# 開発サーバーの起動
CMD ["npm", "run", "dev"] 