import React from 'react';
import '../style/App.css';
import TypeaheadDropdown from './typeaheadDropdown';
import cities from './cities.js';
import User from './demo';

const App = () => {
 return (
   <div className="App">
       {/* <TypeaheadDropdown iteams={cities} /> */}
       <User />
   </div>
 );
}
 
export default App;