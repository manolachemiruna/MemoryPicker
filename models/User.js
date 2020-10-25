import { Component } from "react";

export default class User extends Component{

    email;
    password;

    constructor(email,password)
    {
      this.email=email;
      this.password=password;
    }

}