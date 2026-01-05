import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "MVP",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Klare Abl&auml;ufe statt gro&szlig;er Versprechen."
    },
    {
        title: "sevDesk",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Kompatibel als Provider &ndash; kein Ersatz."
    },
    {
        title: "0 Bank",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Kein Banking-Zugriff im MVP."
    }
];
