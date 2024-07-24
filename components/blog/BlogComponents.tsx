import Image from "next/image";
import { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const H1 = (props: JSX.IntrinsicElements["h1"] & ExtraProps) => {
  const { children } = props;
  return (
    <h1 className="text-[42px] font-extrabold leading-none mb-10">
      {children}
    </h1>
  );
};

export const H2 = (props: JSX.IntrinsicElements["h2"] & ExtraProps) => {
  const { children } = props;
  return (
    <h2 className="text-4xl font-extrabold leading-none mb-6">{children}</h2>
  );
};

export const H3 = (props: JSX.IntrinsicElements["h3"] & ExtraProps) => {
  const { children } = props;
  return <h3 className="text-3xl font-bold leading-none mb-4">{children}</h3>;
};

export const Mark = (props: JSX.IntrinsicElements["mark"] & ExtraProps) => {
  const { children } = props;
  return <mark className="bg-accent">{children}</mark>;
};

export const Code = (props: JSX.IntrinsicElements["code"] & ExtraProps) => {
  const { children, className } = props;
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter PreTag="div" language={match[1]} style={oneDark}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className="bg-[#24292e] rounded p-1">{children}</code>
  );
};

export const P = (props: JSX.IntrinsicElements["p"] & ExtraProps) => {
  const { children } = props;
  return <p className="my-3.5">{children}</p>;
};

export const Ul = (props: JSX.IntrinsicElements["ul"] & ExtraProps) => {
  const { children } = props;
  return (
    <ul className="list-disc marker:text-accent list-inside">{children}</ul>
  );
};

export const Ol = (props: JSX.IntrinsicElements["ol"] & ExtraProps) => {
  const { children } = props;
  return (
    <ol className="list-decimal marker:text-accent list-inside">{children}</ol>
  );
};

export const Li = (props: JSX.IntrinsicElements["li"] & ExtraProps) => {
  const { children } = props;
  return (
    <li>
      <div className="inline-block">{children}</div>
    </li>
  );
};

export const Hr = (props: JSX.IntrinsicElements["hr"] & ExtraProps) => {
  return <hr className="border-accent my-6" />;
};

export const Blockquote = (
  props: JSX.IntrinsicElements["blockquote"] & ExtraProps
) => {
  const { children } = props;
  return (
    <blockquote className="my-[15px] border-accent italic border-l-4 pl-4 font-medium">
      {children}
    </blockquote>
  );
};

export const Details = (
  props: JSX.IntrinsicElements["details"] & ExtraProps
) => {
  const { children } = props;
  return <details className="mt-10 mx-10">{children}</details>;
};

export const Summary = (
  props: JSX.IntrinsicElements["summary"] & ExtraProps
) => {
  const { children } = props;
  return <summary className="font-extrabold">{children}</summary>;
};

export const Div = (props: JSX.IntrinsicElements["div"] & ExtraProps) => {
  const { children, className } = props;
  // @ts-ignore
  if (props["data-type"]) {
    return <div className="border-accent border-l-[1px] pl-3">{children}</div>;
  }

  // @ts-ignore
  if (props["data-node-type"] === "callout") {
    return (
      <div className="bg-[#24292e] rounded border-[#2a3036] border-[1px] my-4 p-3 flex gap-4">
        {children}
      </div>
    );
  }

  // @ts-ignore
  if (props["data-node-type"] === "callout-emoji") {
    return <div className="bg-[#2a3036] rounded px-2">{children}</div>;
  }

  return <div>{children}</div>;
};

export const A = (props: JSX.IntrinsicElements["a"] & ExtraProps) => {
  const { children, node, ...rest } = props;
  return (
    <a {...rest} className="text-accent visited:text-accent hover:underline">
      {children}
    </a>
  );
};

export const Table = (props: JSX.IntrinsicElements["table"] & ExtraProps) => {
  const { children } = props;
  return <table className="w-full table-auto text-left my-5">{children}</table>;
};

export const Thead = (props: JSX.IntrinsicElements["thead"] & ExtraProps) => {
  const { children } = props;
  return (
    <thead className="text-accent bg-[#24292e] border-accent border-b-[1px]">
      {children}
    </thead>
  );
};

export const Tbody = (props: JSX.IntrinsicElements["tbody"] & ExtraProps) => {
  const { children } = props;
  return <tbody className="bg-[#2a3036]">{children}</tbody>;
};

export const Th = (props: JSX.IntrinsicElements["th"] & ExtraProps) => {
  const { children } = props;
  return <th className="px-4 py-2">{children}</th>;
};

export const Td = (props: JSX.IntrinsicElements["td"] & ExtraProps) => {
  const { children } = props;
  return <td className="px-4 py-2">{children}</td>;
};

export const Img = (props: JSX.IntrinsicElements["img"] & ExtraProps) => {
  const { children, src, alt } = props;
  return (
    <Image
      src={src || ""}
      alt={alt || ""}
      height={1200}
      width={1200}
      className="object-cover w-full h-full"
    />
  );
};
