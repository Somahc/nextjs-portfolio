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
};

export function PostHeader({ title, date, author }: Props) {
  console.log(author.name);
  return (
    <>
      {/* <PostTitle>{title}</PostTitle> */}
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      <h1 className="text-center font-bold" style={{ borderBottom: 'none' }}>{title}</h1>
      <div className="flex justify-center">
        <div className="flex flex-col items-center mr-10">
          <div className="font-semibold">
            Published
          </div>
          <DateFormatter dateString={date} />
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold">
            Written By
          </div>
          {author.name}
        </div>
      </div>
    </>
  );
}
