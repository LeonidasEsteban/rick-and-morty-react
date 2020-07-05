import React from 'react'
import styled from 'styled-components'

const CharacterNameStyled = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  grid-area: character-name;
  /* padding-inline-start: 1em; */
  .name {
    position: relative;
    font-size: 30px;
  }
  .name h2:after {
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
    margin-top: 1em;
    justify-content: center;
    .name {
      text-align: center;
    }
    .name h2:after {
      left: 0;
      top: calc(100% - 20px);
    }
  }
`

function CharacterName({ name }) {
  return (
    <CharacterNameStyled>
      <div class="name">
        <h2>{name}</h2>
      </div>
    </CharacterNameStyled>
  )
}

export default CharacterName
