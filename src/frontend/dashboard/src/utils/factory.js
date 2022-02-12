import PageOne from 'pages/demo/pageOne'
import PageTwo from 'pages/demo/pageTwo'
import Dashboard from 'pages/admin/Dashboard'
import Error from 'pages/Error'

export const factoryForPage = (componantName) => {
    switch (componantName) {
        case "Dashboard":
            return Dashboard;
        case "PageTwo":
            return PageTwo;
        case "PageOne":
            return PageOne;
        case "Error":
            return Error;

    }
}
