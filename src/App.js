import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export function App() {
  const Button = styled.button`
    background-color: black;
    color: white;
    width: 100%;
    font-size: 20px;
    padding: 10px 0px;
    border: 0;
    border-radius: 15px;
    margin-top: 10px;

    cursor: pointer;
  `;

  return (
    <div className="containerr">
      <h1 className="Header">Sign In</h1>

      <form>
        <input placeholder="Enter your email" />
        <input placeholder="Enter your password" />
        <Button> Sign In </Button>
        <Button> Login as Guest User </Button>
      </form>
      <div className="footer">
        New To movie App? <a href="google.com"> SignUp Now</a>
      </div>
    </div>
  );
}

