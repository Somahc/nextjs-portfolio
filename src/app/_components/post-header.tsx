import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  // coverImage: string;
  date: string;
  author: Author;
  emoji: string;
};

export function PostHeader({ title, date, author, emoji }: Props) {
  return (
    <>
      {/* <PostTitle>{title}</PostTitle> */}
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      <div className="text-center">
        <div className="text-8xl">{emoji}</div>
        <div className="text-center text-5xl font-bold" style={{ borderBottom: 'none' }}>{title}</div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center mr-10">
          <div style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}>
            Published
          </div>
          <DateFormatter dateString={date} />
        </div>
        <div className="flex flex-col items-center">
          <div style={{ fontWeight: "800", fontFamily: "Noto Sans JP" }}>
            Written By
          </div>
          {author.name}
        </div>
      </div>
    </>
  );
}
