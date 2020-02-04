export const dict_status = {
    'A': {
        name: 'Активный',
        color: '#4faf50'
    },
    'N':{
        name: 'Не активный',
        color: '#f44336'
    }
};

export const reserv_status = {
    'S': {
        name: 'SUBMIT',
        color: '#4faf50'
    },
    'I':{
        name: 'INT',
        color: '#0043ff'
    }
};

export const resource_type = {
    'SMS': {
        name: 'SMS',
        color: '#4faf50'
    },
    'SMS_FW': {
        name: 'SMS_FW',
        color: '#4faf50'
    },
    'IVR':{
        name: 'IVR',
        color: '#0043ff'
    },
    'USSD':{
        name: 'USSD',
        color: '#0043ff'
    },
    'ALPHA':{
        name: 'ALPHA',
        color: '#0043ff'
    },
    'BSID':{
        name: 'BSID',
        color: '#dd43ff'
    },
    'FAKE':{
        name: 'FAKE',
        color: '#fa0000'
    },
};

export const unit_type = {
    '10SEC':{
        name :'10 секунд'
    },
    'FACT':{
        name :'Факт'
    },
    'MIN' :{
          name :'Минута'
    },
    'SEC':{
        name :'Секунда'
    }
};

export const job_status = {
    'N': {
        name: 'К выполнению',
        color: '#85c6de'
    },
    'P': {
        name: 'В процессе',
        color: '#3466de'
    },
    'R': {
        name: 'Выполнен',
        color: '#4caf50'
    },
    'E': {
        name: 'Ошибка',
        color: '#ff9800'
    },
    'C': {
        name: 'Отменен',
        color: '#f44336'
    },
};

export const job_operation = {
    'ADD': {
        name: 'Добавить',
        icon: 'add',
        color: '#4caf50'
    },
    'DEL': {
        name: 'Удалить',
        icon: 'delete_forever',
        color: '#f44336'
    },
    'CNG': {
        name: 'Изменить',
        icon: 'edit',
        color: '#ff9800'
    },
};

export const order_status = {
    'F': {
        name: 'Формируется',
        color: '#999',
        progress: 1,
        actions: [
            {
                name: 'На ревью',
                to: 'P'
            },
            {
                name: 'На выполнение',
                to: 'W'
            },
        ]
    },
    'P': {
        name: 'Ревью',
        color: '#999',
        progress: 2,
        actions: [
            {
                name: 'Вернуть',
                to: 'F'
            },
            {
                name: 'На выполнение',
                to: 'W'
            },
        ]
    },
    'W': {
        name: 'Для исполнения',
        color: '#85c6de',
        progress: 3,
        actions: [
            {
                name: 'Вернуть',
                to: 'F'
            }
        ]
    },
    'I': {
        name: 'Исполняется',
        color: '#3466de',
        progress: 4
    },
    'E': {
        name: 'Ошибка',
        color: '#f44336',
        progress: 5
    },
    'C': {
        name: 'Отменена',
        color: '#f44336',
        progress: 5
    },
    'H': {
        name: 'Выполнена частично',
        color: '#ff9800',
        progress: 5
    },
    'R': {
        name: 'Завершена',
        color: '#4caf50',
        progress: 5
    },
};

export const task_operation = {
    'ADD': {
        name: 'Подключить',
        icon: 'add',
        color: '#4caf50'
    },
    'DEL': {
        name: 'Отключить',
        icon: 'delete_forever',
        color: '#f44336'
    },
    'CNG': {
        name: 'Изменить',
        icon: 'edit',
        color: '#ff9800'
    },
    'HND': {
        name: 'Передать',
        icon: 'edit',
        color: '#85c6de'
    },
};

export const log_type = {
    'info': {
        name: 'Info',
        color: '#4caf50'
    },
    'error': {
        name: 'Error',
        color: '#f44336'
    },
    'warn': {
        name: 'Warn',
        color: '#ff9800'
    },
    'http': {
        name: 'Http',
        color: '#AFAFFF'
    },
    'verbose': {
        name: 'Verbose',
        color: '#ff7b9a'
    },
    'debug': {
        name: 'Debug',
        color: '#8b0000'
    },
    'silly': {
        name: 'Silly',
        color: '#e7adaf'
    },
};

export const date_transform = (date) => {
    if (!date) return;

    const dateFormat = new Date(date);

    const visualNumDate = (item) => item < 10 ? '0' + item : item;

    const curr_day = visualNumDate(dateFormat.getDate());
    const curr_month = visualNumDate(dateFormat.getMonth() + 1);
    const curr_year = visualNumDate(dateFormat.getFullYear());

    return `${curr_day}/${curr_month}/${curr_year}`;
};

export const date_transform_api = (date) => {
    if (!date) return '';

    const visualNumDate = (item) => item < 10 ? '0' + item : item;

    const curr_day = visualNumDate(date.getDate());
    const curr_month = visualNumDate(date.getMonth() + 1);
    const curr_year = visualNumDate(date.getFullYear());

    return `${curr_year}-${curr_month}-${curr_day}`;
};