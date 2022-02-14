import Writing from '@Components/Writing/Writing'
import Header from '@Layouts/Header'
import React from 'react'
import styled from 'styled-components'

interface WritingPageProps {}

const WritingPage = ({}: WritingPageProps) => {
  return (
    <Container>
      <Header />
      <Content>
        <Writing
          writingData={{
            id: '123',
            title: 'Sample Title',
            publishedDate: new Date(),
            markdownContent: `
# 1. 서문

create-react-app9(이하 CRA)으로 React 웹앱을 만들었다. typescript도 사용하였다.

webpack 직접 설정하기 첫걸음으로, \`alias\`를 배워보겠다.

- alias 설정
- 어쩌구 저쩌구

1. 1번
2. 2번

> 인용문~

\`\`\`javascript
const code = 123

function SampleComponent({style, children}) {
  return <Button style={style}>
    {children}
  </Button>
}
\`\`\`
          `,
          }}
        />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: #0d1117;
  min-height: 100vh;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`

export default WritingPage
