import { arrayOf, bool, shape, string } from 'prop-types';
import React, { Component } from 'react';

import slugify from '../../../lib/slugify';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import Markdown from '../../page-layout/markdown';
import JobSummaryComponent, { JobsSummaryComponentPropType } from './job-summary.component';
import styles from './jobs-page.module.scss';

export default class JobsPageTemplate extends Component {
    static propTypes = {
        introduction: shape({
            show: bool,
            text: string,
        }),
        filters: shape({
            tags: arrayOf(
                shape({
                    label: string.isRequired,
                    slug: string.isRequired,
                })
            ),
        }).isRequired,
        tags: arrayOf(string).isRequired,
        jobs: arrayOf(JobsSummaryComponentPropType),
        components: arrayOf(PageComponentPropType),
        footerText: string,
    };

    static defaultProps = {
        introduction: null,
        jobs: null,
        components: null,
        footerText: null,
    };

    state = {
        showFilters: false,
        selectedFilters: [],
    };

    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside({ target }) {
        const { nodeName = '' } = target || {};

        const { showFilters } = this.state || {};

        const isControl = !!nodeName.match(/(INPUT|BUTTON|LABEL)/gm);

        showFilters && !isControl && this.setState({ showFilters: false });
    }

    toggleFilters() {
        this.setState(({ showFilters }) => ({ showFilters: !showFilters }));
    }

    toggleFilter({ target }) {
        const { id: slug = '' } = target;

        this.setState(({ selectedFilters: oldSelectedFilters }) => {
            const hasFilter = oldSelectedFilters.includes(slug);

            const selectedFilters = hasFilter
                ? oldSelectedFilters.filter(value => value !== slug)
                : [...oldSelectedFilters, slug];

            return { selectedFilters };
        });
    }

    isSelected(slug) {
        const { selectedFilters } = this.state;

        return selectedFilters.includes(slug);
    }

    clearFilters() {
        this.setState({ showFilters: false, selectedFilters: [] });
    }

    selectedTags() {
        const { selectedFilters } = this.state;
        const { filters } = this.props;
        const { tags: allowedTags } = filters;

        return allowedTags.filter(({ label }) => selectedFilters.includes(slugify(label)));
    }

    tagList() {
        const { filters, tags } = this.props;
        const { tags: allowedTags = [] } = filters || {};
        const slugs = tags.map(slugify);

        return allowedTags.filter(({ label }) => slugs.includes(slugify(label)));
    }

    filteredJobs() {
        const { jobs } = this.props;
        const { selectedFilters } = this.state;

        if (!selectedFilters.length) {
            return jobs;
        }

        return jobs.filter(({ tags = [] }) => {
            const selectedTags = tags.filter(value => selectedFilters.includes(slugify(value)));

            return !!selectedTags.length;
        });
    }

    render() {
        const { components, footerText } = this.props;
        const { showFilters } = this.state;

        const filtersClass = showFilters ? styles.showFilters : '';

        const tagList = this.tagList();
        const selectedTags = this.selectedTags();
        const jobsList = this.filteredJobs();

        const { toggleFilters, toggleFilter, clearFilters, isSelected } = this;

        return (
            <>
                {components && (
                    <section className={styles.components}>
                        {!!components &&
                            components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                    </section>
                )}
                {tagList && (
                    <section className={styles.filters}>
                        <ul className={styles.selectedTags}>
                            {selectedTags.map(({ label, slug }) => (
                                <li key={slug}>
                                    <label htmlFor={slug}>{label}</label>
                                </li>
                            ))}
                        </ul>
                        <section className={`${styles.allTags} ${filtersClass}`}>
                            <button type="button" className={styles.filter} onClick={toggleFilters.bind(this)}>
                                Filter jobs by&hellip;
                            </button>
                            <section>
                                <ul>
                                    {tagList.map(({ label, slug }) => (
                                        <li key={slug}>
                                            <input
                                                id={slugify(label)}
                                                type="checkbox"
                                                checked={isSelected.bind(this)(slugify(label))}
                                                onChange={toggleFilter.bind(this)}
                                            />
                                            <label htmlFor={slugify(label)}>{label}</label>
                                        </li>
                                    ))}
                                </ul>
                                <button type="button" onClick={clearFilters.bind(this)}>
                                    Clear All
                                </button>
                            </section>
                        </section>
                    </section>
                )}
                {jobsList && (
                    <ul className={styles.jobsList}>
                        {jobsList.map(job => (
                            <li key={job.path}>
                                <JobSummaryComponent {...job} />
                            </li>
                        ))}
                    </ul>
                )}
                {footerText && (
                    <footer className={styles.footerText}>
                        <Markdown source={footerText} />
                    </footer>
                )}
            </>
        );
    }
}
