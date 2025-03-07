type FormFields = "input" | "inputWithBtn" |"select" | "textarea";

export const getInputStyle = (type: FormFields) => {
	if(type === "inputWithBtn"){
		return {
			display:"flex", 
			flexDirection:"row", 
			gap: 2
		}
	};

	return {
		my: 1,
		width: {
				xs:"100%",
				md: type === "textarea" ? "90%" : "50%"
			}
	}
};