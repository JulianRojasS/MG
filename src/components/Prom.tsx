'use client'

import CarruselSlide from "./CarruselSlide"
import styles from "@/styles/page.module.css"
import { useState } from 'react'

export default function Promo() {
    const [slide, setSlide] = useState(0)
    const data = [{src: "/slider/PROM1.jpeg", alt: "Image1", id: "0"}, {src: "/slider/PROM2.jpeg", alt: "Image2", id: "1"}, {src: "/slider/PROM3.jpeg", alt: "Image3", id: "2"}]

    function showSlidePos (i: number) {
        var pos: any[] = ["-", "-", "-"]
        pos[i] = <b key={slide} style={{color: "black"}}>-</b>
        return pos
    }

    function showPos () {
            return (
                <div style={{ display:"flex", flexDirection: "column", textAlign: 'center', justifyContent: "center"}}>
                    <CarruselSlide prop={{src: data[slide].src, alt: data[slide].alt, id: data[slide].id}} key={slide}/>
                    <p style={{fontSize: "25px", color: "gray"}}>{showSlidePos(slide)}</p>
                </div>
            )
    }

    const advance = () => {
        if (slide == data.length-1) {
            setSlide(0)
        } else if (slide <= data.length-1) {
            setSlide(slide+1)
        }
    }
    
    const back = () => {
        if (slide == 0) {
            setSlide(data.length-1)
        } else if (slide >= 0) {
            setSlide(slide-1)
        }
    }

    setTimeout(advance, 5000)

    return (
        <section>
            <h2 style={{textAlign: "center", margin: "20px 0"}} >Promosiones de la semana</h2>
            <div className={styles.carruselContainer}>
                <button className={styles.carruselButton} onClick={back}>{"<"}</button>
                {
                    showPos()
                }
                <button className={styles.carruselButton} onClick={advance}>{">"}</button>
            </div>
        </section>
    )
}