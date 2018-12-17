import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	cursor: pointer;
	background: lightgrey;
	padding: 10px 10px;
	border-radius: 3px;
	margin: 0 5px;
`

export default (props) => (
	<Button onClick={props.onClick}>
		{props.label}
	</Button>
)