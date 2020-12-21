import React, { useState } from 'react';
import useUser from './API';
import '../style/typeaheadDropdown.css';

const Input = ({ u }) => {
  const { user, isLoading, isError } = useUser(u);

  let [text, setText] = useState('');
  let [suggestions, setSuggestions] = useState([]);
  
  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const SuggestionSelected=(name)=>{
    setText(name);
    setSuggestions([]);
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
        <div className="suggestions">
        {suggestions.map(user => 
        <div className="grid-container" key={user.id} onClick={(e)=>SuggestionSelected(user.login)}>
            <div className="avatar">
              <img src={user.avatar_url} alt="Avatar"/>
            </div>
            <div className="name">
              <p>{user.login}</p>
            </div>
        </div>
        )}
        </div>
        
      )
    }else return null;
  } 
 
  return (
    <div className="TypeAheadDropDown">
      <input onChange={OnTextChange} placeholder="Search Github user"  value={text} type="text" />
      {RenderSuggestions()}
    </div>
  );  
}
export default Input;