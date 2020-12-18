import { useEffect, useContext } from 'react';
import { ApplicationContext } from '../domain/application.store';
import { fetchPictures } from '../domain/picture/picture.actions';
import { Card } from '../components/card/Card';

export default function Collection() {
    const { state, dispatch } = useContext(ApplicationContext);


    useEffect(() => {
        fetchPictures(dispatch);
    }, [dispatch])


    return (
        <>
            <h1 className="title">My Collection</h1>

            {state.pictures.map(picture =>
                <Card key={picture.id} picture={picture} />
            )}
        </>
    )
}