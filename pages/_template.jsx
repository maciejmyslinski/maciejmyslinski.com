import React, { PureComponent } from 'react'

export class Template extends PureComponent {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
