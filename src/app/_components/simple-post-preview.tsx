import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  emoji: string;
  date: string;
  author: Author;
  slug: string;
};

export function SimplePostPreview({
  title,
  emoji,
  date,
  author,
  slug,
}: Props) {
  return (
    <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
    >
        <div className="p-3 border dark:border-white border-black rounded hover:scale-105 duration-150">
        <div className="my-10 text-9xl text-center">
            {emoji}
        </div>
        <h3 className="text-3xl text-center mb-3 leading-snug">
            {/* <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
            >
            {title}
            </Link> */}
            {title}
        </h3>
        <div className="text-lg mb-4 text-center">
            <DateFormatter dateString={date} />
        </div>
        {/* {author.name} */}
        </div>
    </Link>
  );
}
