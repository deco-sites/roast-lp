import type { ImageWidget } from "apps/admin/widgets.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  logo?: ImageWidget;
  /** @format textarea */
  title?: string;
  /** @format textarea */
  headline?: string;
  bgImage?: ImageWidget;
  links?: Array<Link>;
}

export default function Hero({
  bgImage,
  title = "deco.cx",
  logo = "/logo.svg",
  headline =
    "The digital experience platform that combines performance and personalization for the ultimate sales results.",
  links = [
    { title: "Official website", "href": "https://deco.cx/" },
    { title: "Linkedin", "href": "https://www.linkedin.com/company/deco-cx/" },
    { title: "Discord", "href": "https://deco.cx/discord" },
  ],
}: Props) {
  return (
    <header
      class={`${bgImage ? "bg-base-100 text-base-content py-10 bg-cover bg-center" : ""}`}
      style={{
      "background-image": bgImage
        ? `url(${bgImage})`
        : "",
    }}>
      <div class="lg:container mx-8 md:mx-16 lg:mx-auto mt-8 md:mt-12 mb-28 text-xl md:text-base">
        <div class="mb-10 md:mb-20">
          <img
            class="object-cover w-20"
            src={logo}
            alt={title}
          />
        </div>
        <div class="font-bold text-3xl lg:text-6xl leading-tight lg:leading-none xl:w-5/6">
          {title}
        </div>
        <div class="xl:w-5/6 mt-6">
          {headline}
        </div>
        {!!links?.length && (
          <ul class="mt-12 flex flex-col md:flex-row gap-2 md:gap-4">
            {links.map(({ href, title }) => (
              <li>
                <a target="_blank" href={href} aria-label={title} class="rounded-sm text-xl font-semibold px-4 py-3 bg-base-content text-base-100">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
