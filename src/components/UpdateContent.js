import React, { Component } from 'react';

class UpdateContent extends Component {
  render() {
      console.log('UpdateContent render');
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}

export default UpdateContent;