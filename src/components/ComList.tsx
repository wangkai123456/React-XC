import * as React from "react";
import DrapWrapper from "./DragWrapper";
import widgets from "../widget";

export default class ComList extends React.Component {
    public render() {
        return (
            <div>
                组件列表
                <div>
                    <DrapWrapper>
                        {Object.keys(widgets).map((w, i) => (
                            <React.Fragment key={i}>{w}</React.Fragment>
                        ))}
                    </DrapWrapper>
                </div>
            </div>
        );
    }
}
