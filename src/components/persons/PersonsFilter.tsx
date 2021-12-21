import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useRoot } from "../../store/Root";


const _PersonsFilter: React.FC = () => {
    const persons = useRoot().persons;
    const [filter, setFilter] = useState<string>("");
    const onClick = () => {
        persons.setFilter(filter);
    }
    return <>
        <button
            onClick={onClick}
            disabled={persons.filter === filter}
        >Filter</button>
        <input
            type="text"
            onChange={e => setFilter(e.currentTarget.value)}
        />
    </>
}

export const PersonsFilter = observer(_PersonsFilter);