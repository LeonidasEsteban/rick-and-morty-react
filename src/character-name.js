import React from 'react'
import styled from 'styled-components'

const CharacterNameStyled = styled.div`
  position: relative;
  font-size: 30px;
  h2:after {
    content: "";
    width: 87px;
    height: 6px;
    background-color: #F7391C;
    display: inline-flex;
    position: absolute;
    left: calc(100% + 5px);
    top: 50%;
  }
  @media screen and (max-width: 1024px) {
    text-align: center;
    h2:after {
      left: 0;
      top: calc(100% - 20px);
    }
  }
`

function CharacterName({ name }) {
  return (
    <CharacterNameStyled>
      <h2>{name}</h2>
    </CharacterNameStyled>
  )
}

export default CharacterName
