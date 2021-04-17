import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CheckItem from '../CheckItem';
import { Container, Body, EditTitle, Title, AddItem } from './TodoList.styles';
import Icon from '../Icon';

export default function TodoList({ id, todoList, title }) {

    const [todoItemList, setTodoItemList] = useState(todoList);
    const [isListEditing, setListEditing] = useState(false);
    const [todoTitle, setTodoTitle] = useState(title);
    const dispatch = useDispatch();

    useEffect(() => {
        title === '' && todoItemList.length === 1 && todoItemList[0].text === '' && setListEditing(true);
    }, [title, todoItemList]);

    function itemChecked(index, checked) {
        const temp = todoItemList;
        temp[index].checked = checked;
        setTodoItemList(temp);
        dispatch({
            type: 'UPDATE_LIST',
            value: temp
        });
    }

    function inputChanged(index, event) {
        const temp = todoItemList;
        temp[index].text = event.target.value;
        setTodoItemList(temp);
    }

    function onTitleChange(event) {
        setTodoTitle(event.target.value);
    }

    function editBtnClicked() {
        setListEditing(true);
    }

    function deleteBtnClicked() {
        dispatch({
            type: 'DELETE_LIST',
            value: id
        });
    }

    function addItem() {
        const temp = { checked: false, text: '' };
        setTodoItemList([...todoItemList, temp]);
    }

    function doneBtnClicked() {
        setListEditing(false);
        const updatedTodoList = todoItemList.filter(item => item.text !== '');
        if (todoTitle === '' && updatedTodoList.every(item => item.text === '')) {
            dispatch({
                type: 'DELETE_LIST',
                value: id
            });
        } else {
            const temp = { id: id, title: todoTitle, todoList: updatedTodoList };
            setTodoItemList(updatedTodoList);
            dispatch({
                type: 'UPDATE_LIST',
                value: temp
            });
        }
    }

    function getCheckItems() {
        return todoItemList.map((item, index) => <CheckItem key={index}
            text={item.text}
            isEdit={isListEditing}
            checked={item.checked}
            addNewList={addItem}
            itemChecked={(checked) => { itemChecked(index, checked) }}
            inputChanged={(event) => inputChanged(index, event)}
        />);
    }

    return (
        <Container className='todo'>
            {isListEditing ?
                <EditTitle type='text' placeholder='Title' value={todoTitle} onChange={onTitleChange} /> :
                todoTitle !== '' && <Title>{todoTitle}</Title>}
            <Body>
                {getCheckItems()}
                {isListEditing && <AddItem onClick={addItem}>
                    <Icon name='add' customClass='add-icon-small' />
                    <span>Add Item</span>
                </AddItem>}
                {isListEditing && <Icon name='done' customClass='done-icon' smallBtn clickEvent={doneBtnClicked} />}
            </Body>
            {!isListEditing && <Icon name='delete_outline' customClass='delete-icon hover-effect' smallBtn clickEvent={deleteBtnClicked} />}
            {!isListEditing && <Icon name='edit' customClass='edit-icon hover-effect' smallBtn clickEvent={editBtnClicked} />}
        </Container>
    );
}

TodoList.propTypes = {
    id: PropTypes.number,
    todoList: PropTypes.array,
    title: PropTypes.string,
}