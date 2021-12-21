import { observer } from "mobx-react-lite";
import { useRoot } from "../../store/Root";

const _PersonsEdit: React.FC = () => {
    const persons = useRoot().persons;
    // const 
    return <>
        {/* <td> {r.id}</td>
        <td> {r.firstName}</td>
        <td> {r.lastName}</td>
        <td> {r.email}</td>
        <td> {r.phone}</td>
        <td> {r.streetAddress}</td>
        <td> {r.city}</td>
        <td> {r.state}</td>
        <td> {r.zip}</td>
        <td> {r.description}</td> */}
    </>
}

export const PersonsEdit = observer(_PersonsEdit);