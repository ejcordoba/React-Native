import axios from "axios"
import { useEffect } from "react"
import type { ReqResUserListResponse } from "../interfaces"

export const UsersPage = () => {
    // Data will trigger twice due to <React.StrictMode></React.StrictMode> at Main.tsx
    // To assure side-effect doesn't triggers any issue at the app
    useEffect(() => {

        axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2')
            .then( resp => console.log( resp.data.data[0]))
        /* fetch("https://reqres.in/api/users?page=2", {
            headers: {
                "x-api-key": import.meta.env.VITE_REQRES_API_KEY,
            },
        })
            .then((r) => r.json())
            .then((data) => console.log(data))
            .catch(console.error); */

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
                    <tr>
                        <td>avatar</td>
                        <td>nombre</td>
                        <td>email</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
