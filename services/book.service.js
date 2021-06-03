
import axios from "./axios";

class BookDataService {
    async createPost(credentials) {
        try {
            const token = sessionStorage.getItem("token") || null;
            let { data } = await axios({
                method: 'post',
                url: `/api/posts/create`,
                data: credentials,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
    async readAuthUserPosts() {
        try {
            let { data } = await axios({
                method: 'post',
                url: `/api/posts/profile`
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
    async readAllPost() {
        try {
            let { data } = await axios({
                method: 'get',
                url: `/api/posts/read`
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
    async getSinglePost(postId) {
        try {
            let { data } = await axios({
                method: 'get',
                url: `/api/posts/show/${postId}`
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
    async updatePost(postId, credentials) {
        try {
            let { data } = await axios({
                method: 'put',
                url: `/api/posts/update/${postId}`,
                data: credentials
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
    async deletePost(postId, credentials) {
        try {
            let { data } = await axios({
                method: 'delete',
                url: `/api/posts/delete/${postId}`,
                data: credentials
            });
            return data;
        } catch (error) {
            if (error?.response && error?.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error(error);
            }
        }
    }
}

// eslint-disable-next-line 
export default new BookDataService();