
import { data3 } from "../../data/data3";
// import { data32 } from "../../data/data32";
// import { data1000 } from "../../data/data1000";
const data = data3;
export const PersonsTable = () => <table>
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
        {data.map(r => <tr>
            <td> {r.id}</td>
            <td> {r.firstName}</td>
            <td> {r.lastName}</td>
            <td> {r.email}</td>
            <td> {r.phone}</td>
            {/* <td> {r.address.streetAddress}</td>
            <td> {r.address.city}</td>
            <td> {r.address.state}</td>
            <td> {r.address.zip}</td>
            <td> {r.description}</td> */}
        </tr>)}
    </tbody>


</table>