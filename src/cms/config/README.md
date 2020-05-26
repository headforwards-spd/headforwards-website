# [NetlifyCMS Config](./index.js)

## Folder Structure

```
+-- config
     +-- collections
     |   + blog-pages.js
     |   + ...
     |
     +-- components
     |   + quote-component.js
     |   ...
     |
     +-- widgets
     |   + footer-links.js
     |   + ...
     |
     + index.js
     + parentOptions.js
```

## [Collections](https://www.netlifycms.org/docs/configuration-options/#collections)

Each collection you configure displays in the left sidebar of the Content page of the editor UI, in the order they are
entered into the Netlify CMS [index.js](./index.js) file.

## [Widgets](https://www.netlifycms.org/docs/widgets)

Widgets define the data type and interface for entry fields. The [widgets folder](./widgets) contains predefined
widgets, and collections of widgets.

## Components

The [page-components widget](./widgets/page-components.js) provides the ability in CMS to use one or more of the widgets
from the [components folder](./components)
