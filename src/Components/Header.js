import React from 'react'
import { HeaderWrapper,ToggleButton } from './StyledComponents'


function Header(props) {
    
  return (
    <div className={`${props.mode === 'light' ? 'dark' : 'light'}`}>
      <HeaderWrapper>
        <h3>Notes - App</h3>
        <ToggleButton onClick={props.toggleButton}>Toggle Mode</ToggleButton>
      </HeaderWrapper>
    </div>
  )
}

export default Header
