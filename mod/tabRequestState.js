(function tabRequestState(){
    "use strict";

    const EXTENSION = "akbnomckiihcigkeaabjaombccnnlnfb"

    function doThing(info, sender){
        if(sender.id!==EXTENSION){
            console.error("BAD ID!",sender.id);
            return;
        }
        const tabId = "tab-" + info.id;
        const tab = document.getElementById(tabId);
        tab.setAttribute("data-state", info.state);
    }

    setTimeout(function wait(){
        const ready = document.querySelector(".addressfield");
        if(ready){
            chrome.runtime.onMessageExternal.addListener(doThing);
        } else {
            setTimeout(wait, 500);
        }
    }, 500);
})();
