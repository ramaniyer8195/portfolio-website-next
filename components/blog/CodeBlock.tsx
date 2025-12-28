"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FaCheck } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";

const CodeBlock = ({
  children,
  match,
}: {
  children: React.ReactNode;
  match: RegExpExecArray;
}) => {
  const [showCopy, setShowCopy] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  const handleCopyClick = () => {
    setIsCopying(true);
    navigator.clipboard.writeText(String(children).replace(/\n$/, ""));

    setTimeout(() => {
      setIsCopying(false);
    }, 2000);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowCopy(true)}
      onMouseLeave={() => setShowCopy(false)}
    >
      {(showCopy || isCopying) && (
        <div
          className={`absolute top-4 right-4 cursor-pointer ${
            isCopying ? "text-accent" : "text-white"
          }`}
          onClick={handleCopyClick}
        >
          {isCopying ? <FaCheck size="1.2em" /> : <FaCopy size="1.2em" />}
        </div>
      )}
      <SyntaxHighlighter PreTag="div" language={match[1]} style={oneDark}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
