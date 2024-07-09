import {Row, Col, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

export const NewsLetter = ({status, message, onValidated}) => {
    const [email, setEmail] = useState('')

    //clear fields only if status is success 
    useEffect(() => {
        if (status === 'success') clearFields();
      }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
          EMAIL: email
        })
      }

    const clearFields = () => {
        setEmail('');
    }
    
    
    return (
        <div className="newsletter-bx">
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h3>Subscribe to my Newsletter<br></br> & get all the latest updates</h3>
                    {status === 'sending' && <Alert>Sending...</Alert>}
                    {status === 'error' && <Alert variant="danger">{message}</Alert>}
                    {status === 'success' && <Alert variant="success">{message}</Alert>}
                </Col>
                <Col md={6} xl={7}>
                    <form onSubmit={handleSubmit}>
                        <div className="new-email-bx">
                            <input value={email} type="email" onChange={(e) => setEmail(e.target.email)} placeholder="Email Address" />
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </div>
    )
}