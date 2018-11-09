import * as React from "react";

interface IOwnProps {
    index?: number;
    onDel?: (index: number) => void;
}

export default class EditWrapper extends React.Component<IOwnProps> {
    public render() {
        const onDel = this.props.onDel || function() {};
        const index = this.props.index || 0;
        return (
            <div className="edit-wrapper">
                {this.props.children}
                <div className="edit-wrapper-del" onClick={() => onDel(index)}>
                    点击删除
                </div>
            </div>
        );
    }
}
