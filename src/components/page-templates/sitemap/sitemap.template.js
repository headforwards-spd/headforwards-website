/* eslint-disable */
import React, { Component } from 'react';
import Link from '../../page-layout/link/link.component';
import styles from './sitemap.module.scss';

export default SitemapTemplate;

function SitemapTemplate({ sitemap }) {
    const { pathList = [] } = sitemap || {};

    return makeLinks(pathList);
}

function makeLinks(pathList) {
    const items = {};

    pathList.forEach(({ path }) => {
        const parts = path.split('/').filter(part => !!part);
        const [parent] = parts;

        switch (true) {
            case parts.length === 1:
                items[parent] = {
                    path,
                    children: [],
                };
                break;
            case parts.length > 1:
                items[parent].children.push(path);
                break;
        }
    });

    return (
        <ul className={styles.sitemap}>
            {Object.keys(items).map(key => {
                const item = items[key];

                return <SiteMapLink item={item} />;
            })}
        </ul>
    );
}

class SiteMapLink extends Component {
    state = {
        showChildren: false,
    };

    toggleChildren() {
        console.log('click', this.props.item);

        this.setState(({ showChildren }) => ({ showChildren: !showChildren }));
    }

    render() {
        const { item } = this.props;
        const { path, children } = item;
        const { showChildren } = this.state;
        const { toggleChildren } = this;

        return (
            <li>
                {!!children.length && (
                    <button type="button" onClick={toggleChildren.bind(this)}>
                        {(showChildren && '-') || '+'}
                    </button>
                )}
                <Link to={path}>{path}</Link>
                {showChildren && (
                    <ul>
                        {children.map(child => (
                            <li key={child}>
                                <Link to={child}>
                                    /
                                    {child
                                        .split('/')
                                        .filter(part => !!part)
                                        .splice(1)
                                        .join('/')}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    }
}
/* eslint-enable */
