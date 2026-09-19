import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('posts')).filter(
    (post) => !post.data.draft
  );

  const searchData = posts.map((post) => ({
    slug: post.id,
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    tags: post.data.tags,
    category: post.data.category,
  }));

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
