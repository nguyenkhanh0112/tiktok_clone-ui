import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};
// export const get1 = (path, options = {}) => {
//     return request.get(path, options).then((response) => {
//         return response.data;
//     });
// };
export default request;
