import {files, text, withKnobs} from '@storybook/addon-knobs';
import React                    from 'react';
import Header                   from './header-component';

export default {
    decorators: [withKnobs],
    title:      'Header'
};

export const header = () => {
    const backgroundImgLabel = 'Background Image';
    const accept             = '.png, .jpg, .jpeg';
    const defaultImgValue    = [];
    const groupId            = 'nav-group';

    const headerTextLabel = 'Nav Header';
    const defaultHeader   = faker.lorem.sentence();

    const paragraphHeaderLabel   = 'Paragraph Title';
    const defaultParagraphHeader = faker.lorem.sentence();

    const paragraphLabel   = 'Paragraph';
    const defaultParagraph = faker.lorem.paragraph();

    const headerText      = text(headerTextLabel, defaultHeader, groupId);
    const paragraphHeader = text(paragraphHeaderLabel, defaultParagraphHeader, groupId);
    const paragraph       = text(paragraphLabel, defaultParagraph, groupId);
    const image           = files(backgroundImgLabel, accept, defaultImgValue, groupId);

    const props = {
        headerText:      headerText,
        paragraphHeader: paragraphHeader,
        paragraph:       paragraph,
        image:           image
    };
    return <Header {...props} />;
};