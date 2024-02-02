import React from 'react'
import { Image } from 'react-bootstrap';

function UserListItem({user, open, setOpen, selectedUser, setSelectedUser, show, setShow}) {
    const {avatar, jobTitle, bio} = user;
    const {username, firstName, lastName, email} = user.profile;

    const handleClick = () => {
        setOpen(true);
        setShow(true)
        setSelectedUser(user);
    }
  return (
    <div className={`user-list-item d-flex rounded-2 p-3 gap-4 ${selectedUser===user?"selected":""}`} onClick={handleClick}>
        {/* {user.profile.firstName} {user.profile.lastName} */}
        <div className='avatar rounded-circle' style={{backgroundColor: "#e4e3e1"}}>
            {
                avatar.includes("fakercloud")?
                <div className='avatar-name w-100 h-100 d-flex align-items-center justify-content-center'>{firstName.charAt(0).toUpperCase()}{lastName.charAt(0).toUpperCase()}</div>
                :
                // <img src={avatar} alt="" />
                <Image className="w-100 h-100" src={avatar} roundedCircle />
            }
        </div>
        <div className='details d-flex flex-column justify-content-center' style={{backgroundColor: ""}}>
            <div className="name" style={{fontWeight: "700", fontSize: "20px"}}>{user.profile.firstName} {user.profile.lastName}</div>
            <div className="job-title">{jobTitle}</div>
        </div>
    </div>
  )
}

export default UserListItem