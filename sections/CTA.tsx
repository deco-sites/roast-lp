export interface Props {
  text: string;
  href: string;
}

export default function Section({
  text,
  href,
} : Props) {
  return (
    <div class="bg-base-100 text-base-content pb-16">
        <div class="lg:container mx-8 md:mx-16 lg:mx-auto mb-8 pt-8 xl:px-32 flex items-center justify-center">
            <a target="_blank" href={href} aria-label={text} class="rounded-sm text-2xl font-semibold px-6 py-4 bg-primary text-primary-content">
                {text}
            </a>
        </div>
    </div>
  );
}
