import React from "react";
import {
  Box,
  Card,
  CardBody,
  Form,
  FormField,
  Image,
  Button,
  Text,
  Notification,
} from "grommet";
import { useHistory } from "react-router-dom";
import logo from "../logo.PNG";
import { contactUs } from "../apis/ContactUs";

const styles = {
  root: { marginTop: 20, marginLeft: 20 },
  image: { width: 150, marginLeft: 90, marginBottom: 20, marginTop: 20 },
  card: { marginRight: 20 },
  submitBox: { marginLeft: 10, marginBottom: 20, marginTop: 30 },
};
const ContactUs = () => {
  const history = useHistory();
  const [value, setValue] = React.useState({});
  const [notify, setNotify] = React.useState(false);
  return (
    <Box style={styles.root}>
      {notify && (
        <>
          <Notification
            toast
            status="normal"
            message="Contact request sent."
            onClose={() => {
              setNotify(false);
            }}
          />
        </>
      )}
      <header>
        <Image src={logo} alt="logo" style={styles.image} />{" "}
        <Card style={styles.card}>
          <CardBody>
            <Form
              value={value}
              onChange={(nextValue) => setValue(nextValue)}
              onReset={() => setValue({})}
              onSubmit={({ value }) => {
                contactUs(value).then((res) => {
                  if (res.status === "success") {
                    setNotify(true);
                  }
                });
              }}
            >
              <FormField name="Name" label="Name" required={true} />
              <FormField name="University" label="University" required={true} />
              <FormField name="Email" label="Email" required={true} />
              <FormField name="Message" label="Message" required={true} />

              <Box direction="row" gap="medium" style={styles.submitBox}>
                <Button type="submit" primary label="Submit" />
              </Box>
            </Form>
          </CardBody>
        </Card>
        <Box style={{ alignItems: "center", marginTop: 50, marginLeft: -10 }}>
          <Text color="#35858B" weight="bold">
            Mail us on: contactus@maargotech.com
          </Text>
        </Box>
      </header>
    </Box>
  );
};
export default ContactUs;
