import { arrayOf, bool, shape, string } from 'prop-types';
import React, { Component }             from 'react';
import slugify                          from 'slugify'

import PageComponent, { PageComponentPropType }              from '../../page-components/page-component';
import IntroductionComponent                                 from '../../page-layout/introduction/introduction.component';
import JobSummaryComponent, { JobsSummaryComponentPropType } from './job-summary.component';
import styles                                                from './jobs-page.module.scss';

// JobsPageTemplate.propTypes = {
//     introduction: shape({
//                             show: bool,
//                             text: string,
//                         }),
//     jobs: arrayOf(JobsSummaryComponentPropType),
//     components: arrayOf(PageComponentPropType),
// };
// JobsPageTemplate.defaultProps = {
//     introduction: null,
//     jobs: null,
//     components: null,
// };
export default class JobsPageTemplate extends Component {

    state = {
        showFilters: false,
        selectedFilters: [],
    };

    toggleFilter(label) {
        this.setState(({selectedFilters}) => {

            const slug = slugify(label);

            const hasFilter = selectedFilters.includes(slug);

            const newSelectedFilters = hasFilter ? selectedFilters.filter(value => value !== slug) : [...selectedFilters, slug];

            return {selectedFilters: newSelectedFilters};
        });
    }

    render () {
        const { tags: allTags, filters, introduction, jobs, components } = this.props;
        const { show, text } = introduction;
        const { tags }       = filters;
        const {showFilters, selectedFilters} = this.state;

        const filteredTags = tags.filter(
            ({ label }) => allTags.includes(label));

        const filtersClass = showFilters ? styles.showFilters : '';

        return (
            <>
                {show && <IntroductionComponent introduction={text}/>}
                <section className={styles.filters}>
                    <ul className={styles.selectedTags}>
                        {filteredTags.filter(({label}) => selectedFilters.includes(slugify(label))).map(({ label, slug }) => (
                            <li key={slug}><label htmlFor={slug}>{label}</label>
                            </li>))}
                    </ul>
                    <section className={`${styles.allTags} ${filtersClass}`}>
                        <button className={styles.filter} onClick={() => this.setState(({showFilters }) => ({showFilters: !showFilters}))}>Filter jobs
                            by&hellip;</button>
                        <ul>
                            {filteredTags.map(({ label, slug }) => (
                                <li key={slug}>
                                    <input id={slug} type='checkbox' checked={selectedFilters.includes(slugify(label))} onChange={() => this.toggleFilter(label)}/>
                                    <label htmlFor={slug}>{label}</label>
                                </li>))}
                            <li className={styles.clearAll}>
                                <button type='button' onClick={() => this.setState({selectedFilters: []})}>Clear All</button>
                            </li>
                        </ul>
                    </section>
                </section>
                {jobs && (
                    <ul className={styles.jobsList}>
                        {jobs.filter(({tags=[]}) => {

                            console.log({tags});

                            if (!selectedFilters.length) {
                                return true;
                            }

                            const selectedTags = tags.filter(value => selectedFilters.includes(slugify(value)));

                            return selectedTags.length;

                        }).map(({ id: key, ...job }) => (
                            <li>
                                <JobSummaryComponent key={key} {...job} />
                            </li>))}
                    </ul>)}
                {components && (
                    <section className={styles.components}>
                        {!!components && components.map(
                            ({ id, ...component }) =>
                                <PageComponent key={id} {...component} />)}
                    </section>)}
            </>);
    }
}
