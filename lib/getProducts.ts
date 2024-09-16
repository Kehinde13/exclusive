"use client"

import prisma from "@/db/db"

export default async function getProducts(){
   const products = await prisma.product.findMany({
        where: {isAvailable: true}
    })

    return products
}