'use client'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { Brain, ChevronLeft, ChevronRight, Code, Zap,UserRoundSearch, CreditCard } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'


const slides = [
  {
    title: "v0: 次世代AI開発アシスタント",
    icon: <Code className="w-16 h-16 mb-6 text-blue-500" />,
    content: [
      "v0は、最新のAI技術を活用した開発者向けの",
      "インテリジェントなコーディングアシスタントです。",
      "複雑なタスクを簡単に、効率的に解決します。",
      "",
      "• 高度な自然言語理解",
      "• コンテキストに応じたコード生成",
      "• マルチ言語サポート"
    ],
    image: "/home.png"
  },
  {
    title: "v0の主な機能",
    icon: <Zap className="w-16 h-16 mb-6 text-yellow-500" />,
    content: [
      "• リアルタイムのコード分析と最適化提案",
      "• インテリジェントな問題解決と自動デバッグ",
      "• カスタマイズ可能な開発環境との統合",
      "• コードレビューと品質保証サポート",
      "• APIとライブラリの使用提案",
      "• セキュリティとベストプラクティスの推奨"
    ],
    image: "/feature.png"
  },
  {
    title: "v0が開発プロセスを変える理由",
    icon: <Brain className="w-16 h-16 mb-6 text-purple-500" />,
    content: [
      "• 開発速度の大幅な向上（最大50%の時間削減）",
      "• コード品質の改善（バグの30%削減）",
      "• チーム全体の生産性向上（20%の効率化）",
      "• 継続的な学習と改善（日々のアップデート）",
      "• シームレスな統合（主要IDEとの互換性）",
      "• 24/7(twenty for seven)サポートによる開発者の負担軽減"
    ],
    image: "/cost.png"
  },
  {
    title: "v0の価格プラン",
    icon: <CreditCard className="w-16 h-16 mb-6 text-green-500" />,
    content: [
      "• 無料プラン: 月間1000トークン",
      "• スタータープラン: ¥2,000/月、10,000トークン",
      "• プロフェッショナルプラン: ¥5,000/月、50,000トークン",
      "• エンタープライズプラン: カスタム価格、無制限トークン",
    ],
    image: "/price.png"
  },
]



export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-6xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl" style={{ minHeight: '80vh' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center h-full"
          >
            {slides[currentSlide].icon}
            <h2 className="mb-8 text-4xl font-bold text-center text-gray-800 dark:text-white">
              {slides[currentSlide].title}
            </h2>
            <div className="flex justify-between items-start w-full mb-8">
              <div className="w-1/2 pr-4">
                <ul className="list-none text-left text-lg leading-loose text-gray-600 dark:text-gray-300">
                  {slides[currentSlide].content.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-2"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="w-1/2 pl-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Image
                    src={slides[currentSlide].image}
                    alt={`v0 ${slides[currentSlide].title}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-8">
          <Button
            onClick={prevSlide}
            variant="outline"
            className="flex items-center px-4 py-2 text-sm"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            前へ
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            className="flex items-center px-4 py-2 text-sm"
          >
            次へ
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              animate={{ scale: index === currentSlide ? 1.5 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
