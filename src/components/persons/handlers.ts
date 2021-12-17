import axios from "axios";
import { apiRoute } from "../../apiRoute";
import { useState } from "react";

export const useLoad = () => {
    const [state, setState] = useState<any>({});
    const load = async () => {
        try {
            const axiRes = await axios.get(`${apiRoute}`);
            setState(axiRes);
        } catch (ex: any) {
            console.error("load persons error")
        }
    }

    return [state, load];
}