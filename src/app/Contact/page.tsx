import Link from "next/link"
import styles from "@/styles/page.module.css"

export default function Contact() {
    return (
        <div style={{display: "flex", justifyContent: "space-evenly", margin: "2% 0"}}>
            <div style={{width: "20%"}} className={styles.card}>
                <img style={{width: "30%"}} src="/contact/facebook.png" alt="" />
                <h2 >Facebook</h2>
                <p>Contactate directamente con uno de nuestros asesores dando click aqui!!.</p>
                <Link href={"https://www.facebook.com/MueblesGrifer"}>Ir</Link>
            </div>
            <div style={{width: "20%"}} className={styles.card}>
                <img style={{width: "30%"}} src="/contact/whatsapp.png" alt="" />
                <h2 >WhatsApp</h2>
                <p>Visita nuestra pagina y siguenos, contenido de calidad nuevo cada semana!!</p>
                <Link href={"https://api.whatsapp.com/send?phone=573156152148"}>Ir</Link>
            </div>
            <div style={{width: "20%"}} className={styles.card}>
                <img style={{width: "30%"}} src="/contact/gmail.png" alt="" />
                <h2 >Gmail</h2>
                <p>Escribenos directamente por correo, te damos atencion 24/7 estamos esperando!!</p>
                <Link href={"mailto:mailmodulares.grifer@gmail.com?Subject=Aquí%20el%20asunto%20del%20"}>Ir</Link>
            </div>
            <div style={{width: "20%"}} className={styles.card}>
                <img style={{width: "30%"}} src="/contact/instagram.png" alt="" />
                <h2 >Instagram</h2>
                <p>Visita nuestra pagina y siguenos, contenido de calidad nuevo cada semana!!</p>
                <Link  href={"https://www.instagram.com/modugrifer/?hl=es-la"}>Ir</Link>
            </div>
        </div>
    )
}