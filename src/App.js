import React from 'react';
import Comment from './comment/Comment';
import Card from './comment/Card';

//Pour définir un composant React :
//- On peut utiliser une fonction (function based component)
//- On peut utiliser une classe (class based component)
let comments = [
    {
        nom : "Stevie Feliciano", 
        avatar : "https://semantic-ui.com/images/avatar/small/stevie.jpg",
        dateComment : "12/09/2022",
        evaluation : 5,
        texte : "Hey guys, I hope this example comment is helping you read this documentation."
    },
    {
        nom : "Elliot Fu", 
        avatar : "https://semantic-ui.com/images/avatar/small/elliot.jpg",
        dateComment : "22/09/2022",
        evaluation : 4,
        texte : "Any comment!"
    },
    {
        nom : "Tom Lukic", 
        avatar : "https://semantic-ui.com/images/avatar/small/joe.jpg",
        dateComment : "12/09/2022",
        evaluation : 2,
        texte : "Hello from React training."
    }
]

const App = ()=>{
    return <>
        <Card>
            <Comment 
                avatar={comments[0].avatar}
                nom = {comments[0].nom}
                evaluation = {comments[0].evaluation}
                dateComment = {comments[0].dateComment}
                texte = {comments[0].texte}
            />
        </Card>
        {
        comments.map(
            comment => {
                return (
                    <Comment key = {comment.nom}
                    avatar = {comment.avatar}
                    nom = {comment.nom}
                    dateComment = {comment.dateComment}
                    evaluation = {comment.evaluation}
                    texte = {comment.texte} />
                );
            }
        )
        }
        
    </>
}

export default App;