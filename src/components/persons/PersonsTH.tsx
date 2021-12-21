import { observer } from "mobx-react-lite";
import { useRoot } from "../../store/Root";

interface Props {
    columnName: string;
    children?: React.ReactNode;
}

const _PersonsTH: React.FC<Props> = ({ columnName: cn, children }) => {
    const persons = useRoot().persons;
    const orderClick: React.MouseEventHandler = () => persons.setOrder(cn)
    return <th onClick={orderClick} >{children ?? cn}{persons.orderSimbol(cn)}</th>
}

export const PersonsTH = observer(_PersonsTH);