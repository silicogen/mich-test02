import React from "react";
import { observer } from "mobx-react-lite";
import { useRoot } from "../../store/Root";

interface Props {
    column: string;
    children?: React.ReactNode;
}

export const _PersonsTH: React.FC<Props> = ({ column, children }) => {
    const persons = useRoot().persons;
    const orderClick: React.MouseEventHandler = e => persons.setOrder(column)
    return <th onClick={orderClick} >{children ?? column}{persons.orderSimbol(column)}</th>
}

export const PersonsTH = observer(_PersonsTH);