import axios from "axios";
import { useRoot } from "../../store/Root";
import { getPersonsUrl } from "../../urls";

const defaultRowsCount = 23;

export const useLoad = () => {
    const persons = useRoot().persons;
    const load = async (personsUrl: string) => {
        try {
            const r = await axios.get(personsUrl);
            persons.setItems(r.data);
        } catch {
            console.error("load persons error");
        }
    }
    return {
        default: () => load(getPersonsUrl(defaultRowsCount)),
        small: () => load(getPersonsUrl("small")),
        large: () => load(getPersonsUrl("large"))
    };
}