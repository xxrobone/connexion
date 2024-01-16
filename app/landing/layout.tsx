import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Danscenter | Landing',
}

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
      <main className='flex min-h-screen flex-col md:flex-row'>
      {children}
    </main>
  )
}

export default Layout