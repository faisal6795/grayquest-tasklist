import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    column-gap: ${props => props.gap}px;
`;

const ColumnContainer = styled.div`
    display: flex;
    row-gap: ${props => props.gap}px;
    flex-direction: column;
    width: 100%;
`;

export default function Masonry({ children, gap }) {

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            setColumnCount(width > 1024 ? 4 : width > 768 ? 3 : width > 480 ? 2 : 1);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [columnCount, setColumnCount] = useState(1);
    const columnWrapper = {};
    const result = [];
    let allValues = [];
    let columnValue = new Array(columnCount).fill(0);

    function getValue(listItem) {
        let value = 86 + gap;
        value += (listItem.title && listItem.title.trim() !== "") ? 32 : 0;
        value += listItem.todoList && listItem.todoList.length * 32;
        return value;
    }

    function generateElements() {
        if (children.length) {
            allValues = children.map(item => getValue(item.props));
        }

        for (let index = 0; index < columnCount; index++) {
            columnWrapper[`column${index}`] = [];
        }

        children.forEach((item, index) => {
            let columnIndex = index % columnCount;
            if (columnCount > 1) {
                columnIndex = columnValue.indexOf(Math.min(...columnValue));
                columnValue[columnIndex] += allValues[index];
            }
            columnWrapper[`column${columnIndex}`].push(item);
        });

        for (let index = 0; index < columnCount; index++) {
            result.push(<ColumnContainer key={index} gap={gap}>{columnWrapper[`column${index}`]}</ColumnContainer>);
        }
    }
    generateElements();

    return <Wrapper gap={gap}>{result}</Wrapper>
}

Masonry.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    gap: PropTypes.number.isRequired,
}