import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/app/components/ui/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/app/components/ui/hover-card'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'thinking',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center space-x-6 pr-10">
            <HoverCard openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <button className="transition-all hover:opacity-70 outline-none cursor-pointer">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/raj-avatar.png" alt="Raj" />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                </button>
              </HoverCardTrigger>
              <HoverCardContent 
                align="start" 
                className="w-auto p-5 border-0 shadow-none bg-background"
                style={{ backgroundColor: 'rgb(var(--background))' }}
              >
                <div className="flex flex-col gap-2">
                  <a
                    href="https://x.com/curlycloud__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:opacity-80 cursor-pointer"
                    style={{ color: 'rgb(var(--primary))' }}
                  >
                    X
                  </a>
                  <a
                    href="https://github.com/radroid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:opacity-80 cursor-pointer"
                    style={{ color: 'rgb(var(--primary))' }}
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/raj-dholakia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:opacity-80 cursor-pointer"
                    style={{ color: 'rgb(var(--primary))' }}
                  >
                    LinkedIn
                  </a>
                </div>
              </HoverCardContent>
            </HoverCard>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:opacity-70 flex align-middle relative py-1 px-2 m-1"
                  style={{ color: 'rgb(var(--foreground))' }}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
