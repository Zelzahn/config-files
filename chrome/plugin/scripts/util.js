const chromeVersion = /Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1];
const webstoreUrl = 'clients2.google.com/service/update2/crx';
function checkForUpdates(update_callback = null, failure_callback = null, completed_callback = null) {
    chrome.management.getAll(function (e) {
        let default_options = {
            "auto_update": true,
            "check_store_apps": true,
            "check_external_apps": true
        };
        e.forEach(function (ex) {
            default_options[ex.id] = false;
        });
        chrome.storage.sync.get(default_options, function (settings) {
            let updateUrl = 'https://clients2.google.com/service/update2/crx?response=updatecheck&acceptformat=crx2,crx3&prodversion=' + chromeVersion;
            let installed_versions = {};
            let updateUrls = [];
            e.forEach(function (ex) {
                if (ex.updateUrl && !settings[ex.id]) {
                    if (webstoreUrl == ex.updateUrl.replace(/^(?:https?:\/\/)?/i, "")) {
                        updateUrl += '&x=id%3D' + ex.id + '%26uc';
                    } else if (settings.check_external_apps) {
                        updateUrls.push(ex.updateUrl);
                    }
                    installed_versions[ex.id] = ex;
                }
            });
            if (settings.check_store_apps)
                updateUrls.push(updateUrl);

            function getNewXhr(is_webstore) {
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            let updates = this.responseXML.getElementsByTagName('app');
                            let updateCount = 0;
                            for (let i = 0; i < updates.length; i++) {
                                if (updateCheck = updates[i].querySelector("*")) {
                                    let updatever = updateCheck.getAttribute('version');
                                    let appid = updates[i].getAttribute('appid');
                                    if (updatever && installed_versions[appid].version != updatever) {
                                        updateCount++;
                                        if (update_callback)
                                            update_callback(updateCheck, installed_versions, appid, updatever, is_webstore);
                                    }
                                }
                            }
                            chrome.browserAction.getBadgeText({}, function (currentText) {
                                if (currentText != '?') {
                                    if (!currentText) {
                                        if (updateCount)
                                            chrome.browserAction.setBadgeText({
                                                text: '' + updateCount
                                            });
                                    } else
                                        chrome.browserAction.setBadgeText({
                                            text: parseInt(updateCount) + parseInt(currentText) + ''
                                        });
                                }
                            });
                        } else {
                            if (failure_callback)
                                failure_callback();
                            if (is_webstore)
                                chrome.browserAction.setBadgeText({
                                    text: "?"
                                });
                        }
                    }
                };
                xhttp.overrideMimeType('application/xml');
                return xhttp;
            };
            chrome.browserAction.setBadgeText({
                text: ''
            });
            pending_updates = updateUrls.length;
            if (pending_updates == 0 && completed_callback)
                completed_callback();
            updateUrls.forEach(function (uurl) {
                xhr = getNewXhr(uurl == updateUrl);
                xhr.open("GET", uurl, true);
                xhr.send();
                xhr.onloadend = function () {
                    pending_updates--;
                    if (pending_updates == 0 && completed_callback)
                        completed_callback();
                };
            });
        });
    });
};