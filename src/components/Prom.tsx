import CarruselSlide from "./Carrusel/CarruselSlide"
import styles from "@/styles/page.module.css"

export default function Promo() {
    var data = [{src: "/modulares-logo.png", alt: "Image1", id: "0"}, {src: "/modulares-logo.png", alt: "Image2", id: "1"}, {src: "/modulares-logo.png", alt: "Image3", id: "2"}]
    var currentSlide = 0
    return (
        <section>
            <h2>Promosiones de la semana</h2>
            <div key={1} className={styles.carruselContainer}>
                {data.map((e) => {
                    return (    
                            <CarruselSlide prop={{src: e.src, alt: e.alt, id: e.id, currentSlide}} key={e.id}/>
                    )
                })}
            </div>
        </section>
    )
}