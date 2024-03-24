import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "zenn-markdown-html";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
// import { SimplePost } from "@/interfaces/simple-post";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        {/* <Header /> */}
        <article className="mb-32 znc">
          <PostHeader
            title={post.title}
            // coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};


// const apiUrl = "https://localhost:3000/posts";
// export const getPost = async ( params: Params ) => {
//   const res = await fetch(new URL(`${apiUrl}/${params.params.slug}/`), { cache: "no-cache" });
//   return (await res.json()) as SimplePost;
// }

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`
  // return { title: title }
  return {
    title,
    openGraph: {
      title,
      // images: [post.ogImage.url],
      images: "https://user0514.cdnw.net/shared/img/thumb/HIGA62_notepen_TP_V.jpg",
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
