import styles from '@/styles/page.module.css'
import Link from 'next/link'
import { title } from 'process'

export default function TexCard({paragraph, tittle, link, button}: {paragraph: string, tittle: string, link: string, button: string}) {
    return (
        <div className={styles.textCard}>
            <h2>{tittle}</h2>
            <p>{paragraph}</p>
            <Link href={link}>{button}</Link>
        </div>
    )
}