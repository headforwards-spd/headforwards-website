export function contactFormSubmitEvent() {
    datalayerEvent('contactFormSubmit');
}

export function applicationFormSubmitEvent(jobId) {
    datalayerEvent('applicationFormSubmit', { jobId });
}

export function datalayerEvent(event, data = null) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event,
        data,
    });
}
