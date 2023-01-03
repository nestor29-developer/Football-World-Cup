import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StartIcon from "@mui/icons-material/PlayCircleFilledWhiteTwoTone";
import FinishIcon from "@mui/icons-material/CancelPresentationTwoTone";
import UpdateIcon from "@mui/icons-material/UpdateTwoTone";
import SummaryIcon from "@mui/icons-material/SummarizeTwoTone";
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";
import Paper from "@mui/material/Paper";
import { Operation } from "../common/enums";
import { Match } from "../common/models/match";
import { availableMatches } from "../common/utils";

export const Footer = ({
  setOperationType,
  setData,
  data,
}: {
  setOperationType: Function;
  setData: Function;
  data: Match[];
}) => {
  const [value, setValue] = useState<number>();
  const [startGameButton, setStartGameButton] = useState<boolean>(true);
  const [finishGameButton, setFinishGameButton] = useState<boolean>(false);
  const [updateScoreButton, setUpdateScoreButton] = useState<boolean>(false);
  const [summaryGamesButton, setSummaryGamesButton] = useState<boolean>(true);
  const [returnButton, setReturnButton] = useState<boolean>(false);
  const [order, setOrder] = useState<number>(1);

  const handleStartGame = () => {
    setOperationType(Operation.START);
    setStartGameButton(false);
    setSummaryGamesButton(false);
    setFinishGameButton(true);
    setUpdateScoreButton(true);
    setReturnButton(true);
  };

  const handleSummaryGames = () => {
    setOperationType(Operation.SUMMARY);
    setStartGameButton(false);
    setSummaryGamesButton(false);
    setFinishGameButton(false);
    setUpdateScoreButton(false);
    const matches = availableMatches(data);
    if (matches && matches.length > 0) {
      setReturnButton(true);
    } else {
      setReturnButton(false);
    }
  };

  const handleUpdateScore = () => {
    setOperationType(Operation.UPDATE);
    setStartGameButton(false);
    setSummaryGamesButton(false);
    setFinishGameButton(false);
    setUpdateScoreButton(false);
    setReturnButton(true);
    const matchToUpdate = localStorage.getItem("match") || undefined;
    const dataToUpdate = data.find(
      (item) => item.homeTeam.matchNumber == matchToUpdate
    ) as any;
    if (dataToUpdate && dataToUpdate.homeTeam) {
      dataToUpdate.homeTeam.updated = true;
      dataToUpdate.awayTeam.updated = true;
      dataToUpdate.awayTeam.orderNumber = order;
      dataToUpdate.homeTeam.orderNumber = order;
      let dataUpdated = data;
      setData(dataUpdated);
      setOrder((prev) => prev + 1);
    }
  };

  const handleFinishGame = () => {
    setOperationType(Operation.FINISH);
    setSummaryGamesButton(true);
    setFinishGameButton(false);
    setUpdateScoreButton(false);
    setReturnButton(false);
    const matchToDelete = localStorage.getItem("match") || "";
    const dataUpdated = data.filter(
      (match) => match.awayTeam.matchNumber != matchToDelete
    );
    setData(dataUpdated);
    const availableMatches = dataUpdated.filter((match) => {
      if (!match.awayTeam.updated && !match.awayTeam.removed) return match;
    });
    if (availableMatches.length > 0) setStartGameButton(true);
    else setStartGameButton(false);
  };

  const handleGoBack = () => {
    setOperationType(Operation.BEGIN);
    setSummaryGamesButton(true);
    setFinishGameButton(false);
    setUpdateScoreButton(false);
    setReturnButton(false);

    const matches = availableMatches(data);
    if (matches && matches.length > 0) {
      setStartGameButton(true);
    } else {
      setStartGameButton(false);
    }
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={4}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(e, newValue: number) => {
          setValue(newValue);
        }}
      >
        {startGameButton ? (
          <BottomNavigationAction
            sx={{
              cursor: "pointer",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={handleStartGame}
            label="Start a game"
            data-testid="start-game-icon"
            icon={<StartIcon />}
          />
        ) : null}
        {summaryGamesButton ? (
          <BottomNavigationAction
            sx={{
              cursor: "pointer",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={handleSummaryGames}
            label="Summary of games"
            icon={<SummaryIcon />}
          />
        ) : null}
        {updateScoreButton ? (
          <BottomNavigationAction
            sx={{
              cursor: "pointer",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={handleUpdateScore}
            label="Update score"
            icon={<UpdateIcon />}
          />
        ) : null}
        {finishGameButton ? (
          <BottomNavigationAction
            sx={{
              cursor: "pointer",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={handleFinishGame}
            label="Finish game"
            icon={<FinishIcon />}
          />
        ) : null}
        {returnButton ? (
          <BottomNavigationAction
            sx={{
              cursor: "pointer",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={handleGoBack}
            label="Go back"
            icon={<KeyboardBackspaceTwoToneIcon />}
          />
        ) : null}
      </BottomNavigation>
    </Paper>
  );
};
