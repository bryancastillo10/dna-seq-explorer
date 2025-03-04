import { Box, Button, Stack } from "@mui/material";

interface InputControlButtonsProps {
    mainBtnLabel: string;
    mainBtnAction?: () => void;
    otherBtn1Label?: string;
    otherBtn1Action?: () => void;
    otherBtn2Label?: string;
    otherBtn2Action?: () => void;
}

const InputControlButtons = ({
    mainBtnLabel,
    mainBtnAction,
    otherBtn1Label = "Clear",
    otherBtn1Action,
    otherBtn2Label = "Load",
    otherBtn2Action
  }: InputControlButtonsProps) => {
  return (
    <Box sx={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap: 2, marginBottom: 2}}>
      <Stack gap={2}>
        <Button
          onClick={otherBtn1Action}
          variant="outlined"
        >
          {otherBtn1Label}
        </Button>
        <Button
          onClick={otherBtn2Action}
          variant="outlined"
        >
          {otherBtn2Label}
        </Button>
      </Stack>
      
      <Box
        width="90%"
        alignSelf={{ xs: "start", md: "center" }}
      >
        <Button
          fullWidth
          variant="contained"
          onClick={mainBtnAction}
        >
          {mainBtnLabel}
        </Button>
      </Box>
    </Box>
  )
}

export default InputControlButtons;
