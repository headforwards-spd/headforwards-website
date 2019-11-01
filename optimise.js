const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);

const matches = glob.sync(`{src,static}/img/**/*.{png,jpg,jpeg}`);
const MAX_WIDTH = 1200;
const QUALITY = 75;

Promise.all(
    matches.map(async file => {
        const stream = sharp(file);
        const info = await stream.metadata();

        if (info.width < MAX_WIDTH) {
            return null;
        }

        const optimizedName = file.replace(/(\..+)$/, (match, ext) => `-optimized${ext}`);

        await stream
            .resize(MAX_WIDTH)
            .jpeg({ quality: QUALITY })
            .toFile(optimizedName);

        return fs.rename(optimizedName, file);
    })
);
