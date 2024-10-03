import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function addProductToBasket(userId: string, productId: string) {
  // Check if the product exists
  const product = await prisma.product.findUnique({
    where: { id: productId }
  });
  if (!product) {
    throw new Error('Product not found');
  }

  // Find or create the user's basket
  let basket = await prisma.basket.findUnique({
    where: { userId: userId },
    include: { basketItems: true }
  });
  
  if (!basket) {
    basket = await prisma.basket.create({
      data: {
        userId: userId,
      },
      include: {
        basketItems: true, // Include basketItems in the created basket
      },
    });
  }

  // Check if the product is already in the basket
  const existingBasketItem = await prisma.basketItem.findFirst({
    where: {
      basketId: basket?.id,
      productId: productId
    }
  });

  if (existingBasketItem) {
    // Update the quantity if the product is already in the basket
    await prisma.basketItem.update({
      where: { id: existingBasketItem.id },
      data: { quantity: existingBasketItem.quantity += 1 }
    });
  } else {
    // Add a new BasketItem for the product
    await prisma.basketItem.create({
      data: {
        basketId: basket.id,
        productId: productId,
        quantity: 1
      }
    });
  }

  alert('Product added to basket successfully');
}
