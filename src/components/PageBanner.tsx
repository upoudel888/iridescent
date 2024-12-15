import Link from "next/link";

type PageBannerProps = {
  pageTitle: string;
};

export function PageBanner({ pageTitle }: PageBannerProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="container flex max-w-screen-xl flex-col items-center justify-between gap-2 bg-gradient-to-r from-[#fbb232] to-[#fa9004] px-4 py-16 md:flex-row md:px-8">
        <h1 className="text-center text-4xl font-semibold">
          Iridescent - {pageTitle}
        </h1>
        <p className="text-lg font-semibold">
          <span>
            <Link
              className="hover:text-BlueDark transform duration-300"
              href="/"
            >
              Home
            </Link>
          </span>
          / <span className="text-BlueDark">{pageTitle}</span>
        </p>
      </div>
    </div>
  );
}
