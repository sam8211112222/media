import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../store";

const UserList = () => {
    const dispatch = useDispatch()

    const {isLoading,data,error} = useSelector((state)=>{
     return state.users
    })

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (isLoading){
        return <div>
            Loading...
        </div>
    }

    if (error){
        return <div>
            Error...
        </div>
    }
    const renderedUsers = data.map((user)=>{
        return <div key={user.id}>
            <div>{user.name}</div>
        </div>
    })
    return <div>
        {renderedUsers}
    </div>
}

export default UserList
