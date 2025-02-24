import { Home, Microscope, Dna, Grip, Navigation, Globe } from "lucide-react"

export const navitems = [
    {
        id: 1,
        name: "Home",
        icon: Home,
        link: "/"
    },
    {
        id: 2,
        name: "Basic Analysis",
        icon: Microscope,
        link: "/basic"
    },
    {
        id: 3,
        name: "Advanced Analysis",
        icon: Dna,
        link:"/advanced"
    },
    {
        id: 4,
        name: "Dot Plot Alignment",
        icon: Grip,
        link:"/dotplot"
    },
    {
        id: 5,
        name: "Local Alignment",
        icon: Navigation,
        link:"/local"
    },
    {
        id: 6,
        name: "Global Alignment",
        icon: Globe,
        link:"/global"
    }
]