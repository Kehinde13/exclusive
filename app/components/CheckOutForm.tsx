"use client";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { formatCurrency } from "@/lib/formatter";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Prop = {
  product: {
    id: string
    imagePath: string
    name: string
    price: number
    description: string
  }
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export default function CheckOutForm({ product, clientSecret }: Prop) {
  return (
    <div className="w-[90%] my-10 mx-auto space-y-8">
      <div className="flex gap-4 items-center">
        <div className="aspect-video flex-shrink-0 w-1/3 relative">
          <Image
            src={product.imagePath}
            width={200}
            height={200}
            alt={product.name}
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-lg">
            {formatCurrency(product.price / 100)}
          </div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="line-clamp-3 text-muted-foreground">
            {product.description}
          </div>
        </div>
      </div>
      <Elements options={{ clientSecret }} stripe={stripePromise}>
        <Form  price={product.price}/>
      </Elements>
    </div>
  );
}

function Form({price} : {price: number}) {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <form >
    <Card>
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
       {/*  {errorMessage && (
          <CardDescription className="text-destructive">
            {errorMessage}
          </CardDescription>
        )} */}
      </CardHeader>
      <CardContent>
        <PaymentElement />
        {/* <div className="mt-4">
          <LinkAuthenticationElement
            onChange={e => setEmail(e.value.email)}
          />
        </div> */}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          size="lg"
          disabled={stripe == null || elements == null}
        >
          Purchase - ${formatCurrency(price / 100)}
        </Button>
      </CardFooter>
    </Card>
  </form>
  )
}
