import React from "react"

export default class Index extends React.PureComponent {
  static displayName = `Index`

  render (props) {
    return (
      <div>
        <h1>Posts</h1>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(id =>(
            <div key={id}><a href={`/posts/${id}`}>Post {id}</a></div>
          ))
        }
      </div>
    )
  }
}
