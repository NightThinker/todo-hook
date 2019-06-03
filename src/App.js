import React from 'react';
import { reset } from 'styled-reset'
import styled, { createGlobalStyle } from 'styled-components'

import Todo from './components/Todo/Todo';

const GlobalStyle = createGlobalStyle`
 ${reset}
`

const ContianerStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  height: 100vh;
  background: #43C6AC;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #F8FFAE, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #F8FFAE, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

function App() {
  return (
    <ContianerStyle>
      <GlobalStyle/>
      <Todo />
    </ContianerStyle>
  );
}

export default App;
