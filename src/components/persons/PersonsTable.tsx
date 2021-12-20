import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useRoot } from "../../store/Root";
import { useLoad } from "./handlers"

export const _PersonsTable = () => {
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
        <table>
            <thead>
                <tr>
                    <th onClick={() => { }}>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>streetAddress</th>
                    <th>city</th>
                    <th>state</th>
                    <th>zip</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>{persons.page.map(r =>
                <tr
                    key={r._id}
                >
                    <td> {r.id}</td>
                    <td> {r.firstName}</td>
                    <td> {r.lastName}</td>
                    <td> {r.email}</td>
                    <td> {r.phone}</td>
                    <td> {r.address.streetAddress}</td>
                    <td> {r.address.city}</td>
                    <td> {r.address.state}</td>
                    <td> {r.address.zip}</td>
                    <td> {r.description}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}

export const PersonsTable = observer(_PersonsTable);