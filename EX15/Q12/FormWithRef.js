import React, { useRef } from "react";
const FormWithRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      <h2>Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Submitted Values:</h3>
          <p>Name: {nameRef.current.value}</p>
          <p>Email: {emailRef.current.value}</p>
        </div>
      )}
    </div>
  );
};
export default FormWithRef;
