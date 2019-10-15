exports.onCreateNode = ({ node, getNodes, actions }) => {

    if (node.internal.type === `DataYaml`) {

        const {createNodeField} = actions;

        const nodes = getNodes() || [];
        const pages = nodes.filter(({ internal }) => {
            const { type } = internal;
            return type === 'MarkdownRemark';
        });

        const {items=[]} = node;

        const menu = items.map(transformChildren);

        console.log(JSON.stringify(menu, null, 2))

        return createNodeField({node, name:'menu', value: menu});

        function transformChildren({label, link, children: _children}) {

            const {fields} = pages.find(({frontmatter}) => frontmatter.uuid === link);
            const {slug} = fields || {};
            const url = slug || link;
            const children = !!_children ? _children.map(transformChildren) : _children;

            return {label, url, children};
        }
    }
};

