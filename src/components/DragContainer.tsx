import * as React from "react";
import widgets from "../widget";

interface IOwnState {
    widget: string[];
}

export default class DragContainer extends React.Component<{}, IOwnState> {
    state: IOwnState = {
        widget: []
    };
    public onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        this.setState({
            widget: [e.dataTransfer.getData("text")]
        });
    };

    public onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.effectAllowed = "copy";
    };

    public render() {
        const { widget } = this.state;
        return (
            <div
                onDrop={this.onDrop}
                onDragOver={this.onDragOver}
                className="drag-section"
            >
                {widget.map((w, i) => (
                    <React.Fragment key={i}>{widgets[w]}</React.Fragment>
                ))}
            </div>
        );
    }
}
