
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CharacterName from './character-name'
import CharacterImage from './character-image'
import CharacterDescription from './character-description'
import CharacterPlaceholder from './character-placeholder'
import Layout from './layout'
import api from './api'
import Next from './next'
import CharacterContext from './character-context'


const CharacterStyled = styled.div`

`

function Character({ match }) {
  const [character, setCharacter] = useState({})
  useEffect(() => {
    async function getCharacter() {
      setCharacter(await api.getCharacter(match.params.id || 1))
    }
    getCharacter()
  }, [match.params.id])
  return (
    <CharacterStyled>
      <CharacterContext.Provider value={{
        character,
        setCharacter
      }}>
        <CharacterPlaceholder name={character.name} />
        <Layout
          next={<Next />}
          name={<CharacterName name={character.name} />}
          image={<CharacterImage image={character.image} name={character.name} />}
          description={<CharacterDescription gender={character.gender} species={character.species} status={character.status} />}
        />
      </CharacterContext.Provider>
    </CharacterStyled>
  );
}

export default Character
