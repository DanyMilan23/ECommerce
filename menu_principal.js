//firebase
import firebase from "firebase.config"
import React,{Component} from "react";
// @material-ui/core components
import { makeStyles,withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { container } from "assets/jss/material-kit-react.js";
//Jss
import styles from "assets/jss/material-kit-react/views/loginPage.js";
//imagenes
//router
import { browserHistory } from 'react-router'; 



class Menu extends Component{
    constructor(props){      
      super(props);
      //states
      this.state={
        //aqui van los states de ser necesarios   
      };
      //metodos
      //declaracion de metodos de ser necesario
      
     }
     //funcion flecha para llamar al pop-up de google
    submitForm=()=>{
        //login with popup
        let provider=new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result=>{
            console.log(result);
        })
        //verificacion a probar
      firebase.auth().onAuthStateChanged(function(user) {
        var user = firebase.auth().currentUser;
        if (user) {
          alert("Bienvenido ");
          //browserHistory.push("/menu_doctor"); 
        } else {
          alert("Algo paso");
        }
        if (user != null) {
          user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
          });
        }
       });
    }
   
  render(){
    return (
        //aqui va el codigo de frontend
        <h1></h1> 
    );
  }
    
        
}
export default withStyles({
  
  //jss o css

})(Menu);


