import React from "react";
export const headerRows = [
    {
        id: 'NPP',
        align: 'left',
        disablePadding: false,
        label: '#',
        sort: false
    },
    {
        id: 'code',
        align: 'left',
        disablePadding: false,
        label: 'Код',
        sort: true
    },
    {
        id: 'priority',
        align: 'left',
        disablePadding: false,
        label: 'Приоритет',
        sort: true
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: false,
        label: 'Название',
        sort: true
    },
    {
        id: 'active_from',
        align: 'left',
        disablePadding: false,
        label: 'С даты',
        sort: true
    },
    {
        id: 'active_to',
        align: 'left',
        disablePadding: false,
        label: 'По дату',
        sort: true
    },
    {
        id: 'description',
        align: 'left',
        disablePadding: false,
        label: 'Описание',
        sort: true
    },
    {
        id: 'comment',
        align: 'left',
        disablePadding: false,
        label: 'Примечание',
        sort: true
    },
    {
        id: 'setting',
        align: 'left',
        style: {minWidth : 90 },
        disablePadding: false,
        label: '',
        icon: 'settings',
        sort: false
    },
];
