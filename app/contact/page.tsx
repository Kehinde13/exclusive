import Image from "next/image";
import React from "react";
import phone from "@/public/assets/icons-phone.png";
import mail from "@/public/assets/icons-mail.png";
import { Input } from "@/components/ui/input";

function page() {
  return (
    <div className="my-20 md:grid grid-cols-4 mx-10 gap-10">
      <div className="col-span-1 shadow-md px-5">
        <div className="fles flex-col gap-5 my-8">
          <div className="flex gap-3 items-center mb-5">
            <Image src={phone} alt="phone icon" />
            <p className="font-semibold">Call Us</p>
          </div>
          <div className="text-sm flex flex-col gap-3">
            <p>We are available 24/7, 7 days a week</p>
            <p>Phone: +234812345678</p>
          </div>
        </div>

        <div className="fles flex-col gap-5 my-8">
          <div className="flex gap-3 items-center mb-5">
            <Image src={mail} alt="mail icon" />
            <p className="font-semibold">Write to Us</p>
          </div>
          <div className="text-sm flex flex-col gap-3">
            <p>Fill out our form and we will contact you within 24 hours</p>
            <p>Email: support@Exclusive.com</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 shadow-md p-5">
        <form>
          <div className="flex justify-between gap-5">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input type="phone" placeholder="Your Phone" />
          </div>
          <textarea
            name="message"
            id=""
            placeholder="Your message"
            className="mt-10 bg-gray-100 p-3 w-full"
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default page;
