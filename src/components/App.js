import React from 'react';
import '../style/App.css';
import TypeaheadDropdown from './typeaheadDropdown';
import cities from './cities.js'
const App = () => {
 return (
   <div className="App">
       <TypeaheadDropdown iteams={cities} />
   </div>
 );
}
 
export default App;