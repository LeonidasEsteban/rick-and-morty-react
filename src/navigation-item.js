import React from 'react'
import styled from 'styled-components'

const NavigationItemStyled = styled.a`
  text-decoration: none;
  color: black;
  font-size: 25px;
  text-transform: uppercase;
`

function NavigationItem({ url, text }) {
  return (
    <NavigationItemStyled href={url}>
      {text}
    </NavigationItemStyled>
  )
}

export default NavigationItem
