import Analytics from "https://unpkg.com/securoanalytics-sdk@1.5.1/src/index.js";

Analytics.init({apiKey: "9324fe9d-c0cc-4595-8b61-7666fa193520"});

function trackEvent(name,data=null) {
    Analytics.trackEvent(name, data);
}

window.trackEvent = trackEvent;
