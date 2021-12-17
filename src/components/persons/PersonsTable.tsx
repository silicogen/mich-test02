
import { useEffect } from "react";
// import { data3 } from "../../data/data3";
// import { data32 } from "../../data/data32";
import { useRoot } from "../../store/Root";
import { useLoad } from "./handlers"

export const PersonsTable = () => {
    const root = useRoot();;
    const persons = root.persons;
    const [axiRes, load] = useLoad();
    useEffect(load, []);
    persons.setItems(axiRes.data);
    return <table>
        <thead>
            <tr>
                <th> id</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>email</th>
                <th>phone</th>
            </tr>
        </thead>
        <tbody>
            {persons.items.map(r =>
                <tr id={r.id.toString()}>
                    <td> {r.id}</td>
                    <td> {r.firstName}</td>
                    <td> {r.lastName}</td>
                    <td> {r.email}</td>
                    <td> {r.phone}</td>
                </tr>)}
        </tbody>
    </table>
}