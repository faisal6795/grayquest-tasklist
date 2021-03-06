import styled from 'styled-components'

export const COLORS = {
    primary: '#017acb',
    accent: '#02CA9F',
    gray: '#CCC',
    lightGray: '#DDD',
    darkGray: '#727272',
}

export const Wrapper = styled.div`
    height: 100%;
    padding: 2rem 15% 6rem;
    overflow: auto;
    user-select: none;

    @media screen and (max-width: 480px) {
        padding: 2rem 2rem 6rem;
    }

    .add-icon {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: ${COLORS.primary};
        color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.20);
        cursor: pointer;
        position: fixed;
        right: 15%;
        bottom: 3rem;
        
        @media screen and (max-width: 480px) {
            right: 2rem;
        }
    }

    .hover-effect {
        position: relative;

        &:hover::before, &:focus::before {
            width: 100%;
            height: 100%;
        }
        
        &::before {
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            content: '';
            position: absolute;
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            transform: translate(-50%,-50%);
            transition: all 0.2s;
        }
    }
`;

export const Heading = styled.h1`
    margin: 0;
    font-size: 1.75rem;
    color: ${COLORS.primary};
    display: flex;
    align-items: center;

    span {
        margin-left: 1rem;
    }

    img {
        -webkit-user-drag: none;
    }
`;

export const Navbar = styled.nav`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    gap: 1rem;
    align-items: center;

    @media screen and (min-width: 768px) {
        justify-content: space-between;
        flex-direction: row;
    }
`;

export const SearchBar = styled.div`
    height: 3rem;
    min-width: 100%;
    background-color: #f1f2f4;
    border-radius: 1.5rem;

    .search-icon {
        color: ${COLORS.primary};
    }

    .clear-icon {
        height: 2.25rem;
        margin: 6px;
        font-size: 1.25rem;
        float: right;
        cursor: pointer;
        color: ${COLORS.primary};
        background-color: transparent;

        span {
            padding: 6px;
        }
    }

    @media screen and (min-width: 768px) {
        min-width: 20rem;
    }
`;

export const SearchInput = styled.input`
    height: 100%;
    padding: 0.5rem 0;
    width: calc(100% - 6rem);
    font-size: 1rem;
    outline: 0;
    border: 0;
    vertical-align: top;
    background-color: inherit;
`;

export const NoListMsg = styled.p`
    position: absolute;
    width: 100%;
    left: 0;
    top: 45%;
    text-align: center;
    font-size: 1.25rem;
    margin: 0;
    color: ${COLORS.darkGray};
    padding: 0 15%;
`;