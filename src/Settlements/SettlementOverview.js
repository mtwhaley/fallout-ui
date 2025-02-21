import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const SettlementOverview = ({ settlements = [], maxSettlers = 0 }) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Settlers</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {settlements.map((settlement) => (
            <TableRow>
              <TableCell>{settlement.name}</TableCell>
              <TableCell
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {settlement.numSettlers}
                {settlement.numSettlers >= maxSettlers ? (
                  <Tooltip title="Settlement is at max capacity">
                    <WarningAmberIcon
                      sx={{
                        fontSize: "1em",
                        color: "#ff6666",
                        marginLeft: "0.2em",
                      }}
                    />
                  </Tooltip>
                ) : (
                  <></>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default SettlementOverview;
