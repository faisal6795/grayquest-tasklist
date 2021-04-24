import styled from 'styled-components';
import { COLORS } from '../App.styles';

export const CheckItemWrapper = styled.div`
    display: flex;
    padding: 0.25rem 0;

    :hover .remove-icon {
        opacity: 0.8;
    }
    
    .remove-icon {
        border-radius: 50%;
        cursor: pointer;
        height: 1.5rem;
        width: 1.5rem;
        opacity: 0;

        span {
            padding: 4px;
        }

        @media screen and (max-width: 480px) {
            opacity: 0.8;
        }
    }
`;

export const CheckBox = styled.input`
    margin: 0;
    cursor: pointer;
    width: 0;
    height: 0;

    :checked~label {
        text-decoration: line-through;
        color: ${COLORS.gray};

        &::before {
            background-color: ${COLORS.accent};
            border-color: ${COLORS.accent};
        }

        &::after {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
    }
`;

export const CheckLabel = styled.label`
    display: inline-block;
    width: 100%;
    padding-left: 1.75rem;
    word-break: break-word;
    vertical-align: top;
    position: relative;
    cursor: pointer;

    ::before{
        content: '';
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: 0;
        margin: 3px 0;
        border-radius: 50%;
        border: 1px solid ${COLORS.gray};
    }

    ::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 4px;
        border-width: 0 0 2px 2px;
        border-color: #fff;
        left: 3px;
        top: 8px;
        border-style: solid;
        transform: rotate(-45deg);
        transition: all 0.3s;
        clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    }

    &.hide-label {
        position: absolute;
        font-size: 0;
    }
`;

export const EditInput = styled.input`
    display: inline-block;
    width: calc(100% - 1.75rem);
    vertical-align: top;
    border: 0;
    padding: 0;
    outline: 0;
    font-size: 1rem;
    padding-left: 1.75rem;
`;