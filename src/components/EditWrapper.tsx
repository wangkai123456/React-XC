import * as React from "react";
import Icon from "src/common/Icon";

interface IOwnProps {
    index?: number;
    onDel: (index: number) => void;
    onEdit: (index: number) => void;
    onLock: (index: number) => void;
}

interface IDefaultProps {
    index: number;
    onDel: () => void;
    onEdit: () => void;
    onLock: () => void;
}

export default class EditWrapper extends React.Component<IOwnProps> {
    public static defaultProps: IDefaultProps = {
        index: 0,
        onDel: () => {},
        onEdit: () => {},
        onLock: () => {}
    };

    public handleActionClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.currentTarget);
    };

    public render() {
        const { index, onDel, onEdit, onLock } = this.props;
        return (
            <div className="edit-wrapper">
                {this.props.children}
                <div className="edit-wrapper-action">
                    <span onClick={onDel.bind(this, index)}>
                        <Icon icon="delete" />
                    </span>
                    <span onClick={onEdit.bind(this, index)}>
                        <Icon icon="edit" />
                    </span>
                    <span onClick={onLock.bind(this, index)}>
                        <Icon icon="lock" />
                    </span>
                </div>
            </div>
        );
    }
}
