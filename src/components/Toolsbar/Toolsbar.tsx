import React from 'react'
import RightBox from './RightBox'
import CenterBox from './CenterBox'
import LeftBox from './LeftBox'
import styled from 'styled-components'


const ToolsbarUiContainer = styled.div`
  background-color: #202124;
`
const Toolsbar = () => {
  return (
    <ToolsbarUiContainer className="w-full h-20 text-white flex items-center justify-between px-8">
      <LeftBox/>
      <CenterBox/>
      <RightBox/>
    </ToolsbarUiContainer>
  )
}

export default Toolsbar