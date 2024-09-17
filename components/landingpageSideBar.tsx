import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import { InputWithButton } from "./inputWithButton";
import Link from "next/link";

type Prop = {
  currentPath: string
}

function SideBar({currentPath}: Prop) {
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden">
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex items-center space-x-2 px-2 my-5">
          <InputWithButton />
          <Heart />
          <ShoppingCart />
        </div>

        <ul className="text-center flex flex-col space-y-10 my-10">
          <Link href={currentPath === "/admin" ? "/admin" : "/"}>
            <li>{currentPath === "/admin" ? "Dashboard" : "Home"}</li>
          </Link>
          <Link href={currentPath === "/admin" ? "/admin/products" : "/contact"}>
            <li>{currentPath === "/admin" ? "Product" : "Contact"}</li>
          </Link>

          <Link href={currentPath === "/admin" ? "/admin/customers" : "/about"}>
            <li>{currentPath === "/admin" ? "Customers" : "About"}</li>
          </Link>
          <Link href={currentPath === "/admin" ? "/admin/sales" : "/auth"}>
            <li>{currentPath === "/admin" ? "Sales" : "Account"}</li>
          </Link>
        </ul>
      </DrawerContent>
    </Drawer>
  );
}

export default SideBar;
