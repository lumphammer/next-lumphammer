import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import styles from "./blog.module.scss";

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <article key={post.id} className={styles.post}>
            <h2>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <div className={styles.meta}>
              <time>{post.date}</time>
            </div>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className={styles.readMore}>
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
