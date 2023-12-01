import type { HTMLWidget } from "apps/admin/widgets.ts";

/** @title {{{title}}} */
export interface Paragraph {
  title: string;
  text: HTMLWidget;
}

export interface Props {
  title?: string;
  items?: Array<Paragraph>;
}

export default function Section({
  title = "Main Features",
  items = [
    {
      title: "Easy to use page builder",
      text:
        "Design high-converting shopping experiences with a powerful, visual builder. Your business team with the autonomy to modify components without writing a single line of code.",
    },
    {
      title: "Create A/B tests in 5 secs",
      text:
        "No complicated set-up here, simply select a page or section you want to test ideas on, and get testing! Try experimenting with different headlines, sales copy, or product descriptions and quickly learn which idea converts the best.",
    },
    {
      title: "Craft unique experiences",
      text:
        "Conversion-driven storefronts that are optimized for each audience, increasing engagement and conversion rates.",
    },
    {
      title: "Analyze your data",
      text:
        "Integrated real-time analytics to identify the greatest opportunities to boost conversions.",
    },
  ],
}: Props) {
  return (
    <div class="bg-base-100 text-base-content pt-16 pb-4">
        <div class="lg:container mx-8 md:mx-16 lg:mx-auto mb-8 pt-8 flex flex-col lg:flex-row gap-10 text-xl md:text-base xl:px-32">
            <h2 class="flex-none lg:w-56 font-bold pb-2 lg:border-none hidden">
                {title}
            </h2>
            <div class="grid grid-flow-row lg:grid-flow-col gap-8">
                {items.map((item) => {
                return (
                    <div class="flex flex-col md:pb-8 gap-2">
                        <h3 class="flex-none text-3xl font-bold">{item.title}</h3>
                        <div
                            class="flex-auto"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                        >
                        </div>
                        <div class="hidden xl:block flex-none w-40"></div>
                    </div>
                );
                })}
            </div>
        </div>
    </div>
  );
}
