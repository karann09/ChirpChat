import { useContext } from "react";
import {Alert, Button, Form, Row, Col, Stack} from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";


const Register = () => {
    const {registerinfo, updateRegisterInfo, regisgterUser, registerError, isRegisterLoading} = useContext(AuthContext)
    return (
    <>
    <Form onSubmit={regisgterUser}>
        <Row style= {{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%"
        }}>
            <Col x5={6}>
            <Stack gap={3}>
                <h2>Register</h2>
                <Form.Control type="text" placeholder="Name" onChange={(e)=>updateRegisterInfo({...registerinfo,name: e.target.value})} />
                <Form.Control type="email" placeholder="Email" onChange={(e)=>updateRegisterInfo({...registerinfo,email: e.target.value})} />
                <Form.Control type="password" placeholder="Password" onChange={(e)=>updateRegisterInfo({...registerinfo,password: e.target.value})}/>
                <Button variant="primary" type="submit">
                    {isRegisterLoading ? "Creating your account" : "Register"}
                </Button>
                {
                    registerError?.error && ( <Alert variant="danger">
                    <p>{registerError?.message}</p></Alert>
                )}
                
                
            </Stack>
            </Col>
        </Row>
    </Form>
    </>
    );
}
 
export default Register;