import React, {useState} from "react";
import{ useParams} from "react-router-dom";

const BookUser = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const {user} = useParams();

    //logs the user's details to the console
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, fullName, message);
        setFullName("");
        setMessage("");
    }

    return (
        <div className = 'bookContainer'>
            <h2 className='bookTitle'>Book a session with {user}</h2>
            <label htmlFor='fullName'>Full Name</label>
            <input
                id='fullName'
                name='fullName'
                type='text'
                required value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />

                <label htmlFor='fullName'>Email Address</label>
            <input
                id='email'
                name='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor='message'>Any important note? (optional)</label>
            <textarea
                rows={5}
                name='message'
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
        </div>
    )
}