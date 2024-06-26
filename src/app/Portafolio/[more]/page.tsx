import { get_productos } from "@/app/api/data"
import { Productos } from "@/app/api/object"
import ProdCard from "@/components/ProdCard"
import styles from "@/styles/page.module.css"

export default async function Page({ params }: { params: { more: string } }) {
    const productos = await get_productos()
    const categoria = params.more.replaceAll("%20", " ").replace("%C3%B1", "ñ")
    
    const filter = (categoria: string, productos: Productos[]) => {
        var prodByCategory = []
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].categoria === categoria) {
                prodByCategory.push(productos[i])
            }
        }
        return prodByCategory
    }

    
    return (
        <div className={styles.ProductContenedor}>
            <h2 style={{fontSize: "50px", textAlign: "center"}}>{categoria}</h2>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                {
                    filter(categoria, productos).map((prod) => {
                        return <ProdCard key={prod.id} id={prod.id} img={prod.image} name={prod.nombre} category={prod.categoria} price={prod.precio} />
                    })
                }
            </div>
        </div>
    )
}