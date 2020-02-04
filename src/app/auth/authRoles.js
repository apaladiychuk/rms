/**
 * Authorization Roles
 */
const authRoles = {
    admin: ['ADMIN'],
    staff: ['ADMIN', 'staff'],
    user: [
        "THL_LIMITED_VIEW",
        "THL_HISTORY_VIEW",
        "THL_RESERVE_VIEW",
        "THL_REQUEST_VIEW",
        "THL_REPORT",
        "THL_TECH_EDIT",
        "THL_COMMERC_EDIT",
        "THL_ADMIN_EDIT"
    ],
    onlyGuest: []
};

export default authRoles;
