import "./styles.css";
import AppLayout from "./AppLayout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
    <Router>
    <AppLayout/>
    </Router>
    );
    }
export default App;