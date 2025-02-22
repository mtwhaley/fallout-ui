import InfoIcon from "@mui/icons-material/Info";
import { Card, Typography } from "@mui/material";

const NoResults = () => {
  return (
    <Card
      sx={{
        margin: "2em",
        height: "10em",
        textAlign: "center",
        alignItems: "center",
        paddingTop: "3em",
      }}
    >
      <InfoIcon sx={{ color: "#888888" }} />
      <Typography sx={{ margin: 0 }}>No data to display</Typography>
    </Card>
  );
};

export default NoResults;
