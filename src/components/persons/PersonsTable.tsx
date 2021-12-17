
import { data3 } from "../../data/data3";
// import { data32 } from "../../data/data32";
import { useRoot } from "../../store/Root";

export const PersonsTable = () => {
    const root = useRoot();;
    const persons = root.persons;
    persons.setItems(data3);
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