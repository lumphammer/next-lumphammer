import { getPostData, getAllPostIds } from "@/lib/blog";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

type Props = { params: Promise<{ id: string }> };

export default async function BlogPost({ params }: Props) {
  const { id } = await params;
  const post = await getPostData(id);

  return (
    <main className="container">
      <p>
        <time>{post.date}</time>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}
