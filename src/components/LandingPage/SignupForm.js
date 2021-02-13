import React, { useState } from "react";
import styled from "styled-components";
import { MOBILE_SIZE } from "../../constants";

export const Input = styled.input`
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  padding: 8px;
  vertical-align: middle;
  width: 100%;

  border: 1px solid #fff;
  border-radius: 0;
  color: #202020;
  margin-bottom: 15px;

  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;

  color: #202020;
  font-weight: 300;

  &:focus {
    outline-width: 0;
    border: 1px solid black;
  }
`;

const Button = styled.input`
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  user-select: none;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 34px;
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  background-image: linear-gradient(to bottom, #202020, #000);
  transition: all 0.3s ease-in-out;
  display: block;
  padding: 10px 16px;
  line-height: 1.3333333;
  border-radius: 6px;
  color: white;
  width: 100%;
`;

const Title = styled.div`
  font-size: 38px;
  font-weight: 800;
  margin: 0px;
  font-family: "Raleway", sans-serif;
  display: block;
  text-align: center;
  color: #333;
`;

const Subtitle = styled(Title)`
  color: #202020;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  margin: 0px 0px 30px 0px;
`;

const SuccessMessage = styled(Title)`
  color: #333;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  margin: 20px 0px 30px 0px;
`;

const Message = styled(Subtitle)`
  margin: 20px 0 0;
  font-size: 15px;
`;

const TextWrapper = styled.div`
  text-align: center;
  padding: 40px;
  border-radius: 6px;
  box-sizing: border-box;
  position: relative;
  margin-top: -40px;
  @media (max-width: ${MOBILE_SIZE}px) {
    padding: 20px;
    margin: 0 10px;
  }
`;

const Card = styled(TextWrapper)`
  margin-top: 0px;
  background-color: orange;
  max-width: 457.5px;
`;

const Bold = styled.span`
  font-weight: 800
`;

const SignupForm = ({ submitted, history }) => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleResponse = json => {
    setLoading(false);
    setMsg(json.msg);
    setName("");
    setEmail("");
    history.push("/success");
  };
  const handleClick = e => {
    e.preventDefault();

    setLoading(true);
    fetch(`/.netlify/functions/add_member?name=${name}&email=${email}`)
      .then(response => response.json())
      .then(handleResponse)
      .catch(handleResponse);
  };

  return (
    <Card>
      <Title>{submitted ? 'THANK YOU!' : 'GET MY COURSE'}</Title>
      {submitted ? <SuccessMessage>Your course is on it's way.  Make sure to check your spam folder if you have not received it.  Email <Bold>louis@codemusic.io</Bold> with any questions.  Happy Coding!</SuccessMessage> : <Subtitle>FREE CODING COURSE</Subtitle>}
      {!submitted &&
        <React.Fragment>
          <Input
            value={name}
            placeholder="Name"
            onChange={e => setName(e.target.value)}
            />
          <Input
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            />
        </React.Fragment>}
        <Button
          onClick={handleClick}
          type="submit"
          disabled={submitted}
          value={loading ? "Loading..." : submitted ? "SUCCESS!" : "GET MY COURSE"}
          />
      <span>{msg}</span>
      <Message>We promise your details are secure with us.</Message>
    </Card>
  );
};

export default SignupForm;
