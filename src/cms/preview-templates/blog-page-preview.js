import { bool, shape, string, func } from 'prop-types';

import { ImageSrcPropType } from '../../components/page-layout/image/image.component';

export default BlogPagePreview;

BlogPagePreview.propTypes = {
    entry: shape({
        data: shape({
            title: string,
            subtitle: string,
            image: shape({
                show: bool,
                image: ImageSrcPropType,
            }),
            introduction: shape({
                show: bool,
                text: string,
            }),
            author: string,
        }),
    }).isRequired,
    fieldsMetaData: func.isRequired,
    getAsset: func.isRequired,
};

function BlogPagePreview({ entry, fieldsMetaData, getAsset }) {
    const { data } = entry.toJS();
    // console.log(data);

    // console.log(entry);
    // const authorValue = data.getIn(['data', 'author']);
    console.log(entry.getIn(['data', 'title']));
    const authorPage = fieldsMetaData.getIn(['author', 'author-pages', authorId], authorValue.toString());
    // console.log({page: authorPage.toJS()});
}
