import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font: 112.5%/1.45em -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  a {
    color: #016fb9;
    text-decoration: none;
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags } // return styles collected
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <GlobalStyle />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
