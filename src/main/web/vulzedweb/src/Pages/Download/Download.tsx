import React from "react";
import {useOs} from '@mantine/hooks';
import {Button, Center, MantineProvider} from "@mantine/core";

function Download() {
    const os = useOs();
    return (
        <MantineProvider>
            <div className="Download">
                <header className="Download-header">
                <Center>
                    <Button>Download for {os}</Button>

                </Center>

                </header>
            </div>
        </MantineProvider>

    );
}

export default Download;
