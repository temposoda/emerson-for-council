import type { MDXComponents } from "mdx/types";
import Image from "next/image";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    img: (props) => (
      <Image
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={500}
        height={300}
        full
        {...props}
      />
    ),
    ...components,
  };
}
