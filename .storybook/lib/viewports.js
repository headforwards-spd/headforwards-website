const desktopRatio = 5/8;
const mobileRatio = 9/16;

export default {
    mobile1: {
        name: '< $screen-sm (319)',
        type: 'mobile',
        styles: getMobileStyles(319)
    },
    mobile2: {
        name: '$screen-sm (320px)',
        type: 'mobile',
        styles: getMobileStyles(320)
    },
    mobile3: {
        name: '< $screen-md (767)',
        type: 'tablet',
        styles: getMobileStyles(767)
    },
    mobile4: {
        name: '$screen-md (768)',
        type: 'tablet',
        styles: getMobileStyles(768),
    },

    mobile5: {
        name: '< $screen-lg (1023)',
        type: 'mobile',
        styles: getMobileStyles(1023)
    },
    tablet1: {
        name: '$screen-lg',
        type: 'tablet',
        styles: getDesktopStyles(1024)
    },
    tablet2: {
        name: '< $screen-xl (1439)',
        type: 'tablet',
        styles: getDesktopStyles(1439)
    },
    desktop1: {
        name: '$screen-xl (1440)',
        type: 'mobile',
        styles: getDesktopStyles(1440)
    },
    desktop2: {
        name: '> $screen-xl (2560)',
        type: 'mobile',
        styles: getDesktopStyles(2560)
    }
};

function getDesktopStyles(width) {
    return {
        width: `${width}px`,
        height: `${Math.round(width*desktopRatio)}px`,
    };
}

function getMobileStyles(width) {
    return {
        width: `${width}px`,
        height: `${Math.round(width/mobileRatio)}px`,
    };
}
