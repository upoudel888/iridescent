import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiQuillInk } from "react-icons/gi";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const socialButtonStyles =
    "rounded-full bg-Gray p-2 text-black ring-1 ring-black transition duration-300 hover:bg-black hover:text-white hover:ring-Blue";

  return (
    <div className="w-full flex justify-center">
      <div className="container max-w-screen-xl px-4 md:px-8 text-center flex flex-col">
        <div className="flex flex-col items-center">
          <div className="logo text-xl flex flex-row gap-2 mt-4">
            <span className="text-4xl">
              <GiQuillInk />
            </span>
            <span className="leading-10">Iridescent</span>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 border-b-[1px] border-gray-400 py-4 w-full">
            <Link href="/" className={`${socialButtonStyles}`}>
              <FaFacebookF />
            </Link>
            <Link href="/" className={`${socialButtonStyles}`}>
              <FaInstagram />
            </Link>
            <Link href="/" className={`${socialButtonStyles}`}>
              <FaXTwitter />
            </Link>
            <Link href="/" className={`${socialButtonStyles}`}>
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        <span className="text-sm py-4">
          &copy; Ujjwal Paudel {year} | All Rights Reserved
        </span>
      </div>
    </div>
  );
}
