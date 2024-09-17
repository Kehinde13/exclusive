import CheckOutForm from "@/app/components/CheckOutForm";
import prisma from "@/db/db";
import { notFound } from "next/navigation";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (product == null) return notFound();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: product.price, // The price of the product is passed to Stripe (in cents)
    currency: "USD", // Currency is set to USD
    metadata: { productId: product.id} // Optional metadata about the product
  })

  if(paymentIntent.client_secret == null) {
    throw Error("stripe failed to create payment intent")
  }
  return (
    <div>
        <CheckOutForm 
        product={product} 
        clientSecret={paymentIntent.client_secret}
        />
    </div>
  )
}
