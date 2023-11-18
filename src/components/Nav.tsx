import styles from '@/styles/page.module.css'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@700&display=swap" rel="stylesheet"></link>
            <img src="/modulares-logo.png"/>
            <h1>Modulares Grifer</h1>
            <ul>
                <Link href={'/'}>Home</Link>
                <Link href={'/Us'}>Nosotros</Link>
                <Link href={'#'}>Portafolio</Link>
                <Link href={'#'}>Contacto</Link>
            </ul>
        </nav>
    )
}