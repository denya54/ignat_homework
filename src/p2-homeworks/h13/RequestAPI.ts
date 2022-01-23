import axios from "axios";

export const RequestAPI = {
        checkboxGet (checkboxValue: boolean) {
            return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checkboxValue})
        }
}
