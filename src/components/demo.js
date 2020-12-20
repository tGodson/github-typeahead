import React, { useState } from 'react';
import useUser from './API';
import '../style/typeaheadDropdown.css';

const Input = ({ u }) => {
  const { user, isLoading, isError } = useUser(u);

  //let text='';
  let [text, setText] = useState('');
  //let suggestions = [];
  let [suggestions, setSuggestions] = useState([]);

  console.log(text,suggestions);
  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const SuggestionSelected=(name)=>{
    suggestions=[];
    text = name;
  }

  const OnTextChange = (e) => {
    text = e.target.value;
    if (text.length > 0) {
      let regex = new RegExp(`^${text}`, `i`);
      suggestions = user.sort().filter(v => regex.test(v.login));
    }
    setText(text);
    setSuggestions(suggestions);
  }

  const RenderSuggestions = () => {
    if (suggestions.length > 0 && text.length > 0) {
      return (
        <ul>
          {suggestions.map(user => <li key={user.id} onClick={(e)=>SuggestionSelected(user.login)}>{user.login}</li>)}
        </ul>
      )
    }else return null;
  } 
 
  return (
    <div className="TypeAheadDropDown">
      <input onChange={OnTextChange} placeholder="Search user"  type="text" />
      {RenderSuggestions()}
    </div>
  );  
}
export default Input;