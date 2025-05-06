// データフェッチング関数
async function getPostData(id: string) {
  // 実際のアプリではここでAPIを呼び出す
  // 今回はモックデータを返す
  const posts = {
    '1': {
      title: '初めてのNext.js',
      content: 'Next.jsは素晴らしいReactフレームワークです。Reactの基本を知っていれば、すぐに始められます。',
      author: 'ゆうき',
      date: '2023-10-15'
    },
    '2': {
      title: '動的ルーティングについて',
      content: '動的ルーティングを使うと、一つのページコンポーネントで複数のURLを処理できます。URLのパラメータを使って、データベースからデータを取得できます。',
      author: 'みさき',
      date: '2023-10-20'
    },
    '3': {
      title: 'Reactの基本',
      content: 'Reactはコンポーネントベースのライブラリです。コンポーネントを組み合わせて、複雑なUIを構築できます。',
      author: 'たろう',
      date: '2023-10-25'
    },
    '4': {
      title: 'TailwindCSSの使い方',
      content: 'TailwindCSSはユーティリティファーストのCSSフレームワークです。クラス名を組み合わせて、素早くスタイリングできます。',
      author: 'はなこ',
      date: '2023-10-30'
    },
    '5': {
      title: 'TypeScriptとは',
      content: 'TypeScriptはJavaScriptに型を追加した言語です。型を使うことで、バグを減らし、コードの品質を向上させることができます。',
      author: 'けんじ',
      date: '2023-11-05'
    }
  };
  
  // 指定されたIDの投稿があるか確認
  const post = posts[id as keyof typeof posts];
  
  if (!post) {
    // 投稿が見つからない場合はnullを返す
    return null;
  }
  
  return post;
}

// 有効なIDのリストを生成する関数
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}

// ナビゲーションコンポーネントをインポート
import PostNavigation from '../../components/PostNavigation';

// ブログ記事コンポーネント
export default async function BlogPost({ params }: { params: { id: string } }) {
  // URLパラメータを検証（数字のみ許可）
  if (!/^\d+$/.test(params.id)) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded" role="alert">
          <h1 className="font-bold text-xl mb-2">無効なブログIDです</h1>
          <p>ブログIDは数字である必要があります。</p>
        </div>
      </div>
    );
  }
  
  // パラメータからデータを取得
  const post = await getPostData(params.id);
  
  // 投稿が見つからない場合
  if (!post) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded" role="alert">
          <h1 className="font-bold text-xl mb-2">記事が見つかりません</h1>
          <p>指定された記事は存在しないか、削除された可能性があります。</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      
      <div className="text-gray-500 mb-6">
        <p>投稿者: {post.author} | 投稿日: {post.date}</p>
      </div>
      
      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <p className="font-semibold">URLパラメータ: <span className="text-blue-500">{params.id}</span></p>
      </div>
      
      {/* ナビゲーションコンポーネントを追加 */}
      <PostNavigation currentId={params.id} maxId={5} />
    </div>
  );
} 