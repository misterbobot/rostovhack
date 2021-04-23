import React from "react";
import { WorkSpaceRoot } from "../ui/templates/workSpaceRoot";

const checkPermissions = () => {
    const permissions = navigator.mediaDevices.getUserMedia({audio: true, video: false})
    permissions.then((stream) => {
      console.log("premmisions");
    })
    .catch((err) => {
        console.log("premmisions error");
      console.log(`${err.name} : ${err.message}`)
    });
  }

export const WorkSpacePage : React.FC = () => {
    
    checkPermissions()

    return <>
    
        <WorkSpaceRoot>
            
        </WorkSpaceRoot>
    </>

}