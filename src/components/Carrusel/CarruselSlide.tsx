'use client'
import styles from '@/styles/page.module.css'
import { Key } from 'react'
import { useState } from 'react'

export default function CarruselSlide({prop}:{prop:any}) {
    const [slide, SetSlide] = useState(0)
    var style = styles.carruselCard
    show(slide)
    function show (slide: number) {
        if (prop.id == slide) {
            style = styles.carruselCardBlock  
        }
    }

    function handdleClick () {
        show()
    }

    return (
        <div onClick={handdleClick} className={style} id={prop.id}>
            <img src={prop.src} alt={prop.alt}/>
        </div>
    )
}