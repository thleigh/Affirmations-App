import React, {useState} from 'react'
import axios from 'axios';
import {Button, Modal, Form} from 'react-bootstrap';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const NewAffirmation = () => {

    let [modalShowNewQuote, setModalShowNewQuote] = useState(false);
    let [quote, setQuote] = useState('')
    let [author, setAuthor] = useState('')

    const handleQuote = (e) => {
        setQuote(e.target.value)
    }

    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target, "Submitted!");
    }

    function NewQuoteModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add A New Affirmation
              </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="quote">Quote: </label>
                        <input name="quote" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author: </label>
                        <input name="author" type="text" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-info">Submit</button>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <Button className="btn-info" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
          </Modal>
        );
    }


    return (
        <>
            <li className="nav-item">
                <a href="#" className="nav-link text-info" variant="primary" onClick={() => setModalShowNewQuote(true)}>
                    Add Affirmation
                </a>
            </li>
            <NewQuoteModal
                show={modalShowNewQuote}
                onHide={() => setModalShowNewQuote(false)}
            />
        </>
    )
}

export default NewAffirmation