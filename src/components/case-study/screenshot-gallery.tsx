import Image from "next/image";
import type { ProjectImage } from "@/types/content";

/** Horizontal strip of phone screenshots. Scrolls on small screens, wraps to a grid on wide ones. */
export function ScreenshotGallery({ images, productName }: { images: ProjectImage[]; productName: string }) {
  if (images.length === 0) return null;
  return (
    <ul
      className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible"
      aria-label={`${productName} screenshots`}
    >
      {images.map((img) => (
        <li key={img.src} className="w-[62vw] shrink-0 snap-start sm:w-56 lg:w-auto">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="(min-width: 1024px) 210px, (min-width: 640px) 224px, 62vw"
            className="w-full rounded-xl border border-border bg-surface-2"
          />
        </li>
      ))}
    </ul>
  );
}
