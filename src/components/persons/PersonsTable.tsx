import { observer } from "mobx-react-lite";
import { useRoot } from "../../store/Root";
import { PersonsTH } from "./PersonsTH";

const _PersonsTable = () => {
    const persons = useRoot().persons;
    return <>
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