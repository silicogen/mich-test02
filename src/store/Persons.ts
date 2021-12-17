import { types } from "mobx-state-tree";

export const Person = types
    .model("Person", {
        id: types.identifierNumber,
        firstName: types.string,
        lastName: types.string,
        email: types.string,
        phone: types.string,
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

