// eslint-disable-next-line import/prefer-default-export
export const onServiceWorkerUpdateReady = () => {
    // eslint-disable-next-line no-alert
    const answer = window.confirm(`This application has been updated.\nReload to display the latest version?`);
    if (answer === true) {
        window.location.reload();
    }
};
