import Image from 'next/image';
import type { Photo } from '@/lib/photos';

/** Real photos in even tiles; the caption sits under each photo. */
export function Gallery({ items, columns = 3 }: { items: { photo: Photo; caption: string }[]; columns?: 2 | 3 }) {
  return (
    <ul className={`grid gap-5 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}>
      {items.map(({ photo, caption }) => (
        <li key={photo.src}>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-mint ring-1 ring-line">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 hover:scale-[1.03]" />
            </div>
            <figcaption className="mt-3 text-[15px] leading-relaxed text-muted">{caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
