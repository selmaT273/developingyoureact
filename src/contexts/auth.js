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

    

}