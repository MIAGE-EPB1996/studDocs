---
sidebar_position: 5
---

# Deploy 

## CI/CD
After pushing your edits and additions you should create a pull request on the `dev` branch. 

A member of the ream will look at the PR and merge your changes which then will trigger automatic deployment of your additions. 

Feel free to deploy your version yourself somewhere else. For this see the below sections. 

## Deploy your site somewhere else

Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**).

It builds your site as simple **static HTML, JavaScript and CSS files**.

### Build your site

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder.

### Deploy your site

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/).

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).
