import React from "react";
import { Anchor, Box, Paragraph, Card, CardBody } from "grommet";
import { blogsList } from "../../mocks/Blogs";

const styles = {
  root: { marginTop: 20, marginLeft: 13, width: 350, marginBottom: 100 },
};
const Blogs = () => {
  return (
    <>
      <div style={{ overflow: "scroll", height: 580 }}>
        <Box style={styles.root}>
          {blogsList.map((blog) => {
            return (
              <Card pad="medium" key={blog.title}>
                <CardBody>
                  <Anchor
                    weight="bold"
                    href={blog.link}
                    label={blog.title}
                    target="_blank"
                  />
                  <Paragraph size="medium">{blog.summary}</Paragraph>
                </CardBody>
              </Card>
            );
          })}
        </Box>
      </div>
    </>
  );
};
export default Blogs;
