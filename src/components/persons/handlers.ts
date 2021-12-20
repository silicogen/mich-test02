import axios from "axios";
import { useState } from "react";

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
    return [resp, load];
}