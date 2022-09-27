import React from 'react';
import Comment from './comment/Comment';
import Card from './comment/Card';
import Demo from './demo/Demo';

//Pour définir un composant React :
//- On peut utiliser une fonction (function based component)
//- On peut utiliser une classe (class based component)
let comments = [
    {
        nom: "Stevie Feliciano",
        avatar: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
        dateComment: "12/09/2022",
        evaluation: 5,
        texte: "Hey guys, I hope this example comment is helping you read this documentation.",
        etat : "en attente"
    },
    {
        nom: "Elliot Fu",
        avatar: "https://semantic-ui.com/images/avatar/small/elliot.jpg",
        dateComment: "22/09/2022",
        evaluation: 4,
        texte: "Any comment!",
        etat : "en attente"
    },
    {
        nom: "Tom Lukic",
        avatar: "https://semantic-ui.com/images/avatar/small/joe.jpg",
        dateComment: "12/09/2022",
        evaluation: 2,
        texte: "Hello from React training.",
        etat : "en attente"
    }
]

const App = () => {
    return <>
        {
            comments.map(
                comment => {
                    return (
                    <Card key = {comment.nom} etat={comment.etat}>
                        <Comment 
                        avatar = {comment.avatar}
                        nom = {comment.nom}
                        dateComment = {comment.dateComment}
                        evaluation = {comment.evaluation}
                        texte = {comment.texte} />
                    </Card>
                    );
                }
            )
        }

    </>
}

export default App;