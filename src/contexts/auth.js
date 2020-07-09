import React, { useContext } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

const usersAPI = 'https://developingyouapi.azurewebsites.net/api/users';

export const AuthContext = React.createContext();

export default function useAuth() {
    return useContext(AuthContext);
  }

  export class AuthProvider extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        user: null,
        permissions: [],

        login: this.login,
        logout: this.logout,
        register: this.register,
      };
    }

    register = async(username, password, email) => {
      const result = await fetch(`${usersAPI}/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password, email }),
      });
      const body = await result.json();
      if (result.ok) {
        if (this.processToken(body.token, body)) {
          return result.ok;
        }
      }
      this.logout();
      return result.ok;
    }

    login = async (username, password) => {
        const result = await fetch(`${usersAPI}/login`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        const body = await result.json();
        if (result.ok){
          if (this.processToken(body.token, body)){
            return result.ok;
          }
        }
        this.logout();
        return result.ok;
      }

      logout = () => {
        this.setState({ user: null, permissions: [] });
        cookie.remove('auth');
      }

      processToken(token, user) {
        try {
          const payload = jwt.decode(token);
          if (payload) {
            if (payload.exp * 1000 < Date.now()){
              console.log('token expired');
              this.logout();
              return false;
            }
            
            if (!user) {
              console.log(payload)
              user = {
                token: token,
                id: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
                userName: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
              };
            }
            console.log(user);
    
            this.setState({
              user,
              permissions: payload.permissions || [],
            });
            cookie.save('auth', token);
            return true;
          }
        } catch(e){
          console.warn(e);
          this.logout();
        }
      }

       componentDidMount() {
         const cookieToken = cookie.load('auth');
         this.processToken(cookieToken);
       }
    
      render() {
        return (
          <AuthContext.Provider value={this.state}>
            {this.props.children}
          </AuthContext.Provider>
        );
      }

}