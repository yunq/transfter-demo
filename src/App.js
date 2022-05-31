import React, { lazy } from 'react'



const TransferTablePage = lazy(() => import('../src/view/transferTable'))



function App() {
  return (
    <TransferTablePage />
  );
}

export default App;
