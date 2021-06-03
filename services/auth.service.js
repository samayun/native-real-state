
import axios from "./axios";

class AuthAPIService {
    async postSignin(credentials) {
        try {
            let { data } = await axios({
                method: 'post',
                url: `/api/auth/signin`,
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
    async postSignup(credentials) {
        try {
            let { data } = await axios({
                method: 'post',
                url: `/api/auth/signup`,
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
    async getLogout() {
        try {
            let { data } = await axios({
                method: 'get',
                url: `/api/auth/signout`
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
export default new AuthAPIService();