const rootUrl = "http://www.filltext.com";

export const getPersonsUrl = (rowCount: number | "small" | "large") => {
    const delay3 = rowCount == "large" ? "&delay=3" : "";
    if (rowCount == "small") rowCount = 32;
    if (rowCount == "large") rowCount = 1000;
    return `${rootUrl}/?rows=${rowCount}&id={number|1000}&firstName={firstName}${delay3}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
}