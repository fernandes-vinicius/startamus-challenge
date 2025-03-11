import './globals.css'

import type { Metadata } from 'next'

import { AppFooter } from '@/components/common/app-footer'
import { AppHeader } from '@/components/common/app-header'
import { ThemeProvider } from '@/components/common/theme-provider'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import type { LayoutProps } from '@/types/common'

export const metadata: Metadata = {
  title: {
    template: '%s | Chuck Norris Jokes',
    default: 'Chuck Norris Jokes',
  },
  description: 'Chuck Norris Jokes challenge by Startamus',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(fontSans.variable, 'font-sans antialiased')}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-svh w-full flex-col overflow-x-hidden">
            <AppHeader />
            {children}
            <AppFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
