import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import generateImage from '../../../lib/generate-image';
import FixtureLayout from '../../page-layout/FixtureLayout';
import Image from './full-width/full-width-image.component';
import Images from './two/two-images.component';

export default {
    'Full Width Image': FullWidthImage,
    'Two Images': TwoImages,
};

const defaultValueFullWidth = {
    image: generateImage(),
};

function FullWidthImage() {
    const [props] = useValue('Props', { defaultValue: defaultValueFullWidth });

    return (
        <FixtureLayout>
            <Image {...props} />
        </FixtureLayout>
    );
}

const defaultValueTwoImages = {
    flip: false,
    leftImage: generateImage(),
    rightImage: generateImage(),
};

function TwoImages() {
    const [props] = useValue('Props', { defaultValue: defaultValueTwoImages });

    return (
        <FixtureLayout>
            <Images {...props} />
        </FixtureLayout>
    );
}
