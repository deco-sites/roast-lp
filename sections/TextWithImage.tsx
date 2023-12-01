import type { HTMLWidget, ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

/** @title {{{title}}} */
export interface Props {
  image: ImageWidget;
  title: string;
  text: HTMLWidget;
  invertSides?: boolean;
}

export default function Section({
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/3391/f1376df8-0e37-42fc-8320-ae89136fc002",
  title = "Main Features",
  text = "Design high-converting shopping experiences with a powerful, visual builder. Your business team with the autonomy to modify components without writing a single line of code.",
  invertSides,
} : Props) {
  return (
    <div class="bg-base-100 text-base-content">
        <div class="lg:container mx-8 md:mx-16 lg:mx-auto mb-8 lg:mb-20 pt-8  flex flex-col lg:flex-row gap-10 text-xl md:text-base xl:px-32">
            <div class={`flex flex-col lg:flex-row gap-20 items-center ${invertSides ? "lg:flex-row-reverse" : ""}`}>
                <div>
                  <Picture>
                    <Source
                      media="(max-width: 767px)"
                      src={image}
                      width={100}
                      height={100}
                    />
                    <Source
                      media="(min-width: 768px)"
                      src={image}
                      width={200}
                      height={200}
                    />
                    <img
                      class="w-full"
                      sizes="(max-width: 540px) 100vw, 30vw"
                      src={image}
                      decoding="async"
                      loading="lazy"
                    />
                  </Picture>
                </div>
                <div class="flex flex-col md:pb-8 gap-2">
                    <h3 class="flex-none text-3xl font-bold">{title}</h3>
                    <div
                        class="flex-auto"
                        dangerouslySetInnerHTML={{ __html: text }}
                    >
                    </div>
                    <div class="hidden xl:block flex-none w-40"></div>
                </div>
            </div>
        </div>
    </div>
  );
}
