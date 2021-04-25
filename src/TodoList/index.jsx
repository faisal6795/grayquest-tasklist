import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CheckItem from '../CheckItem';
import { Container, Body, EditTitle, Title, AddItem, ButtonWrapper } from './TodoList.styles';
import Icon from '../Icon';

export default function TodoList({ id, todoList, title, saveClicked, deleteClicked, updateList, setEditing }) {

    const [todoItemList, setTodoItemList] = useState(todoList);
    const [isListEditing, setListEditing] = useState(title === '' && todoList[0].text === '');
    const [todoTitle, setTodoTitle] = useState(title);

    useEffect(() => {
        setTodoItemList(todoList)
    }, [todoList]);

    function onItemChecked(index, checked) {
        const temp = todoItemList;
        temp[index].checked = checked;
        setTodoItemList(temp);
        if (!isListEditing) {
            updateList({ id, title, todoList: temp });
        }
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
        setEditing(true);
    }

    function deleteBtnClicked() {
        deleteClicked(id);
    }

    function addItem() {
        if (todoItemList.some(item => item.text === '')) return;
        const temp = { checked: false, text: '' };
        setTodoItemList([...todoItemList, temp]);
    }

    function removeItem(index) {
        const temp = JSON.parse(JSON.stringify(todoItemList));
        temp.splice(index, 1);
        setTodoItemList(temp);
    }

    function doneBtnClicked() {
        setListEditing(false);
        setEditing(false);
        const updatedTodoList = todoItemList.filter(item => item.text.trim() !== '');
        setTodoItemList(updatedTodoList);
        saveClicked(id, todoTitle, updatedTodoList);
    }

    function getCheckItems() {
        return todoItemList.map((item, index) => <CheckItem key={index}
            text={item.text}
            isEdit={isListEditing}
            checked={item.checked}
            addNewList={addItem}
            onItemChecked={(checked) => { onItemChecked(index, checked) }}
            inputChanged={(event) => inputChanged(index, event)}
            removeItem={() => removeItem(index)}
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
            {!isListEditing && <ButtonWrapper>
                <Icon name='edit' customClass='edit-icon hover-effect' smallBtn clickEvent={editBtnClicked} />
                <Icon name='delete_outline' customClass='delete-icon hover-effect' smallBtn clickEvent={deleteBtnClicked} />
            </ButtonWrapper>}
        </Container>
    );
}

TodoList.propTypes = {
    id: PropTypes.number,
    todoList: PropTypes.array,
    title: PropTypes.string,
    saveClicked: PropTypes.func,
    deleteClicked: PropTypes.func,
    updateList: PropTypes.func,
    setEditing: PropTypes.func,
}