[![Netlify Status](https://api.netlify.com/api/v1/badges/e724db27-83ca-4ed8-9ba1-dda675ffa17f/deploy-status)](https://app.netlify.com/sites/headforwards-website2/deploys)

# Project File Structure

## [Gatsby Plugins Config](https://www.gatsbyjs.org/docs/plugins/)

```
+-- gatsby
|   + gatsby-plugin-X.js
|   + gatsby-source-X.js
|   + gatsby-transformer-X.js
```

## [Gatsby Custom Plugins](https://www.gatsbyjs.org/docs/creating-plugins/)

```
+-- plugins
|   + gatsby-plugin-X.js
|   + gatsby-source-X.js
|   + gatsby-transformer-X.js
```

## Site Sourcecode

### [NetlifyCMS Custom Previews](https://www.netlifycms.org/docs/customization/)

- `src/cms/preview-templates` - Preview templates
- `src/cms/widgets` - [Custom widgets](https://www.netlifycms.org/docs/custom-widgets/)
- `src/cms/cms.js` - Configuration

```
+-- src
|   +-- cms
|   |   +-- preview-templates
|   |   |   +-- page-name.js
|   |   +-- widgets
|   |   |   +-- widget-name.js
|   |   +-- cms.js
```

### React Components

- `src/components/page-components` - Flexible Layouts
- `src/components/page-layout` - Common page components (e.g. Header, Nav, Footer etc.)
- `src/components/page-templates` - Individual page components (e.g. Page, Post, Job etc.)

```
+-- src
|   +-- components
|   |   +-- page-components
|   |   +-- page-layout
|   |   +-- page-templates
```

### Site-wide Data

Site-wide constants accessible via GraphQL (and potentially editable in CMS).

```
+-- src
|   +-- data
|   |   +-- company-info.json
|   |   +-- homepage.json
|   |   +-- main-menu.json
```

### Helper Functions

```
+-- src
|   +-- lib
```

### Page Data

- `.md` files are added to GraphQL by `gatsby-node.js`
- `.js` files are mapped to site URL's (without js extension)

```
+-- src
|   +-- pages
```

### Site-wide SCSS

```
+-- src
|   +-- scss
```

### Page Templates

`gatsby-node.js` uses these templates to render pages - `context` variables (e.g. `id`, `prevId`, `nextId`) are available in GraphQL queries.

```
+-- src
|   +-- templates
```

## Static Files

- `static/admin/config.yml` - [NetlifyCMS Config](https://www.netlifycms.org/docs/configuration-options/)
- `static/images` - (referenced in scss files: `url('/images/filename.jpg')`)
- `static/uploads` - NetlifyCMS media library

```
+-- static
|   +-- adimn
|   |   +-- config.yml
|   +-- images
|   +-- uploads
```

## Gatsby Config

- `gatsby-browser.js` - [Gatsby Browser API's](https://www.gatsbyjs.org/docs/browser-apis/)
- `gatsby-config.js` - [Gatsby Config API's](https://www.gatsbyjs.org/docs/gatsby-config/) (Site configuration options)
- `gatsby-node.js` - [Gatsby Node API's](https://www.gatsbyjs.org/docs/node-apis/) (APIs for controlling site data in the GraphQL data layer)

```
+-- gatsby-browser.js
+-- gstsby-config.js
+-- gatsby-node.js
```
