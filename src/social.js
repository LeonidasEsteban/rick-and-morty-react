import React from 'react'
import styled from 'styled-components'

const SocialStyled = styled.div`
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    a {
      margin-left: 2em;
    }
    a:first-child {
      margin-left: 0;
    }
  }
`

function Social() {
  return (
    <SocialStyled>
      <a href="https://instagram.com/LeonidasEsteban">
        <img src="./images/instagram.svg" alt="" />
      </a>
      <a href="https://facebook.com/LeonidasEsteban">
        <img src="./images/facebook.svg" alt="" />
      </a>
      <a href="https://twitter.com/LeonidasEsteban">
        <img src="./images/twitter.svg" alt="" />
      </a>
    </SocialStyled>
  )
}

export default Social
