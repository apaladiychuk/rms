import {useCallback, useState} from 'react';
import set from 'lodash/set';
import isEqual from 'lodash/isEqual';

function useForm(initialState, onSubmit) {
    const [form, setForm] = useState(initialState);

    const handleChange = useCallback((event) => {
        event.persist();
        setForm(form => set({...form}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    }, []);

    const resetForm = useCallback(() => {
        if ( !isEqual(initialState, form) )
        {
            setForm(initialState);
        }
    }, [form, initialState]);

    const setInForm = useCallback((name, value) => {
        setForm(form => set(form, name, value));
    }, []);

    const handleSubmit = useCallback((event) => {
        if ( event )
        {
            event.preventDefault();
        }
        if ( onSubmit )
        {
            onSubmit();
        }
    }, [onSubmit]);

    return {
        form,
        handleChange,
        handleSubmit,
        resetForm,
        setForm,
        setInForm
    }
}

export default useForm;
