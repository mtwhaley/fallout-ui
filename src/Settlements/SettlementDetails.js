import {
  Box,
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
import util from "../Util";

const SettlementDetails = ({
  handleClose = () => {},
  open = true,
  settlement,
}) => {
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
  const configuredSettlement = (settlement) => {
    const invertSymbols = ["full"];
    const configured = {};
    Object.keys(settlement).forEach((key) => {
      if (
        settlement[key] === true ||
        (settlement[key] === false && invertSymbols.indexOf(key) !== -1)
      ) {
        configured[key] = (
          <CheckCircleIcon sx={{ color: util.colors.validation }} />
        );
      } else if (
        settlement[key] === false ||
        (settlement[key] === true && invertSymbols.indexOf(key) !== -1)
      ) {
        configured[key] = <CancelIcon sx={{ color: util.colors.error }} />;
      } else if (settlement[key] === null) {
        configured[key] = "";
      } else {
        configured[key] = settlement[key];
      }
    });
    return configured;
  };

  return (
    <Modal open={open} onClose={handleClose}>
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
                  <TableRow key={`settlement detail ${property.attribute}`}>
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
      </Box>
    </Modal>
  );
};

export default SettlementDetails;
