import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
// export const get1 = (path, options = {}) => {
//     return request.get(path, options).then((response) => {
//         return response.data;
//     });
// };
export default httpRequest;
