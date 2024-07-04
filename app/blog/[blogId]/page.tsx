"use client";

import Markdown from "react-markdown";
import { useState, useEffect } from "react";
import { BlogItem } from "@/interfaces/blog";
import { BLOGS } from "@/constants/data";

const BlogDetails = ({ params }: { params: { blogId: string } }) => {
  const [blogDetails, setBlogDetails] = useState<BlogItem>();

  useEffect(() => {
    setBlogDetails(BLOGS.find((blog) => blog.id === params.blogId));
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="w-full">
          <Markdown>{`
## TL;DR

> This article provides a comprehensive guide on setting up a monorepo using Yarn Workspaces, featuring a NextJs frontend, NodeJs backend, and a shared common project. It explains the advantages of monorepos, such as simplified dependency management, improved code quality, and easier refactoring. The guide includes prerequisites, step-by-step instructions for initialising the monorepo and individual projects, managing dependencies, running scripts, and utilising shared code across projects.

## Introduction

Managing multiple projects and dependencies across separate repositories can be a challenging task. A monorepo simplifies this by hosting multiple projects within a single repository, making it easier to manage shared dependencies, ensure consistent code quality, and simplify refactoring. This guide introduces the concept of a monorepo, outlines its benefits, and provides a step-by-step tutorial on setting up a monorepo using Yarn Workspaces with a NextJs frontend, NodeJs backend, and a shared common project.

### What is a Monorepo?

A monorepo is a repository that consists of multiple projects commonly referred as workspaces residing inside it. It is different from a traditional repository which hosts a single project. A monorepo usually has a combination of standalone projects, projects linked to each other and common shared projects that are used over a range of different project as packages.

Monorepo can be considered as a huge culmination of all small projects which could have been their separate repositories all in one place.

### Benefits of Using a Monorepo

1. **Shared Dependencies:** Dependency management is a huge headache when it comes to managing separate projects. Using a monorepo every project in the monorepo can share the same set of dependencies, making sure every project is in the same page.
2. **Shared Packages:** Some projects contains a set of common utility functions that are duplicated across multiple projects in different repositories. Monorepo can help us remove the duplication by allowing code sharing between multiple projects, thus reducing code duplication and inconsistencies.
3. **Code Quality:** Different projects in different repositories can result in a difference in code quality. Monorepos can help maintain the code quality as linters, formatters and quality control tools needed to maintain the project are same across all projects.
4. **Version Control:** Monorepos can provide better efficiency in version control because working with a single version control system for all projects reduces the complexity of handling multiple repositories.
5. **Simplified Refactoring:** Multiple repositories will require multiple commits to accommodate refactoring changes across multiple projects. But in a monorepo changes that span multiple projects can be made in a single commit ensuring all updates are integrated simultaneously.

### Purpose and Scope of the Guide

The main purpose of this guide is to get started with building a monorepo and referencing common projects inside other projects. We will be building a NextJs frontend, NodeJs backend and a common project which will be referenced in both.

Lets get started!`}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
