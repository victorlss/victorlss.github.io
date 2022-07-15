import React from 'react'
import socialNetwork from '../constants/socialNetwork'
import colors from '../constants/colors'
import { FaEnvelope, FaGithub, FaTwitter, FaWordpress } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 10px;

  a {
    font-size: larger;
    margin: 5px;
    color: ${colors.gray800};
  }
`

export default function SocialNetworks() {
  return (
    <Container>
      <a href={socialNetwork.Github} target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
      <a href={socialNetwork.Blog} target='_blank' rel='noreferrer'>
        <FaWordpress />
      </a>
      <a href={socialNetwork.Twitter} target='_blank' rel='noreferrer'>
        <FaTwitter />
      </a>
      <a href={'mailto:' + socialNetwork.Email} target='_blank' rel='noreferrer'>
        <FaEnvelope />
      </a>
    </Container>
  )
}
