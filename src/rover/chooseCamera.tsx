import React from 'react';
import './chooseCamera.scss';
import {RoverObject} from './marsRover'


interface ChooseCameraProps {
    rover: string;
    camera: string;
    setCamera: (camera: string) => void;
    getRover: (name: string) => RoverObject | undefined;
}


export function ChooseCamera(props: ChooseCameraProps) {
   
    if(!props.rover){
        return <div></div>;
    }

    let roverObject = props.getRover(props.rover);

    if(!roverObject){
       return <div>No rovers found</div>
    }

    return (
        <div className="chooseCamera">
            <h2>Choose your camera</h2>
            <div className="allCameras">
                {roverObject.cameras.map(camera => <CameraCard cameraName={camera} cameraImage='/images/opportunity_rover.jpg' onCameraSelected={props.setCamera} selectedCamera={props.camera}/>)}
            </div>
        </div>
    )
}


interface CameraCardProps {
    onCameraSelected: (cameraName: string) => void;
    selectedCamera: string;
    cameraName: string;
    cameraImage: string;
}

function CameraCard(props: CameraCardProps) {
    function getClassName() {
        if (props.cameraName === props.selectedCamera) {
            return "cameraOptions selected";
        }
        return "cameraOptions";
    }

    return (
        <div className={getClassName()} onClick={() => props.onCameraSelected(props.cameraName)}>
            <img className="cameraImage" src={props.cameraImage} alt="camera"></img>
            <h3>{props.cameraName}</h3>
        </div>
    );
}
