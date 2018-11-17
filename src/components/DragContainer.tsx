import * as React from "react";
import * as GridLayout from "react-grid-layout";
import widgets from "../widget";
import EditWrapper from "./EditWrapper";

interface IOwnState {
    containerWidth: number;
    layout: GridLayout.Layout[];
    widget: string[];
}

export default class DragContainer extends React.Component<{}, IOwnState> {
    public state: IOwnState = {
        containerWidth: 0,
        layout: [],
        widget: ["example"]
    };

    public root: React.RefObject<HTMLDivElement>;

    constructor(props: {}) {
        super(props);
        this.root = React.createRef();
    }

    public componentDidMount = () => {
        const width = this.root.current ? this.root.current.offsetWidth : 800;
        this.setState({
            containerWidth: width
        });
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

    /**删除组件 */
    public deleteComponent = (index: number) => {
        this.setState(({ widget }) => {
            widget.splice(index, 1);
            return {
                widget
            };
        });
    };

    /**锁定组件 */
    public lockComponent = (index: number) => {
        console.log(index);
    };

    /**编辑组件属性 */
    public editComponent = (index: number) => {
        console.log(index);
    };

    public handleLayoutChange = (layout: GridLayout.Layout[]) => {
        this.setState({
            layout
        });
    };

    public render() {
        const { widget, containerWidth } = this.state;
        const {
            deleteComponent,
            lockComponent,
            editComponent,
            handleLayoutChange,
            root,
            onDrop,
            onDragOver
        } = this;

        return (
            <div
                onDrop={onDrop}
                onDragOver={onDragOver}
                className="drag-section"
                ref={root}
            >
                <GridLayout
                    className="layout"
                    cols={12}
                    rowHeight={30}
                    width={containerWidth}
                    onLayoutChange={handleLayoutChange}
                >
                    {widget.map((w, i) => (
                        <div key={i}>
                            <EditWrapper
                                index={i}
                                onDel={deleteComponent}
                                onEdit={editComponent}
                                onLock={lockComponent}
                            >
                                {widgets[w]}
                            </EditWrapper>
                        </div>
                    ))}
                </GridLayout>
            </div>
        );
    }
}
