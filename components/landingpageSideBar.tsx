import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import { InputWithButton } from "./inputWithButton";
import Link from "next/link";

function SideBar() {
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
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>

          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/auth"}>
            <li>Sign Up</li>
          </Link>
        </ul>
      </DrawerContent>
    </Drawer>
  );
}

export default SideBar;
