import React, { useRef } from "react";
import useHttp from "../../hooks/use-http";
import { toast } from "react-toastify";
import "./Form.css";

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const { fetchHandler: sendData } = useHttp();
  function submitHandler(e) {
    e.preventDefault();
    if (nameRef.current.value.trim().length === 0) {
      nameRef.current.focus();
      return;
    }
    if (emailRef.current.value.trim().length === 0) {
      emailRef.current.focus();
      return;
    }
    if (numberRef.current.value.trim().length !== 10) {
      console.log(numberRef.current.value.trim().length);
      numberRef.current.focus();
      return;
    }
    sendData(
      {
        url: "https://seed-cart-7d0b9-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        method: "POST",
        body: {
          name: nameRef.current.value,
          email: emailRef.current.value,
          number: numberRef.current.value,
        },
      },
      (data) => toast("I will get back you soon!")
    );
    nameRef.current.value = "";
    emailRef.current.value = "";
    numberRef.current.value = "";
  }
  return (
    <div>
      <h3>Enter your details below so we can get in touch.</h3>
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          ref={nameRef}
        />
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          ref={emailRef}
        />
        <label htmlFor="number">PHONE NUMBER</label>
        <input
          type="number"
          id="number"
          placeholder="Enter your phone number"
          max={9999999999}
          ref={numberRef}
        />
        <div className="action">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
