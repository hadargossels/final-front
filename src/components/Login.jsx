import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

   async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
           await login(emailRef.current.value, passwordRef.current.value)
           history.push('/Dashboard')
        }
        catch {
            setError('Faild to sign in')
        }
        setLoading(false)
        
    }
    return (
        <>
        <Card style={{maxWidth: '400px', margin: '15px auto'}} className='d-flex justify-content-center'>
            <Card.Body>
                <h2 className='text-center mb-4 '>Log in</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email" className='w-100 p-0'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Button disabled={loading} className='w-100 mt-2' type='submit'>Log in</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                <Link to='/forgot-password'>Forgot Password?</Link>
                </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center m-2">
            Need an account? <Link to='/signup' className='text-dark'>Sign Up</Link>
            
        </div>
        </>
    )
}
