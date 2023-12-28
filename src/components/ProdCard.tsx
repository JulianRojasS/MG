'use client'
import styles from '@/styles/page.module.css'
import { useState } from 'react'

export default function ProdCard({id, img, name, category, price}:{id:string, img:string, category:string, name: string, price:string}) {
    const [display, setDisplay] = useState("none")
    var stilos = {
        display: display
    }

    function show () {
        setDisplay("block")
    }

    function close () {
        setDisplay("none")
    }

    return (
        <>
            <div id={id} onClick={(e) => {
                if (e.target.id == id) {
                    close()
                }
            }} className={styles.Modal} style={stilos}>
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