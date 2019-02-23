import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'
import { Theme } from '../pages/theme'

// assets
import BackIcon from '../icons/ui-arrow-back.svg'

const LightTheme = styled.div`
	padding: 0 5%;

	@media (min-width: 768px) {
		padding: 0 20%;
	}

	@media (min-width: 1024px) {
		padding: 0 25%;
	}
`

const DarkTheme = styled.div`
	padding: 0 5%;
	background: #282c35;
	color: white;

	@media (min-width: 768px) {
		padding: 0 20%;
	}

	@media (min-width: 1024px) {
		padding: 0 25%;
	}
`

class Layout extends React.Component {

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
				<Link
					style={{
						boxShadow: 'none',
						textDecoration: 'none',
						color: 'inherit',
						display: 'flex',
						alignItems: 'center',
					}}
					to={'/'}
				>
					<img src={BackIcon} alt='back-home' style={{marginBottom: 0}} />
					All blogs
				</Link>
      )
    }
    return (
      <Theme>
				{
					({theme}) => (
						theme === 'light' ?
						<LightTheme>{header}{children}</LightTheme> :
						<DarkTheme>{header}{children}</DarkTheme>
					)
				}
			</Theme>
    )
  }
}

export default Layout
