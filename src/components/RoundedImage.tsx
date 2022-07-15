import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  border-radius: 50%;
  width: 250px;
`

type Props = {
  src: string
}

export default function RoundedImage(props: Props) {
  const { src } = props
  return (
    <div>
      <Img src={src} />
    </div>
  )
}
