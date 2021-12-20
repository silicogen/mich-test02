
import { useEffect } from "react";
import { useRoot } from "../../store/Root";
import { useLoad } from "./handlers"

export const PersonsTable = () => {
    const root = useRoot();
    const persons = root.persons;
    const [resp, loadDefault, loadSmall, loadLarge] = useLoad();
    useEffect(loadDefault, []);
    persons.setItems(resp.data);
    return <>
        <button onClick={loadSmall}>Load small</button>

        <button onClick={loadLarge}>Load large</button>

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
            <tbody>{persons.items.map(r =>
                <tr key={r.id.toString()}>
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