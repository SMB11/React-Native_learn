import React from 'react';
import { Button } from 'react-native'

const GetButton = (props) => {
    return (
        <Button
            onPress={props.buttonPressed}
            title={props.title}
            color="#24A0ED"
        />
    )
}
export default GetButton;