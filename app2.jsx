import { useState } from "react";

function app() {
    const[count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>
        </div>
    );
}

export default app;