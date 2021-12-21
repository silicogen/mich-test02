import React from "react";
import { observer } from "mobx-react-lite";
import { useRoot } from "../../store/Root";


const _PersonsFilter: React.FC = () => {
    const persons = useRoot().persons;
    const onClick = () => {

    }
    return <>
        <button onClick={onClick}>Filter</button>
        <input type="text" />
    </>
}

export const PersonsFilter = observer(_PersonsFilter);