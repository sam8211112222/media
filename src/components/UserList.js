import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../store";
import Button from "./Button";
import {addUser} from "../store/thunks/addUser";

const UserList = () => {
    const dispatch = useDispatch()

    const {isLoading, data, error} = useSelector((state) => {
        return state.users
    })

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const handleUserAdd = () => {
        dispatch(addUser());
    };

    if (isLoading) {
        return <div>
            Loading...
        </div>
    }

    if (error) {
        return <div>
            Error...
        </div>
    }
    const renderedUsers = data.map((user) => {
        return <div key={user.id}>
            <div>{user.name}</div>
        </div>
    })
    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
                <Button onClick={handleUserAdd}>+ Add User</Button>
            </div>
            {renderedUsers}
        </div>
    )
}

export default UserList
