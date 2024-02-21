import { cn } from "@/lib/utils";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section className={cn("container py-4 md:py-8 lg:py-12 xl:py-24", className)}>
      {children}
    </section>
  );
};

export default Container;
