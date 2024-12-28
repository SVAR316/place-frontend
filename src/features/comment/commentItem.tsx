import style from './style.module.scss'
import {commentType} from "../../entities/comment";

function CommentItem(props: {comment: commentType}) {

    return (
        <div className={style.comment}>
            <img className={style.commentAvatar} src={props.comment.imageUrl} alt={'image preview'} />
            <div>
                <p>
                    {props.comment.name}
                </p>
                <p>
                    {
                        props.comment.text
                    }
                </p>
            </div>
        </div>
    )
}

export default CommentItem;
