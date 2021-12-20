import axios from "axios";
import { useRoot } from "../../store/Root";
import { getPersonsUrl } from "../../urls";

export const useLoad = () => {
    const root = useRoot();
    const persons = root.persons;
    const load = async (personsUrl: string) => {
        try {
            const r = await axios.get(personsUrl);
            persons.setItems(r.data);
        } catch {
            console.error("load persons error");
        }
    }
    const loadDefault = () => load(getPersonsUrl(10));
    const loadSmall = () => load(getPersonsUrl("small"));
    const loadLarge = () => load(getPersonsUrl("large"));

    return [loadDefault, loadSmall, loadLarge];
}