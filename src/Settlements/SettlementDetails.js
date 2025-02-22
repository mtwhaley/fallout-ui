import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import util from "../Util";

const SettlementDetails = ({ onClose = () => {}, open = true, settlement }) => {
  const propertyOrder = [
    { attribute: "id", display: "ID" },
    { attribute: "area", display: "Area" },
    { attribute: "numSettlers", display: "Settlers" },
    { attribute: "walls", display: "Walled" },
    { attribute: "defenses", display: "Defenses" },
    { attribute: "weaponized", display: "Weaponized" },
    { attribute: "armored", display: "Armored" },
    { attribute: "full", display: "Building Space" },
  ];

  const getBoolSymbols = (settlement, key) => {
    console.log(settlement);
    console.log(key);
    const invertSymbols = ["full"];
    const validSymbol = (
      <CheckCircleIcon sx={{ color: util.colors.validation }} />
    );
    const errorSymbol = <CancelIcon sx={{ color: util.colors.error }} />;

    if (invertSymbols.indexOf(key) === -1) {
      return settlement[key] === true ? validSymbol : errorSymbol;
    }
    return settlement[key] === true ? errorSymbol : validSymbol;
  };

  const configuredSettlement = (settlement) => {
    const configured = {};
    Object.keys(settlement).forEach((key) => {
      if (typeof settlement[key] === "boolean") {
        configured[key] = getBoolSymbols(settlement, key);
      } else if (settlement[key] === null) {
        configured[key] = "";
      } else {
        configured[key] = settlement[key];
      }
    });
    return configured;
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          pb: 2,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {settlement.name}
        </Typography>
        <Paper>
          <Table>
            <TableBody>
              {propertyOrder.map((property) => {
                return (
                  <TableRow
                    key={`settlement detail ${property.attribute}`}
                    sx={{ userSelect: "none" }}
                  >
                    <TableCell>{property.display}</TableCell>
                    <TableCell>
                      {configuredSettlement(settlement)[property.attribute]}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <Paper elevation={0} sx={{ display: "flex", justifyContent: "right" }}>
          <Button size="medium" onClick={onClose}>
            Close
          </Button>
        </Paper>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: "0.5em", right: "0.5em" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default SettlementDetails;
