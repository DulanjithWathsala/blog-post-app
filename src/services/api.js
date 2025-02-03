import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log("Error fetching posts: ", error);
        return [];
    }
}

export const fetchPostById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Fetch failed: ", error);
        return null;
    }
}