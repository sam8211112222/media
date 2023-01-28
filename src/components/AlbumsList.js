import {useFetchAlbumsQuery} from "../store";

function AlbumsList({ user }) {
  const{data,loading,error}=useFetchAlbumsQuery(user)
  console.log(data,loading,error)
  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
