import './style.scss'
import {useState} from "react";
import CommentItem from "../../features/comment/commentItem.tsx";
import { commentType } from '../../entities/comment';

function Comment(){

    const comments: commentType[] = [{id: 0, name: 'Иван И', text: 'Волонтеры делают действительно важное дело. Их работа не остается незамеченной, и я уверен, что каждый набор помощи приносит облегчение тем, кто в этом нуждается.', imageUrl: 'https://i.pinimg.com/736x/3d/b9/2c/3db92c9b6be96d90b6b0c7796d6a80f6.jpg'}, {id: 0, name: 'Иван И', text: 'Волонтеры делают действительно важное дело. Их работа не остается незамеченной, и я уверен, что каждый набор помощи приносит облегчение тем, кто в этом нуждается.', imageUrl: 'https://i.pinimg.com/736x/3d/b9/2c/3db92c9b6be96d90b6b0c7796d6a80f6.jpg'}]
    const [comment, setComment] = useState('')

    return (
        <div className={'container'}>
            <div className={'comment'}>
                <p className={'comment__title'}>Комментарии</p>

                <input onChange={(e) => setComment(e.target.value)} placeholder={'Напишите комментарий....'} className={'comment__textarea'} />
                <div className={'comment-controls'}>
                    <button onClick={() => setComment('')}>Отмена</button>
                    <button disabled={comment.length == 0}>Отправить комментарий</button>
                </div>
                <div className={'comment-list'}>
                    {comments.map((comment, index) => <CommentItem key={index} comment={comment} />)}
                </div>
            </div>
        </div>
    )
}

export default Comment