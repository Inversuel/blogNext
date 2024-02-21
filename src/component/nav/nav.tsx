import React from "react";
import { Typography } from "../ui/typography";
import Link from "next/link";
import { Button } from "../ui/button";

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between container h-20 items-center">
      <Typography as="span">
        Logo blog
      </Typography>
      <div className="flex flex-row gap-4 items-center align-middle">
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
      <div className="inline-block">
        <Button variant="link">Log in</Button>
        <Button variant="default">Sign up</Button>
      </div>
    </nav>
  );
};

export default Nav;
