'use client'

import { navigation } from '@/app/docs/navigation'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SideNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-4">
      {navigation.map((section) => (
        <div key={section.title}>
          <h3 className="font-bold mb-2 text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">{section.title}</h3>
          <div className="flex flex-col space-y-1">
            {section.links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white'
                  }`}>
                  {link.title}
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </nav>
  )
}

function DocsFooter() {
  const pathname = usePathname();
  const allLinks = navigation.flatMap((section) => section.links);
  const currentPageIndex = allLinks.findIndex((link) => link.href === pathname);

  const prevPage = currentPageIndex > 0 ? allLinks[currentPageIndex - 1] : null;
  const nextPage = currentPageIndex < allLinks.length - 1 ? allLinks[currentPageIndex + 1] : null;

  if (!prevPage && !nextPage) {
    return null;
  }

  return (
    <div className="mt-12 flex justify-between border-t pt-6 dark:border-gray-800">
      {prevPage ? (
        <Link href={prevPage.href} className="flex flex-col items-start gap-1 rounded-md border p-4 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50">
          <span className="text-sm text-gray-500">Previous</span>
          <span className="font-bold text-lg">{prevPage.title}</span>
        </Link>
      ) : <div />} 
      {nextPage ? (
        <Link href={nextPage.href} className="flex flex-col items-end gap-1 rounded-md border p-4 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50">
           <span className="text-sm text-gray-500">Next</span>
          <span className="font-bold text-lg">{nextPage.title}</span>
        </Link>
      ) : <div />}
    </div>
  );
}


export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full">
      <aside className="w-64 flex-shrink-0 border-r bg-gray-50 dark:bg-gray-900/10 p-4 hidden md:block">
         <SideNav />
      </aside>
      <div className="flex-1 overflow-auto">
          <main className="max-w-4xl mx-auto p-8">
            {children}
            <DocsFooter />
          </main>
      </div>
    </div>
  );
}
