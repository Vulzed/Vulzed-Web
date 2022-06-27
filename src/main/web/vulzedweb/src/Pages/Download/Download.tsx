import React from "react";
import { useOs } from '@mantine/hooks';
import {Button} from "@mantine/core";
function Download() {
    const os = useOs();
    return (

        <div>
            <h1>Your os is {os}</h1>
            <Button>Download</Button>
        </div>


    );
}
export default Download;
