'use client'
import styles from '@/styles/page.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
    const routes = [{ url: "/", name: "Home" }, { url: "/Us", name: "Nosotros" }, { url: "/Portafolio", name: "Portafolio" }, { url: "/Contact", name: "Contacto" }]

    const navLinks = routes.map((e) => {
        var style = {
            borderBottom: "0"
        }
        if (usePathname() == e.url) {
            style.borderBottom = '1px solid'
        }
        return (
            <Link key={e.name} style={style} href={e.url}>{e.name}</Link>
        )
    })
    return (
        <nav className={styles.nav}>
            <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@700&display=swap" rel="stylesheet"></link>
            <img src="/modulares-logo.png" />
            <h1>Modulares Grifer</h1>
            <ul>
                {
                    navLinks
                }
            </ul>
        </nav>
    )
}