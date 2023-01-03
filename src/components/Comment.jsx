import { ThumbsUp, Trash } from 'phosphor-react'

import styleComment from './Comment.module.css'

export function Comment() {
    return (
        <div className={styleComment.comment}>
            <img
                className={styleComment.avatar}
                src="https://avatars.githubusercontent.com/u/19378313?v=4"
                alt=""
            />
            <div className={styleComment.commentBox}>
                <div className={styleComment.commentContent}>
                    <header>
                        <div className={styleComment.authorInfo}>
                            <strong>Dalcy Fabrício</strong>
                            <time dateTime='2023-01-01 08:39:24'>Cerca de 1 hora atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Parabéns!</p>
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