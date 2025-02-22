import { Box, Tab, Tabs } from "@mui/material";

const AreaSelector = ({ selectedIndex, onAreaChange, areas }) => {
  return (
    <Box sx={{ width: "100%", marginTop: "1em" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={selectedIndex} onChange={onAreaChange}>
          {areas.map((area) => (
            <Tab label={area} key={`${area} tab`} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default AreaSelector;
