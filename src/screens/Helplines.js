import React, { useState, useEffect } from "react";
import {
  Box,
  Paragraph,
  Button,
  Image,
  Card,
  CardBody,
  Text,
  Footer,
  Anchor,
} from "grommet";
import logo from "../logo.PNG";
import { useHistory } from "react-router-dom";
import { getHelplines } from "../apis/Helplines";

const styles = {
  root: { marginTop: 20, marginLeft: 20, alignItems: "center" },
  image: { width: 150, marginLeft: 90, marginBottom: 20, marginTop: 20 },
  para: { fontWeight: 10, marginLeft: 20, marginRight: 20, marginBottom: 40 },
  backButton: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 40,
    width: 100,
    marginBottom: 10,
  },
  card: { width: 320, alignItems: "center",justfy:"center", marginBottom: 20 },
};
const Helplines = () => {
  const history = useHistory();
  const [helplinesList, sethelplinesList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getHelplines()
      .then(items => {
        if(mounted) {
          sethelplinesList(items.helplines)
        }
      })
    return () => mounted = false;
  }, [])
  return (
    <>
      <Box style={styles.root}>
        <header>
          <Image src={logo} alt="logo" style={styles.image} />
          <Paragraph style={styles.para}>
            List of useful helplines, where good fellows are always ready to
            support you and be there during difficult times or emergencies.
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
          <Button
            label="Back"
            style={styles.backButton}
            onClick={() => history.push("/")}
          />
        </header>
      </Box>
      <Footer background="black" pad="medium">
        <Anchor label="About Us" color={"white"} />
        <Anchor label="Contact Us" color={"white"} />
        <Anchor label="Private Policy" color={"white"} />
      </Footer>
    </>
  );
};
export default Helplines;
