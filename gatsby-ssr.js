const React = require('react');

exports.onRenderBody = ({ setPostBodyComponents }) => {
    const settings = `window.$buoop={required:{e:-2,f:-2,o:-2,s:-2,c:-2},insecure:true,unsupported:true,api:2020.02};`;
    const html = {
        __html: settings,
    };
    /* eslint-disable-next-line react/no-danger */
    const buoopSettings = <script id="buoop-settings" dangerouslySetInnerHTML={html} />;
    const buoopScript = (
        <script id="buoop-loader" type="text/javascript" async src="//browser-update.org/update.min.js" />
    );

    return setPostBodyComponents([buoopSettings, buoopScript]);
};
