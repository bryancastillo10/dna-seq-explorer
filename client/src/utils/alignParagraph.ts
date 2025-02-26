import type { ParagraphProps } from "@/style/globalStyles";

export const alignParagraph = (alignment: ParagraphProps["$alignment"]) => {
    switch (alignment){
        case ("center"):
            return "center";
        case ("right"):
            return "right";
        case ("justify"):
            return "justify";
        case ("balance"):
            return "balance";
        default:
            return "left";
    }
};