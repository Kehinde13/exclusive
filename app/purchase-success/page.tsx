import { Button } from '@/components/ui/button';
import prisma from '@/db/db';
import { formatCurrency } from '@/lib/formatter';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function Page({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}) {
  const paymentIntent = await stripe.paymentIntents.retrieve(searchParams.payment_intent);

  const product = await prisma.product.findUnique({
    where: { id: paymentIntent.metadata.productId },
  });

  if (product == null) return notFound();

  const isSuccess = paymentIntent.status === 'succeeded';

  // Create the download verification if the payment is successful
  let downloadVerificationId: string | null = null;
  if (isSuccess) {
    downloadVerificationId = await createDownloadVerification(product.id);
  }

  return (
    <div className="w-[90%] my-10 mx-auto space-y-8">
      <h1 className="text-4xl font-bold">
        {isSuccess ? 'Success!' : 'Error!'}
      </h1>
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
          <Button className="mt-4" size="lg" asChild>
            {isSuccess && downloadVerificationId ? (
              <a href={`/products/download/${downloadVerificationId}`}>
                Download
              </a>
            ) : (
              <Link href={`/products/${product.id}/purchase`}>Try Again</Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

async function createDownloadVerification(productId: string) {
  return (
    await prisma.downloadVerification.create({
      data: {
        productId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // Expires in 24 hours
      },
    })
  ).id;
}
