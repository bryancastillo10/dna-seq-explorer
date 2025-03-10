import { Stack, Typography } from "@mui/material";
import { Tag } from "lucide-react";

interface SeqLabelOutputProps {
	sampleLabel: string;
}

const SeqLabelOutput = ({sampleLabel}: SeqLabelOutputProps) => {
  return (
	 <Stack flexDirection="row" alignItems="center" gap={1}>
	  <Tag size={20}/>
      <Typography>{sampleLabel}</Typography>
	</Stack>
  )
}

export default SeqLabelOutput
