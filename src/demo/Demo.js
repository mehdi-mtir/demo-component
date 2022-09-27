import React from "react";

//Création d'un composant à base de classe
class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            compteur : 0
        }
    }

    increment = ()=>{
        console.log(this.setState({compteur : this.state.compteur + 1}));
    }

    render(){
        return <div>
                <p>compteur = {this.state.compteur}</p>
                <button type="button" onClick={this.increment} >+</button>
            </div>
    }

}

export default Demo;