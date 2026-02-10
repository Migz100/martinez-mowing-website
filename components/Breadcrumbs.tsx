import Link from 'next/link'
import { HiChevronRight, HiHome } from 'react-icons/hi'

interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

/**
 * Visual breadcrumb navigation component
 * Renders semantic breadcrumb trail with schema.org markup support
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-cream py-3 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {/* Home icon */}
          <li>
            <Link
              href="/"
              className="text-gray-600 hover:text-primary transition-colors flex items-center"
              aria-label="Home"
            >
              <HiHome className="w-4 h-4" />
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={index} className="flex items-center">
                <HiChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                {item.url && !isLast ? (
                  <Link
                    href={item.url}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    className={`${
                      isLast ? 'text-charcoal font-medium' : 'text-gray-600'
                    }`}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.name}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
