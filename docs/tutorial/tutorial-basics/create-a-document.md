---
sidebar_position: 2
---

# Create a Document

Documents are **groups of pages** connected through:

- **a sidebar**
- **previous/next navigation**
- **versioning**

## Create a new Doc

Create a Markdown file at `docs/tutorial/hello.md`:

```md title="docs/tutorial.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/tutorial/hello](http://localhost:3000/docs/tutorial/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/tutorial/hello.md" {1-4}
---
sidebar_label: "Hi!"
sidebar_position: 1
---

# Hello

This is my **first Docusaurus document**!
```

The sidebar position changed for the new doc [http://localhost:3000/docs/tutorial/hello](http://localhost:3000/docs/tutorial/hello).

## Add Authorship information

Adding your author tag is slighlty different to adding it to a blog.

```md title="docs/tutorial/hello.md" {1-4}
---
sidebar_label: "Hi!"
sidebar_position: 1
---

# Hello

This is my **first Docusaurus document**!

<Author author="epb"></Author>
```

The authot `epb` is defined in `./blog/docs/authors.ts`. Just add a new entry and use the used key (in the example below it is `example-author`) in the Author component.

```ts title="./blog/docs/authors.ts" {1-4}
export const authors = {
  epb: {
    name: "Etienne Pascal Baumgartner",
    email: "baume96@gmail.com",
    title: "Fullstack Engineer @ DevoTeam",
    studentInfo: {
      university: "Panthéon-Sorbonne Paris 1",
      major: "MIAGE M2",
    },
    imageURL: "https://github.com/epb1996.png",
    socials: {
      github: "https://github.com/epb1996",
      linkedin: "https://www.linkedin.com/in/etienne-baumgartner-81125b175/",
      "baet.ch": "https://epb1996.github.io/baet-cv/",
    },
  },
  "example-author": {
    name: "Example Author",
    email: "example@example.com",
    title: "Example Title",
    studentInfo: {
      university: "Example University",
      major: "Example Major",
    },
    imageURL: "https://example.com/example.png",
    socials: {
      github: "",
      linkedin: "",
      someOtherLink: "",
    },
  },
};
```
