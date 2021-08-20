import React from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { useForm } from "react-hook-form";

export default function AddReview({ currentUser }) {
    const { register, getValues } = useForm();
    const { itemId } = useParams()
    console.log(currentUser)

    function handleSubmit(event) {
        event.preventDefault()
        const newReview = {
            description: getValues("review"),
            date: "17/08/2021",
            rating: 4,
            itemId: Number(itemId),
            userId: Number(currentUser.id),

        }
        console.log(newReview)

        fetch('http://localhost:4000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })

    }
    return (
        <main className='main-div'>
            <div className="login-container">
                <h1> Leave a review</h1>
                <form className="register-form" style={{ width: 450 }} type="submit" >
                    <TextField {...register("review")} name="review" variant="outlined" type="text" placeholder="What did you think?" fullWidth multiline
                        rows="10"></TextField>
                    <Link to={`/items/${itemId}`} style={{ textDecoration: 'none' }}>
                        < Button onClick={handleSubmit} type="submit" color="secondary" variant="contained"> Submit</Button >
                    </Link>
                </form>
            </div>
        </main >
    )
}