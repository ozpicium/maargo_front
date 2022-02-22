import React, { useState } from "react";
import {
  Box,
  Paragraph,
  TextInput,
  Button,
  Image,
  Footer,
  Anchor,
  Text
} from "grommet";
import logo from "../logo.PNG";
import { useHistory } from "react-router-dom";
import { sendVerificationCode, emailVerification } from "../apis/SignUp";

export let anonId = '';

const styles = {
  root: { marginTop: 20, marginLeft: 20 },
  image: { width: 150, marginLeft: 90, marginBottom: 20, marginTop: 20 },
  para: { fontWeight: 10, marginLeft: 20, marginRight: 20, marginBottom: 70 },
  checkbox: { marginRight: 40 },
  button: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 20,
    marginLeft: 20,
    width: 300,
    marginBottom: 10,
  },
  input: { marginLeft: -10 },
  backButton: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 125,
    width: 100,
    marginBottom: 10,
  },
};
const SignUp = () => {

  const history = useHistory();

  const [emailChecked, setEmailChecked] = useState(false);
  const [emailValue, setEmailValue] = React.useState("");
  const [codeValue, setCodeValue] = React.useState("");
  const [emailVerify, setEmailVerify] = React.useState(false);
  const [emailCodeVerify, setEmailCodeVerify] = React.useState(false);
  const [anonCode, setAnonCode] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    sendVerificationCode(emailValue)
    .then(res => {
      if(res.status === "fail"){
        setEmailVerify(true)
      } else {setEmailChecked(!emailChecked);setEmailVerify(false); setAnonCode(res.status); anonId= res.status}
    });
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    emailVerification(codeValue)
    .then(res => {
      if(res.status === "fail"){
        setEmailCodeVerify(true)
      } else {history.push("/onboard");setEmailCodeVerify(false)}
      });
  };
  return (
      <>
    <Box style={styles.root}>
      <header>
        {console.log(anonCode)}
        <Image src={logo} alt="logo" style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Email ID"
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
        />

        <Button
          label="Send Verification Code"
          style={styles.button}
          onClick={(e) => {handleSubmit(e)}}
        />
        {emailVerify  && <Text color="red">Please provide valied email</Text>}
        <Paragraph style={styles.para}>
          Please enter the email address registered with your university. Upon
          clicking Verify button, you will receive a verification code in your
          email. Please enter the code below and set your anonymous ID for
          login. We will identify you by your anonymous ID and your email
          address will not be revealed.
        </Paragraph>

        <TextInput
          style={styles.input}
          placeholder="Verification code"
          value={codeValue}
          onChange={(event) => {
            setCodeValue(event.target.value);
          }}
        />
        {emailCodeVerify  && <Text color="red">Please provide valied code</Text>}

        <Button
          label="Let's Onboard"
          style={styles.button}
          disabled={emailVerify}
          onClick={(e) => handleVerifySubmit(e) }
        />

        <Button
          label="Back"
          style={styles.backButton}
          onClick={() => history.push("/")}
        />

      </header>

    </Box>
          <Footer background="black" pad="medium" >
          <Anchor label="About Us" color={"white"} />
        <Anchor label="Private Policy" color={"white"} />
        <Anchor label="contactus@maargotech.com" color={"white"} />
        </Footer>
        </>
  );
};
export default SignUp;
