'use client'
import styles from '@/styles/page.module.css'
import { useState, useEffect } from 'react'

export default function ProdCard({id, img, name, category, price}:{id:string, img:string, category:string, name: string, price:string}) {
    const [display, setDisplay] = useState("none")
    var stilos = {
        display: display
    }

    const handleEscKeyPess = (e: KeyboardEvent) => {
        if (e.key == "Escape") {
            close()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEscKeyPess)
        return () => {
            document.removeEventListener("keydown", handleEscKeyPess)
        }
    },[])

    function show () {
        setDisplay("block")
        document.body.style.overflow = "hidden"
    }

    function close () {
        setDisplay("none")
        document.body.style.overflow = "auto"
    }

    return (
        <>
            <div className={styles.Modal} style={stilos}>
                <span id={id} onClick={(e) => {
                if (e.target.id == id) {
                    close()
                }
            }}></span>
                <section>
                    <button onClick={close} >x</button>
                    <h2>{name}</h2>
                    <p>{price}</p>
                </section>
            </div>
            <div className={styles.ProdCard}>
                <img src={img} alt="" />
                <span>
                    <p><b>{category}</b></p>
                </span>
                <h3>{name}</h3>
                <p>$<u>{price}</u></p>
                <button onClick={show} ><b>Comprar</b></button>
            </div>
        </>
    )
}