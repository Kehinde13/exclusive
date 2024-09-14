import ProductsForm from '@/app/components/ProductsForm'
import prisma from '@/db/db'
import React from 'react'

export default async function EditProductPage({
  params: { id },
} : {
  params: { id: string}
}) {
  const product = await prisma.product.findUnique({ where: { id }})
  return (
    <div className='py-10 px-2 md:px-10'>
       <h1 className="text-2xl md:text-5xl font-semibold my-2">Edit Product</h1>
       <ProductsForm product={product}/>
    </div>
  )
}

