import React, { useEffect } from "react";
import {
  Box,
  Button,
  Image,
  Form,
  FormField,
  Card,
  RadioButtonGroup,
  CheckBoxGroup,
  Carousel,
} from "grommet";
import logo from "../logo.PNG";
import { useHistory } from "react-router-dom";
import { new_onboarding, retrieveOnboarding } from "../apis/Questionaire";
import { fromPath } from "../screens/SignIn";
const styles = {
  root: { marginTop: 20, marginLeft: 20 },
  image: { width: 150, marginLeft: 90, marginBottom: 20, marginTop: 20 },
  para: { fontWeight: 10, marginLeft: 20, marginRight: 20, marginBottom: 70 },
  card: { marginBottom: 10, marginRight: 10, width: 350 },
};
const Questionaire = () => {
  const history = useHistory();

  const [value, setValue] = React.useState({});
  //   const [dataChecked, setDataChecked] = useState(false);
  useEffect(() => {
    let mounted = true;
    retrieveOnboarding().then((items) => {
      if (mounted) {
        setValue(items.data);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <Box style={styles.root}>
      <header>
        <Image src={logo} alt="logo" style={styles.image} />
        <Card style={styles.card}>
          <Form
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {
              new_onboarding(value).then((res) => {
                if (res.received_data !== null) {
                  fromPath === "/signIn"
                    ? history.push("/signIn")
                    : history.push("/");
                }
              });
            }}
          >
            <Carousel>
              <Box
                style={{
                  marginBottom: 40,
                  marginTop: 20,
                  height: 550,
                  marginLeft: 20,
                }}
              >
                <FormField name="age" label="Age" required={true} pad={true} />
                <FormField
                  name="gender"
                  label="Gender"
                  component={RadioButtonGroup}
                  pad={true}
                  options={["Male", "Female", "Non-binary"]}
                />
                <FormField
                  name="education"
                  label="Education level"
                  component={RadioButtonGroup}
                  pad={true}
                  options={["Undergraduate", "Graduate/Post-graduate"]}
                  required={true}
                />
                <FormField
                  name="location"
                  label="Location"
                  required={true}
                  pad={true}
                />
              </Box>
              <FormField
                style={{ marginTop: 40, marginLeft: 20 }}
                name="wellbeing_goals"
                component={CheckBoxGroup}
                pad={true}
                required={true}
                label="What are your mental wellbeing goals?"
                options={[
                  "Increase Productivity",
                  "Reduce Stress",
                  "Better Time Management",
                  "Reduce Depression",
                  "Manage Anxiety",
                  "Increase Motivation for Physical Activity",
                  "Increase Motivation for Studies",
                  "Increase Motivation for Work",
                ]}
              />

              <FormField
                style={{ marginTop: 40, marginLeft: 20 }}
                name="self_care"
                component={CheckBoxGroup}
                pad={true}
                required={true}
                label="Which of these activities do you like to perform for self -care?"
                options={[
                  "Solo Mediation",
                  "Group Mediation",
                  "Journaling",
                  "Nature Walk",
                  "Physical Workout",
                  "Listening to Music",
                  "Eat Junk Food",
                  "Outdoor Activities",
                  "Play with Pets/Animals",
                  "Chill with Friends/Groups",
                  "None of these",
                ]}
              />
              <Box pad="medium">
                <FormField
                  style={{ marginBottom:20}}
                  name="counselling"
                  label="How often do you use counselling services?"
                  component={RadioButtonGroup}
                  pad={true}
                  required={true}
                  direction="row"
                  options={["1 ", "2 ", "3 ", "4 ", "5 "]}
                />
                <FormField
                  name="helpers"
                  label="How often do you use interact with peer helpers on campus?"
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
              <Button
                type="submit"
                primary
                label={fromPath === "/signIn" ? "Submit" : "Register"}
              />
              <Button type="reset" label="Reset" />
            </Box>
          </Form>
        </Card>
      </header>
    </Box>
  );
};
export default Questionaire;
