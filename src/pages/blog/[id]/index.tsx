import Container from "@/component/ui/container";
import { request } from "@/lib/graphql";
import { oneArticleQuery } from "@/lib/query/one_article";
import { Article, Data } from "@/lib/query/one_article.type";
import { Data as DataArray } from "@/lib/query/all_article_id";
import React from "react";
import { allArticleIdQuery } from "@/lib/query/all_article_id";
import { Typography } from "@/component/ui/typography";
import Image from "next/image";
import dayjs from "dayjs";
import AuthorImage from "@/component/author_img";
import { StructuredText } from "react-datocms";
import Head from "next/head";

type BlogPost = {
  post: Article | null;
};

const BlogPost = ({ post }: BlogPost) => {
  return (
    <Container className="flex flex-col items-start gap-5 max-w-3xl">
      <Head>
        <title>Blog Nextjs</title>
        <meta
          name="description"
          content="Blog created with Dato cms and Nextjs"
        ></meta>
      </Head>
      <Typography variant="smallText" className="text-primary">
        Published {dayjs(post?._publishedAt).format("DD MM YYYY")}
      </Typography>
      <Typography variant="h1">{post?.title}</Typography>
      <Typography>{post?.smallDescription}</Typography>
      <Image
        src={post?.imageMain.url ?? ""}
        alt={post?.imageMain.alt ?? ""}
        width={1216}
        height={650}
      />
      <StructuredText
        data={post?.description}
        renderBlock={({ record }) => {
          console.log("record.__typename", record.__typename);
          return <div></div>;
        }}
      />
      <hr />
      <div className="flex flex-row gap-4 items-center self-start">
        <AuthorImage src={post?.author.photo.url ?? ""} />
        <Typography variant="mutedText" className="text-xs">
          {post?.author.name}
        </Typography>
      </div>
    </Container>
  );
};

export default BlogPost;

export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = await request<Data>({
    query: oneArticleQuery,
    variables: {
      id: params.id,
    },
  });
  return {
    props: {
      post: data?.article ?? null,
    },
  };
}

export async function getStaticPaths() {
  const data = await request<DataArray>({
    query: allArticleIdQuery,
  });
  const paths = data?.allArticles?.map((article) => ({
    params: { id: article.id },
  }));
  return { paths, fallback: false };
}
