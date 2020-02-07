import parseHtml from 'html-react-parser';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import slugify from '../../../lib/slugify';
import { CompanyInfoPropType } from '../company-info.prop-type';
import Link from '../link/link.component';
import { MenuItemPropType } from '../navbar/menu-item/menu-item.prop-type';
import Navbar from '../navbar/navbar.component';
import styles from './job-header.module.scss';
import StickyNav from './sticky-nav.component';

export default class JobHeader extends StickyNav {
    static propTypes = {
        title: string.isRequired,
        subtitle: string,
        jobDetails: shape({
            filters: shape({
                departments: arrayOf(
                    shape({
                        label: string.isRequired,
                        slug: string.isRequired,
                    })
                ),
                tags: arrayOf(
                    shape({
                        label: string.isRequired,
                        slug: string.isRequired,
                    })
                ),
            }),
            salary: string,
            tags: arrayOf(string),
            path: string.isRequired,
        }),
        menu: arrayOf(MenuItemPropType).isRequired,
        companyInfo: CompanyInfoPropType.isRequired,
    };

    static defaultProps = {
        subtitle: null,
    };

    tagList() {
        const { jobDetails } = this.props;
        const { filters, tags } = jobDetails;
        const { tags: allowedTags = [] } = filters || {};
        const slugs = tags.map(slugify);

        return allowedTags.filter(({ label }) => slugs.includes(slugify(label)));
    }

    render() {
        const { title, subtitle, jobDetails, menu, companyInfo } = this.props;
        const navBarProps = {
            menu,
            companyInfo,
            hasBackground: false,
        };

        const scrollingClass = this.getScrollingClass();

        const { salary, path } = jobDetails;
        const tags = this.tagList();

        return (
            <header className={`${styles.jobHeader} ${scrollingClass}`}>
                <Navbar {...navBarProps} />
                <section>
                    <section>
                        <h1>{parseHtml(title)}</h1>
                        <p>{subtitle}</p>
                    </section>
                    <section>
                        <dl>
                            {salary && (
                                <>
                                    <dt>Salary</dt>
                                    <dd>{salary}</dd>
                                </>
                            )}
                            {!!tags.length && (
                                <>
                                    <dt>Tags</dt>
                                    <dd>{tags.map(({ label }) => label).join(', ')}</dd>
                                </>
                            )}
                        </dl>
                        <Link to={`${path}/application-form/`}>Apply Online</Link>
                    </section>
                </section>
            </header>
        );
    }
}
