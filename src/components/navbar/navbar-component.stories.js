import React       from 'react';
import Navbar from './navbar-component';
import {withKnobs, text, files} from '@storybook/addon-knobs';

export default {
    decorators: [withKnobs],
    title: "Navbar"
}

export const navbar = () => {
    const backgroundImgLabel = "Background Image";
    const accept = ".png, .jpg, .jpeg";
    const defaultImgValue = [];
    const groupId = "nav-group";

    const headerTextLabel = "Nav Header";
    const defaultHeader = faker.lorem.sentence();

    const paragraphHeaderLabel = "Paragraph Title";
    const defaultParagraphHeader = faker.lorem.sentence();

    const paragraphLabel = "Paragraph";
    const defaultParagraph = faker.lorem.paragraph();

    const headerText = text(headerTextLabel, defaultHeader, groupId);
    const paragraphHeader = text(paragraphHeaderLabel, defaultParagraphHeader, groupId);
    const paragraph = text(paragraphLabel, defaultParagraph, groupId);
    const backgroundImg = files(backgroundImgLabel, accept, defaultImgValue, groupId);

    const props = {
        headerText: headerText,
        paragraphHeader: paragraphHeader,
        paragraph: paragraph,
        backgroundImg: backgroundImg
    }
    return <Navbar {...props} />
}