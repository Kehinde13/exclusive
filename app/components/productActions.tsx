"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";
import { deleteProduct, toggleProductAvailabilty } from "../admin/_actions/products";
import { useRouter } from "next/navigation";

export function ActiveToggleDropdownItem({
    id,
    isAvailable
} : {
    id: string,
    isAvailable: boolean
}) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    return (
        <DropdownMenuItem 
         disabled={isPending}
         onClick={() => {
            startTransition(async () => {
                await toggleProductAvailabilty(id, !isAvailable)
                router.refresh()
            })
        }}>
        {isAvailable ? "Deactivate" : "Activate"}
        </DropdownMenuItem>
    )
}


export function DeleteDropdownItem({
    id,
    disabled
} : {
    id: string,
    disabled: boolean
}) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    return (
        <DropdownMenuItem 
         disabled={disabled || isPending}
         onClick={() => {
            startTransition(async () => {
                await deleteProduct(id)
                router.refresh()
            })
        }} className="text-red-500">
         Delete
        </DropdownMenuItem>
    )
}
