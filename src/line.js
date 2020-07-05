import React from 'react'
import styled from 'styled-components'

const LineStyled = styled.span`
  width: 2px;
  height: 150px;
  background: black;
  display: inline-flex;
  margin-inline: 15px;
`

function Line() {
  return (
    <LineStyled />
  )
}

export default Line
