'use client'
import CarruselSlide from "./CarruselSlide"
import styles from "@/styles/page.module.css"
import { useState } from 'react'

export default function Promo() {
    
    const [slide, setSlide] = useState(0)
    const data = [{src: "/paso.png", alt: "Image1", id: "0"}, {src: "/Documento.png", alt: "Image2", id: "1"}, {src: "/modulares-logo.png", alt: "Image3", id: "2"}]

    function showPos () {
            return (
                <CarruselSlide prop={{src: data[slide].src, alt: data[slide].alt, id: data[slide].id}} key={data[slide].id}/>
            )
    }

    const advance = () => {
        if (slide == data.length-1) {
            setSlide(0)
        } else if (slide < data.length) {
            setSlide(slide+1)
        }
    }
    
    const back = () => {
        if (slide == 0) {
            setSlide(data.length-1)
        } else if (slide > 0) {
            setSlide(slide-1)
        }
    }
        
    setTimeout(advance, 5000)

    return (
        <section>
            <h2 style={{textAlign: "center", marginTop: "10px"}} >Promosiones de la semana</h2>
            <div key={1} className={styles.carruselContainer}>
                <button className={styles.carruselButton} onClick={advance}>{"<"}</button>
                {   
                    showPos()  
                }
                <button className={styles.carruselButton} onClick={back}>{">"}</button>
            </div>
        </section>
    )
}