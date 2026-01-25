import axios from "axios"
import { useEffect, useState } from "react"
import type { ReqResUserListResponse, User } from "../interfaces"
// loadUsers awaits a type User from the interface ReqResUserListResponse
const loadUsers = async(): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users',{
        headers: {
          "x-api-key": import.meta.env.VITE_REQRES_API_KEY,
        },
      });
        return data.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}

export const UsersPage = () => {
    // Data will trigger twice due to <React.StrictMode></React.StrictMode> at Main.tsx
    // To assure side-effect doesn't triggers any issue at the app

    // useState allows us to refresh the component when the state changes
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {

       loadUsers()
        .then(users => setUsers(users));
    //.then(setUsers) <--- we can do it this way, sending the function, then it set all the arguments in 

    }, [])
    return (
        <>
            <h3>Usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => (
                          <UserRow key={user.id}  user={user}/>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

interface Props {
    user: User;
}

export const UserRow = ({user}: Props) => {

  const { avatar, first_name, last_name, email} = user;
  return (
    <tr>
        <td><img style={{width:'50px'}} src={avatar} alt="User avatar"/></td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
    </tr>
  )
}
