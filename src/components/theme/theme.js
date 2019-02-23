import React from 'react'
import styled from 'styled-components'
import Toggle from 'react-toggle'

import "react-toggle/style.css"
import { MdWbSunny } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'

const icons = {
	checked: <MdWbSunny />,
	unchecked: <FaMoon />
}

export const LightTheme = styled.div`
	padding: 0 5%;

	ul {
		margin-bottom: 0;
	}

	@media (min-width: 768px) {
		padding: 0 20%;
	}

	@media (min-width: 1024px) {
		padding: 0 25%;
	}
`

export const DarkTheme = styled.div`
	padding: 0 5%;
	background: #141d26;
	color: #fff;

	ul {
		margin-bottom: 0;
	}

	h3 {
		a {
			color: #fff;
		}
	}

	@media (min-width: 768px) {
		padding: 0 20%;
	}

	@media (min-width: 1024px) {
		padding: 0 25%;
	}
`


export class Theme extends React.Component {
	constructor(props) {
		super(props)
		this.handleChangeTheme = this.handleChangeTheme.bind(this)

		this.state = {
			theme: localStorage.theme ? localStorage.theme : 'light'
		}
	}

	handleChangeTheme() {
		const { theme } = this.state
		let newTheme
		if(theme === 'light') {
			newTheme = 'dark'
			localStorage.setItem('theme', newTheme)
			this.setState({ theme: newTheme })
			return
		}

		newTheme = 'light'
		localStorage.setItem('theme', newTheme)
		this.setState({ theme: newTheme })

	}

	render() {
		const { children } = this.props
		const { theme } = this.state

		const content = (
			<div>
				<Toggle
					defaultChecked={this.state.theme === 'light'}
					onChange={this.handleChangeTheme}
					icons={icons}
				/>
				{children}
			</div>
		)

		return(
			theme === 'light' ?
			<LightTheme>{content}</LightTheme> :
			<DarkTheme>{content}</DarkTheme>
		)
	}
}