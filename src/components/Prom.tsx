'use client'

import CarruselSlide from "./CarruselSlide"
import styles from "@/styles/page.module.css"
import { useState } from 'react'
import { readdir } from "fs"
import { tree } from "next/dist/build/templates/app-page"


export default function Promo() {
    const [slide, setSlide] = useState(0)
    const data = [{src: "/slider/PROM1.jpeg", alt: "Image1", id: "0"}, {src: "/slider/PROM2.jpeg", alt: "Image2", id: "1"}, {src: "/slider/PROM3.jpeg", alt: "Image3", id: "2"}]

    function showPos () {
        automove(true)
            return (
                <CarruselSlide prop={{src: data[slide].src, alt: data[slide].alt, id: data[slide].id}} key={data[slide].id}/>
            )
    }

    function automove (set: boolean) {
            if (set) {
                setTimeout(advance, 5000)
            }
    }

    const advance = () => {
        if (slide == data.length-1) {
            automove(false)
            setSlide(0)
        } else if (slide <= data.length-1) {
            automove(false)
            setSlide(slide+1)
        }
    }
    
    const back = () => {
        if (slide == 0) {
            automove(false)
            setSlide(data.length-1)
        } else if (slide >= 0) {
            automove(false)
            setSlide(slide-1)
        }
    }

    return (
        <section key={1}>
            <h2 style={{textAlign: "center", marginTop: "10px"}} >Promosiones de la semana</h2>
            <div key={1} className={styles.carruselContainer}>
                <button className={styles.carruselButton} onClick={back}>{"<"}</button>
                {
                    showPos()
                }
                <button className={styles.carruselButton} onClick={advance}>{">"}</button>
            </div>
        </section>
    )
}