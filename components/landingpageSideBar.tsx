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
          <Link href={currentPath === "/" ? "/" : "/admin"}>
            <li>{currentPath === "/" ? "Home" : "Dashboard"}</li>
          </Link>
          <Link href={currentPath === "/" ? "/contact" : "/product"}>
            <li>{currentPath === "/" ? "Contact" : "Product"}</li>
          </Link>

          <Link href={currentPath === "/" ? "/about" : "/customers"}>
            <li>{currentPath === "/" ? "About" : "Customers"}</li>
          </Link>
          <Link href={currentPath === "/" ? "/auth" : "/sales"}>
            <li>{currentPath === "/" ? "Account" : "Sales"}</li>
          </Link>
        </ul>
      </DrawerContent>
    </Drawer>
  );
}

export default SideBar;
