import Link from 'next/link'
import { TextScramble } from '@/app/components/ui/text-scramble'

const navItems = {
  '/': {
    name: 'home',
  },
  '/history': {
    name: 'history',
  },
  '/blog': {
    name: 'thinking',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-6 sm:mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center space-x-4 sm:space-x-6 pr-4 sm:pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="flex align-middle relative py-1 px-2 m-1"
                >
                  <TextScramble text={name} textSize="text-sm" />
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
