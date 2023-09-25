import Link from 'next/link'
import styles from './style.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


const links = [
  { href: '/', label: 'Home' },
  { href: '/docs', label: 'Docs' },
  { href: '/todos', label: 'Todos' },


]


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.navigation}>
        <header>
          <nav>
            <ul className={styles.pageborder}>
              {links.map(link => (
                <li className={styles.li}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}

      </body>
    </html>
  )
}
