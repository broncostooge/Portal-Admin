import * as Msal from 'msal';

var msalConfig = {
    auth: {
        clientId: "07a2e45b-eec7-426f-8d3d-6b94d3cdd53c",
        authority: "https://login.microsoftonline.com/96d10dcf-c84a-4593-bd5d-835bf4982538",
        redirectURI: "https://login.microsoftonline.com/common/oauth2/nativeclient"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
    }
}

export const myMSALObj = new Msal.UserAgentApplication(msalConfig);