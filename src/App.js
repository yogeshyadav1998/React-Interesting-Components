import React , {useLayoutEffect} from 'react';

import Phase1 from './components/phase1/phase1';
import Phase2 from './components/phase2/phase2';
import Phase3 from './components/phase3/phase3';
import Phase4 from './components/phase4/phase4';
import Footer from './components/footer1/footer';

function App() {
  return (
    <div className="App">
      <Phase1></Phase1>
      <Phase4></Phase4>
      <Phase2></Phase2>
      <Footer></Footer>
    </div>
  );
}

export default App;
