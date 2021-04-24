import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const IconWrapper = styled.button`
	padding: 0;
    outline: 0;
    border: 0;
    background: none;
`;

const IconSpan = styled.span`
    padding: 12px;
    ${props => props.smallBtn && css`
        font-size: 1rem;
        padding: 10px;
    `}
`;

export default function Icon({ name, customClass, clickEvent, smallBtn }) {
	return clickEvent ? <IconWrapper className={customClass} onClick={clickEvent}>
		<IconSpan className='material-icons-round' smallBtn={smallBtn}>{name}</IconSpan>
	</IconWrapper> :
		<IconSpan className={`material-icons-round ${customClass}`} smallBtn={smallBtn}>{name}</IconSpan>
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	customClass: PropTypes.string,
	clickEvent: PropTypes.func,
	smallBtn: PropTypes.bool,
}