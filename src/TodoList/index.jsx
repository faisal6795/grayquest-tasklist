import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CheckItem from '../CheckItem';
import { useDispatch } from 'react-redux';
import { Container, Body, Button, EditTitle, Title, Options, EditBtn, DeleteBtn, BtnWrapper, AddTodo } from './TodoList.styles';

export default function TodoList(props) {

    const { id, todoList, title } = props;
    const [todoItemList, setTodoItemList] = useState(todoList);
    const [isListEditing, setListEditing] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [checkListData, setCheckListData] = useState({ id: id, title: title, todoList: todoItemList });
    const containerRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => { title === '' && todoItemList.length === 1 && todoItemList[0].text === '' && setListEditing(true); }, []);

    useEffect(() => {
        if (isListEditing) {
            containerRef.current.querySelector('input').value = title;
            Array.from(containerRef.current.querySelectorAll('input+input')).forEach((item, index) => {
                item.value = todoItemList[index].text;
            });
        }
    }, [isListEditing]);

    function itemChecked(index, checked) {
        const temp = checkListData.todoList;
        temp[index].checked = checked;
        setCheckListData({ ...checkListData, temp });
    }

    function optionsClicked() {
        setShowOptions(!showOptions);
        if (!showOptions) {
            setTimeout(() => {
                containerRef.current.querySelector('button').focus();
            }, 0);
        }
    }

    function onBlurClicked(event) {
        if (event.relatedTarget?.tagName !== 'BUTTON') setShowOptions(!showOptions);
    }

    function editBtnClicked() {
        setShowOptions(!showOptions);
        setListEditing(!isListEditing);
    }

    function deleteBtnClicked() {
        setShowOptions(!showOptions);
        dispatch({
            type: 'DELETE_LIST',
            value: id
        });
    }

    function addItem() {
        const temp = { checked: false, text: '' };
        setTodoItemList([...todoItemList, temp]);
        setTimeout(() => {
            containerRef.current.querySelector('div>div:last-of-type>input+input').focus();
        }, 0);
    }

    function doneBtnClicked(event) {
        setListEditing(!isListEditing);
        let updatedTitle, updatedTodoData = [];
        Array.from(containerRef.current.querySelectorAll('input[type="text"]'))
            .forEach((item, index) => {
                if (index === 0) updatedTitle = item.value;
                else updatedTodoData[index - 1] = { text: item.value };
            });
        Array.from(containerRef.current.querySelectorAll('input[type="checkbox"]'))
            .forEach((item, index) => {
                updatedTodoData[index] = { ...updatedTodoData[index], checked: item.checked };
            });
        updatedTodoData = updatedTodoData.filter(item => item.text !== '');
        if (updatedTitle === '' && updatedTodoData.every(item => item.text === '')) {
            dispatch({
                type: 'DELETE_LIST',
                value: id
            });
        } else {
            const temp = { id: id, title: updatedTitle, todoList: updatedTodoData };
            setTodoItemList(updatedTodoData);
            dispatch({
                type: 'UPDATE_LIST',
                value: temp
            });
        }
    }

    function getCheckItems() {
        return todoItemList.map((item, index) =>
            <CheckItem key={index} text={item.text} isEdit={isListEditing} checked={item.checked} addNewList={addItem} itemChecked={(checked) => { itemChecked(index, checked) }}
            />);
    }

    return (
        <Container ref={containerRef} className='todo'>
            {!isListEditing && <Options className='fas fa-ellipsis-v' onClick={optionsClicked} />}
            {isListEditing ?
                <EditTitle type='text' placeholder='Title' /> :
                title !== '' && <Title>{title}</Title>}
            <Body>
                {getCheckItems()}
                {isListEditing && <AddTodo className='fas fa-plus' onClick={addItem} />}
                {isListEditing && <Button className='fas fa-check' onClick={doneBtnClicked} />}
            </Body>
            {showOptions && <BtnWrapper onBlur={onBlurClicked}>
                <EditBtn onClick={editBtnClicked}>Edit</EditBtn>
                <DeleteBtn onClick={deleteBtnClicked}>Delete</DeleteBtn>
            </BtnWrapper>}
        </Container>
    );
}

TodoList.propTypes = {
    id: PropTypes.number,
    todoList: PropTypes.array,
    title: PropTypes.string,
}