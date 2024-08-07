import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: 'e3a63682-ff82-469d-bd3b-7a7096c75daa',

        authority: 'https://login.microsoftonline.com/bvrd.com.do',

        redirectUrl: '/',

        postLogoutRedirectUrl: '/',

        navigateToLoginRequestUrl: false,
    },
    cache: {
        cacheLocation: 'sessionStorage',

        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                    // eslint-disable-next-line no-fallthrough
                    case LogLevel.Verbose:
                        console.debug(message);
                    // eslint-disable-next-line no-fallthrough
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
};



export const loginRequest = {
    scopes: ['user.read'],
};
