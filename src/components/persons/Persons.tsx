import { observer } from "mobx-react-lite";
import { PersonsFilter } from "./PersonsFilter";
import { PersonsNav } from "./PersonsNav";
import { PersonsLoad } from "./PersonsLoad";
import { PersonsTable } from "./PersonsTable";

const _Persons: React.FC = () => {
    return <>
        <br />
        <PersonsLoad />
        <br /><br />
        <PersonsNav />
        <br /><br />
        <PersonsFilter />
        <br /><br />
        <PersonsTable />
    </>
}

export const Persons = observer(_Persons);