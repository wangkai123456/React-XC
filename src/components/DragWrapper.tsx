import * as React from "react";

export default class DrapWrapper extends React.Component {
    public onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("text/plain", "example");
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
