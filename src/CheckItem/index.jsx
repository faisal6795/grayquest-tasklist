import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { CheckItemWrapper, CheckBox, CheckLabel, EditInput } from './CheckItem.styles';
import Icon from '../Icon';

export default function CheckItem({ isEdit, checked, text, onItemChecked, inputChanged, addNewList, removeItem }) {

    const id = uuid();
    const [value, setValue] = useState(text);

    useEffect(() => {
        setValue(text);
    }, [text]);

    function onCheckboxChanged(event) {
        onItemChecked(event.target.checked);
    }

    function onInputChanged(event) {
        setValue(event.target.value);
        inputChanged(event);
    }

    function addNewItem(event) {
        if (event.key === 'Enter') addNewList();
    }

    return (
        <CheckItemWrapper>
            <CheckBox id={id} type='checkbox' onChange={onCheckboxChanged} checked={checked} />
            <CheckLabel htmlFor={id} className={isEdit ? 'hide-label' : ''}>{text}</CheckLabel>
            {isEdit && <EditInput type='text' placeholder='To do' onKeyUp={addNewItem} value={value} onChange={onInputChanged} autoFocus />}
            {isEdit && <Icon clickEvent={removeItem} customClass='remove-icon hover-effect' name='clear' smallBtn />}
        </CheckItemWrapper>
    );
}

CheckItem.propTypes = {
    isEdit: PropTypes.bool,
    checked: PropTypes.bool,
    text: PropTypes.string,
    onItemChecked: PropTypes.func,
    inputChanged: PropTypes.func,
    addNewList: PropTypes.func,
    removeItem: PropTypes.func,
}