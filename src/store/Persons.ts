import { types } from "mobx-state-tree";
import { Address } from "./Address";
import { v4 as uuidv4 } from 'uuid';

const pageRowsCount = 10;

export const Person = types
    .model("Person", {
        ID: types.optional(types.identifier, () => uuidv4()),
        id: types.number,
        firstName: types.string,
        lastName: types.string,
        email: types.string,
        phone: types.string,
        address: Address,
        description: types.string,
    });

export const Persons = types
    .model("Persons", {
        items: types.array(Person),
        selected: types.safeReference(Person),
    })
    .actions(self => ({
        setItems(arr: any[]) {
            self.items.replace(arr);
        },
    }))
    .views(self => ({
        get page() {
            return self.items.slice(0, pageRowsCount);
        }
    }))

