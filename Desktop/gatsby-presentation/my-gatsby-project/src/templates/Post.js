import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const StyledSection = styled.section`
  margin: 5rem;
`

const Typography = styled.h1`
  font-size: 3rem;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  border-bottom: 1px solid gray;
  border-top: 0.5px solid gray;
`

const Post = ({ data }) => {
  console.log(data)
  return (
    <StyledSection>
      <Typography as="h2">{data.wordpressPost.title}</Typography>
      <article
        styled={{ display: "grid" }}
        dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
      ></article>
    </StyledSection>
  )
}

export const query = graphql`
  query($id: Int) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
    }
  }
`

export default Post
