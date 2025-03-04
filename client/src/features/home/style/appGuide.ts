export const cardContainerStyle = {
    marginTop: 2,
    marginBottom: 8,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    justifyContent:{ xs: "center", md: "start"}
};

export const cardHeaderStyle = {
    position:"relative",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
    backgroundColor: "#EFF2E3",
    padding: 4,
    borderRadius: "20px",
    boxShadow: "0 0 0 1px rgba(0,0,0,0.1)"
}

export const cardBadgeStyle = {
  position: "absolute",
  top: 5,
  right: 5,
  "& .MuiBadge-badge": {
    width: 40,
    height: 40,
    fontSize: "1rem",
    borderRadius:"60%"
  },
};
