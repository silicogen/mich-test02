import { types } from "mobx-state-tree";
import { Address } from "./Address";

const pageRowsCount = 10;
let _id = 0;
const columns = ["id", "firstName", "lastName", "email", "phone", "address", "streetAddress", "city", "state", "zip", "description"];

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
        filter: ""
    })
    .actions(self => ({
        setItems(arr: any[]) {
            self.items.replace(arr);
        },
        setFilter(filter: string) {
            self.filter = filter;
        },
        prev() {
            self.pageNumber--;
        },
        next() {
            self.pageNumber++;
        },
        setOrder(column: string = "_id") {
            if (column !== self.orderColumn) {
                self.orderColumn = column;
                self.order = "source";
            }
            self.pageNumber = 1;

            const compare = column === "id"
                ? (a: any, b: any) => a[column] - b[column]
                : (a: any, b: any) => a[column].localeCompare(b[column]);

            switch (self.order) {
                case "source":
                    self.items.sort(compare);
                    self.order = "ascending";
                    break;
                case "ascending":
                    self.items.sort((a, b) => -compare(a, b));
                    self.order = "descending";
                    break;
                default:
                    self.items.sort((a, b) => a._id - b._id);
                    self.order = "source";
            }
        }
    }))
    .views(self => ({
        get filteredItems() {
            return self.filter === ""
                ? self.items
                : self.items.filter(i =>
                    //@ts-ignore
                    columns.filter(c => i[c]
                        .toString()
                        .includes(self.filter)).length > 0);
        },
        get page() {
            return this.filteredItems.slice((self.pageNumber - 1) * pageRowsCount, self.pageNumber * pageRowsCount);
        },
        get prevDisabled() {
            return self.pageNumber === 1;
        },
        get nextDisabled() {
            return self.pageNumber * pageRowsCount >= self.items.length;
        },
        get bounds() {
            const length = this.filteredItems.length;
            return `${(self.pageNumber - 1) * pageRowsCount + 1} 
            to  ${Math.min(self.pageNumber * pageRowsCount, length)}
            from ${length}`;
        },
        orderSimbol(column: string) {
            if (column === self.orderColumn) {
                switch (self.order) {
                    case "descending":
                        return "↑";
                    case "ascending":
                        return "↓";
                    default:
                        return "";
                }
            } else {
                return "";
            }
        }
    }))

