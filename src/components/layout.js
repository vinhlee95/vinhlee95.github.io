import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import { Theme } from './theme/theme'

import { MdKeyboardArrowLeft } from 'react-icons/md'

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
						paddingTop: 20,
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
					to={'/'}
				>
					<div className='go-back-button'>
						<MdKeyboardArrowLeft size={32} />
						All blogs
					</div>
				</Link>
      )
    }
    return (
      <Theme>
				{header}
				{children}
			</Theme>
    )
  }
}

export default Layout
