import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Card from '@/components/Card'

export default function Home() {
  const projects = [
    {
      title: "Eコマースサイト",
      description: "Next.js と Stripe を使用したモダンなEコマースプラットフォーム。レスポンシブデザインと高速なパフォーマンスを実現。",
      image: "/api/placeholder/400/250",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]
    },
    {
      title: "タスク管理アプリ",
      description: "React と Firebase を使用したリアルタイムタスク管理アプリケーション。チーム協働機能付き。",
      image: "/api/placeholder/400/250",
      tags: ["React", "Firebase", "Material-UI", "PWA"]
    },
    {
      title: "天気予報アプリ",
      description: "OpenWeather API を使用した美しい天気予報アプリ。位置情報対応と詳細な気象データ表示。",
      image: "/api/placeholder/400/250",
      tags: ["Vue.js", "API Integration", "Geolocation", "Chart.js"]
    }
  ]

  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript"] },
    { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
    { name: "Design", items: ["Figma", "Tailwind CSS", "Styled Components"] }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* ヒーローセクション */}
      <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20">
            <h1 className="
              text-4xl md:text-6xl lg:text-7xl 
              font-bold 
              bg-gradient-to-r from-blue-600 to-purple-600 
              bg-clip-text text-transparent 
              mb-6
            ">
              Hello, I&apos;m Developer
            </h1>
            <p className="
              text-xl md:text-2xl 
              text-gray-600 dark:text-gray-300 
              mb-8 
              max-w-3xl mx-auto 
              leading-relaxed
            ">
              情熱的なフルスタック開発者として、美しく機能的なウェブアプリケーションを創造しています。
              ユーザー体験を重視し、最新技術を活用したソリューションを提供します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="large" className="text-lg px-8 py-4">
                プロジェクトを見る
              </Button>
              <Button variant="outline" size="large" className="text-lg px-8 py-4">
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Aboutセクション */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                技術への情熱
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                5年以上のウェブ開発経験を持ち、フロントエンドからバックエンドまで幅広い技術スタックに精通しています。
                常に新しい技術を学び、ユーザーにとって価値のあるプロダクトを作ることに情熱を注いでいます。
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                特にReact/Next.jsエコシステムを得意とし、パフォーマンスとユーザビリティを両立した
                モダンなウェブアプリケーションの開発を専門としています。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skillCategory, index) => (
                <Card
                  key={index}
                  title={skillCategory.name}
                  className="text-center"
                >
                  <ul className="space-y-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-sm text-gray-600 dark:text-gray-300">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projectsセクション */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="large">
              すべてのプロジェクトを見る
            </Button>
          </div>
        </div>
      </section>

      {/* Contactセクション */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 dark:text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            新しいプロジェクトのご相談や、技術的な質問がございましたら、
            お気軽にお問い合わせください。一緒に素晴らしいものを作りましょう！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="large" className="text-lg px-8 py-4">
              メールを送る
            </Button>
            <Button variant="outline" size="large" className="text-lg px-8 py-4">
              LinkedInで繋がる
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
