import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

// assets
import BackIcon from '../icons/ui-arrow-back.svg'



class Layout extends React.Component {

	getTheme(lightTheme) {
		if(lightTheme) {
			return styled.div`
				padding: 0 5%;

				@media (min-width: 768px) {
					padding: 0 20%;
				}

				@media (min-width: 1024px) {
					padding: 0 25%;
				}
			`
		}
		return styled.div`
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
	}

  render() {
		const { lightTheme } = this.props;
			// general layout
		const GeneralLayout = this.getTheme(lightTheme)

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
      <GeneralLayout>
        {header}
        {children}
      </GeneralLayout>
    )
  }
}

export default Layout
