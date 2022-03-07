import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Select,
  RadioButtonGroup,
  Form,
  FormField,
  Carousel,
} from "grommet";
import {
  get_self_assessment,
  self_assessment,
} from "../../apis/SelfAssessment";

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
  card: {
    width: 360,
    alignItems: "center",
    justfy: "center",
    marginBottom: 20,
  },
  space: {
    marginTop: 20,
    marginBottom: 475,
  },
};
const SelfAssessment = () => {
  const [value, setValue] = useState({});
  useEffect(() => {
    let mounted = true;
    get_self_assessment().then((items) => {
      if (mounted) {
        setValue(items.data);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div style={{ overflow: "scroll", height: 555 }}>
      <Card style={styles.card}>
        {
          <Form
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {
              self_assessment(value);
            }}
          >
            <Carousel>
              <Box
                style={{
                  marginBottom: 10,
                  marginTop: 20,
                  height: 480,
                  marginLeft: 15,
                }}
              >
                <FormField
                  name="lost_sleep"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently lost much sleep over worry?"
                  options={[
                    "Not at all",
                    "No more than usual",
                    "More than usual",
                    "Much more than usual",
                  ]}
                />
                <FormField
                  name="sleep_in_hours"
                  label="How much sleep do you regularly get (in hours)?"
                  required={true}
                />
                <FormField
                  name="sleep_time"
                  label="What is your regular sleeping time?"
                  required={true}
                />
                <FormField
                  name="stress"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently felt constantly under stress?"
                  options={[
                    "Not at all",
                    "No more than usual ",
                    "More than usual",
                    "Much more than usual",
                  ]}
                />
              </Box>
              <Box
                style={{
                  marginLeft: 15,
                }}
              >
                <FormField
                  name="decision_making"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently felt capable of making decisions about things?"
                  options={[
                    "More so than usual",
                    "About same as usual",
                    "Less so than usual",
                    "Much less than usual",
                  ]}
                />
                <FormField
                  name="depression"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently been feeling unhappy and depressed?"
                  options={[
                    "Not at all ",
                    "No more than usual",
                    "More than usual ",
                    "Much more than usual ",
                  ]}
                />
                <FormField
                  name="concentration"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently been able to concentrate on what you're doing?"
                  options={[
                    "Better than usual",
                    "Same as usual",
                    "Less than usual",
                    "Much less than usual",
                  ]}
                />
                <FormField
                  name="overcome_difficulties"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently felt you couldn't overcome your difficulties?"
                  options={[
                    "Not at all ",
                    "No more than usual ",
                    "More than usual",
                    "Much more than usual ",
                  ]}
                />
              </Box>
              <Box
                style={{
                  marginTop:20,
                  marginLeft: 15,
                }}
              >
                <FormField
                  name="losing_confidence"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently been losing confidence in yourself?"
                  options={[
                    "Not at all",
                    "No more than usual ",
                    "More than usual",
                    "Much more than usual ",
                  ]}
                />
                <FormField
                  name="worthless_person"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently been thinking of yourself as a worthless person?"
                  options={[
                    "Not at all",
                    "No more than usual ",
                    "More than usual",
                    "Much more than usual ",
                  ]}
                />
                <FormField
                  name="happiness"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently been feeling reasonably happy, all things considered?"
                  options={[
                    "More so than usual",
                    "About same as usual",
                    "Less so than usual",
                    "Much less than usual",
                  ]}
                />
              </Box>
              <Box
                style={{
                  marginTop:20,
                  marginLeft: 15,
                }}
              >
                <FormField
                  name="strain"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently felt constantly under strain?"
                  options={[
                    "Not at all",
                    "No more than usual ",
                    "More than usual",
                    "Much more than usual ",
                  ]}
                />

                <FormField
                  name="involvement"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently felt you were playing a useful part in things?"
                  options={[
                    "More so than usual",
                    "About same as usual",
                    "Less so than usual",
                    "Much less than usual",
                  ]}
                />
                <FormField
                  name="activities"
                  component={Select}
                  pad={true}
                  required={true}
                  label="Have you recently been able to enjoy your normal day-to-day activities?"
                  options={[
                    "More so than usual",
                    "About same as usual",
                    "Less so than usual",
                    "Much less than usual",
                  ]}
                />
              </Box>
              <Box
                style={{
                  marginTop:20,
                  marginLeft: 15,
                }}
              >
                <FormField
                  name="family_issues"
                  label="Have you recently been facing serious family issues?"
                  component={RadioButtonGroup}
                  pad={true}
                  required={true}
                  direction="row"
                  options={["Yes", "No", "I prefer not to answer"]}
                />
                <FormField
                  name="recommended"
                  label="How often did you use the recently recommended resource: XYZ?"
                  component={RadioButtonGroup}
                  pad={true}
                  required={true}
                  direction="row"
                  options={["1", "2", "3", "4 ", "5 "]}
                />
                <FormField
                  name="wellness"
                  label="How effective was this resource for managing your wellness?"
                  component={RadioButtonGroup}
                  pad={true}
                  required={true}
                  direction="row"
                  options={["1.", "2.", "3.", "4.", "5."]}
                />
              </Box>
            </Carousel>
            <Box
              direction="row"
              gap="medium"
              style={{ marginLeft: 10, marginBottom: 20 }}
            >
              <Button type="submit" primary label="Submit" />
              <Button type="reset" label="Reset" />
            </Box>
          </Form>
        }
      </Card>
    </div>
  );
};
export default SelfAssessment;
