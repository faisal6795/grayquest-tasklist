import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 4px;
    margin-left: -4px;

    input:checked + label {
        text-decoration: line-through;
    }
`;

export const CheckBox = styled.input`
    margin: 4px;
    cursor: pointer;
`;

export const CheckLabel = styled.label`
    display: inline-block;
    width: calc(100% - 24px);
    padding-left: 8px;
    box-sizing: border-box;
    word-break: break-word;
    vertical-align: top;
`;

export const EditLabel = styled.input`
    display: inline-block;
    width: calc(100% - 30px);
    margin-left: 8px;
    box-sizing: border-box;
    vertical-align: top;
    border: 0;
    outline: 0;
    font-size: 16px;
`;