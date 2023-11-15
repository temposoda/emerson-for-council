import type { MDXComponents } from "mdx/types";
import Image from "next/image";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Allows customizing built-in components, e.g. to add styling.
    img: ({ width, height, src, ...props }) => (
      <Image
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={400}
        src={String(src)}
        {...(props as any)}
      />
    ),
  };
}
