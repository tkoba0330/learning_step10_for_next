export default function DocsIndexPage() {
  // カテゴリごとのドキュメント情報
  const docCategories = [
    {
      title: 'はじめに',
      description: 'Next.jsの基本と使い始め方',
      icon: '🚀',
      items: [
        { title: 'イントロダクション', path: '/docs/getting-started', description: 'Next.jsの概要と特徴' },
        { title: 'インストール方法', path: '/docs/getting-started/installation', description: 'プロジェクトの始め方' },
        { title: 'プロジェクト構造', path: '/docs/getting-started/project-structure', description: 'ファイル構成の解説' }
      ]
    },
    {
      title: '主要機能',
      description: 'Next.jsの強力な機能',
      icon: '⚡',
      items: [
        { title: 'ルーティング', path: '/docs/features/routing', description: 'ファイルベースのルーティング' },
        { title: 'データフェッチング', path: '/docs/features/data-fetching', description: 'データの取得方法' }
      ]
    },
    {
      title: '応用例',
      description: 'Next.jsの実践的な使い方',
      icon: '🔍',
      items: [
        { title: '動的ルーティング', path: '/docs/examples/dynamic-routing', description: '[id]を使った動的ページ' },
        { title: 'キャッチオールルート', path: '/docs/examples/catch-all-routes', description: '[...slug]でのルート捕捉' }
      ]
    }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Next.js ドキュメント</h1>
        <p className="text-xl text-gray-600">
          Next.jsの総合的なガイドと解説
        </p>
      </div>
      
      {/* ドキュメントカテゴリ */}
      <div className="space-y-16">
        {docCategories.map((category, idx) => (
          <section key={idx} className="scroll-mt-16" id={category.title.toLowerCase().replace(/\s+/g, '-')}>
            <div className="mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="text-3xl mr-2">{category.icon}</span> 
                {category.title}
              </h2>
              <p className="text-gray-600 mt-1">{category.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href={item.path}
                  className="block p-6 border rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
      
      {/* フッター */}
      <div className="mt-16 pt-8 border-t text-center text-gray-500">
        <p>このドキュメントはNext.jsの学習用に作成されています</p>
        <p className="mt-2">© 2024 Next.js学習プロジェクト</p>
      </div>
    </div>
  );
} 