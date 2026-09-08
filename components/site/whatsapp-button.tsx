import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function WhatsappButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappHref}?text=${encodeURIComponent(
        'Hello CPA Kimende, I would like to enquire about your services.',
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CPA Kimende on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[8rem] group-hover:opacity-100">
        WhatsApp us
      </span>
    </a>
  )
}
