import { Typography, Box } from "@mui/material";

interface SectionHeaderProps {
    title: string;
    description: string;
}

const SectionHeader = ({title, description}: SectionHeaderProps) => {
  return (
      <Box>
          <Typography variant="h3">{title}</Typography>
          <Box sx={{ marginTop: 2 }}>
              <Typography
                variant="body1"
                textAlign="justify"
              >
                  {description}
              </Typography>
          </Box>
      </Box>
  )
}

export default SectionHeader;
