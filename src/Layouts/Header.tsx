import React from 'react'
import styled from 'styled-components'

import { ReactComponent as SearchIcon } from '@Assets/Icons/ic-search.svg'

const Header = ({}) => {
  return (
    <Container>
      <Logo>701b</Logo>
      <SearchButton>
        <SearchIcon width="20px" height="20px" />
      </SearchButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
`

const Logo = styled.div`
  font-size: 24px;
  user-select: none;
  color: #e9ebee;
`

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  color: #e9ebee;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export default Header
