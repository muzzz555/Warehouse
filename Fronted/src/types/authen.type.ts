export interface LoginResult {
    result:string,
    token?:string,  //send from server or not send
    message:string
}

export interface RegisterResult {
    result:string,
    token:string,
    message:string
}