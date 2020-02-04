import Example from './Example';
// import { authRoles } from "../../auth";

export const ExampleConfig = {
    // auth: authRoles.admin,
    settings: {
        navbar: {
            display: true
        },
        toolbar: {
            display: true
        },
    },
    routes: [
        {
            path: '/example',
            component: Example,
        }
    ]
};