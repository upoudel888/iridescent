import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Hero></Hero>
    </>
  );
}

function Hero() {
  const welcomePoem = `Deserted on a corner, a few lay eyes on me \r
                      I've had enough look of contempt; I implore you leave me be.\r
                      Careful hasty soul, I see your eyes are hungry\r
                      Gently dust me off first, and I shall not be angry.\r`;

  return (
    <div className="flex w-full justify-center">
      <div className="container flex max-w-screen-xl flex-row flex-wrap-reverse items-center justify-between gap-8 self-center px-4 py-14 sm:px-8 md:gap-0">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center md:w-5/12 md:items-start md:text-left">
          <h1 className="text-xl font-semibold uppercase">
            Poems by Ujjwal Paudel
          </h1>
          <h2 className="flex flex-col items-center justify-center md:items-start">
            <span className="font-barlow animated-text text-4xl font-bold lg:text-5xl xl:text-6xl">
              Where Words
            </span>
            <span className="font-barlow animated-text mt-2 inline-block w-fit bg-gradient-to-b from-[#fbb232] to-[#fa9004] bg-clip-text pb-2 text-3xl font-bold text-transparent lg:text-4xl xl:text-5xl">
              Take Flight
            </span>
          </h2>
          <article className="whitespace-pre-line sm:text-lg md:w-5/6">
            {welcomePoem}
          </article>
          <Button
            title="Start Reading"
            size={"lg"}
            className="flex flex-col"
            variant={"iridescent"}
          >
            <Link
              href={"/poems"}
              className="flex h-full w-full flex-row items-center gap-2"
            >
              <span>Explore Poems</span>
              <IoIosArrowForward />
            </Link>
          </Button>
        </div>
        <div className="flex w-full items-center justify-center md:h-full md:w-7/12 md:justify-end">
          <Image
            src="/images/hero.png"
            alt="Iridescent by Ujjwal Paudel"
            width="600"
            height="802"
            priority
            loading="eager"
            title="Iridescent by Ujjwal Paudel"
          ></Image>
        </div>
      </div>
    </div>
  );
}
