import React from "react"

export default class Post extends React.PureComponent {
  static getInitialProps ({ query: { param, param2 } }) {
    return { param, param2 }
  }

  render() {
    return (
      <div>
        <h2>Comment</h2>
        ID: {this.props.param2}
        <br />
        Post ID: {this.props.param}
      </div>
    )
  }
}
