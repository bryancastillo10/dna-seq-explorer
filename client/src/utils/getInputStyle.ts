type FormFields = "input" | "select" | "textarea"

export const getInputStyle = (type: FormFields) => {
	return {
		my: 1,
		width: {
				xs:"100%",
				md: type === "textarea" ? "90%" : "50%"
			}
	}
};