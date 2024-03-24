import { getAllPosts } from "@/lib/api";
// import { MoreStories } from "../_components/more-stories";
import { PostsList } from "../_components/postsList";

export default function Posts() {
    const allPosts = getAllPosts();

    return (
        <>
            {/* <MoreStories posts={allPosts} /> */}
            <PostsList posts={allPosts} />
        </>
    )
}
