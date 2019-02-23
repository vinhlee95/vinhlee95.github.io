import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Excert = styled.p`
	&:last-child {
		margin-bottom: 0;
		padding-bottom: 20px;
	}
`

class BlogIndex extends React.Component {


  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
		const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} >

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
              <Excert dangerouslySetInnerHTML={{ __html: node.excerpt }} style={{marginBottom:0}} />
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
