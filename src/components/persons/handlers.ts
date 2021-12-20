import axios from "axios";
import { useState } from "react";
import { getPersonsUrl } from "../../urls";

export const useLoad = () => {
    const [resp, setState] = useState<any>({});
    const load = async (personsUrl: string) => {
        try {
            const r = await axios.get(personsUrl);
            setState(r);
        } catch (ex: any) {
            console.error("load persons error");
        }
    }
    const loadDefault = () => load(getPersonsUrl(10));
    const loadSmall = () => load(getPersonsUrl("small"));
    const loadLarge = () => load(getPersonsUrl("large"));

    return [resp, loadDefault, loadSmall, loadLarge];
}