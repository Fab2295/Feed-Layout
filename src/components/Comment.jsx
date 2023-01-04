import { ThumbsUp, Trash } from 'phosphor-react'
import {Avatar} from './Avatar.jsx'

import styleComment from './Comment.module.css'

export function Comment(props) {
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
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}