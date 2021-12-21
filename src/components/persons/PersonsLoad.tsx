import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useLoad } from "./handlers";

const _PersonsLoad: React.FC = () => {
    const load = useLoad();
    useEffect(() => { load.default(); }, []);
    return <>
        <button onClick={load.small}>Load small</button>
        <button onClick={load.large}>Load large</button>
    </>
}

export const PersonsLoad = observer(_PersonsLoad);