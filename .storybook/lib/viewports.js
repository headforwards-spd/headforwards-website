const desktopRatio = 5/8;
const mobileRatio = 9/16;

export default {
    desktopL: {
        name: 'Desktop L',
        type: 'desktop',
        styles: getDesktopStyles(1440)
    },
    // desktopS: {
    //     name: 'Desktop S',
    //     type: 'desktop',
    //     styles: getDesktopStyles(1439)
    // },

    tabletL: {
        name: 'Tablet L',
        type: 'tablet',
        styles: getDesktopStyles(1200)
    },
    // tabletM: {
    //     name: 'Tablet M',
    //     type: 'tablet',
    //     styles: getDesktopStyles(1199)
    // },
    tabletS: {
        name: 'Tablet S',
        type: 'tablet',
        styles: getDesktopStyles(1024),
    },

    mobileXL: {
        name: 'Mobile XL',
        type: 'mobile',
        styles: getMobileStyles(1024)
    },
    // mobileL: {
    //     name: 'Mobile L',
    //     type: 'mobile',
    //     styles: getMobileStyles(1023)
    // },
    mobileM: {
        name: 'Mobile M',
        type: 'mobile',
        styles: getMobileStyles(620)
    },
    // mobileS: {
    //     name: 'Mobile S',
    //     type: 'mobile',
    //     styles: getMobileStyles(619)
    // },
    mobileXS: {
        name: 'Mobile XS',
        type: 'mobile',
        styles: getMobileStyles(320)
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
