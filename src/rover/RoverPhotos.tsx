import React, { useState, useEffect } from 'react';
import { fetchData } from '../helpers/ApiDataCall'
import "./RoverPhotos.scss"

interface RoverPhotosProps {
    rover: string,
    camera: string
}

interface Photo {
    img_src: string
}

export function RoverPhotos(props: RoverPhotosProps) {

    const [photos, setPhotos] = useState<Photo[]>([]);
    const [error, setError] = useState(false);
    const name = props.rover.toLowerCase();
    const camera = props.camera.toLowerCase();
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?sol=100&camera=${camera}&api_key=3MzewCaMo3w75FEoQJ9m1ABVKf0Pe6ArnDKd18Ca`;

    useEffect(() => {
        fetchData(url)
            .then(jsonResponse => setPhotos(jsonResponse.photos))
            .catch(err => setError(err))
    }, [props.camera]);

    if (!photos) {
        return <div></div>;
    }

    if (photos.length <= 0) {
        return <div className="no-photos">No photos found</div>;
    }

    return (
        <div className="RoverPhotos">
            {photos.map(photo =>
                <img className="rover-image" alt="camera"src={photo.img_src} />)}
        </div>
    );
}