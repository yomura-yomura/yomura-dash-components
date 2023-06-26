import React from 'react';
import {DashComponentProps} from '../props';

type Props = {
    // Insert props
} & DashComponentProps;

const defaultProp = {
    // Insert default props
}

type State = {
    // Insert state
}


/**
 * Component description
 */
export default class TrackingLastMessage extends React.Component<Props, State> {
    static defaultProps = defaultProp

    render() {
        const {id} = this.props;
        return (
            <div id={id}>
                {/* Insert code */}
            </div>
        )
    }
}
