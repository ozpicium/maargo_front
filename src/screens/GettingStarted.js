import React, { useState } from "react";
import logo from "../logo.PNG";
import {
  Box,
  Image,
  Paragraph,
  Text,
  Carousel,
  Card,
  CardHeader,
  Button,
  TextInput,
  Footer,
  Anchor
} from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import chatting from "../chatting.png";
import bloging from "../bloging.png";
import helpline from "../helpline.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { login } from "../apis/Login";

const styles = {
  root: { marginTop: 20, marginLeft: 20, marginBottom:10 },
  image: { width: 150 },
  helplinesicon: { marginRight: 20, height: 40, width: 30, marginLeft: 150 },
  helplines: { marginLeft: 275, marginRight: 20 },
  para: { fontWeight: 10, marginLeft: 20, marginRight: 20 },
  para1: { fontSize: 8, marginLeft: 20, marginRight: 20, height: 105 },
  para2: { fontSize: 15, marginLeft: 20, marginRight: 20, height: 105 },
  sliderimg: { height: 400, width: 350, marginRight: 20 },
  button: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 50,
    marginLeft: 20,
    width: 300,
    marginBottom: 10,
  },
  signIn: { marginLeft: 30 },
  cancelbtn: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 30,
    marginLeft: 10,
    width: 150,
    marginBottom: 10,
  },
  input: { marginLeft: -10 },
};
export let userId = "";

const GettingStarted = () => {
  const [signIn, setSignIn] = useState(false);
  const [value, setValue] = useState("");
  const [anonId, setAnonId] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(value).then((res) => {
      if (res.status === "fail") {
        localStorage.setItem("userId", value)
        setAnonId(true);
      } else {
        history.push('/signIn');
        userId = value
      }
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
          “Round-the-clock available virtual guide and assistant for mental
          wellbeing, which simplifies self-care recommendations, crisis
          management, and wellbeing education.”
        </Paragraph>
        <Carousel play={10000}>
          <Card>
            <CardHeader>
              <Image style={styles.sliderimg} src={chatting} alt="chatting" />
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Image style={styles.sliderimg} src={bloging} alt="bloging" />
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Image style={styles.sliderimg} src={helpline} alt="helpline" />
            </CardHeader>
          </Card>
        </Carousel>
        {signIn ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Anonymous ID"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            {anonId && (
              <Text color="red">Please provide valied Anonymous ID</Text>
            )}

            <Button
              label="Cancel"
              style={styles.cancelbtn}
              onClick={() => setSignIn(false)}
            />
            <Button
              label="Sign In"
              style={styles.cancelbtn}
              onClick={(e) => handleSubmit(e)}
            />
          </>
        ) : (
          <>
            <Button
              label="Sign Up"
              style={styles.button}
              onClick={() => history.push("/consent")}
            />
            <Text style={styles.signIn}>
              {"Already have an account? "}
              <Link to="" onClick={() => setSignIn(true)}>
                Sign In
              </Link>
            </Text>
          </>
        )}
      </header>

    </Box>
    <Footer background="black" pad="small">
        <Anchor label="About Us" color={"white"} />
        <Anchor
          label="Private Policy"
          color={"white"}
          onClick={() => {
            history.push("/privacy");
          }}
        />
        <Anchor
          label="Contact Us"
          color={"white"}
          onClick={() => {
            history.push("/contactUs");
          }}
        />
      </Footer>
    </>
  );
};
export default GettingStarted;
