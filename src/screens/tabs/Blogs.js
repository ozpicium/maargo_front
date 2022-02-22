import React, {useState, useEffect} from "react";
import { Anchor, Box, Paragraph, Card, CardBody } from "grommet";
import { getBlogs } from "../../apis/Blog";

const styles = {
  root: { marginTop: 20, marginLeft: 13, width: 350, marginBottom: 100 },
};
const Blogs = () => {
  const [blogsList, setblogsList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getBlogs().then((items) => {
      if (mounted) {
        setblogsList(items.blogs);
      }
    });
    return () => (mounted = false);
  }, []);
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
