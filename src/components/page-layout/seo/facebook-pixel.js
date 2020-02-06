import { string } from 'prop-types';
import React from 'react';

export { FacebookPixelScript, FacebookPixelNoScript };

FacebookPixelScript.propTypes = {
    id: string.isRequired,
};
FacebookPixelNoScript.propTypes = {
    id: string.isRequired,
};

function FacebookPixelScript({ id }) {
    return (
        <script>{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${id}');
fbq('track', 'PageView');
`}</script>
    );
}

function FacebookPixelNoScript({ id }) {
    return (
        <noscript>
            <img
                alt="Facebook Pixel"
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
            />
        </noscript>
    );
}
