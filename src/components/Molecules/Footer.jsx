import React from 'react'
import styled from 'styled-components'
 
export const Footer = () => {
  return (
    <Container className='Footer'>Footer-design by me</Container>
  )
}

export default Footer

const Container = styled.footer`
&.Footer{
    padding: 30px;
    background: green;
    color: white;
    text-align: center;
    font-size: 28px;
}
`