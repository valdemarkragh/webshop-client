export const apiUrl = "http://localhost:8000";

export const fetchData = async <T>(url: string): Promise<T> => {
    const res = await fetch(url);
    const data = await res.json();

    return data as T;
};
