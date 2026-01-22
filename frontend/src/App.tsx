import "./App.css";
import { useState } from "react";
import PullDay from "./pages/PullDay";
import ExerciseDayPage from "./pages/ExerciseDayPage";
import Navbar from "./components/Navbar";

type Day = "pushDay" | "pullDay" | "legsDay" | "armsDay";

function App() {
    const [day, setDay] = useState<Day>("pullDay");

    return (
        <>
            <Navbar activeDay={day} onSelect={setDay} />
            <ExerciseDayPage dayId={day} />
        </>
    );
}

export default App;
