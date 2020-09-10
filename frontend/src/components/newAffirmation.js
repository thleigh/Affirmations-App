import React, {useState} from 'react'
import axios from 'axios';
import {Button, Modal, Form} from 'react-bootstrap';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const NewAffirmation = () => {

    let [quote, setQuote] = useState('')
    let [author, setAuthor] = useState('')
    let [show, setShow] = useState(false)
    let [submitted, setSubmitted] = useState(false)

    const handleShow = () => setShow(true)
    
    const handleClose = () => { 
        setShow(false)
        setSubmitted(false)
        setQuote('')
        setAuthor('')
    }

    const handleQuote = (e) => {
        setQuote(e.target.value)
    }

    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${REACT_APP_SERVER_URL}/api/affirmations`,{"quote": quote, "author": author})
        .then(response => {
            console.log(response.data);
            setSubmitted(true)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <li className="nav-item">
                <a href="#" className="nav-link text-info" variant="primary" onClick={handleShow}>
                    Add Affirmation
                </a>
            </li>

            <Modal show={show} onHide={handleClose} size="lg" centered aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        New Affirmation
                    </Modal.Title>
                </Modal.Header>
                {
                    !submitted ?
                    <>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Modal.Body>
                                <div className="form-group">
                                <label htmlFor="quote">Quote: </label>
                                <input name="quote" type="text" value={quote} onInput={handleQuote} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author: </label>
                                <input name="author" type="text" value={author} onInput={handleAuthor} className="form-control"/>
                            </div>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn-info" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                    </>
                    :
                    <>
                    <Modal.Body>
                        <p>{quote}</p>
                        <p>{author}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-info" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                    </>
                }
            </Modal>
        </>
    )
}

export default NewAffirmation