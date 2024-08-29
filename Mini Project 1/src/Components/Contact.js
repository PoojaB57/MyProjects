import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

function Contact() {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
                    <Form.Control type="text" placeholder="Enter your name"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message"
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Message Sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Message:</strong> {formData.message}</p>
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