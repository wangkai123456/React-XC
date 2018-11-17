import * as React from "react";
import Icon from "src/common/Icon";

interface IOwnProps {
    index?: number;
    onDel?: (index: number) => void;
    onEdit?: (index: number) => void;
    onLock?: (index: number) => void;
}

export default class EditWrapper extends React.Component<IOwnProps> {
    static defaultProps: IOwnProps = {
        onDel: index => {},
        onEdit: () => {},
        onLock: () => {},
        index: 0
    };

    public render() {
        const { index, onDel, onEdit, onLock } = this.props;
        return (
            <div className="edit-wrapper">
                {this.props.children}
                <div className="edit-wrapper-action">
                    <span onClick={() => onDel!(index!)}>
                        <Icon icon="delete" />
                    </span>
                    <span onClick={() => onEdit!(index!)}>
                        <Icon icon="edit" />
                    </span>
                    <span onClick={() => onLock!(index!)}>
                        <Icon icon="lock" />
                    </span>
                </div>
            </div>
        );
    }
}
