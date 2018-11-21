import * as React from "react";
import { createPortal } from "react-dom";

interface IOwnProps {
    visible?: boolean;
    onClose?: () => void;
}

export default class Drawer extends React.Component<IOwnProps> {
    public static defaultProps = {
        visible: false
    };

    public container: HTMLDivElement;

    public componentDidMount = () => {
        this.init();
    };

    public init = () => {
        this.container = this.getContainer();
    };

    public getContainer = () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        return container;
    };

    public renderBody = () => {
        return (
            <div className="drawer-container">
                <div className="drawer-mask" onClick={this.props.onClose} />
                <div className="drawer-wrapper-right">
                    {this.props.children}
                </div>
            </div>
        );
    };

    public render() {
        const { visible } = this.props;
        return visible ? createPortal(this.renderBody(), this.container) : null;
    }
}
