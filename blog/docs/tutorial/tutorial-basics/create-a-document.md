---
sidebar_position: 2
---

# Create a Document

Documents are **groups of pages** connected through:

- a **sidebar**
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