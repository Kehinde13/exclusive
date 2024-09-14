import prisma from "@/db/db";
import fs from "fs/promises";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id },
    select: { filePath: true, name: true },
  });

  if (product == null) return notFound();

  const { size } = await fs.stat(product.filePath); //This gets metadata about the file, such as its size.
  const file = await fs.readFile(product.filePath); //This reads the actual file from the filesystem 
  //This splits the file path by the . character to extract the file extension (like .png, .jpg, etc.). 
  const extension = product.filePath.split(".").pop();

  return new NextResponse(file, {
    headers: {
        // This header tells the browser to treat the response as a file download
      "Content-Disposition": `attachment; filename-"${product.name}.${extension}"`,
      //This header specifies the size of the file in bytes so the browser knows how much data to expect
      "Content-Length": size.toString(), 
    },
  });
}
