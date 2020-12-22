// import useSWR from 'swr';

// const fetcher = (...args) => fetch(...args).then(res => res.json())
// //const api = process.env.REACT_APP_Github_API_KEY

// const UseUser = () => {
//   const { data, error } = useSWR(`https://api.github.com/users`, fetcher)
//   return {
//     user: data,
//     isLoading: !error && !data,
//     isError: error
//   }
// }
// export default UseUser;
const handleFindGitUser= async(e)=>{
  //setGitUserName(e.target.value)
  const user = await fetch(`https://api.github.com/users/${e.target.value}`)
  const profile = await user.json();
   return profile;
  
  }