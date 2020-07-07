import React, { useContext } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';



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
      };
    }

    login = async (username, password) => {
        const result = await fetch(`${usersAPI}/Login`, {
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
            if (!user) {
              user = {
                id: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
                username: payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
              };
            }
    
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

}