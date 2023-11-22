'use client'
import styles from '@/styles/page.module.css'

export default function CarruselSlide({prop}:{prop:any}) {

    return (
        <div className={styles.carruselCard} id={prop.id}>
            <img src={prop.src} alt={prop.alt}/>
            <p>{prop.src}</p>
        </div>
    )
}