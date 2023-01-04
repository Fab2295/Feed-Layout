import { ThumbsUp, Trash } from 'phosphor-react'
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
            <div className={styleComment.commentBox}>
                <div className={styleComment.commentContent}>
                    <header>
                        <div className={styleComment.authorInfo}>
                            <strong>{props.userName}</strong>
                            <time dateTime='2023-01-01 08:39:24'>Cerca de 1 hora atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.comment}</p>
                </div>
                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{like}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}