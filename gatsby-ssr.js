const React = require('react');

exports.onRenderBody = ({ setPostBodyComponents }) => {
    const settings = `window.$buoop={required:{e:-5,f:-5,o:-5,s:-5,c:-5},insecure:true,unsupported:true,api:2020.05 };`;
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
