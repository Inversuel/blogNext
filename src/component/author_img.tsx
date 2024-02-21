import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type AuthorImageProps = {
  width?: number;
  height?: number;
  src: string;
  alt?: string;
  className?: string;
};

const AuthorImage = ({
  width = 40,
  height = 40,
  src,
  alt = "Author photo",
  className,
}: AuthorImageProps) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={cn("rounded-full w-10 h-10 object-cover", className)}
    />
  );
};

export default AuthorImage;
