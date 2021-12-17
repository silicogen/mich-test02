import axios from "axios";
import { apiRoute } from "../../apiRoute";
import { useState } from "react";

export const useLoad = () => {
    const [state, setState] = useState<any>({});
    const load = async (rowCount: number) => {
        try {
            const axiRes = await axios.get(`${apiRoute}/?rows=${rowCount}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`);
            setState(axiRes);
        } catch (ex: any) {
            console.error("load persons error")
        }
    }

    return [state, load];
}