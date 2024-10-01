import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { InputWithButton } from "./inputWithButton";
import Link from "next/link";
import Cart from "@/app/components/ShoppingCart";

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
          <Cart />
        </div>

        <ul className="text-center flex flex-col space-y-10 my-10">
          <Link href={currentPath.includes("/admin") ? "/admin" : "/"}>
            <li>{currentPath.includes("/admin") ? "Dashboard" : "Home"}</li>
          </Link>
          <Link href={currentPath.includes("/admin") ? "/admin/products" : "/contact"}>
            <li>{currentPath.includes("/admin") ? "Product" : "Contact"}</li>
          </Link>

          <Link href={currentPath.includes("/admin") ? "/admin/customers" : "/about"}>
            <li>{currentPath.includes("/admin") ? "Customers" : "About"}</li>
          </Link>
          <Link href={currentPath.includes("/admin") ? "/admin/sales" : "/auth"}>
            <li>{currentPath.includes("/admin") ? "Sales" : "Account"}</li>
          </Link>
        </ul>
      </DrawerContent>
    </Drawer>
  );
}

export default SideBar;
