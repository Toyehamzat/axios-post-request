import styled from "styled-components";
import { useState } from "react";
export default function Main() {

    const[name,SetName]=useState()

    const[password,SetPassword]=useState()


  return (
    <FormContainer>
      <Form>
        <Label>Name</Label>
        <InputField type="text" />
      </Form>
      <Form>
        <Label>Password</Label>
        <InputField type="password" />
      </Form>
      <Button type="submit">Login</Button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  border-radius: 5px;
  box-shadow: 3px 3px 2px rgba(65, 65, 65, 0.1);
  padding: 30px 15px;
  justify-content: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Label = styled.label`
  font-weight: 700;
`;

const InputField = styled.input`
  height: 20px;
  background-color: #f6f6f6;
  border-radius: 5px;
  outline: none;

`;


const Form = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background-color:purple;
  color: white;
  font-weight: 700;
  cursor: pointer;
  border: none;
  height: 30px;
`;
