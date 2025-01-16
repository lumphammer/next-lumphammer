import { getPostData, getAllPostIds } from "@/lib/blog";
import styles from "../blog.module.scss";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  return (
    <article className={styles.blogPost}>
      <h1>{post.title}</h1>
      <div className={styles.meta}>
        <time>{post.date}</time>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
