import React from "react";
import { DataChart, Box, Text } from "grommet";
import { analytics } from "../../mocks/Analytics";

const styles = {
  root: { marginTop: 20, marginLeft: 20, width: 300, marginBottom: 315 },
};
const Analytics = () => {
  return (
    <>
      <div style={{ overflow: "scroll", height: 555 }}>
        <Box style={styles.root}>
          <Text weight="bolder">Mental analytics</Text>
          <DataChart data={analytics} series={["date", "amount"]} />
        </Box>
      </div>
    </>
  );
};
export default Analytics;
