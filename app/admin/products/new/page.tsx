import ProductsForm from '@/app/components/ProductsForm'
import React from 'react'

function page() {
  return (
    <div className='p-10'>
        <h1 className="text-2xl md:text-5xl font-semibold p-5">Add Products</h1>
        <ProductsForm />
    </div>
  )
}

export default page