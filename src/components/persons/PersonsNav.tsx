import { observer } from "mobx-react-lite";
import { useRoot } from "../../store/Root";

const _PersonsNav: React.FC = () => {
    const persons = useRoot().persons;
    return <>
        <button onClick={persons.prev} disabled={persons.prevDisabled}>Prev</button>
        {persons.bounds}
        <button onClick={persons.next} disabled={persons.nextDisabled}>Next</button>
    </>
}

export const PersonsNav = observer(_PersonsNav);