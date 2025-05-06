import Link from 'next/link';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  // サイドバーのナビゲーション項目
  const navItems = [
    { 
      title: 'はじめに',
      path: '/docs/getting-started',
      children: [
        { title: 'インストール方法', path: '/docs/getting-started/installation' },
        { title: 'プロジェクト構造', path: '/docs/getting-started/project-structure' }
      ]
    },
    {
      title: '機能',
      path: '/docs/features',
      children: [
        { title: 'ルーティング', path: '/docs/features/routing' },
        { title: 'データフェッチング', path: '/docs/features/data-fetching' }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen">
      {/* サイドバー */}
      <aside className="w-64 bg-gray-50 p-6 border-r">
        <div className="mb-8">
          <Link href="/docs" className="text-xl font-bold text-blue-600 hover:text-blue-800">
            Next.js ドキュメント
          </Link>
        </div>
        
        <nav>
          {navItems.map(section => (
            <div key={section.path} className="mb-6">
              <Link 
                href={section.path} 
                className="font-semibold text-gray-800 hover:text-blue-600"
              >
                {section.title}
              </Link>
              
              <ul className="mt-2 space-y-1 pl-4">
                {section.children.map(item => (
                  <li key={item.path}>
                    <Link 
                      href={item.path}
                      className="text-gray-600 hover:text-blue-600 text-sm"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      
      {/* メインコンテンツ */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
} 