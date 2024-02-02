import React from 'react'
import { Image } from 'react-bootstrap';

function UserDetailsModal({ selectedUser, setSelectedUser, show, setShow }) {
    const { avatar, jobTitle, Bio } = selectedUser;
    const { username, firstName, lastName, email } = selectedUser.profile;

    const handleModalClose = () => {
        setShow(false);
        setSelectedUser(null);
    }
    
    return (
        <div className='user-details-modal' onClick={handleModalClose}>
            <div className="user-details position-relative rounded-2 d-md-flex flex-column align-items-center" onClick={(e) => e.stopPropagation()}>
                <span onClick={handleModalClose} style={{cursor: "pointer"}}><i className="bi bi-x" style={{fontSize: "24px"}}></i></span>
                <div className='d-flex flex-column align-items-center'>
                    <div className='avatar rounded-circle mb-3' style={{ backgroundColor: "#e4e3e1", height: "100px", width: "100px" }}>
                        {
                            avatar.includes("fakercloud") ?
                                <div className='avatar-name w-100 h-100 d-flex align-items-center justify-content-center'>{firstName.charAt(0).toUpperCase()}{lastName.charAt(0).toUpperCase()}</div>
                                :
                                <Image className="w-100 h-100" src={avatar} roundedCircle />
                        }
                    </div>
                    <span className='name d-block'>{firstName} {lastName}</span>
                    <small className='job-title mb-2 d-block'>{jobTitle}</small>
                </div>
                <div className='w-100 pt-4' style={{ borderTop: "1px solid #c9c9c9" }}>
                    <label htmlFor="bio"><small>Bio</small></label>
                    <p id="bio" className='text-left d-block'>{Bio}</p>
                    <label htmlFor="email"><small>Username</small></label>
                    <p id="username" className='text-left d-block'>{username}</p>
                    <label htmlFor="email"><small>Email Address</small></label>
                    <p id="bio" className='text-left d-block'>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetailsModal