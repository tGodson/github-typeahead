import React, { useState } from 'react';
//import useUser from './API';
import '../style/typeaheadDropdown.css';

const Input = ({ u }) => {
  const clientId = '75e3235a908a255af6ad';
  const clientSecret = 'a23eecc56bc36029b96ec002eda3bb182239ed24';
  const githubURI = 'https://api.github.com/users';

  let [text, setText] = useState('');
  let [suggestions, setSuggestions] = useState([]);
  
  //if (isError) return <div>failed to load</div>
  //if (isLoading) return <div>loading...</div>

  const SuggestionSelected=(name)=>{
    setText(name);
    setSuggestions([]);
  }

  const OnTextChange = async(e) => {
    text = e.target.value;
    if (text.length > 0) {
      try {
        const user = await fetch(`${githubURI}/${text}?client_id=${clientId}&client_secret=${clientSecret}`)
        const profile = await user.json();
        suggestions = [profile];
      } catch(err) {
        alert(err); // TypeError: failed to fetch
      }
    }
    console.log(text,suggestions)
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