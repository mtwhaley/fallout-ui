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
import ReportIcon from "@mui/icons-material/Report";

const SettlementOverview = ({
  settlements = [],
  maxSettlers = 0,
  isIncomplete = () => {},
  errorColor,
}) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Settlers</TableCell>
            <TableCell>Fortification</TableCell>
            <TableCell>Space</TableCell>
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
                        color: errorColor,
                        marginLeft: "0.2em",
                      }}
                    />
                  </Tooltip>
                ) : (
                  <></>
                )}
              </TableCell>
              <TableCell>
                {isIncomplete(settlement) ? (
                  <span style={{ color: errorColor }}>Incomplete</span>
                ) : (
                  <></>
                )}
              </TableCell>
              <TableCell sx={{ position: "relative" }}>
                {settlement.full ? (
                  <Tooltip title="Building space is at max capacity">
                    <ReportIcon
                      sx={{
                        fontSize: "2em",
                        color: errorColor,
                        position: "absolute",
                        top: "0.4em",
                      }}
                    />
                  </Tooltip>
                ) : (
                  ""
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
