import { types } from "mobx-state-tree";

export const Address = types
    .model("Address", {
        streetAddress: types.string,
        city: types.string,
        state: types.string,
        zip: types.string,
    });