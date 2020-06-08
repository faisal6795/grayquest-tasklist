import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100%;
    padding: 16px 15%;
    box-sizing: border-box;
    overflow: auto;
    user-select: none;

    .todo-container {
        columns: 4 160px;

        @media (max-width: 1023px) {
            column-width: 168px;
        }
        
        @media (max-width: 800px) {
            column-width: 157px;
        }
        
        @media (max-width: 719px) {
            column-width: 160px;
        }
        
        @media (max-width: 479px) {
            column-width: 300px;
        }
    }
`;

export const SearchBar = styled.div`
    height: 50px;
    margin-bottom: 16px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);
`;

export const SearchInput = styled.input`
    height: 60%;
    margin: 9px 0;
    width: calc(100% - 110px);
    font-size: 16px;
    outline: 0;
    border: 0;
`;

export const ClearBtn = styled.button`
    height: 100%;
    width: 50px;
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    float: right;
    font-size: 20px;
    cursor: pointer;
    color: #0075ff;
    background-color: transparent;
    position: relative;
    
    &:hover:after {
        width: 80%;
        height: 80%;
        top: 10%;
        left: 10%;
    }
    
    &:after {
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        content: '';
        background-color: rgba(0, 0, 0, 0.12);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        transition: all 0.2s;
    }
`;

export const SearchIcon = styled.i`
    height: 100%;
    width: 50px;
    font-size: 20px;
    color: #0075ff;
    vertical-align: top;
    padding: 15px;
    box-sizing: border-box;
`;

export const AddTask = styled.button`
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    border: 0;
    outline: 0;
    color: #0075ff;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    font-size: 20px;
    position: fixed;
    right: 15%;
    bottom: 16px;
`;

export const NoListMsg = styled.p`
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    font-size: 20px;
    padding: 20px 0;
    color: #8c8c8c;
`;