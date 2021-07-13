import {authRequest} from "../network/authRequest";

export function login(params) {
  return authRequest({
    url: '/account/login',
    method: 'POST',
    data: {
      "username": params.username,
      "password": params.password
    }
  })
}
