import Container from "@/component/ui/container";
import { Typography } from "@/component/ui/typography";
import React from "react";
import FeatureBlog from "@/component/blog/feature_blog";
import BlogItem from "@/component/blog/item_blog";
import { request } from "@/lib/graphql";
import { allArticleQuery } from "@/lib/query/all_article";
import { AllArticle, Data } from "@/lib/query/all_article.type";
import Head from "next/head";

type BlogType = {
  posts: AllArticle[];
  featurePost: AllArticle | null;
};

const Blog = ({ posts, featurePost }: BlogType) => {
  return (
    <Container className="flex flex-col gap-4">
      <Head>
        <title>Blog page</title>
        <meta
          name="description"
          content="Blog created with Dato cms and Nextjs"
        ></meta>
      </Head>
      <Typography className="text-primary font-semibold">Our blog</Typography>
      <Typography variant="h1" className="-mt-1">
        Resources and insights
      </Typography>
      <Typography variant="mutedText">
        The latest industry news, interviews, technologies, and resources.
      </Typography>
      {featurePost !== null && <FeatureBlog data={featurePost} />}
      <hr />
      <section className="flex flex-wrap justify-start gap-5">
        {posts?.map((i) => (
          <BlogItem key={i.id} post={i} />
        ))}
      </section>
    </Container>
  );
};

export default Blog;

export async function getStaticProps() {
  const data = await request<Data>({
    query: allArticleQuery,
  });
  return {
    props: {
      posts: data?.allArticles ?? null,
      featurePost:
        data?.allArticles.find((i) => i.featureArticle === true) ?? null,
    },
  };
}
