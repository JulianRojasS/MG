import styles from '@/styles/page.module.css'
import Link from 'next/link'

export default function TexCard({props}: {props: any}) {
    return (
        <div className={styles.textCard}>
            <h2>{props.tittle}</h2>
            <p>{props.paragraph}</p>
            <Link href={props.link}>{props.button}</Link>
        </div>
    )
}