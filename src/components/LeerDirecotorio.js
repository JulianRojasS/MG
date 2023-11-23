'use server'

import { readdir } from "fs/promises"

export default async function LeerDirecotorio () {
    try {
        const archivos = await readdir("./")
    } catch (err) {
        console.log(err)
    }
}
