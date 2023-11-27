import styles from "@/styles/page.module.css"

export default function page() {

    const textStyle: Object = {
        margin: "0 5%"
    }
    return (
        <div style={{width: "70%", margin: "auto"}}>
            <div className={styles.card}>
                <h2>QUIENES SOMOS</h2>
                <img src="/us/business-people.png" alt="" />
                <p>Somos una empresa con mas de 20 años en el mercado de muebles, tenemos todo lo que buscas y mas, nacimos de un artesano el cual siempre tuvo las expectativas de crecimiento personal y laboral impulsado por su familia.</p>
            </div>
            <div className={styles.card}>
                <h2>HISTORIA</h2>
                <img src="/us/historia.png" alt="" />
                <p>Nuestra historia data hace 28 años cuando un artesano arriesgado decide emprender su taller de carpintería con expectativas de crecimiento y sostenibilidad para su familia, hoy con el conocimiento transmitido a sus hijos crean espacios con mobiliario novedoso y llegando a todas las expectativas de sus clientes.</p>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{width: "49%", backgroundColor: "white", border: "1px solid #7CBD1E", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", height: "350px", justifyContent: "space-around", borderRadius: "10px"}}>
                    <h2>MISIÓN</h2>
                    <img style={{width: "22%"}} src="/us/mision.png" alt="" />
                    <p style={{margin: "0 2%"}}>Asesorar, diseñar y fabricar productos de mobiliario y carpinteria que se ajusten a las necesidades de nuestros clientes, logrando satisfacer sus espextativas economicas y de calidad.</p>
                </div>
                <div style={{width: "49%", backgroundColor: "white", border: "1px solid #7CBD1E", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", height: "350px", justifyContent: "space-around", borderRadius: "10px"}}>
                    <h2>VISIÓN</h2>
                    <img style={{width: "25%"}} src="/us/vision.png" alt="" />
                    <p style={{margin: "0 2%"}}>Ser lideres en diseño y fabricación de carpintería arquitectónica en el sector retail con diseños exclusivos, con el mejor producto, en el tiempo justo y con la mejor calidad esperada.</p>
                </div>
            </div>
        </div>
    )
}