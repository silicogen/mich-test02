import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useRoot } from "../../store/Root";
import { useLoad } from "./handlers"

export const _PersonsTable = () => {
    const root = useRoot();
    const persons = root.persons;
    const load = useLoad();
    useEffect(() => { load.default(); }, []);
    const orderClick: React.MouseEventHandler =
        e => persons.setOrder(e.currentTarget.textContent!);
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
                    <th >_id</th>
                    <th onClick={orderClick}>id</th>
                    <th onClick={orderClick}>firstName</th>
                    <th onClick={orderClick}>lastName</th>
                    <th onClick={orderClick}>email</th>
                    <th onClick={orderClick}>phone</th>
                    <th onClick={orderClick}>streetAddress</th>
                    <th onClick={orderClick}>city</th>
                    <th onClick={orderClick}>state</th>
                    <th onClick={orderClick}>zip</th>
                    <th onClick={orderClick}>description</th>
                </tr>
            </thead>
            <tbody>{persons.page.map(r =>
                <tr
                    key={r._id}
                >
                    <td> {r._id}</td>
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