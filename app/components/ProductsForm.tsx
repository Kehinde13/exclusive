"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency } from "@/lib/formatter";
import React, { useState } from "react";
import { addNewProduct, updateProduct } from "../admin/_actions/products";
import { useFormState, useFormStatus } from "react-dom";
import { Product } from "@prisma/client";
import Image from "next/image";

export default function ProductsForm({
  product,
}: {
  product?: Product | null;
}) {
  const [error, action] = useFormState(
    //The .bind(null, product.id) ensures that the product.id is passed as the first argument when updateProduct is called.
    product == null ? addNewProduct : updateProduct.bind(null, product.id), {}
  );
  const [price, setPrice] = useState<number | undefined>(product?.price);
  const [discount, setDiscount] = useState<number | undefined>(
    product?.discount
  );
  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={product?.name || ""}
        />
        {error.name && <div className="text-destructive">{error.name}</div>}
      </div>
      <div className="space-y-4">
        <Label htmlFor="price">Price</Label>
        <Input
          type="number"
          id="price"
          name="price"
          required
          value={price}
          onChange={(e) => setPrice(Number(e.target.value) || undefined)}
        />
        <div>{formatCurrency((price || 0) / 100)}</div>
        {error.price && <div className="text-destructive">{error.price}</div>}
        <Label htmlFor="dicount">Discount</Label>
        <Input
          type="number"
          id="discount"
          name="discount"
          required
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value) || undefined)}
        />
        <div>{formatCurrency((discount || 0) / 100)}</div>
        {error.discount && (
          <div className="text-destructive">{error.discount}</div>
        )}
        <div className="space-y-2">
          <label htmlFor="desc">Description</label>
          <Textarea
            name="desc"
            id="desc"
            required
            defaultValue={product?.description || ""}
          />
          {error.desc && <div className="text-destructive">{error.desc}</div>}
        </div>
        <div className="space-y-2">
          <label htmlFor="file">File</label>
          <Input type="file" name="file" id="file" required={product == null} />
          {product != null && (
            <div className="text-muted-foreground">{product.filePath}</div>
          )}
          {error.file && <div className="text-destructive">{error.file}</div>}
        </div>
        <div className="space-y-2">
          <label htmlFor="image">Image</label>
          <Input type="file" name="image" id="image" required={product == null} />
          {product != null && (
            <Image 
              src={product.imagePath.startsWith('/') ? product.imagePath : `/${product.imagePath}`}
              height="400"
              width="400"
              alt="product Image"
            />
          )}
          {error.image && <div className="text-destructive">{error.image}</div>}
        </div>
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}
