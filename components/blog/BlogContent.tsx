import Markdown, { ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import {
  A,
  Blockquote,
  Code,
  Details,
  Div,
  H1,
  H2,
  H3,
  Hr,
  Img,
  Li,
  Mark,
  Ol,
  P,
  Summary,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Ul,
} from "@/constants/BlogComponents";

const BlogContent = ({ data }: { data: string }) => {
  const regex = /!\[(.*)\]\((.*)\salign=".*?"\)/gi;
  const cleanedData = data.replace(regex, "![$1]($2)");

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, [rehypeExternalLinks, { target: "_blank" }]]}
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        mark: Mark,
        code: Code,
        p: P,
        ul: Ul,
        ol: Ol,
        li: Li,
        hr: Hr,
        blockquote: Blockquote,
        details: Details,
        summary: Summary,
        div: Div,
        a: A,
        table: Table,
        thead: Thead,
        tbody: Tbody,
        th: Th,
        td: Td,
        img: Img,
      }}
    >
      {cleanedData}
    </Markdown>
  );
};

export default BlogContent;
