import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Contact() {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleShow();
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Form Submitted</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Contact;