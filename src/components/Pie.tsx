import styles from '@/styles/page.module.css'

export default function Pie() {
    return (
        <div className={styles.footerContenedor}>
            <footer>            
            <section>
                <ul>
                    <li>FABRICA. Cra 22 # 7-47sur, Madrid, Colombia</li>
                    <li>315 6152148</li>
                    <li>Modulares.grifer@gmail.com</li>
                </ul>
            </section>    
            <div>
                <p>¿MÁS INFORMACIÓN?</p>
                <a href="https://api.whatsapp.com/send?phone=573156152148">
                    <button>Clic Aquí</button>
                </a>
            </div>
        </footer>
        </div>
    )
}