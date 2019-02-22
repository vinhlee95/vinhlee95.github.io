import React from 'react'
import { Link, graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import { MdWbSunny } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'

const icons = {
	checked: <MdWbSunny />,
	unchecked: <FaMoon />
}

class BlogIndex extends React.Component {
	constructor(props) {
		super(props)
		this.handleChangeTheme = this.handleChangeTheme.bind(this)
		this.state = {
			lightTheme: true
		}
	}

	handleChangeTheme() { this.setState({lightTheme: !this.state.lightTheme}) }


  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
		const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} lightTheme={this.state.lightTheme} >
				<Toggle
					defaultChecked={this.state.lightTheme}
					onChange={this.handleChangeTheme}
					icons={icons}
				/>
        <SEO title="All posts" keywords={['blog', 'gatsby', 'javascript', 'react']} />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
								style={{
									margin: '20px 0',
								}}
							>
								<Link
									style={{
										boxShadow: 'none',
									}}
									to={node.fields.slug} >
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
				})}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
