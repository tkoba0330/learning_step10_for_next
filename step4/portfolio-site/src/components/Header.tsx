'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Button from './Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="
      fixed top-0 left-0 right-0 z-50 
      bg-white/80 dark:bg-gray-900/80 
      backdrop-blur-md 
      border-b border-gray-200 dark:border-gray-700
    ">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Portfolio
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-gray-700 dark:text-gray-300 
                  hover:text-blue-600 dark:hover:text-blue-400 
                  transition-colors duration-200
                  font-medium
                "
              >
                {item.label}
              </Link>
            ))}
            
            {/* テーマ切り替えボタン */}
            <Button
              variant="outline"
              size="small"
              onClick={toggleTheme}
              className="ml-4"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="small"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                p-2 rounded-md 
                text-gray-700 dark:text-gray-300 
                hover:bg-gray-100 dark:hover:bg-gray-800
                transition-colors duration-200
              "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    text-gray-700 dark:text-gray-300 
                    hover:text-blue-600 dark:hover:text-blue-400 
                    transition-colors duration-200
                    font-medium
                    py-2
                  "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 