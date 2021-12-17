import React from "react";
import { types, Instance } from "mobx-state-tree";
import { MobXProviderContext } from "mobx-react";
import { Persons } from "./Persons";


export const Root = types
    .model("Root", {
        persons: types.optional(Persons, {}),
    })
    ;

export const useRoot = () => React
    .useContext(MobXProviderContext)
    .root as Instance<typeof Root>;

export default Root;
