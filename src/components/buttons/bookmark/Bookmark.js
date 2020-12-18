import './Bookmark.css';

export function Bookmark({ onClick, isClicked }) {
    return (
        <button className="remove" onClick={onClick}>
            <i className={`${isClicked ? 'fas' : 'far'} fa-bookmark`}></i>
        </button>
    )
}