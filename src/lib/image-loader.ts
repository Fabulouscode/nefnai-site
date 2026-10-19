// GitHub Pages has no image optimiser, so serve the original file under the base path.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}?w=${width}`;
}
