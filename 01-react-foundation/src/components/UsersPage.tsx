import axios from "axios"
import { useEffect, useRef, useState } from "react"
import type { ReqResUserListResponse, User } from "../interfaces"
// loadUsers awaits a type User from the interface ReqResUserListResponse
const loadUsers = async(page:number = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users',{
        params:{
            page:page
        },
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
    const currentPageRef = useRef(1);
    useEffect(() => {
       loadUsers(currentPageRef.current)
        .then(users => setUsers(users));
    //.then(setUsers) <--- we can do it this way, sending the function, then it set all the arguments in 

    }, []);
    
    const nextPage = async() => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if ( users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    }
    const prevPage = async() => {
        if (currentPageRef.current < 1) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    }

 
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
            <div>
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </div>
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
