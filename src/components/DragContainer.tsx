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
        widget: []
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
    /**拖拽完成 新增组件 */
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

    /**切换组件锁定状态 */
    public toggleComponentLock = (index: number) => {
        this.setState(({ layout }) => {
            const newLayout = layout.slice();
            newLayout[index] = {
                ...newLayout[index],
                static: !newLayout[index].static
            };
            return {
                layout: newLayout
            };
        });
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
        const { widget, containerWidth, layout } = this.state;
        const {
            deleteComponent,
            toggleComponentLock,
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
                    layout={layout}
                    onLayoutChange={handleLayoutChange}
                >
                    {widget.map((w, i) => (
                        <div key={i}>
                            <EditWrapper
                                index={i}
                                onDel={deleteComponent}
                                onEdit={editComponent}
                                onLock={toggleComponentLock}
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
