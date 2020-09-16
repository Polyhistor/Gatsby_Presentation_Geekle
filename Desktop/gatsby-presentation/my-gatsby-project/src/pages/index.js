import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Typography = styled.h1`
  font-size: 2rem;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allWordpressPost.edges.map(edge => (
        <Typography as="h3">
          <Link to={`blog/${edge.node.slug}`}>{edge.node.title}</Link>
        </Typography>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          wordpress_id
          slug
          path
          title
          content
        }
      }
    }
  }
`

export default IndexPage
