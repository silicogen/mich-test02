import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useRoot } from "../../store/Root";
import { useLoad } from "./handlers";
import { PersonsTH } from "./PersonsTH";
import { PersonsFilter } from "./PersonsFilter";

const _PersonsTable = () => {
    const root = useRoot();
    const persons = root.persons;
    const load = useLoad();
    useEffect(() => { load.default(); }, []);
    return <>
        <br />
        <button onClick={load.small}>Load small</button>
        <button onClick={load.large}>Load large</button>
        <br /><br />
        <button onClick={persons.prev} disabled={persons.prevDisabled}>Prev</button>
        {persons.bounds}
        <button onClick={persons.next} disabled={persons.nextDisabled}>Next</button>
        <br /><br />
        <PersonsFilter />
        <table>
            <thead>
                <tr>
                    {/* <th >_id</th> */}
                    <PersonsTH column="id" />
                    <PersonsTH column="firstName" />
                    <PersonsTH column="lastName" />
                    <PersonsTH column="email" />
                    <PersonsTH column="phone" />
                    <PersonsTH column="streetAddress" />
                    <PersonsTH column="city" />
                    <PersonsTH column="state" />
                    <PersonsTH column="zip" />
                    <PersonsTH column="description" />
                </tr>
            </thead>
            <tbody>{persons.page.map(r =>
                <tr key={r._id}>
                    {/* <td> {r._id}</td> */}
                    <td> {r.id}</td>
                    <td> {r.firstName}</td>
                    <td> {r.lastName}</td>
                    <td> {r.email}</td>
                    <td> {r.phone}</td>
                    <td> {r.streetAddress}</td>
                    <td> {r.city}</td>
                    <td> {r.state}</td>
                    <td> {r.zip}</td>
                    <td> {r.description}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}

export const PersonsTable = observer(_PersonsTable);