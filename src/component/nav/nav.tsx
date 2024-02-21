import React from "react";
import { Typography } from "../ui/typography";
import Link from "next/link";
import { Button } from "../ui/button";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between container px-4 md:px-8 lg:px-12 xl:px-24 h-20 items-center">
      <Link href="/">
        <Typography as="span">Logo blog</Typography>
      </Link>
      <div className="md:flex flex-row gap-4 items-center align-middle hidden">
        <Link href="/">
          <Typography>Home</Typography>
        </Link>
        <Link href="#">
          <Typography>Price</Typography>
        </Link>
        <Link href="/blog">
          <Typography>Blog</Typography>
        </Link>
        <Link href="#">
          <Typography>Products</Typography>
        </Link>
      </div>
      <Link href="/blog" className="block md:hidden">
        <Typography>Blog</Typography>
      </Link>
      <div className="inline-block">
        <Button variant="link">Log in</Button>
        <Button variant="default">Sign up</Button>
      </div>
    </nav>
  );
};

export default Nav;
