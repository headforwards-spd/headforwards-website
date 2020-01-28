import parseHtml                  from 'html-react-parser';
import { arrayOf, shape, string } from 'prop-types';
import React                      from 'react';

import { CompanyInfoPropType } from '../company-info.prop-type';
import Link                    from '../link/link.component'
import { MenuItemPropType }    from '../navbar/menu-item/menu-item.prop-type';
import Navbar                  from '../navbar/navbar.component';
import styles                  from './job-header.module.scss';

export default JobHeader;

JobHeader.propTypes = {
    title: string.isRequired,
    subtitle: string,
    jobDetails: shape({
        salary: string.isRequired,
        tags: arrayOf(string).isRequired,
        path: string.isRequired,
                      }),
    menu: arrayOf(MenuItemPropType).isRequired,
    companyInfo: CompanyInfoPropType.isRequired,
};
JobHeader.defaultProps = {
    subtitle: null,
};
function JobHeader({ title, subtitle, jobDetails, menu, companyInfo }) {

    const navBarProps = {
        menu,
        companyInfo,
        hasBackground: false,
    };

    const {
        salary,
        tags,
        path,
          } = jobDetails;

    return (
        <header className={`${styles.jobHeader}`}>
            <Navbar {...navBarProps} />
            <section>
                <section>
                    <h1>{parseHtml(title)}</h1>
                    <p>{subtitle}</p>
                </section>
                <section className={styles.jobDetails}>
                    <dl>
                        <dt>Salary</dt><dd>{salary}</dd>
                        <dt>Tags</dt><dd>{tags.join(', ')}</dd>
                    </dl>
                    <Link to={`${path}/application-form/`}>Apply Online</Link>
                </section>
            </section>
        </header>
    );
}
