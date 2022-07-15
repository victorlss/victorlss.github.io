import React from 'react'
import styled from 'styled-components'
import colors from '../constants/colors'

const H1 = styled.h1`
  margin: 0;
`

const H2 = styled.h2`
  margin: 0;
  font-weight: normal;
  color: ${colors.gray800};
`

export default function Title() {
  return (
    <>
      <H1>Victor Souza da Silva</H1>
      <H2>Software Developer</H2>
    </>
  )
}
