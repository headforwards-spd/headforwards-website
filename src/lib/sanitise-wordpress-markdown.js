const glob = require('glob');
const fs = require('fs');

const path = 'src/pages/wordpress-blog/**/*.md';

glob(path, (error, files) => (error ? console.error(error) : files.forEach(sanitiseFile)));

function sanitiseFile(fileName) {
    const oldContent = fs.readFileSync(`./${fileName}`).toString();

    const newContent = oldContent
        // Unwrap images from links
        .replace(/([^!])?\[(!\[[^\]]*]\([^)]+\))]\([^)]+\)/g, '$1$2')
        // Remove links to images
        .replace(/([^!])\[[^\]]*]\(\/wp-content\/uploads\/[^)]+\)/g, '$1')
        // Each image on it's own line
        .replace(/(\))\s*(!\[)/g, '$1\n$2')
        // Wrap images in a gallery
        .replace(
            /((?:\s?!\[[^\]]*]\(\/wp-content\/uploads\/[^)]+\))+)/g,
            '\n\n<section class="gallery">\n\n$1\n\n</section>\n\n'
        )
        .replace(/(\))\s*(!\[)/g, '$1\n\n$2')
        // Remove image sizes
        .replace(/(\(\/wp-content\/uploads\/[^)]+)(?:[-_]+\d+x\d+)+(?:[-_]\d)?(\.\w+(?:\s*"[^"]*")?\))/g, '$1$2');

    fs.writeFileSync(`./${fileName}`, newContent);
}
