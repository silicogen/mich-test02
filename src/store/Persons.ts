import { types } from "mobx-state-tree";
import { Address } from "./Address";

const pageRowsCount = 10;
let _id = 0;

type Order =
    "source" |
    "ascending" |
    "descending";

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
    })
    .views(self => ({
        get streetAddress() {
            return self.address.streetAddress;
        },
        get city() {
            return self.address.city;
        },
        get state() {
            return self.address.state;
        },
        get zip() {
            return self.address.zip;
        },
    }));

export const Persons = types
    .model("Persons", {
        items: types.array(Person),
        pageNumber: 1,
        order: types.optional(
            types.enumeration("Order", ["source", "ascending", "descending"]),
            "source"),
        orderColumn: "_id",
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
        },
        setOrder(column: string = "_id") {
            if (column != self.orderColumn) {
                self.orderColumn = column;
                self.order = "source";
            }
            self.pageNumber = 1;
            switch (self.order) {
                case "source":
                    //@ts-ignore
                    self.items.sort((a, b) => a[column].localeCompare(b[column]));
                    self.order = "ascending";
                    break;
                case "ascending":
                    //@ts-ignore
                    self.items.sort((a, b) => -a[column].localeCompare(b[column]));
                    self.order = "descending";
                    break;
                default:
                    self.items.sort((a, b) => a._id - b._id);
                    self.order = "source";
            }
        }
    }))
    .views(self => ({
        get ordered() {
            return self.items.sort((a, b) => a.firstName.localeCompare(b.firstName));
        },
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
        },
    }))

