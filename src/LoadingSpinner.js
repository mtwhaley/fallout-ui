import { Card, CircularProgress } from "@mui/material";

const LoadingSpinner = ({ card = {} }) => {
  const cardSx = {
    margin: "2em",
    height: "10em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  Object.keys(card).forEach((key) => {
    cardSx[key] = card[key];
  });
  return (
    <Card sx={cardSx}>
      <CircularProgress />
    </Card>
  );
};
export default LoadingSpinner;
