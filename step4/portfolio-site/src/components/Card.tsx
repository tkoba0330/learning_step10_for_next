import React from 'react'
import Image from 'next/image'

interface CardProps {
  title: string
  description?: string
  image?: string
  tags?: string[]
  onCardClick?: () => void
  className?: string
  children?: React.ReactNode
}

export default function Card({ 
  title, 
  description, 
  image, 
  tags = [], 
  onCardClick,
  className = '',
  children
}: CardProps) {
  return (
    <div 
      className={`
        bg-white 
        dark:bg-gray-800 
        rounded-xl 
        shadow-md 
        hover:shadow-xl 
        transition-all 
        duration-300 
        overflow-hidden
        border border-gray-200 
        dark:border-gray-700
        ${onCardClick ? 'cursor-pointer hover:transform hover:-translate-y-1' : ''}
        ${className}
      `}
      onClick={onCardClick}
    >
      {image && (
        <div className="relative w-full h-48">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>
        )}
        
        {children && (
          <div className="mb-4">
            {children}
          </div>
        )}
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="
                  bg-blue-100 
                  dark:bg-blue-900
                  text-blue-800 
                  dark:text-blue-200
                  px-3 
                  py-1 
                  rounded-full 
                  text-sm
                  font-medium
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 