import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;
// console.log(url);

export default {
    async login(credentials) {
        return axios
            .post(url + '/api/auth/login', credentials)
            .then(response => response.data);
    },
    async register(credentials) {
        return axios
            .post(url + '/api/auth/register', credentials)
            .then(response => response.data);
    },
    async fetchToken() {
        return axios
            .post(url + 'auth/me')
            .then(response => response.data);
    },
    handleAuthError(error) {
        var response = error.response;
        var message = "";
        var requiredFieldsMsgs = [];

        // Depends on each response code
        switch (response.status) {
          case 422: // Validation error
            // Save each validation error in a key:pair array
            requiredFieldsMsgs = response.data.errors;
            // Save request message
            message = response.data.message;
            break;
        case 401: // Validation error
            // Save request message
            message = response.data.message;
            break;

          default:
            message = response.data.message;
            break;
        }
        return {
            message: message,
            validationErrors: requiredFieldsMsgs
        };
    },
};