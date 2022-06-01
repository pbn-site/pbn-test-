export const getDayOfWeek = (date: Date) => {
    const DAYS_OF_WEEK = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayInWeek = new Date(date).getDay();
    return DAYS_OF_WEEK[dayInWeek];
};

export const getMothOfYears = (date: Date) => {
    const MONTHS_OF_YEARS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const monthInYear = new Date(date).getMonth();
    return MONTHS_OF_YEARS[monthInYear];
};
export const replaceYoutubeLink = (link: string, isMobile: boolean) => {
    // let allTagA = link.match(/<a[\s\S]<\/a>/);
    let allTagA = link.split("</a>");
    // console.log("allTagA ", allTagA);
    allTagA = allTagA.map((html) => {
        let arr = html.split("<a");

        if (arr[1]) {
            let index = arr[1].search(
                /href="https:\/\/www.youtube.com[\s\S]*"/g
            );
            if (index >= 0) {
                // console.log("html ", html);
                let lastIndex = arr[1].indexOf("target=");
                let url = arr[1].substring(index + 5, lastIndex);
                // console.log("url ", url);
                let ifarmeTag = `<iframe width="${
                    isMobile ? "100%" : "80%"
                }" height=${isMobile ? "200px" : "400px"} src=${url}></iframe>`;

                html = html.replace("<a" + arr[1], ifarmeTag);
                // console.log("allTagA[i] ", html);
            } else {
                html = html + "</a>";
            }
        } else {
            html = html + "</a>";
        }
        return html;
    });
    const newText = allTagA.join("");
    return newText;
    // let listParagraph = link.split("<h2");
    // let listReplaced = listParagraph.map(item => {
    //     let index = item.search(/href="https:\/\/www.youtube.com[\s\S]*"/g);
    //     if (index >= 0) {
    //         console.log("index ", index);

    //         let lastIndex = item.indexOf("target=");
    //         let url = item.substring(index + 5, lastIndex);
    //         console.log("url ", url);

    //         // let newString = item.replace(
    //         //     url,
    //         //     `<iframe width="${isMobile ? "100%" : "80%"}" height=${
    //         //         isMobile ? "200px" : "400px"
    //         //     } src=${url}></iframe>`,
    //         // );
    //         return item;
    //     } else {
    //         return item;
    //     }
    // });
    // return listReplaced.join("<h2");
    // console.log("listReplaced", listReplaced);
};

export const isProdWeb = () => {
    return process.env.NODE_ENV === "production";
};

export function convertToJSONObject(model: any) {
    return JSON.parse(JSON.stringify(model));
}

export const getFullPathAsset = (path: string) => {
    let url = process.env.NEXT_PUBLIC_ASSET_PREFIX + path;
    console.log("url ", url);
    return url;
};
