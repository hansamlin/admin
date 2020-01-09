import React from "react";
import styled from "styled-components";

const Form = styled.div`
  display: block;
  margin: auto;
  height: 50%;
  width: 50%;
  top: 25vh;
  position: relative;
  border: 1px solid gray;
`;

const Input = styled.input`
  padding: 0.5rem 1.5em;
  font-size: 30px;
  border-radius: 3rem;
  border: 1px solid black;
  outline: none;
  display: block;
  width: 200px;
  margin: 3rem auto;
`;

const Button = styled.button`
  border: 1px solid black;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  margin: 3rem auto;
  width: 100px;
  display: block;
`;

export default () => {
  return (
    <Form>
      <Input placeholder="帳號" />
      <Input placeholder="密碼" />
      <Button>登入</Button>
    </Form>
  );
};
