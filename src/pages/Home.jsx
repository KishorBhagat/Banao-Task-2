import axios from "axios";
import { useEffect, useState } from "react";
import UserListItem from "../components/UserListItem";
import { Spinner } from "react-bootstrap";
import UserDetails from "../components/UserDetails";
import UserDetailsModal from "../components/UserDetailsModal";

function Home() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null)
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users`);
                if (response.status === 200) {
                    setUsers(response.data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error)
                // setIsLoading(false);
            }
        };
        fetchData();
    }, [])

    return (
        <div className="home">
            {selectedUser && <UserDetailsModal selectedUser={selectedUser} setSelectedUser={setSelectedUser} show={show} setShow={setShow} />}
            <h2>Users</h2>
            <div className={`box d-flex ${open && "gap-4"}  flex-column-reverse flex-md-row`}>
                <div className="users-list-container d-flex flex-column gap-2">
                    {
                        !isLoading ?
                            (
                                users?.length !== 0 ?
                                    users?.map((user, idx) => {
                                        return <UserListItem user={user} key={idx} open={open} setOpen={setOpen} selectedUser={selectedUser} setSelectedUser={setSelectedUser} show={show} setShow={setShow} />
                                    })
                                    :
                                    <div className="mt-5 text-center" style={{fontSize: "20px"}}>No data to show!</div>
                            )
                            :
                            <div className="spinner text-center"><Spinner /></div>
                    }
                </div>
                {
                    selectedUser && <UserDetails open={open} selectedUser={selectedUser} />
                }
            </div>
        </div>
    )
}

export default Home