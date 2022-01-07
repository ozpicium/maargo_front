import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Image,
  Card,
  CardBody,
  Text,
  Footer,
  Anchor,
  Header,
  Tab,
  Tabs, Paragraph
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
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import SelfAssessment from "../screens/tabs/SelfAssessment";
import Analytics from "./tabs/Analytics";
import Blogs from "./tabs/Blogs";
const styles = {
  root: { marginTop: 20, marginLeft: 10 },
  image: { width: 150, marginBottom: 20, marginTop: 20 },
  text: { width: 50 },
  icon: { width: 30 },
  card: {
    width: 320,
    alignItems: "center",
    justfy: "center",
    marginBottom: 20,
  },
  box:{marginLeft:30, marginTop:10, marginBottom:18},
  backButton: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 20,
    width: 130,
    height: 40,
    marginBottom: 10,
    marginLeft:70
  },
  para: { marginLeft: 20, marginRight: 20 },
};
const SignIn = () => {
  const history = useHistory();
  const [helplinesList, sethelplinesList] = useState([]);
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
          <Button
            label="Logout"
            style={styles.backButton}
            size="medium"
            onClick={() => history.push("/")}
          />
        </Box>
      </Header>
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
          <Box pad="medium">One</Box>
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
                icon={faChartLine}
              />
              <Text size="xsmall" style={styles.text}>
                Analytics
              </Text>
            </>
          }
        >
          <Analytics />
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
            <Paragraph size="small" style={styles.para}>Here is a list of useful helplines, where good fellows are always ready to support you and be there during difficult times or emergencies.</Paragraph>
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
      <Footer background="black" pad="medium">
        <Anchor label="About Us" color={"white"} />
        <Anchor label="Contact Us" color={"white"} />
        <Anchor label="Private Policy" color={"white"} />
      </Footer>
    </>
  );
};
export default SignIn;
