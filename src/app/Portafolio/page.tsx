import Promo from "@/components/Prom"
import { get_productos } from "../api/data"
import ProdCard from "@/components/ProdCard"
import { Productos } from "../api/object"
import styles from '@/styles/page.module.css'

export default async function Portafolio() {
    const productos = await get_productos()

    const filter = (categoria: string, productos: Productos[]) => {
        var prodByCategory = []
        for (let i = 0; i < productos.length; i++) {
            if (prodByCategory.length < 3) {
                if (productos[i].categoria === categoria) {
                    prodByCategory.push(productos[i])
                }
            }
        }
        return prodByCategory
    }

    return (
        <div className={styles.ProductContenedor}>
            <h2>Entretenimiento | <a href={"./Portafolio/Centros de entretenimiento"}>Ver más</a></h2>
            <hr />
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {
                    filter("Centros de entretenimiento", productos).map((prod) => {
                        return (
                            <ProdCard key={prod.id} id={prod.id} img={prod.image} name={prod.nombre} category={prod.categoria} price={prod.precio} />
                        )
                    })
                }
            </div>
            <h2>Cocinas | <a href={"./Portafolio/Cocinas"}>Ver más</a></h2>
            <hr />
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {
                    filter("Cocinas", productos).map((prod) => {
                        return (
                            <ProdCard key={prod.id} id={prod.id} img={prod.image} name={prod.nombre} category={prod.categoria} price={prod.precio} />
                        )
                    })
                }
            </div>
            <h2>Closets | <a href={"./Portafolio/Closets"}>Ver más</a></h2>
            <hr />
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {
                    filter("Closets", productos).map((prod) => {
                        return (
                            <ProdCard key={prod.id} id={prod.id} img={prod.image} name={prod.nombre} category={prod.categoria} price={prod.precio} />
                        )
                    })
                }
            </div>
            <h2>Baños y lavaderos | <a href={"./Portafolio/Baños y lavaderos"}>Ver más</a></h2>
            <hr />
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {
                    filter("Baños y lavaderos", productos).map((prod) => {
                        return (
                            <ProdCard key={prod.id} id={prod.id} img={prod.image} name={prod.nombre} category={prod.categoria} price={prod.precio} />
                        )
                    })
                }
            </div>
            <h2>Mobiliario interior | <a href={"./Portafolio/Mobiliario interior"}>Ver más</a></h2>
            <hr />
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {
                    filter("Mobiliario interior", productos).map((prod) => {
                        return (
                            <ProdCard key={prod.id} id={prod.id} img={prod.image} name={prod.nombre} category={prod.categoria} price={prod.precio} />
                        )
                    })
                }
            </div>
        </div>
    )
}