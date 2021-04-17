import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import { CheckBox, CheckLabel, EditInput } from './CheckItem.styles';

export default function CheckItem({ isEdit, checked, text, itemChecked, inputChanged, addNewList }) {

    const id = uuid();

    function onCheckboxChanged(event) {
        itemChecked(event.target.checked);
    }

    function addNewItem(event) {
        if (event.key === 'Enter' && event.target.value !== '') addNewList();
    }

    return (
        <div>
            <CheckBox id={id} type='checkbox' onChange={onCheckboxChanged} checked={checked} />
            <CheckLabel htmlFor={id} className={isEdit ? 'hide-label' : ''}>{text}</CheckLabel>
            {isEdit && <EditInput type='text' placeholder='To do' onKeyUp={addNewItem} defaultValue={text} onChange={inputChanged} autoFocus />}
        </div>
    );
}

CheckItem.propTypes = {
    isEdit: PropTypes.bool,
    checked: PropTypes.bool,
    text: PropTypes.string,
    itemChecked: PropTypes.func,
    inputChanged: PropTypes.func,
    addNewList: PropTypes.func,
}