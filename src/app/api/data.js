import conn from "./route.js";
import {Productos} from './object.js'

export async function get_productos() { 
    
    const productos = await new Promise((resolve, reject) => {
        conn.query("SELECT * FROM products", (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })

    const list = await productos
    var newList = []


    for(let i=0 ; i < list.length; i++) {
        const prod = list[i]
        const obj = new Productos(prod.id, prod.nombre, prod.categoria, prod.image, prod.precio,)
        newList.push(obj)
    }

    return newList
}