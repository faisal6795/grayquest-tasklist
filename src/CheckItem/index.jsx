import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CheckBox, CheckLabel, Wrapper, EditLabel } from './CheckItem.styles';

export default function CheckItem(props) {

    const { isEdit, checked, text, itemChecked, addNewList } = props;
    const listRef = useRef();

    useEffect(() => { text !== '' && (listRef.current.querySelector('input[type="checkbox"]').checked = checked); }, []);

    function onCheckboxChanged(event) {
        itemChecked(event.target.checked);
    }

    function addNewItem(event) {
        if (event.keyCode === 13) addNewList();
    }

    return (
        <Wrapper ref={listRef}>
            <CheckBox type='checkbox' onChange={onCheckboxChanged} />
            {isEdit ?
                <EditLabel type='text' placeholder='To do' onKeyUp={addNewItem} /> :
                text !== '' && <CheckLabel>{text}</CheckLabel>}
        </Wrapper>
    );
}

CheckItem.propTypes = {
    isEdit: PropTypes.bool,
    checked: PropTypes.bool,
    text: PropTypes.string,
    itemChecked: PropTypes.func,
    addNewList: PropTypes.func,
}