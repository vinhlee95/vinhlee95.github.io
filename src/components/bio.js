import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm } from '../utils/typography'
import {Link} from '../styles';

const TWITTER_BASE_URL = 'https://twitter.com'
const MEDIUM_BASE_URL = 'https://medium.com'
const LINKEDIN_BASE_URL = 'https://linkedin.com/in'
const GITHUB_BASE_URL = 'https://github.com'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
				const {
					author, siteUrl,
					social: { twitter, medium, linkedIn, github }
				} = data.site.siteMetadata
        return (
          <div
            style={{
							display: 'flex',
							borderBottom: '1px solid white',
							marginBottom: '30px',
							paddingBottom: '30px',
							boxSizing: 'border-box'
            }}
          >
						<Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />

            <p
							style={{
								margin: 0,
							}}
						>
              Written by <strong>{author}</strong>. Currently working as a software developer in Helsinki area, Finland.
							<br/>
							Learn more in my <Link href={siteUrl} target='_blank'><strong>personal site</strong></Link>.
							<br />
							Or hit me up on:
							<Link
								href={`${TWITTER_BASE_URL}/${twitter}`} target='_blank' >
								<strong> Twitter</strong>
							</Link>
							<Link
								href={`${MEDIUM_BASE_URL}/${medium}`} target='_blank' >
								<strong> Medium</strong>
							</Link>
							<Link
								href={`${LINKEDIN_BASE_URL}/${linkedIn}`} target='_blank' >
								<strong> LinkedIn</strong>
							</Link>
							<Link
								href={`${GITHUB_BASE_URL}/${github}`} target='_blank' >
								<strong> Github</strong>
							</Link>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar:file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
				author
				siteUrl
				social {
					twitter
					medium
					linkedIn
					github
				}
      }
    }
  }
`

export default Bio
