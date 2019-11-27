import React, {useState} from 'react';
import './chooseCamera.scss';

export function ChooseCamera() {
    const [camera, setCamera] = useState("");
   
    return (
        <div className="chooseCamera">
            <h2>Choose your camera</h2>
            <div className="allCameras">
                <CameraCard cameraName="FHAZ" cameraImage='/images/curioisity_rover.jpg' onCameraSelected={setCamera} selectedCamera={camera}/>
                <CameraCard cameraName="RHAZ" cameraImage='/images/opportunity_rover.jpg' onCameraSelected={setCamera} selectedCamera={camera}/>
                <CameraCard cameraName="MAST" cameraImage='/images/spirit_rover.jpg' onCameraSelected={setCamera} selectedCamera={camera}/>
                <CameraCard cameraName="CHEMCAM" cameraImage='/images/curioisity_rover.jpg' onCameraSelected={setCamera} selectedCamera={camera}/>
                <CameraCard cameraName="MAHLI" cameraImage='/images/opportunity_rover.jpg' onCameraSelected={setCamera} selectedCamera={camera}/>
                <CameraCard cameraName="MARDI" cameraImage='/images/spirit_rover.jpg' onCameraSelected={setCamera} selectedCamera={camera}/>
                <CameraCard cameraName="NAVCAM" cameraImage='/images/curioisity_rover.jpg' onCameraSelected={setCamera} selectedCamera={camera}/>
                <CameraCard cameraName="PANCAM" cameraImage='/images/opportunity_rover.jpg' onCameraSelected={setCamera} selectedCamera={camera}/>
                <CameraCard cameraName="MINITES" cameraImage='/images/spirit_rover.jpg' onCameraSelected={setCamera} selectedCamera={camera}/>
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
            <img className="cameraImage" src={props.cameraImage}></img>
            <h3>{props.cameraName}</h3>
        </div>
    );
}
