import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import scoreBoardData from "../../score-board.json";
import { Match } from "../common/models/match";
import { Footer } from "../Footer/index";
import { Operation } from "../common/enums";
import { Summary } from "../Summary";
import { ScoreBoard } from "../score-board";

export const Home = () => {
  const [data, setData] = useState<Match[]>([]);
  const [operationType, setOperationType] = useState<string>(Operation.BEGIN);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      let response: any = scoreBoardData;
      if (response && response.matches.length > 0) {
        setData(response.matches);
      }
    }
    fetchData();
  }, []);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 6,
          backgroundColor: "#f5f5f5",
          width: 700,
          minHeight: 500,
        }}
      >
        {operationType === Operation.BEGIN ||
        operationType === Operation.FINISH ? (
          <Image
            src="/icons/world-cup.gif"
            alt="Picture of world cup"
            width={800}
            height={650}
            style={{ borderRadius: 16 }}
          />
        ) : null}
        {operationType === Operation.SUMMARY ? <Summary data={data} /> : null}
        {(operationType === Operation.START ||
          operationType === Operation.UPDATE) &&
        data.length > 0 ? (
          <ScoreBoard data={data} operationTye={operationType} />
        ) : null}
      </Box>
      <Footer
        setOperationType={setOperationType}
        setData={setData}
        data={data}
      />
    </Box>
  );
};
