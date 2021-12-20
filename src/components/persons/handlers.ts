import axios from "axios";
import { apiRoute } from "../../apiRoute";
import { useState } from "react";

export const useLoad = () => {
    const [state, setState] = useState<any>({});
    const load = async (rowCount: number | "small" | "large") => {
        let url1: string;
        switch (rowCount) {
            case "small": url1 = "rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
                break;
            case "large": url1 = "rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
                break;
            default: url1 = `rows=${rowCount}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
        }
        try {
            const axiRes = await axios.get(`${apiRoute}/?${url1}`);
            setState(axiRes);
        } catch (ex: any) {
            console.error("load persons error")
        }
    }

    return [state, load];
}