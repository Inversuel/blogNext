import { cn } from "@/lib/utils";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section className={cn("container p-4 md:p-8 lg:p-12 xl:p-24", className)}>
      {children}
    </section>
  );
};

export default Container;
