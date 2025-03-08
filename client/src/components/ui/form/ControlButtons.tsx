import { Box, Button, Stack } from "@mui/material";

interface ControlButtonsProps {
    mainBtnLabel: string;
    mainBtnAction?: () => void;
    otherBtn1Label?: string;
    otherBtn1Action?: () => void;
    otherBtn2Label?: string;
    otherBtn2Action?: () => void;
    withOtherBtn2: boolean;
}

const ControlButtons = ({
    mainBtnLabel,
    mainBtnAction,
    otherBtn1Label = "Clear",
    otherBtn1Action,
    otherBtn2Label = "Load",
    otherBtn2Action,
    withOtherBtn2
  }: ControlButtonsProps) => {
  return (
    <Box sx={{
      display:"grid", 
      gridTemplateColumns:"repeat(2, 1fr)", 
      gap: 2, 
      marginBottom: 3}}
    >
      <Stack gap={2}>
        <Button
          onClick={otherBtn1Action}
          variant="outlined"
        >
          {otherBtn1Label}
        </Button>
        {withOtherBtn2 && 
        (<Button
          onClick={otherBtn2Action}
          variant="outlined"
        >
          {otherBtn2Label}
        </Button>)}
      </Stack>
      
      <Box
        width="90%"
        alignSelf={{ xs: "start", md: "center" }}
      >
        <Button
          fullWidth
          variant="contained"
          type={mainBtnAction ? "button" : "submit"}
          onClick={mainBtnAction}
        >
          {mainBtnLabel}
        </Button>
      </Box>
    </Box>
  )
}

export default ControlButtons;
