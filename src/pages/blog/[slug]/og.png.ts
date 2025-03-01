import type { APIRoute } from "astro";
import { generateOgImage } from "../../../utils/og-image";
import { getCollection } from "astro:content";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export const prerender = false;

const fetchCover = async (imgSrc: string) => {
  console.log({ imgSrc });
  return Buffer.from(
    await fetch(imgSrc.replace("/", "dist/")).then((res) => res.arrayBuffer())
  );
};

export const GET: APIRoute = async ({ params }) => {
  const posts = await getCollection("blog");
  const post = posts.find((p) => p.id === params.slug);

  if (!post) {
    return new Response("Not Found", { status: 404 });
  }

  console.log(post.data.heroImage.src);

  const postCover =
    process.env.NODE_ENV === "development"
      ? readFileSync(
          resolve(
            post.data.heroImage.src.replace(/\?.*/, "").replace("/@fs", "")
          )
        )
      : await fetchCover(post.data.heroImage.src);

  // works on cloudflare workers
  // const postCover = await fetch(
  //   "https://maciej-garncarski.pl/favicon.png"
  // ).then((val) => val.arrayBuffer());
  // const buffer = Buffer.from(postCover);

  const imageBuffer = await generateOgImage({
    imageBuffer: postCover,
    title: post.data.title
  });

  return new Response(imageBuffer, {
    headers: {
      "Content-Type": "image/png"
    }
  });
};
