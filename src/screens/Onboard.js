import React, { useState } from "react";
import logo from "../logo.PNG";
import { Box, Image, Paragraph, Text, Button, TextInput,   Footer,
    Anchor, } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { setAnonId } from "../apis/Onboard";

const styles = {
  root: { marginTop: 20, marginLeft: 20 },
  image: { width: 150 },
  helplinesicon: { marginRight: 20, height: 40, width: 30, marginLeft: 150 },
  helplines: { marginLeft: 275, marginRight: 20 },
  para: { fontWeight: 10, marginLeft: 20, marginRight: 20, marginBottom:40 },
  backButton: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 125,
    width: 100,
    marginBottom: 10,
  },
  setButton: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    width: 150,
    marginRight: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 20,
    marginLeft: 20,
    width: 300,
    marginBottom: 10,
  },
  input: { width: 200 },
};

export let userId = "";
const Onboard = () => {
  const [setID, setSetID] = useState(false);
  const [value, setValue] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setAnonId(value)
    .then(res => {
      if(res.status === "fail"){
        setSetID(false)
      } else {setSetID(!setID); userId = value}
    });
  };
  return (
      <>
    <Box style={styles.root}>
      <header>
        <Image src={logo} alt="logo" style={styles.image} />

        <FontAwesomeIcon
          style={styles.helplinesicon}
          icon={faPhoneAlt}
          onClick={() => history.push("/helplines")}
        />
        <Text style={styles.helplines}>Helplines</Text>
        <Paragraph style={styles.para}>
          Please set an anonymous ID for your login. We will not use your email
          address or real identity for login in order to protect your privacy.
          Your profile and data records will be identified using the anonymous
          ID.
        </Paragraph>
        <Box direction="row">
          {" "}
          <TextInput
            style={styles.input}
            placeholder="Anonymous Id"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <Button
            label="Set"
            style={styles.setButton}
            onClick={(e) => handleSubmit(e)}
          />
        </Box>
        <Paragraph style={styles.para}>
          Please take a few minutes to answer the following questions. This will
          help us build your profile and provide the best recommendations that
          work for you.
        </Paragraph>
        <Button
          disabled={!setID}
          label="Continue"
          style={styles.button}
            onClick={() => history.push("/questionaire")}
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
export default Onboard;
