import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function Main() {
  const [name, SetName] = useState("");

  const [password, SetPassword] = useState("");

  const url = 'https://core.development.4traderx.com/login';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url,{ name: name, password: password });
      console.log(response.data);
    }catch (error) {
      console.log(error.response);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Form>
        <Label>Name</Label>
        <InputField
          type="text"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        />
      </Form>
      <Form>
        <Label>Password</Label>
        <InputField
          type="password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
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
  background-color: purple;
  color: white;
  font-weight: 700;
  cursor: pointer;
  border: none;
  height: 30px;
`;
