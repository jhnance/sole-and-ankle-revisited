import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import { BREAKPOINTS } from '../../constants';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const theme = {
  breakpoints: BREAKPOINTS,
};

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
