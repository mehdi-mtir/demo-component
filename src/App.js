import React from 'react';
import Comment from './comment/Comment';
import Card from './comment/Card';

//Pour définir un composant React :
//- On peut utiliser une fonction (function based component)
//- On peut utiliser une classe (class based component)
class App extends React.Component{
    state = {
        comments : [
            {
                id : 1,
                nom: "Stevie Feliciano",
                avatar: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                dateComment: "12/09/2022",
                evaluation: 5,
                texte: "Hey guys, I hope this example comment is helping you read this documentation.",
                etat : "en attente"
            },
            {
                id : 2,
                nom: "Elliot Fu",
                avatar: "https://semantic-ui.com/images/avatar/small/elliot.jpg",
                dateComment: "22/09/2022",
                evaluation: 4,
                texte: "Any comment!",
                etat : "en attente"
            },
            {
                id : 3,
                nom: "Tom Lukic",
                avatar: "https://semantic-ui.com/images/avatar/small/joe.jpg",
                dateComment: "12/09/2022",
                evaluation: 2,
                texte: "Hello from React training.",
                etat : "en attente"
            }
        ]
    }

    changeState = (idComment, newState)=>{
        //console.log(idComment, newState);
        const nouvelEtat = this.state.comments.map(
            comment =>{
                if(comment.id == idComment){
                    return {...comment, etat : newState}
                }
                else{
                    return comment
                }
            }
        );
        this.setState({comments : nouvelEtat});
    }

    render(){
        return <>
            {
                this.state.comments.map(
                    comment => {
                        return (
                        <Card 
                            key = {comment.id} 
                            etat={comment.etat} 
                            changeHandler={this.changeState} 
                            id={comment.id}>
                                <Comment 
                                avatar = {comment.avatar}
                                nom = {comment.nom}
                                dateComment = {comment.dateComment}
                                evaluation = {comment.evaluation}
                                texte = {comment.texte}
                                id = {comment.id} />
                        </Card>
                        );
                    }
                )
            }
    
        </>
    }
} 

export default App;