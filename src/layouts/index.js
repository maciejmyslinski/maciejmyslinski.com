import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import appleTouchIcon from 'images/favicons/apple-touch-icon.png'
import favicon32 from 'images/favicons/favicon-32x32.png'
import favicon16 from 'images/favicons/favicon-16x16.png'
import maskIcon from 'images/favicons/safari-pinned-tab.svg'
import shortcut from 'images/favicons/favicon.ico'
import browserConfig from 'images/favicons/browserconfig.xml'
import 'normalize.css'

injectGlobal`
  html, body, * {
    font-family: 'Lato', sans-serif;
  }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>Maciej Myśliński - Front-end Developer at Netguru</title>
      <link
        href="https://fonts.googleapis.com/css?family=Lato&amp;subset=latin-ext"
        rel="stylesheet"
      />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="mask-icon" href={maskIcon} color="#5bbad5" />
      <link rel="shortcut icon" href={shortcut} />
      <meta name="msapplication-config" content={browserConfig} />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
}

export default TemplateWrapper
