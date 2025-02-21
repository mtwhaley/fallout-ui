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

const SettlementOverview = ({
  settlements = [],
  maxSettlers = 0,
  isIncomplete = () => {},
}) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Settlers</TableCell>
            <TableCell>Completion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {settlements.map((settlement) => (
            <TableRow key={`Overview Table row: ${settlement.name}`}>
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
              <TableCell>
                {isIncomplete(settlement) ? <>Incomplete</> : <></>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default SettlementOverview;
