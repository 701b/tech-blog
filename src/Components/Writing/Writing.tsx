import React from 'react'
import styled from 'styled-components'

import { WritingData } from '@Services/Firebase/firebase'

import Markdown from '@Components/Markdown/Markdown'

interface WritingProps {
  writingData: WritingData
}

const Writing = ({ writingData }: WritingProps) => {
  return (
    <Container>
      <TitleText>{writingData.title}</TitleText>
      <DateText>{writingData.publishedDate.toLocaleDateString()}</DateText>
      <Markdown markdownCode={writingData.markdownContent} />
    </Container>
  )
}

const Container = styled.div`
  width: 900px;
  background-color: #0d1117;
  padding: 20px;
`

const TitleText = styled.div`
  margin-bottom: 50px;
  font-size: 60px;
  font-weight: 700;
  color: #e9ebee;
`

const DateText = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #c9d1d9;
`

export default Writing
