import React  from 'react';
import useAxios from "axios-hooks";

const Login = () => {
    const [{ data, loading, error ,response}, refetch] = useAxios(
        {url:'api/login',      method: 'POST'}

    )
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error! {JSON.stringify(error)}</p>

    return (
        <div style={{align:'center',border:'1px solid grey'}}>
            <div>Login Form da implementare</div>
            <button onClick={refetch}>Login</button>
            {response.status}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
export default Login;