import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key":
                "7f81defeffmsh98cb175c51cb477p1d2d8bjsn5978cf921176",
        },
    });

    return data;
};
