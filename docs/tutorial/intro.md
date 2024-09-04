---
sidebar_position: 1
last_update:
  date: 02 Sep 2024 23:55:00 GMT
  author: Etienne Baumgartner
---

# Getting started

Let's discover **StudDocs and Docusaurus in less than 5 minutes**.

## Get access

**[Contact](mailto:baume96@gmail.com?subject=StudDocs%20Organization%20Access&body=Let%20me%20in!%20Here%20is%20my%20GitHub%20Account:%20%3Cyour%20github%20account%20name%3E)** the StudDocs Team to get access to the organization and the project repository.

Or you can use the following email address: baume96@gmail.com

## Project

Get started by **cloning the repository**.

```bash
git clone https://github.com/MIAGE-EPB1996/studDocs.git
```

Followed by checking out a new branch.

```bash
git checkout -b <your branch name>
```

Now you can do whatever your want with the files and folder. I do not care.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

### Get the dependencies

```bash
npm install
```

### Start the project locally

Run the development server:

```bash
cd blog
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

## Editing stuff

`docs/courses` holds all different courses of each year
`docs/projects` holds all noteworthy projects of some students 
`docs/tools` holds noteworthy development and management tools 
`docs/tutorial` don't touch it. I am warning you. 
`blog/` holds all current tech and management blogs

Open of the markdowns or create a new one and make your changes. The site at http://localhost:3000/ **reloads automatically** and displays your changes.

Just try to follow the setup of already created folders. You will get the hang of it. 

## Publishing your stuff

After you are happy with your changes your will have to ask to integrate your changes. 

This is done by creating a PR (Pull Request) into the `develop` branch. One of the maintainers will look over your changes and accept or reject your merge attempt. 

If you need help on how to create a Pull Request on Github &rarr; **use google** 

:::tip Be bold
Dont worry about failures! This is an opportunity to learn and rejection is the best thing that can happen in life. It means you will be learning stuff. Hopefully:sunglasses:
:::

<Author author="epb"></Author>