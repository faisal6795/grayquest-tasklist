import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);
    margin: 8px 0;
    display: inline-block;
    vertical-align: top;
    width: 100%;

    &.hide {
        display: none;
    }
`;

export const EditTitle = styled.input`
    width: 100%;
    border: 0;
    outline: 0;
    font-size: 16px;
    margin-bottom: 11px;
`;

export const Title = styled.p`
    margin-top: 0;
    font-weight: 500;
`;

export const Body = styled.div``;

export const Button = styled.button`
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    border: 0;
    outline: 0;
    margin: 0;
    margin-bottom: 8px;
    vertical-align: top;
    color: #0075ff;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    font-size: 14px;
    float: right;
`;

export const AddTodo = styled.button`
    background-color: transparent;
    color: #0075ff;
    border: 0;
    padding: 0;
    outline: 0;
    font-size: 14px;
    width: 100%;
    text-align: left;
    cursor: pointer;

    &:after {
        content: 'Add Item';
        font-family: sans-serif;
        font-weight: 500;
        margin-left: 12px;
    }
`;

export const Options = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    color: #505050;
    font-size: 14px;
    width: 16px;
    text-align: center;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
`;

export const BtnWrapper = styled.div`
    position: absolute;
    z-index: 1;
    top: 16px;
    right: 16px;
    width: 64px;
    box-sizing: border-box;
    box-shadow: 0 3px 6px rgba(0,0,0,0.23);
    animation: animate-wrapper 0.2s linear;

    @keyframes animate-wrapper {
        from {
            width: 0;
        }
    }
`;

export const OptionButton = styled.button`
    display: inline-block;
    width: 100%;
    background-color: #fff;
    border: 0;
    outline: 0;
    margin: 0;
    height: 30px;
    text-align: left;
    padding: 0 12px;
    cursor: pointer;
    animation: animate-button 0.2s linear;

    @keyframes animate-button {
        from {
            width: 0;
            height: 0;
            font-size: 0;
            padding: 0;
        }
    }
    
    &:hover {
        background-color: #ddd;
    }
`;

export const EditBtn = styled(OptionButton)``;

export const DeleteBtn = styled(OptionButton)``;