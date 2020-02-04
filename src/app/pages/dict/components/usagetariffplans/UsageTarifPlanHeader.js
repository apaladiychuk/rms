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
        id: 'pt_name',
        align: 'left',
        disablePadding: false,
        label: 'Вид оплаты',
        sort: true
    },
    {
        id: 'type_cd',
        align: 'left',
        disablePadding: false,
        label: 'Тип номера',
        sort: true
    },
    {
        id: 'rc_name',
        align: 'left',
        disablePadding: false,
        label: 'Категория номера',
        sort: true
    },
    {
        id: 'quantity_from',
        align: 'left',
        disablePadding: false,
        label: 'От количества цифр',
        sort: true
    },
    {
        id: 'quantity_to',
        align: 'left',
        disablePadding: false,
        label: 'До количества цифр',
        sort: true
    },
    {
        id: 'amount',
        align: 'left',
        disablePadding: false,
        label: 'Сумма',
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
        id: 'setting',
        align: 'left',
        style: {minWidth : 90 },
        disablePadding: false,
        label: '',
        icon: 'settings',
        sort: false
    },
];
