import { useAuthStore } from "../store/auth.store"

// rafc tab snippet
export const LoginPage = () => {

const authStatus = useAuthStore( state => state.status);
  return (
    <>
        <h3>Login Page</h3>
        { authStatus }
    </>
  )
}
