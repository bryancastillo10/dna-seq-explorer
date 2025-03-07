import { Box } from "@mui/material";
import type { LucideIcon } from "lucide-react";

interface FormFieldLabelProps {
    label: string;
    icon?: LucideIcon;
}


const FormFieldLabel = ({label, icon:Icon}: FormFieldLabelProps) => {
  return (
      <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5
      }}>
      {Icon && <Icon size={18} />}
      {label}
    </Box>
  )
}

export default FormFieldLabel;
