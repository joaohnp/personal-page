import Image from "next/image"
import Link from "next/link"
import { EnhancedCogwheel } from "./components/enhanced-cogwheel"
import { Github, Twitter, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="mb-16">
        <Image src="/profile.png" alt="Profile" width={200} height={200} className="rounded-full grayscale" />
      </div>

      <nav className="flex items-center space-x-4 text-center mb-8">
        <Link href="/now" className="hover:text-[#356aff] transition-colors">
          now
        </Link>
        <span className="text-gray-400">|</span>
        <Link href="/projects" className="hover:text-[#356aff] transition-colors">
          projects
        </Link>
        <span className="text-gray-400">|</span>
        <Link href="/cv" className="hover:text-[#356aff] transition-colors">
          cv
        </Link>
        <span className="text-gray-400">|</span>
        <Link href="/photography" className="hover:text-[#356aff] transition-colors">
          photography
        </Link>
        <span className="text-gray-400">|</span>
        <Link href="/books" className="hover:text-[#356aff] transition-colors">
          books
        </Link>
        <span className="text-gray-400">|</span>
        <Link href="/blog" className="hover:text-[#356aff] transition-colors">
          blog
        </Link>
      </nav>

      <div className="flex items-center space-x-6 mb-12">
        <Link href="https://github.com/joaohnp" className="hover:text-[#356aff] transition-colors">
          <Github size={23} />
        </Link>
        <Link href="https://twitter.com/jpatriota_" className="hover:text-[#356aff] transition-colors">
          <Twitter size={23} />
        </Link>
        <Link href="mailto:joao.patriota@newgate.pro" className="hover:text-[#356aff] transition-colors">
          <Mail size={23} />
        </Link>
      </div>

      <div className="mt-8">
        <EnhancedCogwheel />
      </div>
    </div>
  )
}
