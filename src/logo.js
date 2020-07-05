import React from 'react'
import styled from 'styled-components'

const LogoStyled = styled.img`
  margin: 0 auto 2em;
  display: block;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`

function Logo() {
  return (
    <LogoStyled src="./images/logo@2x.png" width="280" alt="" />
  )
}

export default Logo
