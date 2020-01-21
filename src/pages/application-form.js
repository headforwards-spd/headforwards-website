import React  from 'react';
import Layout from '../components/page-layout/layout';
import Link   from '../components/page-layout/link/link.component'
import styles from './application-form.module.scss';

export default ApplicationForm;

const offer = {
    id: 352898,
    slug: 'full-stack-azure-developer-up-to-50k',
    position: 72,
    status: 'published',
    options_phone: 'required',
    options_photo: 'off',
    options_cover_letter: 'optional',
    options_cv: 'optional',
    remote: false,
    country_code: 'GB',
    state_code: 'ENG',
    postal_code: 'TR15 3PL',
    min_hours: 37,
    max_hours: 38,
    open_questions: [
        {
            id: 333845,
            kind: 'string',
            required: true,
            open_question_options: [],
            body:
                "Are you aware that this role is based in Cornwall, South West United Kingdom? Please don't apply unless you can relocate or are already based here. We do not offer remote working.",
            translations: {
                en: {
                    body:
                        "Are you aware that this role is based in Cornwall, South West United Kingdom? Please don't apply unless you can relocate or are already based here. We do not offer remote working.",
                },
            },
        },
        {
            id: 333846,
            kind: 'multi_choice',
            required: true,
            open_question_options: [
                {
                    id: 259508,
                    body: 'UK Citizen',
                    translations: {
                        en: {
                            body: 'UK Citizen',
                        },
                    },
                },
                {
                    id: 259509,
                    body: 'EU / EEA Citizen',
                    translations: {
                        en: {
                            body: 'EU / EEA Citizen',
                        },
                    },
                },
                {
                    id: 259510,
                    body: 'Non EU / EEA Citizen',
                    translations: {
                        en: {
                            body: 'Non EU / EEA Citizen',
                        },
                    },
                },
            ],
            body: 'What is your citizenship status?',
            translations: {
                en: {
                    body: 'What is your citizenship status?',
                },
            },
        },
        {
            id: 333847,
            kind: 'boolean',
            required: true,
            open_question_options: [],
            body:
                'Would you like us to email you about exciting new job opportunities, Headforwards news and event information?',
            translations: {
                en: {
                    body:
                        'Would you like us to email you about exciting new job opportunities, Headforwards news and event information?',
                },
            },
        },
    ],
    title: 'Full Stack Azure Developer (Up to £50K)',
    description:
        "<p><strong>Full Stack Azure Developer up to 50K depending on experience</strong><br /></p>\n\n<p>Would you like to work somewhere that has truly embraced Agile ways of working? Somewhere that pushes boundaries and will massively improve your skills as a Developer. TDD, Mob Programming, Continuous Delivery... read on!</p>\n\n<p>You will be joining a high performing team of developers in our office in Cornwall, with very occasional travel to the client site in Kent. This is a .NET Azure based Microservices application with a React front end. It will handle 25 million requests a year, managing the creation and distribution of digital and physical outputs for our client. The team works with a Product Owner at the client site and is heavily involved in the entire delivery process from definition and prioritisation of features through to the release and support of the deployed application. We are helping to modernise and streamline a key process within our client.</p>\n<p>We have embraced agile ways of working and are fans of TDD for new code. You will be implementing code across the full stack of the application, working in a small team of 3. There are 4 other .NET teams working for the same client, so they are your wider team :) Some of us have more back end experience, others are happier with front end or testing. It's a great mix of people and skills and you'll undoubtably learn from your own team as well as the others.<br /></p>\n\n\n<p><strong>Why work for Headforwards?</strong>\n</p>\n<p>We are a software development company with just over 100 people from 18 different countries and we like to have fun at work. We are agile with a very laid back feel, a relatively flat structure and small self-organising teams of 2-7 people. There's no pressure to work extra hours to churn out more and more code. At Headforwards, our culture and environment is dedicated to making people happy at work. We have lots of social activities and monthly learning sessions, talks and cross company communities of practice for various languages, tools and frameworks. This is a place where you can make a difference, work in a small team start-up feel but benefit from the support of a larger community of developers and like-minded people. We work in teams dedicated to various clients and we work on global projects with cutting edge technologies, tools and techniques. We live in beautiful Cornwall and our offices are less than 5 miles from the beach. We want to make sure our people have a good work life balance so that they can enjoy all that Cornwall has to offer :)</p>\n\n<p>You might not think of Cornwall when you think about developing your tech career, but you'd be surprised at the tech scene here! We work with global clients and some of our teams are releasing multiple times a day across multiple regions. We're continuously improving and striving to be better. Moving to Cornwall is definitely a lifestyle change if you haven't lived here before, but not at the expense of compromising your career. We honestly feel like we have it pretty good!</p>\n\n",
    requirements:
        '<p><strong>Essential experience and skill requirements:</strong></p>\n<ul><li>Experience using Azure, especially Functions, KeyVault and Queues</li><li>Knowledge of .NET Core</li><li>Experience building Single Page Applications using React</li><li>Knowledge of Agile development methods and practices</li><li>Understanding of Refactoring and SOLID principles</li><li>Keen desire to continually learn new things</li></ul>\n<p><strong>Desirable experience:</strong></p>\n<ul><li>Experience writing unit and integration tests, TDD experience is a bonus</li><li>Knowledge of Microsoft Azure DevOps</li><li>Source control using Git</li><li>Pair Programming experience</li><li>Experience with building or working with automated continuous delivery pipelines would be an advantage</li></ul>\n<p><strong><br /></strong></p>\n<p><strong><strong>Due to our timescales you must be eligible to work in the UK, or in the UK with a visa which we can takeover if necessary. </strong></strong></p>\n<p><strong></strong></p>\n<p><strong>The closing date for this role is 15th February 2020. We recruit on a rolling basis and fill our vacancies as soon as we find people who fit our culture and meet the skills requirements. This means that whilst we have a closing date on all of our roles, we may offer the role to someone before the end date, so we recommend that you apply as soon as possible.</strong><br /></p>\n<p><strong><br /></strong></p>\n<p><strong><strong><em>No recruitment agencies please.</em></strong><br /></strong></p>',
    location: 'Cornwall, United Kingdom',
    city: 'Cornwall',
    country: 'United Kingdom',
    careers_url: 'http://careers.headforwards.com/o/full-stack-azure-developer-up-to-50k',
    careers_apply_url: 'http://careers.headforwards.com/o/full-stack-azure-developer-up-to-50k/c/new',
    mailbox_email: 'job.mnt9e@headforwards.recruitee.com',
    company_name: 'Headforwards',
    department: 'Healthcare',
    created_at: '2019-08-07 09:17:47 UTC',
    employment_type_code: 'fulltime',
    category_code: 'internet',
    experience_code: 'experienced',
    education_code: 'professional',
    tags: ['Azure', '.NET', 'Low Risk Role'],
    translations: {
        en: {
            title: 'Full Stack Azure Developer (Up to £50K)',
            description:
                "<p><strong>Full Stack Azure Developer up to 50K depending on experience</strong><br /></p>\n\n<p>Would you like to work somewhere that has truly embraced Agile ways of working? Somewhere that pushes boundaries and will massively improve your skills as a Developer. TDD, Mob Programming, Continuous Delivery... read on!</p>\n\n<p>You will be joining a high performing team of developers in our office in Cornwall, with very occasional travel to the client site in Kent. This is a .NET Azure based Microservices application with a React front end. It will handle 25 million requests a year, managing the creation and distribution of digital and physical outputs for our client. The team works with a Product Owner at the client site and is heavily involved in the entire delivery process from definition and prioritisation of features through to the release and support of the deployed application. We are helping to modernise and streamline a key process within our client.</p>\n<p>We have embraced agile ways of working and are fans of TDD for new code. You will be implementing code across the full stack of the application, working in a small team of 3. There are 4 other .NET teams working for the same client, so they are your wider team :) Some of us have more back end experience, others are happier with front end or testing. It's a great mix of people and skills and you'll undoubtably learn from your own team as well as the others.<br /></p>\n\n\n<p><strong>Why work for Headforwards?</strong>\n</p>\n<p>We are a software development company with just over 100 people from 18 different countries and we like to have fun at work. We are agile with a very laid back feel, a relatively flat structure and small self-organising teams of 2-7 people. There's no pressure to work extra hours to churn out more and more code. At Headforwards, our culture and environment is dedicated to making people happy at work. We have lots of social activities and monthly learning sessions, talks and cross company communities of practice for various languages, tools and frameworks. This is a place where you can make a difference, work in a small team start-up feel but benefit from the support of a larger community of developers and like-minded people. We work in teams dedicated to various clients and we work on global projects with cutting edge technologies, tools and techniques. We live in beautiful Cornwall and our offices are less than 5 miles from the beach. We want to make sure our people have a good work life balance so that they can enjoy all that Cornwall has to offer :)</p>\n\n<p>You might not think of Cornwall when you think about developing your tech career, but you'd be surprised at the tech scene here! We work with global clients and some of our teams are releasing multiple times a day across multiple regions. We're continuously improving and striving to be better. Moving to Cornwall is definitely a lifestyle change if you haven't lived here before, but not at the expense of compromising your career. We honestly feel like we have it pretty good!</p>\n\n",
            requirements:
                '<p><strong>Essential experience and skill requirements:</strong></p>\n<ul><li>Experience using Azure, especially Functions, KeyVault and Queues</li><li>Knowledge of .NET Core</li><li>Experience building Single Page Applications using React</li><li>Knowledge of Agile development methods and practices</li><li>Understanding of Refactoring and SOLID principles</li><li>Keen desire to continually learn new things</li></ul>\n<p><strong>Desirable experience:</strong></p>\n<ul><li>Experience writing unit and integration tests, TDD experience is a bonus</li><li>Knowledge of Microsoft Azure DevOps</li><li>Source control using Git</li><li>Pair Programming experience</li><li>Experience with building or working with automated continuous delivery pipelines would be an advantage</li></ul>\n<p><strong><br /></strong></p>\n<p><strong><strong>Due to our timescales you must be eligible to work in the UK, or in the UK with a visa which we can takeover if necessary. </strong></strong></p>\n<p><strong></strong></p>\n<p><strong>The closing date for this role is 15th February 2020. We recruit on a rolling basis and fill our vacancies as soon as we find people who fit our culture and meet the skills requirements. This means that whilst we have a closing date on all of our roles, we may offer the role to someone before the end date, so we recommend that you apply as soon as possible.</strong><br /></p>\n<p><strong><br /></strong></p>\n<p><strong><strong><em>No recruitment agencies please.</em></strong><br /></strong></p>',
        },
    },
};

function ApplicationForm() {
    return (
        <Layout title="Application Form" subtitle={offer.title}>
            <form className={styles.applicationForm}>
                    <section>
                        <header>
                            <h2>Personal information</h2>
                            <p>Tell us something about yourself</p>
                        </header>
                        <section>
                            <label className="string required control-label" htmlFor="candidate_name">
                                Full name
                                <input
                                    className="string required form-control"
                                    required="required"
                                    aria-required="true"
                                    placeholder="Your full name"
                                    type="text"
                                    name="candidate[name]"
                                    id="candidate_name"
                                />
                            </label>
                            <label className="email required control-label" htmlFor="candidate_email">
                                Email address
                                <input
                                    className="string email required form-control form-control"
                                    required="required"
                                    aria-required="true"
                                    placeholder="Your email address"
                                    type="email"
                                    name="candidate[email]"
                                    id="candidate_email"
                                />
                            </label>
                            <label className="tel required control-label" htmlFor="candidate_phone">
                                Phone number
                                <input
                                    className="string tel required form-control form-control"
                                    required="required"
                                    aria-required="true"
                                    placeholder="Your phone number"
                                    type="tel"
                                    name="candidate[phone]"
                                    id="candidate_phone"
                                />
                            </label>
                        </section>
                    </section>
                     <section>
                        <header>
                            <h2>CV / Resume</h2>
                            <p>Upload your CV or resume file</p>
                        </header>
                        <section>
                            <label className={styles.fileUpload}>
                            <button name="button" type="button">Add file</button>
                            We accept PDF, DOC, DOCX, JPG and PNG files
                            </label>
                        </section>
                     </section>
                <section>
                        <header>
                            <h2>CV / Resume</h2>
                            <p>Upload your CV or resume file</p>
                        </header>
                        <section>
                            <label className={styles.fileUpload}>
                            file-name.pdf [x]
                            </label>
                        </section>
                     </section>
                    <section>
                        <header>
                            <h2>Cover letter</h2>
                            <p>Insert your cover letter here</p>
                        </header>
                        <section>
                            <textarea
                                rows="6"
                                className="text optional form-control"
                                name="candidate[cover_letter]"
                                id="candidate_cover_letter"
                                spellCheck="false"
                            />
                        </section>
                    </section>
                    <section>
                        <header>
                            <h2>Questions</h2>
                            <p>Please fill in additional questions</p>
                        </header>
                        <section className={styles.questions}>
                            <label>
                                Are you aware that this role is based in Cornwall, South West United Kingdom? Please
                                don't apply unless you can relocate or are already based here. We do not offer remote
                                working.
                                <input type="text" />
                            </label>
                            <div role="group">
                                <h2>What is your citizenship status?</h2>
                                <label>
                                    <input type="checkbox" value="UK Citizen" />
                                    UK Citizen
                                </label>
                                <label>
                                    <input type="checkbox" value="EU / EEA Citizen" />
                                    EU / EEA Citizen
                                </label>
                                <label>
                                    <input type="checkbox" value="Non EU / EEA Citizen" />
                                    Non EU / EEA Citizen
                                </label>
                            </div>
                            <div role="group">
                                <h2>
                                    Would you like us to email you about exciting new job opportunities, Headforwards
                                    news and event information?
                                </h2>
                                <label>
                                    <input name="contactMe" type="radio" value="Yes" />
                                    Yes
                                </label>
                                <label>
                                    <input name="contactMe" type="radio" value="'No'" />
                                    No
                                </label>
                            </div>
                        </section>
                    </section>
                    <section>
                        <section>
                            <div role='group'>
                            <label className={styles.fullWidth}>
                                <input required="required"
                                       type="checkbox"
                                       value="212"
                                       name="candidate[terms][]"
                                       id="candidate_terms_212" />
                                I agree to the&nbsp;
                                <Link to="/privacy-notice/"
                                      target="_blank">Privacy Policy</Link>
                            </label>
                                <button type='button' className={styles.submit}>Submit Application</button>
                            </div>
                        </section>
                    </section>
            </form>
        </Layout>
    );
}
