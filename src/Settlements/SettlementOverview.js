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
import NoResults from "./NoResults";
import util from "../Util";

const SettlementOverview = ({
  settlements = [],
  maxSettlers = 0,
  isIncomplete = () => {},
  area = "all",
}) => {
  const areaSettlements = settlements.filter(
    (settlement) => area === "all" || settlement.area === area
  );
  return areaSettlements.length > 0 ? (
    <Paper sx={{ marginTop: "0.5em" }}>
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
          {areaSettlements.map((settlement) => (
            <TableRow key={`Overview Table row: ${settlement.name}`}>
              <TableCell>{settlement.name}</TableCell>
              <TableCell
                sx={{
                  position: "relative",
                }}
              >
                {settlement.numSettlers}
                {settlement.numSettlers >= maxSettlers ? (
                  <Tooltip title="Settlement is at max capacity">
                    <WarningAmberIcon
                      sx={{
                        position: "absolute",
                        fontSize: "1.3em",
                        color: util.colors.error,
                        left: "2em",
                        top: "0.95em",
                      }}
                    />
                  </Tooltip>
                ) : (
                  <></>
                )}
              </TableCell>
              <TableCell>
                {isIncomplete(settlement) ? (
                  <span style={{ color: util.colors.error, cursor: "default" }}>
                    Incomplete
                  </span>
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
                        color: util.colors.error,
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
  ) : (
    <NoResults />
  );
};

export default SettlementOverview;
