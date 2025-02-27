import type { PProps } from "@/style/typography";

export const alignParagraph = (alignment: PProps["$alignment"]) => {
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