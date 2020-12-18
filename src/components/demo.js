import useUser from './API';

function Avatar ({ u }) {
    const { user, isLoading, isError } = useUser(u)
    if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log(user);
  // render data
  const value = 't';
  let suggestions = [];
  const regex = new RegExp(`^${value}`, `i`);
    suggestions = user.sort().filter(v => regex.test(v.login));
    return (
        <ul>
          {suggestions.map(city => <li key={city.id} >{city.login}</li>)}
        </ul>
      )
}
export default Avatar;