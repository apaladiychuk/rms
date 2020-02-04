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
        id: 'id',
        align: 'left',
        disablePadding: false,
        label: 'ID',
        sort: true
    },
    {
        id: 'status',
        align: 'left',
        disablePadding: false,
        label: 'Статус',
        sort: true
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: false,
        label: 'Наименование',
        sort: true
    },
    {
        id: 'bin',
        align: 'left',
        disablePadding: false,
        label: 'БИН',
        sort: true
    },
    {
        id: 'setting',
        align: 'left',
        disablePadding: false,
        style: {minWidth : 90 },
        label: '',
        icon: 'settings',
        sort: false
    },
];
