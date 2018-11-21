import * as React from "react";

interface IOwnProps {
    compName: string;
}
export default class DrapWrapper extends React.Component<IOwnProps> {
    public onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("text/plain", this.props.compName);
        e.dataTransfer.effectAllowed = "copy";
    };
    public render() {
        return (
            <div draggable={true} onDragStart={this.onDragStart}>
                {this.props.children}
            </div>
        );
    }
}
