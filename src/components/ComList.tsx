import * as React from "react";

import widgets from "../widget";
import DrapWrapper from "./DragWrapper";

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
