import "./Navbar.css";

type DayOption = "pushDay" | "pullDay" | "legsDay" | "armsDay";
type NavItem = { id: DayOption; label: string };

const NAV_ITEMS: NavItem[] = [
    { id: "pushDay", label: "Push Day" },
    { id: "pullDay", label: "Pull Day" },
    { id: "legsDay", label: "Legs Day" },
    { id: "armsDay", label: "Arms Day" },
];

type NavbarProps = {
    activeDay: DayOption;
    onSelect: (day: DayOption) => void;
};

export default function Navbar({ activeDay, onSelect }: NavbarProps) {
    return (
        <div className="navbarContainer">
            <nav className="navbar">
                <ul className="nav-links">
                    {NAV_ITEMS.map(({ id, label }) => {
                        const isActive = activeDay === id;
                        return (
                            <li key={id}>
                                <button
                                    type="button"
                                    className={`nav-btn${isActive ? " active" : ""}`}
                                    aria-pressed={isActive}
                                    onClick={() => onSelect(id)}
                                >
                                    {label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
