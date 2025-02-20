import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <div id="logoHolder">
            <img
              id="vaultTecLogo"
              src="https://localhost:5001/image/VaultTecLogo.png"
              alt="VaultTecLogo.png"
            />
          </div>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "5em" }}
          >
            Fallout
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
