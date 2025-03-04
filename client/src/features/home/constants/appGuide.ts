import { Navigation, MonitorUp, BrainIcon } from "lucide-react";

export const appGuideList = [
    {
        id: 1,
        icon: Navigation,
        title: "Search",
        step: `You can check the available features on the menu which consists of basic analysis,
        advanced analysis, dot plot alignment, local alignment, and global alignment`
    },
    {
        id: 2,
        icon: MonitorUp,
        title: "Input",
        step: `Provide an input sequence you want to analyze, for basic & advanced analysis (only one sequence is allowed)
        the other features are for pairwise sequence alignments using different algorithms.`
    },
    {
        id: 3,
        icon: BrainIcon,
        title: "Analyze",
        step: `The results would be displayed accordingly on the output screen provided, and longer sequence may take a longer time
        to process. Take note that the AI-feature may had provide some mistakes and does not represent every existing gene.`
    }
]