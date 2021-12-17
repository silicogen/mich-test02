
import { useEffect } from "react";
import { useRoot } from "../../store/Root";
import { useLoad } from "./handlers"

export const PersonsTable = () => {
    const root = useRoot();
    const persons = root.persons;
    const [axiRes, load] = useLoad();
    useEffect(() => load(10), []);
    persons.setItems(axiRes.data);
    return <>
        <button
            onClick={() => load(32)}
        >Загрузить 32
        </button>
        <button
            onClick={() => load(1000)}
        >Загрузить 1000
        </button>
        <table>
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
    </>
}