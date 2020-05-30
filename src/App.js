import React , {useLayoutEffect} from 'react';

import Phase1 from './components/phase1/phase1';
import Phase3 from './components/phase3/phase3';
import Phase4 from './components/phase4/phase4';

function App() {
  return (
    <div className="App">
      <Phase1></Phase1>
      <Phase4></Phase4>
      <Phase3></Phase3>
    </div>
  );
}

export default App;
