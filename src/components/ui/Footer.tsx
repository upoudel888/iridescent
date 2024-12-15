import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiQuillInk } from "react-icons/gi";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const socialButtonStyles =
    "rounded-full bg-Gray p-2 text-black ring-1 ring-black transition duration-500 hover:bg-primaryDark hover:ring-primaryDark";

  return (
    <div className="flex w-full justify-center">
      <div className="container flex max-w-screen-xl flex-col px-4 text-center md:px-8">
        <div className="flex flex-col items-center">
          <Link href={"/"} className="logo flex flex-row gap-2 text-xl">
            <span className="text-4xl text-primaryDark">
              <GiQuillInk />
            </span>
            <span className="leading-10">Iridescent</span>
          </Link>
          <div className="flex w-full flex-row items-center justify-center gap-4 border-b-[1px] border-gray-400 py-4">
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
        <span className="py-4 text-sm">
          &copy; Ujjwal Paudel {year} | All Rights Reserved
        </span>
      </div>
    </div>
  );
}
