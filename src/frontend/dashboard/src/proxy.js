import axios from "axios";
import { message } from 'antd';

const apiUrl = "/api/";
const proxyExecute = async (requestMessage) => {
    return await axios.post(apiUrl + requestMessage.method, requestMessage.variables).then(response => {
        if (response.statusText == "OK" || response.status == 200) {
            return { data: response.data, isSuccess: true };
        } else {
            const { status, statusText, type, url } = response;
            throwError(new Error(`'Something went wrong'\nStasus: ${status},\nStatusText:${statusText},\nType:${type},\nUrl:${url}`));
        }
    }).catch(error => {
        throwError(error);
    });
}

const throwError = (error) => {
    message.error("An unexpected error has occurred. " + error.message);
    throw error;
}

export default proxyExecute;