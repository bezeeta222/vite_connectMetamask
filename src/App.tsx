import { useState } from "react";
import Metamaskonboard from "./metamaskonboard";
import Ethaccount from "./ethaccount";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ margin: "27px" }}>
            <h1>Metamask onboarding</h1>
            <Metamaskonboard />
            <Ethaccount />
        </div>
    );
}

export default App;
