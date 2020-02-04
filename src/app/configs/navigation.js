// import {authRoles} from '../auth/authRoles';

const navigation = [
    {
        'id': 'main',
        'title': 'Основное',
        'children': [
            {
                'id': 'dashboard',
                'title': 'Dashboard',
                'type': 'item',
                'icon': 'dashboard',
                'url': '/'
            },
            {
                'id': 'orders',
                'title': 'Заявки',
                'type': 'item',
                'icon': 'list_alt',
                'url': '/orders'
            },
            {
                'id': 'jobs',
                'title': 'Jobs',
                'type': 'item',
                'icon': 'assignment',
                'url': '/jobs'
            },
            {
                'id': 'reserv',
                'title': 'Резерв',
                'type': 'item',
                'icon': 'table_chart',
                'url': '/reserv'
            },
            {
                'id': 'search',
                'title': 'Поиск',
                'type': 'item',
                'icon': 'search',
                'url': '/search'
            },
            {
                'id': 'reports',
                'title': 'Отчеты',
                'type': 'item',
                'icon': 'add_to_photos',
                'url': '/reports'
            },
        ]
    },
    {
        'id': 'directories',
        'title': 'Справочники',
        'children': [
            {
                'id': 'providers',
                'title': 'Контент-провайдеры',
                'type': 'item',
                'icon': 'border_clear',
                'url': '/providers'
            },
            {
                'id': 'clients',
                'title': 'Конечные клиенты',
                'type': 'item',
                'icon': 'border_clear',
                'url': '/clients'
            },
            {
                'id': 'regions',
                'title': 'Регионы',
                'type': 'item',
                'icon': 'border_clear',
                'url': '/regions'
            },
            {
                'id': 'tariffs',
                'title': 'Тарифные сетки',
                'type': 'item',
                'icon': 'border_clear',
                'url': '/tariffs'
            },
            {
                'id': 'number_categories',
                'title': 'Категории номеров',
                'type': 'item',
                'icon': 'border_clear',
                'url': '/number_categories'
            },
            {
                'id': 'usage_tariff_plans',
                'title': 'Плата за использование',
                'type': 'item',
                'icon': 'border_clear',
                'url': '/usage_tariff_plans'
            },
            {
                'id': 'discounts',
                'title': 'Скидки',
                'type': 'item',
                'icon': 'border_clear',
                'url': '/discounts'
            },
        ]
    },
    {
        'id': 'admin',
        'title': 'Админ',
        'children': [
            {
                'id': 'users',
                'title': 'Пользователи',
                'type': 'item',
                'icon': 'person',
                'url': '/users'
            },
            {
                'id': 'audit',
                'title': 'Аудит действий',
                'type': 'item',
                'icon': 'crop_landscape',
                'url': '/audit'
            },
            {
                'id': 'roles',
                'title': 'Роли',
                'type': 'item',
                'icon': 'border_clear',
                'url': '/roles'
            },
        ]
    },
];

export default navigation;
