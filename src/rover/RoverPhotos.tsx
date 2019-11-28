import React from 'react';
import {fetchData} from '../helpers/ApiCall'
import { tsPropertySignature } from '@babel/types';

interface RoverPhotosProps{
    rover: string,
    camera: string
}


export function RoverPhotos(props: RoverPhotosProps){

    const name = props.rover.toLowerCase();
    const camera = props.camera.toLowerCase();

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/`+ {name} +`/photos?sol=1000&camera=` + + `&api_key=DEMO_KEY`
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/` + {name} + `/photos?earth_date=2015-6-3&api_key=DEMO_KEY`

    const jsonResponse = fetchData()
    



    return <div>Photos</div>
}