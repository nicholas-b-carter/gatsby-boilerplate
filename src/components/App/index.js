import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BaseHelmet } from 'components/Helmet'
import ScrollMagicContext from 'components/ScrollMagicContext'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object,
  }

  render() {
    const { children, location } = this.props
    return (
      <ScrollMagicContext location={location}>
        <BaseHelmet location={location} />
        {children}
      </ScrollMagicContext>
    )
  }
}
