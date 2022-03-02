import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Card,
  CardBody,
  Text,
  Footer,
  Anchor,
  Header,
  Tab,
  Tabs,
  Paragraph,
  Menu,
  Layer,
  Button,
} from "grommet";
import logo from "../logo.PNG";
import { useHistory } from "react-router-dom";
import { getHelplines } from "../apis/Helplines";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faComments,
  faGrin,
  faBlog,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import SelfAssessment from "../screens/tabs/SelfAssessment";
import Blogs from "./tabs/Blogs";
import Chat from "./tabs/Chat";
import { logout, deleteAccount } from "../apis/Logout";

const styles = {
  root: { marginTop: 20, marginLeft: 10 },
  image: { width: 150, marginBottom: 20, marginTop: 20 },
  text: { width: 70 },
  icon: { width: 40 },
  card: {
    width: 320,
    alignItems: "center",
    justfy: "center",
    marginBottom: 20,
  },
  box: { marginLeft: 30, marginTop: 10, marginBottom: 18 },
  backButton: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 20,
    width: 130,
    height: 40,
    marginBottom: 10,
    marginLeft: 70,
  },
  para: { marginLeft: 20, marginRight: 20 },
  dropdown: { marginLeft: 150, widith: 10 },
  cancelbtn: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 30,
    marginLeft: 10,
    width: 150,
    marginBottom: 10,
  },
};
export let fromPath = "";

const SignIn = () => {
  const history = useHistory();
  const [helplinesList, sethelplinesList] = useState([]);
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    let mounted = true;
    getHelplines().then((items) => {
      if (mounted) {
        sethelplinesList(items.helplines);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <>
      <Header style={styles.root}>
        <Box direction="row">
          <Image src={logo} alt="logo" style={styles.image} />
          <Menu
            style={styles.dropdown}
            label={
              <FontAwesomeIcon size="lg" style={styles.icon} icon={faUserAlt} />
            }
            items={[
              {
                label: "My Profile",
                onClick: () => {
                  history.push("/questionaire");
                  fromPath = "/signIn";
                },
              },
              {
                label: "Logout",
                onClick: () => {
                  logout();
                  history.push("/");
                },
              },
              {
                label: "Delete Account",
                onClick: () => {
                  setShow(true);
                },
              },
            ]}
          />
        </Box>
      </Header>
      {show && (
        <Box style={{ height: 200, width: 350, marginLeft: 20, marginBottom:480 }}>
          <Paragraph>
            Delete account will result in destroying all the preserved data. Are
            you sure to delete account?
          </Paragraph>
          <Box direction="row">
            <Button
              label="Delete"
              style={styles.cancelbtn}

              onClick={() => {
                deleteAccount();
                history.push("/");
              }}
            />
            <Button
              label="Cancel"
              style={styles.cancelbtn}
              onClick={() => setShow(false)}
            />
          </Box>
        </Box>
      )}
      {!show && (
        <Tabs>
          <Tab
            title={
              <>
                <FontAwesomeIcon
                  size="3x"
                  style={styles.icon}
                  icon={faComments}
                />
                <Text size="xsmall" style={styles.text}>
                  Chat to Maargo
                </Text>
              </>
            }
          >
            <Chat />
          </Tab>
          <Tab
            title={
              <>
                <FontAwesomeIcon size="3x" style={styles.icon} icon={faGrin} />
                <Text size="xsmall" style={styles.text}>
                  Self Assesment
                </Text>
              </>
            }
          >
            <Box pad="medium">
              <SelfAssessment />
            </Box>
          </Tab>
          <Tab
            title={
              <>
                <FontAwesomeIcon size="3x" style={styles.icon} icon={faBlog} />
                <Text size="xsmall" style={styles.text}>
                  {"Blogs & Stories"}
                </Text>
              </>
            }
          >
            <Blogs />
          </Tab>
          <Tab
            title={
              <>
                <FontAwesomeIcon
                  size="3x"
                  style={styles.icon}
                  icon={faPhoneAlt}
                />
                <Text size="xsmall" style={styles.text}>
                  Helplines
                </Text>
              </>
            }
          >
            <Box style={styles.box}>
              <Paragraph size="small" style={styles.para}>
                Here is a list of useful helplines, where good fellows are
                always ready to support you and be there during difficult times
                or emergencies.
              </Paragraph>
              {helplinesList.map((helpline) => {
                return (
                  <Card
                    height="xsmall"
                    background="light-1"
                    style={styles.card}
                    key={helpline.name}
                  >
                    <CardBody pad="xsmall" style={styles.card}>
                      <Text>{helpline.name} </Text>
                      <Text>{helpline.phone}</Text>
                      <Text>{helpline.description}</Text>
                    </CardBody>
                  </Card>
                );
              })}
            </Box>
          </Tab>
        </Tabs>
      )}
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
export default SignIn;
