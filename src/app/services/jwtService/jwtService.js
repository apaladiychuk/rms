import axios from 'axios';
import Utils from "../../../@theme/utils";

class jwtService extends Utils.EventEmitter {

    init() {
        this.setDefaultHeaders();
        this.setInterceptors();
        this.handleAuthentication();
    }

    setDefaultHeaders = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['accept'] = 'application/json';
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.defaults.headers.common['API'] = 'true';
        axios.defaults.baseURL = 'http://10.4.2.201:3003/api/';
    };

    setInterceptors = () => {
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            console.log('--------------------------');
            console.log(err);
            console.log('--------------------------');
            return new Promise((resolve, reject) => {
                if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
                    // if you ever get an unauthorized response, logout the user
                    this.emit('onAutoLogout', 'Invalid access_token');
                    this.setSession(null);
                }
                throw err;
            });
        });
    };

    handleAuthentication = () => {

        let access_token = this.getAccessToken();

        if (!access_token) {
            this.emit('onNoAccessToken');

            return;
        }

        if (access_token) {
            this.setSession(access_token);
            this.emit('onAutoLogin', true);
        } else {
            this.setSession(null);
            this.emit('onAutoLogout', 'access_token expired');
        }
    };

    // createUser = (data) => {
    //     return new Promise((resolve, reject) => {
    //         axios.post('/api/auth/register', data)
    //             .then(response => {
    //                 if ( response.data.user )
    //                 {
    //                     this.setSession(response.data.access_token);
    //                     resolve(response.data.user);
    //                 }
    //                 else
    //                 {
    //                     reject(response.data.error);
    //                 }
    //             });
    //     });
    // };

    signInWithUsernameAndPassword = (username, password) => {
        return new Promise((resolve, reject) => {
            axios.post('/login', {
                loginUsername: username,
                loginPassword: password
            })
                .then(response => {
                    if (response.data.roles) {
                        this.setSession(response.data.authorization);
                        resolve(response.data);
                    } else {
                        reject();
                    }
                })
                .catch(({ response }) => {
                    reject();
                })
        });
    };

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.get('/login')
                .then(response => {
                    if (response.data.roles) {
                        resolve(response.data);
                    } else {
                        this.logout();
                        reject('Failed to login');
                    }
                })
                .catch(error => {
                    this.logout();
                    reject('Failed to login');
                });
        });
    };

    updateUserData = (user) => {
        return axios.post('/api/auth/user/update', {
            user: user
        });
    };

    setSession = access_token => {
        if (access_token) {
            localStorage.setItem('jwt_access_token', access_token);
            axios.defaults.headers.common['Authorization'] = access_token;
        } else {
            localStorage.removeItem('jwt_access_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    logout = () => {
        this.setSession(null);
    };

    // isAuthTokenValid = access_token => {
    //     if ( !access_token )
    //     {
    //         return false;
    //     }
    //     const decoded = jwtDecode(access_token);
    //     const currentTime = Date.now() / 1000;
    //     if ( decoded.exp < currentTime )
    //     {
    //         console.warn('access token expired');
    //         return false;
    //     }
    //     else
    //     {
    //         return true;
    //     }
    // };

    getAccessToken = () => {
        return window.localStorage.getItem('jwt_access_token');
    };
}

const instance = new jwtService();

export default instance;
