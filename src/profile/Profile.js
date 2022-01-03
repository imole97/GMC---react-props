import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {


    const {fullname,bio,profession,handleName} = props
    return (
        <div>
           <div>
               <span>Full Name: {fullname}.</span>
           </div>
           <div>
               <span>Bio: {bio}.</span>
           </div>
           <div>
               <span>Profession: {profession}.</span>
           </div>
           <button onClick={()=> handleName(fullname)}>Click Me</button>
           <div>{props.children}</div>
        </div>
    )
}

Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}
Profile.defaultProps = {
    fullname: 'tell me your fullname',
    bio: 'tell me about your self',
    profession: 'what do you do?'
}

export default Profile
