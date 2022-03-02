import React, { useState, useEffect } from "react";
import {
  Box,
  Avatar,
  TextInput,
  Tag,
  Button,
  Anchor,
  List
} from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { chatObject } from "../../mocks/Chat";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faRobot,
  faPaperPlane,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { getWelcomeChat, userResponse, reStart } from "../../apis/Chat";

const styles = {
  bot: { marginTop: 20, marginLeft: 13, width: 300, marginBottom: 20 },
  user: { marginTop: 20, marginLeft: 53, width: 300, marginBottom: 10 },
  msg: { marginBottom: 10},
  input: { width: 300, marginBottom: 10, marginLeft: 10, height: 35 },
  links: {
    marginLeft: 10,
    border: { color: "black", size: "small", style: "solid" },
  },
  sendButton: { marginLeft: 10, marginBottom: 10 },
  homeButton: { marginBottom: 10 },
  bottomLine: {
    borderBottom: "1px solid blue",
    margin:5,

  },
};
const Chat = () => {
  const [chatMessage, setChatMessage] = useState([]);
  const [inputText, setInputText] = useState([]);
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    let mounted = true;
    getWelcomeChat().then((items) => {
      if (mounted) {
        setChatMessage(items.bot_response);
      }
    });
    return () => (mounted = false);
  }, [inputText, update]);

  return (
    <>
      <div style={{ overflow: "scroll", height: 537 }}>
        {chatMessage.map((chat) => {
          if (chat.type === "maargo") {
            return (
              <Box style={styles.bot}>
                <Avatar style={styles.msg} background="#35858B">
                  <FontAwesomeIcon icon={faRobot} />
                </Avatar>
                {chat.message.map((msg) => {
                  return (
                    <Box style={styles.msg} border={{color:"#35858B", size: 'xsmall', style:"dotted", side:"bottom"}}>
                      {msg} 
                    </Box>
                  );
                })}
                {chat.options && <List data={chat.options}/>}

                {chat.links?.map((link) => {
                  return (
                    <>
                      <Anchor
                      style={styles.bottomLine}
                        href={link[1]}
                        label={link[0]}
                        target="_blank"
                        color={"blue"}
                      />
                    </>
                  );
                })}
              </Box>
            );
          }
          if (chat.type === "user") {
            return (
              <>
                <Box style={styles.user}>
                  <Avatar style={styles.msg} background="#D6E5FA">
                    <FontAwesomeIcon icon={faUser} />
                  </Avatar>
                 <Box border={{color:"blue", size: 'xsmall', style:"dotted", side:"bottom"}}> {chat.option} </Box>
                </Box>
              </>
            );
          }
          return <> </>
        })}
      </div>
      <Box direction="row">
        <TextInput
          style={styles.input}
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        ></TextInput>

        <Button style={styles.sendButton} disabled={inputText.length < 0}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            size={"2x"}
            onClick={() => {
              userResponse({
                type: "user",
                option: inputText,
              });
              getWelcomeChat();
              setInputText("");
            }}
          />
        </Button>
        <Button style={styles.homeButton}>
          <FontAwesomeIcon
            icon={faHome}
            size={"2x"}
            onClick={() => {
              reStart();
              setUpdate(!update);
            }}
          />
        </Button>
      </Box>
    </>
  );
};
export default Chat;
