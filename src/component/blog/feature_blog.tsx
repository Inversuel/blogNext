import React from "react";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import AuthorImage from "../author_img";
import { AllArticle } from "@/lib/query/all_article.type";

type FeatureBlogProps = {
  data: AllArticle;
};

const FeatureBlog = ({
  data: { title, smallDescription, author, _publishedAt, category, id },
}: FeatureBlogProps) => {
  return (
    <article className="relative w-full h-[720px] z-[1] flex flex-col justify-end p-8">
      <Image
        src="/static/woman_seeting_temp.png"
        alt="woman_seeting_temp"
        fill
        className="object-cover z-[-1] rounded-lg brightness-75"
      />
      <div className="flex flex-col gap-4 z-[2]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Typography variant="h3" className="text-white">
              {title}
            </Typography>
            <Typography className="text-white">{smallDescription}</Typography>
          </div>
          <Link
            href={`blog/${id}`}
            aria-label="Link to learn more about feature blog post"
          >
            <ArrowUpRight className="text-white cursor-pointer" />
          </Link>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-9">
            <div className="flex flex-col gap-3">
              <Typography className="text-white">Written by</Typography>
              <div className="flex gap-4 items-center justify-center">
                <AuthorImage src={author.photo.url} alt={author.photo.url} />
                <Typography className="text-white">{author.name}</Typography>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Typography className="text-white">Published on</Typography>
              <Typography className="text-white">{_publishedAt}</Typography>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Typography className="text-white">File under</Typography>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-white">
                category
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeatureBlog;
