import React from 'react';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactMeImage from '../assets/images/contact-img.svg'

export const Contact = () => {
    const initialDetails = {
        firstName: '', 
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        message: ''
    };
    // state to store details
    const [formDetails, setForDetails] = useState(initialDetails)
    // submit button text, initially set to Send
    const [buttonText, setButtonText] = useState('Send')
    // used to see if we get error message on send or not, set to empty object until user sends something
    const [status, setStatus] = useState({})
    
    // function takes in a category and value for the category, updates the form value state but leaves the other values in the form in tact. 
    const onFormUpdate = (category, value) => {
        setForDetails({
          ...formDetails,
          [category]: value
        })
    }
    
    // since request is being made to api, use async
    const handleSubmit = async(e) => {
      //dont reload page when user submits form
      e.preventDefault()
      
      //when form is being submitted, set text to Sending
      setButtonText('Sending...')

      // data from server.js
      let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    })
      setButtonText("Send")
      let result = response.json
      setForDetails(initialDetails)

      if (result.code === 200) {
        setStatus({ succes: true, message: 'Message sent successfully'});
      } else {
        setStatus({ succes: false, message: 'Error submitting message. Please try again later.'});

      }
    }

    return (
        <section className="contact" id="connect">
          <Container>
            <Row className="align-items-center">
                <Col md={6}>
                  <img src={contactMeImage} alt='Contact Me'/>
                </Col>
                <Col md={6}>
                  <h2> Contact Me</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className='px-1'>
                        <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate ('firstName', e.target.value)} />
                      </Col>
                      <Col sm={6} className='px-1'>
                        <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate ('lastName', e.target.value)} />
                      </Col>
                      <Col sm={6} className='px-1'>
                        <input type='email' value={formDetails.emailAddress} placeholder='Email Address' onChange={(e) => onFormUpdate ('email', e.target.value)} />
                      </Col>
                      <Col sm={6} className='px-1'>
                        <input type='telephone' value={formDetails.phoneNumber} placeholder='Phone Number' onChange={(e) => onFormUpdate ('phone', e.target.value)} />
                      </Col>
                      <Col>
                        <textarea row="6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate ('message', e.target.value)} />
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                        {
                          //message for whether form submission is successful or not along with status message. 
                          status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        }
                    </Row>
                  </form>
                </Col>
            </Row>
          </Container>
        </section>
    )
}