import prisma from '@/db/db'
import React from 'react'
import DescriptionCard from '@/components/descriptionCard'
import { formatCurrency, formatNumber } from '@/lib/formatter'


async function getSalesData() {
    const data = await prisma.order.aggregate({
        _sum: { pricePaid: true}, // Sum of pricePaid for all orders
        _count: true // Total number of orders
    })

    return {
        amount: (data._sum.pricePaid || 0) /100,
        numberOfsales: data._count
    }
}

async function getUserData() {
    const [userCount, orderData] = await Promise.all([
        prisma.user.count(),
        prisma.order.aggregate({
            _sum: { pricePaid: true}
        }),
    ])

    return {
        userCount,
        averageValuePerUser: userCount === 0 ? 0 : (orderData._sum.pricePaid || 0) / userCount /100
    }
}

async function getProductsData() {
    const [activeProduct, inactiveProduct] = await Promise.all([
        prisma.product.count({
            where: {isAvailable: true}
        }),
        prisma.product.count({
            where: {isAvailable: false}
        })
    ])

    return {
        activeProduct, inactiveProduct
    }
}

async function page() {
  const [ SalesData, userData, productData] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProductsData()
  ])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 mx-10'>
       <DescriptionCard
        title="Sales"
        desc={` ${formatCurrency(SalesData.numberOfsales)} Orders`}
        content={formatNumber(SalesData.amount)}
       />
       <DescriptionCard
        title="Customers"
        desc={` ${formatCurrency(userData.averageValuePerUser)} Average value`}
        content={formatNumber(userData.userCount)}
       />
       <DescriptionCard
        title="Products"
        desc={` ${formatNumber(productData.inactiveProduct)} Inactive Products`}
        content={formatNumber(productData.activeProduct)}
       />
    </div>
  )
}

export default page