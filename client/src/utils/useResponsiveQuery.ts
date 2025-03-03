import { useMediaQuery } from "@mui/material";

type Screen = "sm" | "md" | "lg" | "xl" | "2xl";
const breakpoints: Record<Screen, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useResponsiveQuery = (breakpoint: Screen): boolean => {
  const query = `(min-width: ${breakpoints[breakpoint]}px)`;
  return useMediaQuery(query);
};

export default useResponsiveQuery;
