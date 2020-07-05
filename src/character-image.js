import React from 'react'
import styled from 'styled-components'

const CharacterImageStyled = styled.div`
  grid-area: avatar;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {

  }
`

function CharacterImage({ image, name }) {
  return (
    <CharacterImageStyled>
      <img class="character-image" src={image} alt={name} />
    </CharacterImageStyled>
  )
}

export default CharacterImage
