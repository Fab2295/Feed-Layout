import { ThumbsUp, Trash } from 'phosphor-react'
<<<<<<< HEAD
import { useState } from 'react';
import {Avatar} from './Avatar.jsx'

import styleComment from './Comment.module.css'

export function Comment(props) {
    const[like, setLike] = useState(props.likes);

    function handleLike(){
        if(like > props.likes){
            // deslike
            setLike(like => like - 1);
            return
        }

        setLike(like => like + 1);
    }

    return (
        <div className={styleComment.comment}>
            <Avatar src={props.imageUser} />
=======

import styleComment from './Comment.module.css'

export function Comment() {
    return (
        <div className={styleComment.comment}>
            <img
                className={styleComment.avatar}
                src="https://avatars.githubusercontent.com/u/19378313?v=4"
                alt=""
            />
>>>>>>> 7143599 (Layout)
            <div className={styleComment.commentBox}>
                <div className={styleComment.commentContent}>
                    <header>
                        <div className={styleComment.authorInfo}>
<<<<<<< HEAD
                            <strong>{props.userName}</strong>
=======
                            <strong>Dalcy Fabrício</strong>
>>>>>>> 7143599 (Layout)
                            <time dateTime='2023-01-01 08:39:24'>Cerca de 1 hora atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

<<<<<<< HEAD
                    <p>{props.comment}</p>
                </div>
                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{like}</span>
=======
                    <p>Parabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
>>>>>>> 7143599 (Layout)
                    </button>
                </footer>
            </div>
        </div>
    );
}