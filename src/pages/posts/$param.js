import React from "react"

export default class Post extends React.PureComponent {
  static getInitialProps ({ query: { param } }) {
    return { param }
  }

  render() {
    const { param } = this.props
    return (
      <div>
        <h2>Post</h2>
        ID: {param}
        <h3>Comments:</h3>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(id =>(
            <div key={id}><a href={`/posts/${param}/comments/${param + id}`}>
              Comment {param + id}
            </a></div>
          ))
        }
      </div>
    )
  }
}
