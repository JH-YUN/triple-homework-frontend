import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
html, body, div, span{
    margin: 0px;
    padding: 0px;
    border: 0px;
    vertical-align: baseline;
}
  body {
    font-family: sans-serif;
    line-height: 1;
  }
`

export default Global
