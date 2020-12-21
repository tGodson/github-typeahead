import React from 'react';
import '../style/App.css';
import Header from './header';
import TypeaheadDropdown from './typeaheadDropdown';

const App = () => {
 return (
   <div className="App">
      <Header />
      <TypeaheadDropdown />
   </div>
 );
}
 
export default App;