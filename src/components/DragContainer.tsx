import * as React from "react";
import * as GridLayout from "react-grid-layout";
import widgets from "../widget";
import EditWrapper from "./EditWrapper";

interface IOwnState {
    widget: string[];
    layout: GridLayout.Layout[];
}

export default class DragContainer extends React.Component<{}, IOwnState> {
    state: IOwnState = {
        widget: ["example"],
        layout: []
    };
    public onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const widget = [...this.state.widget, e.dataTransfer.getData("text")];
        this.setState({
            widget
        });
    };

    public onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.effectAllowed = "copy";
    };

    public deleteComponent = (index: number) => {
        this.setState(({ widget }) => {
            widget.splice(index, 1);
            return {
                widget
            };
        });
    };

    public handleLayoutChange = (layout: GridLayout.Layout[]) => {
        this.setState({
            layout
        });
    };

    public render() {
        const { widget } = this.state;
        const { deleteComponent, handleLayoutChange } = this;
        return (
            <div
                onDrop={this.onDrop}
                onDragOver={this.onDragOver}
                className="drag-section"
            >
                <GridLayout
                    className="layout"
                    cols={12}
                    rowHeight={30}
                    width={600}
                    onLayoutChange={handleLayoutChange}
                >
                    {widget.map((w, i) => (
                        <div key={i}>
                            <EditWrapper index={i} onDel={deleteComponent}>
                                {widgets[w]}
                            </EditWrapper>
                        </div>
                    ))}
                </GridLayout>
            </div>
        );
    }
}
