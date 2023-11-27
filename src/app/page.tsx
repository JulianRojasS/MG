import Prom from '@/components/Prom'
import TexCard from "@/components/TextCard"
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <>
      <Prom/>
      <div style={{display: 'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>
                <TexCard props={{link: "./", tittle: 'Bienvenido', paragraph: 'Con nosotros encontraras solucion a todas tus necesidades en carpinteria arquitectonica, cocinas, muebles de baño, closets, vestier y mucho mas. Comunicate, te asesoramos y guiamos en el proceso.', button: 'Here'}}/>
                <TexCard props={{link: "./", tittle: 'Bienvenido', paragraph: 'Con nosotros encontraras solucion a todas tus necesidades en carpinteria arquitectonica, cocinas, muebles de baño, closets, vestier y mucho mas. Comunicate, te asesoramos y guiamos en el proceso.', button: 'Here'}}/>
                <TexCard props={{link: "./Portafolio", tittle: 'Portafolio', paragraph: 'Nuestra experiencia nos permite ofrecerte una gran variedad de productos y soluciones a tus necesidades.', button: 'Ir'}}/>
                <div className={styles.textCard} style={{border: 0}}>
                    <img src="/slider/PROM9.jpeg" alt="none" />
                </div>
                <TexCard props={{link: "./", tittle: 'Que nos hace diferentes', paragraph: 'Nuestro valor agregado se genera solucionando tus requerimientos en mobiliario y carpintería atravez de propuestas en diseño. Ajustamos todo a tu necesidad contemplando espacios, funcionalidad, materiales y sobretodo tu presupuesto para llegar a tu hogar de forma amigable y ser parte importante en los diferentes ambientes y emociones para tu familia.', button: 'Here'}}/>
                <div className={styles.textCard} style={{border: 0}}>
                    <img src="/slider/PROM1.jpeg" alt="none" />
                </div>
            </div>
            <h2 style={{textAlign: "center", margin: "10px 0"}} >Donde encontrarnos</h2>
            <div style={{display: 'flex', justifyContent: 'space-around', flexWrap:'wrap', height: "400px"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.21737194837!2d-74.1543039921875!3d4.673242800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c8f32ee1253%3A0x5790f5c7e70a79fd!2sCrimuebles!5e0!3m2!1ses!2sco!4v1676566955324!5m2!1ses!2sco" width="96%" height="80%" loading="eager"></iframe>
            </div>
    </>
  )
}
