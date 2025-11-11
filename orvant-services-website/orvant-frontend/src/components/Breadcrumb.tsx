import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  path: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-body-sm">
          <li>
            <Link
              to="/"
              className="text-neutral-600 hover:text-navy-900 transition-colors duration-150"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center space-x-2">
              <ChevronRight size={16} className="text-neutral-400" />
              {index === items.length - 1 ? (
                <span className="text-navy-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-neutral-600 hover:text-navy-900 transition-colors duration-150"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
