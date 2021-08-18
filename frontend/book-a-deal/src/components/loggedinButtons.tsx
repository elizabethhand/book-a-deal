import React from "react"
import heartImage from '../assets/heart.png'
import reviewImage from '../assets/review.png'
import basketImage from '../assets/shopping-cart.png'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

export default function loggedinButtons({ setCurrentUser, currentUser, users }) {
    function LogOut() {
        setCurrentUser(null)
    }

    // if (users !== undefined) {
    //     let foundName = users.find(user => (user.id === currentUser))
    //     console.log(foundName)

    return (
        <>
            <div className="loggedin-icon-container">
                {/* <p> Welcome {foundName.firstName}</p> */}
                <Link to="/profile/favourites">
                    <img src={heartImage} alt="heart" />
                </Link>
                <Link to="/profile">
                    <img src={basketImage} alt="profile" />
                </Link>
                <Link to="/profile/mycomments">
                    <img src={reviewImage} alt="comment" />
                </Link>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <Button color="secondary" variant="contained" onClick={LogOut}> Log out </Button>
                </Link>

            </div>
        </>
    )
}
