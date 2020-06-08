import React, { useState, useRef } from 'react';
import TodoList from './TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, SearchBar, AddTask, SearchInput, SearchIcon, ClearBtn, NoListMsg } from './App.styles';

function App() {

	const mainList = useSelector(state => state.mainList);
	const counter = useSelector(state => state.counter);
	const [isText, setText] = useState(false);
	const wrapperRef = useRef();
	const dispatch = useDispatch();

	function addNewTask() {
		const temp = {
			id: counter + 1,
			title: '',
			todoList: [{ checked: false, text: '' }]
		};
		dispatch({ type: 'ADD_LIST', value: temp });
		dispatch({ type: 'COUNTER', value: counter + 1 });
	}

	function clearText(event) {
		event.target.parentElement.children[1].value = '';
		event.target.parentElement.children[1].focus();
		Array.from(wrapperRef.current.querySelectorAll('.todo')).forEach(todoItem => {
			todoItem.classList.remove('hide');
		});
	}

	function onInputChange(event) {
		const text = event.target.value;
		setText(text !== '');
		const todos = Array.from(wrapperRef.current.querySelectorAll('.todo'));
		todos.forEach(todoItem => {
			todoItem.classList.remove('hide');
		});
		if (text !== '') {
			getTextFromList().forEach((item, index) => {
				item.some(elem => elem.includes(text)) ? todos[index].classList.remove('hide') : todos[index].classList.add('hide');
			});
		}
	}

	function getTextFromList() {
		const textFromList = [];
		Array.from(wrapperRef.current.querySelectorAll('.todo')).forEach(todoItem => {
			textFromList.push(todoItem.innerText.split('\n'));
		});
		return textFromList;
	}

	function getMainList() {
		return mainList.map((item, index) => <TodoList key={item.id} id={item.id} title={item.title} todoList={item.todoList} />);
	}

	return (
		<Wrapper ref={wrapperRef}>
			<SearchBar>
				<SearchIcon className='fas fa-search' />
				<SearchInput placeholder='Search' onChange={onInputChange} />
				{isText && <ClearBtn className='fas fa-times' onClick={clearText} />}
			</SearchBar>
			<div className='todo-container'>
				{!mainList.length && <NoListMsg>Press the + icon to add your first To do Task</NoListMsg>}
				{getMainList()}
			</div>
			<AddTask className='fas fa-plus' onClick={addNewTask} />
		</Wrapper>
	);
}

export default App;
