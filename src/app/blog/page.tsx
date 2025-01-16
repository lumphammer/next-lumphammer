import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <main className="container">
      <h1>Blog</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </h2>
          <p>
            <time>{post.date}</time>
          </p>
          <p>{post.excerpt}</p>
          <Link href={`/blog/${post.id}`}>Read more →</Link>
        </article>
      ))}
    </main>
  );
}
