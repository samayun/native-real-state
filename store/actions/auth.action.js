import AuthAPIService from '../../services/auth.service';

export const authSuccess = payload => ({
    type: "AUTH_USER", payload, error: null, authError: null
})
export const authError = error => ({
    type: "AUTH_ERROR", error, authError: error
})

export const signInAction = credentials => {
    return async dispatch => {
        try {
            dispatch({ type: "RESET" })
            const response = await AuthAPIService.BOOKSignin(credentials);
            console.log("user", response.user);
            sessionStorage.setItem("token", response.access_token)
            dispatch(authSuccess(response.user))
        } catch (error) {
            dispatch(authError(error.message))
        }
    }
}

export const signUpAction = credentials => {
    return async dispatch => {
        try {
            dispatch({ type: "RESET" })
            const response = await AuthAPIService.BOOKSignup(credentials);
            console.log("user", response);
            sessionStorage.setItem("token", response.access_token)
            dispatch(authSuccess(response.user))
        } catch (error) {
            dispatch(authError(error.message))
        }
    }
}


export const signOutAction = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: "RESET" })
            const response = await AuthAPIService.getLogout();
            console.log(response.message);
            sessionStorage.removeItem("token");
            dispatch(authSuccess(null));
        } catch (error) {
            dispatch(authError(error.message))
        }
    }
}