import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Workflow-Steuerung",
        description: "Erstellung, Versand und Erinnerungen als klarer Ablauf &ndash; ohne Banking-Zugriff.",
        bullets: [
            {
                title: "sevDesk-kompatibel",
                description: "Du beh&auml;ltst dein gewohntes Rechnungs-Tool.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Dry-Run zuerst",
                description: "Erst simulieren, dann live schalten.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Reminder Schedule",
                description: "Automatisierte Erinnerungsl&auml;ufe nach Plan.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Evidence-Log",
        description: "Deterministisch und auditierbar: wer/was/wann mit Request-ID.",
        bullets: [
            {
                title: "Deterministische Outputs",
                description: "Gleiche Eingabe, gleiches Ergebnis.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Statusverlauf",
                description: "Nachvollziehbarer Status pro Request.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Exports mit Kontext",
                description: "Exports referenzieren den gesamten Ablauf.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Export & Sicherheit",
        description: "Perioden-Export als Paket &ndash; abgesichert &uuml;ber das Gateway.",
        bullets: [
            {
                title: "Perioden-Export Pack",
                description: "PDF + CSV + Journal f&uuml;r Quartal/Jahr.",
                icon: <FiLock size={26} />
            },
            {
                title: "Gateway Security",
                description: "Closed kitchen: Domain-Worker nur &uuml;ber das Gateway.",
                icon: <FiUser size={26} />
            },
            {
                title: "Minimaler Scope",
                description: "Nur was n&ouml;tig ist &ndash; kein Banking-Zugriff.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
