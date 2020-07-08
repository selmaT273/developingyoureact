import React from 'react';
import Modal from '../createinstance'



export default class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            showInstanceForm: false,
        };
    }

    toggleInstanceForm = () => {
        this.setState(oldState => ({
            showInstanceForm: !oldState.showInstanceForm
        }));
    }
}