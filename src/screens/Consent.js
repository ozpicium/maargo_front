import React, { useState } from "react";
import { Box, Paragraph, CheckBox, Button, Image } from "grommet";
import logo from "../logo.PNG";
import { useHistory } from "react-router-dom";

const styles = {
  root: { marginTop: 20, marginLeft: 20 },
  image: { width: 150, marginLeft: 90, marginBottom: 20, marginTop: 20 },
  para: { fontWeight: 10, marginLeft: 20, marginRight: 20, marginBottom: 70 },
  checkbox: { marginRight: 40 },
  button: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 200,
    marginLeft: 20,
    width: 300,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#3A61EE",
    color: "#FFFFFF",
    marginTop: 40,
    width: 100,
    marginBottom: 10,
  },
};
const Consent = () => {
    const history = useHistory();

  const [policyChecked, setPolicyChecked] = useState(false);
  const [dataChecked, setDataChecked] = useState(false);

  return (
    <Box style={styles.root}>
      <header>
        <Image src={logo} alt="logo" style={styles.image} />
        <Paragraph style={styles.para}>
          Maargo is commited to helping you improve your well-being. However if
          you are experiencing a serious mental health challenge, please consult
          your doctor. Maargo is not substitute to therapy,though it act as a
          helping hand.{" "}
        </Paragraph>
        <CheckBox
          style={styles.checkbox}
          onClick={() => setPolicyChecked(!policyChecked)}
          label={"I agree to the Maargo Terms and Privacy Policy"}
        />
        <CheckBox
          style={styles.checkbox}
          onClick={() => setDataChecked(!dataChecked)}
          label={
            "I consent to Maargo processing my personal anonymized data, including stress and mood metrics in accordance with the Privacy Policy."
          }
        />
        <Button
          disabled={!(policyChecked && dataChecked)}
          label="Get Started"
          style={styles.button}
          onClick={() => history.push("/signUp")}
        />
                <Button
          label="Back"
          style={styles.backButton}
          onClick={() => history.push("/")}
        />
      </header>
    </Box>
  );
};
export default Consent;
