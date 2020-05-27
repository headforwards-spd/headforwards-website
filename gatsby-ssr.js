const React = require('react');

exports.onRenderBody = ({ setPostBodyComponents }) => {
    const settings = `window.$buoop={required:{e:-3,f:-3,o:-3,s:-3,c:-3},insecure:true,unsupported:true,api:2020.05 };`;
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
