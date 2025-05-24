import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: 'https://github.com', label: 'GitHub', icon: '🐙' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: '💼' },
    { href: 'https://twitter.com', label: 'Twitter', icon: '🐦' },
    { href: 'mailto:contact@example.com', label: 'Email', icon: '📧' },
  ]

  return (
    <footer className="
      bg-gray-50 dark:bg-gray-900 
      border-t border-gray-200 dark:border-gray-700
      py-12
    ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ブランド情報 */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              情熱的な開発者として、素晴らしいウェブ体験を創造しています。
              新しい技術を学び、革新的なソリューションを提供することに取り組んでいます。
            </p>
          </div>

          {/* ナビゲーションリンク */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              ナビゲーション
            </h4>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'ホーム' },
                { href: '#about', label: 'について' },
                { href: '#projects', label: 'プロジェクト' },
                { href: '#contact', label: 'お問い合わせ' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      text-gray-600 dark:text-gray-400 
                      hover:text-blue-600 dark:hover:text-blue-400 
                      transition-colors duration-200
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ソーシャルリンク */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              フォローする
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 
                    bg-gray-200 dark:bg-gray-700 
                    hover:bg-blue-500 dark:hover:bg-blue-600 
                    text-gray-600 dark:text-gray-400 
                    hover:text-white 
                    rounded-full 
                    flex items-center justify-center 
                    transition-all duration-300
                    hover:transform hover:-translate-y-1
                  "
                  title={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                お気軽にお問い合わせください！
              </p>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="
          mt-8 pt-8 
          border-t border-gray-200 dark:border-gray-700 
          text-center
        ">
          <p className="text-gray-500 dark:text-gray-400">
            © {currentYear} Portfolio. All rights reserved. Made with ❤️ and Next.js
          </p>
        </div>
      </div>
    </footer>
  )
} 