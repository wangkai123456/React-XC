import * as React from "react";

import widgets from "../widget";
import DrapWrapper from "./DragWrapper";

export default class ComList extends React.Component {
    public render() {
        return (
            <div className="drawer-wrapper-right">
                组件列表
                <div>
                    {Object.keys(widgets).map((w, i) => (
                        <DrapWrapper compName={w} key={i}>
                            {w}
                        </DrapWrapper>
                    ))}
                </div>
            </div>
        );
    }
}
