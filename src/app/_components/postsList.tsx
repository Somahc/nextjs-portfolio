import { SimplePost } from "@/interfaces/simple-post";
import { SimplePostPreview } from "./simple-post-preview";
type Props = {
    posts: SimplePost[];
  };

export function PostsList({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
        Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-10 gap-y-10 md:gap-y-10 mb-20">
        {posts.map((post) => (
          <SimplePostPreview
            key={post.slug}
            title={post.title}
            emoji={post.emoji}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}