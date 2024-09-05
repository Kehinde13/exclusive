import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import { InputWithButton } from "./inputWithButton";

function SideBar() {
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden">
        <Menu/>
      </DrawerTrigger>
      <DrawerContent>
      <div className='flex items-center space-x-2 px-2 my-5'>
            <InputWithButton />
            <Heart />
            <ShoppingCart />
        </div>

        <ul className="text-center flex flex-col space-y-10 my-10">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
        </ul>
      </DrawerContent>
    </Drawer>
  );
}

export default SideBar;
