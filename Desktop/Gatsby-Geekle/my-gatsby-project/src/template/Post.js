import React from "react"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  console.log(data)
  return (
    <div>
      <article>
        <h2>{data.wordpressPost.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
        ></div>
      </article>
    </div>
  )
}

export default Post

export const query = graphql`
  query($id: Int) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
    }
  }
`
