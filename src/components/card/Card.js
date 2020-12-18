import { useContext } from 'react';
import { ApplicationContext } from '../../domain/application.store';
import { LikePictureById, UnlikePictureById } from '../../domain/picture/picture.actions';
import { LikeButton, BookmarkButton } from '../buttons';
import './Card.css';


export function Card({ picture }) {
    const { state, dispatch } = useContext(ApplicationContext);
    console.log(state);

    const isLiked = () => {
        return !!picture.likedBy && picture.likedBy.findIndex(like => like._id === state.user._id) > -1
    }

    const onLike = (pictureId) => {
        if (isLiked()) {
            // console.log('unlike');
            UnlikePictureById(dispatch, pictureId)
        } else {
            // console.log('like');
            LikePictureById(dispatch, pictureId)
        }
    }

    if (!state.user) return null
    return (
        <div className="card">
            <div className="card-img">
                <img src={picture.download_url} />
                <LikeButton onClick={() => { onLike(picture.picsum_id) }} isLiked={picture.likedBy && picture.likedBy.find(like => like._id === state.user._id)} />                <span className="likes">Likes : {picture.likedBy ? picture.likedBy.length : 0}</span>
                <BookmarkButton onClick={() => { }} />
            </div>
            <div className="card-body">
                <h3>
                    Author : {picture.author}
                </h3>
                <div className="card-comments">
                    Comments
                    <ul>
                        <li>
                            Sample comment
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}