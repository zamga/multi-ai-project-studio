import { TrendingUp, RefreshCw, Building2, FileText, Handshake } from 'lucide-react'

interface ServiceIconProps {
  serviceId: string
  className?: string
}

export function ServiceIcon({ serviceId, className = "w-6 h-6" }: ServiceIconProps) {
  const icons = {
    'ma-advisory': Handshake,
    'restructuring': RefreshCw,
    'public-markets': TrendingUp,
    'accounting': FileText,
    'buy-sell': Building2,
  }

  const Icon = icons[serviceId as keyof typeof icons] || Handshake

  return <Icon className={className} />
}
