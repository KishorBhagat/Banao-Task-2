import React from 'react'
import { Image } from 'react-bootstrap';

function UserDetails({ open, selectedUser }) {

    const { avatar, jobTitle, Bio } = selectedUser;
    const { username, firstName, lastName, email } = selectedUser.profile;
    return (
        <div
            className="user-details position-relative rounded-2 d-md-flex flex-column align-items-center d-none"
            style={{
                // width: `${open ? "30%" : "0%"}`,
                // padding: `${open ? "20px" : "20px 0"}`,
                display: `${open ? "block" : "none"}`,

            }}
        >
            <div className='avatar rounded-circle mb-3' style={{ backgroundColor: "#e4e3e1", height: "100px", width: "100px" }}>
                {
                    avatar.includes("fakercloud") ?
                        <div className='avatar-name w-100 h-100 d-flex align-items-center justify-content-center'>{firstName.charAt(0).toUpperCase()}{lastName.charAt(0).toUpperCase()}</div>
                        :
                        <Image className="w-100 h-100" src={avatar} roundedCircle />
                }
            </div>
            <span className='name'>{firstName} {lastName}</span>
            <small className='job-title mb-4'>{jobTitle}</small>
            <div className='w-100 pt-4' style={{borderTop: "1px solid #c9c9c9"}}>
                <label htmlFor="bio"><small>Bio</small></label>
                <p id="bio" className='text-left d-block'>{Bio}</p>
                <label htmlFor="email"><small>Username</small></label>
                <p id="username" className='text-left d-block'>{username}</p>
                <label htmlFor="email"><small>Email Address</small></label>
                <p id="bio" className='text-left d-block'>{email}</p>
            </div>
        </div>
    )
}

export default UserDetails