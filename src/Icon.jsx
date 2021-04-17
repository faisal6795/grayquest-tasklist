import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const IconWrapper = styled.span`
    padding: 12px;
    ${props => props.smallBtn && css`
        font-size: 1rem;
        padding: 10px;
    `}
`;

export default function Icon({ name, customClass, clickEvent, smallBtn }) {
    return <IconWrapper className={`material-icons-round ${customClass}`} onClick={clickEvent} smallBtn={smallBtn} >{name}</IconWrapper>
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    customClass: PropTypes.string,
    clickEvent: PropTypes.func,
    smallBtn: PropTypes.bool,
}