import { string } from 'prop-types';
import React from 'react';

export { TagManagerScript, TagManagerNoScript };

TagManagerScript.propTypes = {
    id: string.isRequired,
};
TagManagerNoScript.propTypes = {
    id: string.isRequired,
};

function TagManagerScript({ id }) {
    return (
        <script>{`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');
`}</script>
    );
}

function TagManagerNoScript({ id }) {
    return (
        <noscript>
            <iframe
                title="Tag Manager"
                src={`https://www.googletagmanager.com/ns.html?id=${id}`}
                height="0"
                width="0"
                style={{
                    display: 'none',
                    visibility: 'hidden',
                }}
            />
        </noscript>
    );
}
