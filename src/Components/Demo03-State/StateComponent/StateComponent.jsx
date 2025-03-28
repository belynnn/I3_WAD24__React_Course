import "./StateComponent.css"
import {useState} from "react";

function StateDemo() {
    const [state, setState] = useState(0)

    return (
        <>
            <p>{state}</p>
            <button onClick={() => setState(state +1)}>+</button>
        </>
    )
}

export default StateDemo;