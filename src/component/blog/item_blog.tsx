import React from "react";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { ArrowUpRight } from "lucide-react";
import AuthorImage from "../author_img";
import Link from "next/link";
import { AllArticle } from "@/lib/query/all_article.type";

type BlogItemProps = {
  post: AllArticle;
};

const BlogItem = ({
  post: { imageMain, title, smallDescription, author, category, posted, id },
}: BlogItemProps) => {
  return (
    <div className="w-96 h-md gap-2 flex flex-col">
      <Image
        src={imageMain.url}
        alt={imageMain.alt}
        height={240}
        width={240}
        className="w-full rounded-lg object-cover max-h-60"
      />
      <Typography>{category.title}</Typography>
      <Link
        href={`/blog/${id}`}
        className="justify-between flex"
        aria-label="Learn more about blog post"
      >
        <Typography variant="largeText">{title}</Typography>
        <ArrowUpRight />
      </Link>
      <Typography variant="mutedText" className="text-base line-clamp-3">
        {smallDescription}...
      </Typography>

      <div className="flex gap-4">
        <AuthorImage src={author.photo.url} alt={author.photo.alt} />
        <div className="flex flex-col justify-center gap-1">
          <Typography variant="smallText">{author.name}</Typography>
          <Typography variant="mutedText" className="text-xs">
            {posted}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
