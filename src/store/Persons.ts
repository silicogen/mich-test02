import { types } from "mobx-state-tree";
import { Address } from "./Address";

const pageRowsCount = 10;
let _id = 0;

export const Person = types
    .model("Person", {
        _id: types.optional(types.identifierNumber, () => _id++),
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
        pageNumber: 1,
        selected: types.safeReference(Person),
    })
    .actions(self => ({
        setItems(arr: any[]) {
            self.items.replace(arr);
        },
        prev() {
            self.pageNumber--;
        },
        next() {
            self.pageNumber++;
        }
    }))
    .views(self => ({
        get page() {
            return self.items.slice((self.pageNumber - 1) * pageRowsCount, self.pageNumber * pageRowsCount);
        },
        get prevDisabled() {
            return self.pageNumber == 1;
        },
        get nextDisabled() {
            return self.pageNumber * pageRowsCount >= self.items.length;
        },
        get bounds() {
            return `${(self.pageNumber - 1) * pageRowsCount + 1} 
            to  ${Math.min(self.pageNumber * pageRowsCount, self.items.length)}
            from ${self.items.length}`;
        }
    }))

