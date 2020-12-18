import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())
const api = process.env.REACT_APP_Github_API_KEY

const UseUser = () => {
  const { data, error } = useSWR(`${api}`, fetcher)
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}
export default UseUser;