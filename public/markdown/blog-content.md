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

### Overview of Yarn Workspaces

There are several tools available to manage a monorepo, a few of them being `Yarn Workspaces`, `Lerna`, `NX` etc. But in this article we will focus on `Yarn Workspaces` as they are very easy to setup and getting started.

`Yarn Workspaces` is a powerful feature of the Yarn package manager designed to optimise the management of multiple projects within a single repository.

### Purpose and Scope of the Guide

The main purpose of this guide is to get started with building a monorepo and referencing common projects inside other projects. We will be building a NextJs frontend, NodeJs backend and a common project which will be referenced in both.

Lets get started!

## Prerequisites

This guide assumes you have a basic knowledge of Javascript and NodeJs. Other than this you need a few pre-requisites installed.

### Install Node and Yarn

1. **Install Node:** Download and install Node from the official website [here](https://nodejs.org/en/download/package-manager).
2. **Install Yarn:** Once Node is installed open your terminal and run the following command to install yarn globally.

```bash
npm i -g yarn
```

Once you are done setting up this we can jump straight into setting up our project.

## Setting Up the Project

Setting up a monorepo with yarn workspaces is very straightforward.

### Initialising a New Yarn Project

First we need to create a new folder which will hold our monorepo. To do that go to the directory you need to create the monorepo and run the following command to create a new folder named `demo_monorepo`.

```bash
mkdir demo_monorepo
```

Once the folder is created run the following command to get into the created `demo-monorepo` folder.

```bash
cd demo_monorepo
```

Once inside the directory, we can start by initialising a new yarn project which will serve as our monorepo by running the command below.

```bash
yarn init -y
```

This will add a `package.json` file in the repository. Now lets configure the `package.json` so that the directory acts as a monorepo.

Update the `package.json` file in the root folder to include `frontend`, `backend` and `common` folders as workspaces and mark the `demo_monorepo` package as `private`. This is because yarn workspaces only work on private packages.

After updating your `package.json` this is how it should look like

```json
{
  "name": "demo_monorepo",
  "version": "1.0.0",
  "main": "index.js",
  "author": "<your-name>",
  "license": "MIT",
  "private": true,
  "workspaces": ["frontend", "backend", "common"]
}
```

With this, we have successfully configured our monorepo.

## Creating and Managing Workspaces

Once we have our `package.json` setup we need to start creating our subdirectories for the workspaces we added before. Create all the subdirectories with the same name as mentioned in the workspaces array. In this case, it would be `frontend`, `backend` and `common`.

This is what your folder structure should look like after that.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1718952640496/69cd9f9f-745e-4030-9d2e-f4935f1e6e5b.png align="center")

Now we have to initialise each of the workspace to hold the individual projects. After initialising each project we will update the name of the project in the `package.json` as it is a good convention to name packages and projects inside the monorepo to have the name of `@<monorepo_name>/<package_name>`.

### Initialising Backend

We will be initialising a new NodeJs project for our backend. To do so, open the terminal and navigate to the `backend` folder inside the monorepo and initialise a new project by running the following command.

```bash
yarn init -y
```

This command will add a `package.json` file to the `backend` folder. Update the `package.json` and edit the name to be `@demo_monorepo/backend`. Your `package.json` should look like this.

```json
{
  "name": "@demo_monorepo/backend",
  "version": "1.0.0",
  "main": "index.js",
  "author": "<your_name>",
  "license": "MIT"
}
```

### Initialising Frontend

We will be initialising a new NextJs project for our frontend. To do so, open the terminal and navigate to the `frontend` folder inside the monorepo and initialise a new NextJs app by running the following command.

```bash
npx create-next-app ./
```

Press `y` if prompted to install `create-next-app` and follow the prompts to setup the project as per your needs.

For this project we the following settings:-

1. Typescript (Yes)
2. ESLint (Yes)
3. Tailwind CSS (No)
4. `src/` directory (Yes)
5. App Router (No)
6. Customise Default Import (No)

Once the project is initialised open the `package.json` file and update the name of the project to `@demo_monorepo/frontend`. Also, remove the private property from the `package.json` file that was added by default by `create-next-app`. Your `package.json` should look like this.

```json
{
  "name": "@demo_monorepo/frontend",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.4"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.4"
  }
}
```

### Initialising Common

We will be initialising a new project for our common project. To do so, open the terminal and navigate to the `common` folder inside the monorepo and initialise a new project by running the following command.

```bash
yarn init -y
```

This command will add a `package.json` file to the `common` folder. Update the `package.json` and edit the name to be `@demo_monorepo/common`. Your `package.json` should look like this.

```json
{
  "name": "@demo_monorepo/common",
  "version": "1.0.0",
  "main": "index.js",
  "author": "<your_name>",
  "license": "MIT"
}
```

## Dependency Management

### Adding Dependencies to Backend

After we renamed our backend project, we start by adding dependencies that are specific to that project like `express`, `cors` and `dotenv`. We can do this by accessing the workspace from the root directory.

Open terminal and navigate to the root directory of the monorepo and run the following command.

```bash
yarn workspace @demo_monorepo/backend add express cors dotenv
```

### Adding Dependencies to Common

After we renamed our common project, we start by adding dependencies that are specific to that project in our case `uuid`. We can do this by accessing the workspace from the root directory.

Open terminal and navigate to the root directory of the monorepo and run the following command.

```bash
yarn workspace @demo_monorepo/common add uuid
```

Dependencies to the `frontend` are added by default when bootstrapping the project with `create-next-app`.

### Adding Shared Dependencies

This is one of the advantages of having a monorepo, wherein you can share your common dependencies in one place and the versions will be maintained throughout the project. To add common dependencies, navigate to the root folder and run the following command.

```bash
yarn add <package_name> -W
```

We have to explicitly set the workspace flag `-W` to ensure we have to install these dependencies to the workspace root folder.

## Scripts and Commands

Now lets see how we can add scripts to individual workspaces as well as how to access different workspace scripts from the root folder.

### Running Scripts in Individual Workspaces

To run scripts in a specific workspace you can either `cd` into the directory and run the command directly with yarn like follows.

```bash
cd frontend
yarn dev
```

An alternate way is to directly access the workspace from root using the `workspace` options and run a particular script like follows.

```bash
yarn workspace @demo_monorepo/frontend dev
```

Both of these ways can run any script in the workspace as long as it is defined in the `package.json` file of the workspace you are trying to access.

### Running Scripts Across All Workspaces

Sometimes we might need to run a similar script on all the packages inside our monorepo. For example, publishing all packages using npm publish, or running builds etc.

For that we can run the following command at the root level.

```bash
yarn workspaces run build
```

Note:- This will fail if any workspace doesn't have the script named `build` in them. So, be careful when running commands across all workspaces. Also, note that the command is plural `workspaces` and not `workspace` like when accessing an individual workspace.

## Using Common in Frontend & Backend

Now that we have setup the entire project, we can start writing core logic for our projects viz. `Frontend`, `Backend` and `Common`. Let's assume we have a function called `generateUuid` exported from the `common` project from the file `common/src/utils`.

We will use this scenario to understand how to use that function in backend and frontend respectively.

### Using Common in Backend

To use any project directly into another project we can specify it as a dependency in the `package.json`. For the backend project we can modify the `package.json` to include the common project. However, the common project must be built before it can be used as a dependency in another project.

For this we must build the common project into the `dist` folder (or any other folder of your choice), and then modify the backend's `package.json` to add it like follows.

```json
{
  // rest of the package.json
  "dependencies": {
    // rest of the dependencies
    "@demo_monorepo/common": "file:../common/dist"
  }
}
```

Once we declare this in the dependency list we can access any exports from common project into our backend project as follows.

```javascript
import { generateUuid } from "@demo_monorepo/common";
```

Every time there is an update in common project, to get that in the backend project, we need to perform the following steps:-

1. Rebuild the common folder
2. Run `yarn` again in the backend project to update the common dependency

### Using Common in Frontend

As our frontend is built on NextJs we can add an experimental feature to include other folders into our build directory. This will help us directly reference common project as a part of the frontend project itself.

To achieve this we must modify the `next.config.js` file and add the experimental feature `externalDir` to it as follows.

```javascript
module.exports = {
  // rest of the exports
  experimental: {
    // rest of the experimental features
    externalDir: ["@demo_monorepo/common"],
  },
};
```

We mention the name of the project (from the `package.json`) we want to add to our project as an external directory.

Once we add that project in the `externalDir` we can access the project like we access any other folder in the project as follows.

```javascript
import { generateUuid } from "../common/src/utils";
```

Here the project's folder name is `common` so we can access it directly and import from the file.

As we are directly considering the `common` folder as a part of our project there is no need to perform any extra steps post any changes in common project.

## Conclusion

A monorepo, managed effectively with Yarn Workspaces, can significantly streamline project management by consolidating multiple projects into a single repository. This approach facilitates shared dependencies, consistent code quality and simplified refactoring. By following this guide, you can set up a monorepo ensuring efficient project management and development workflow.

### Further Reading

- [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)
- A more detailed look into monorepos - [Monorepo.tools](https://monorepo.tools/)
- Git repository for the project - demo_monorepo
