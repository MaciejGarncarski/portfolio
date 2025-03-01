import type { APIRoute } from "astro";
import { generateOgImage } from "../../../utils/og-image";
import { getCollection } from "astro:content";
// import { readFileSync } from "node:fs";
// import { resolve } from "node:path";

export const prerender = true;

export const GET: APIRoute = async ({ params }) => {
  const posts = await getCollection("blog");
  const post = posts.find((p) => p.id === params.slug);

  if (!post) {
    return new Response("Not Found", { status: 404 });
  }

  // const postCover = readFileSync(
  //   process.env.NODE_ENV === "development"
  //     ? resolve(post.data.heroImage.src.replace(/\?.*/, "").replace("/@fs", ""))
  //     : resolve(post.data.heroImage.src.replace("/", "dist/"))
  // );

  const postCover = await fetch("/favicon.png").then((val) =>
    val.arrayBuffer()
  );
  const buffer = Buffer.from(postCover);

  const imageBuffer = await generateOgImage({
    imageBuffer: buffer,
    title: post.data.title
  });

  return new Response(imageBuffer, {
    headers: {
      "Content-Type": "image/png"
    }
  });
};

export async function getStaticPaths() {
  const blogPosts = await getCollection("blog");
  return blogPosts.map((post) => ({
    params: { slug: post.id },
    props: { post }
  }));
}
