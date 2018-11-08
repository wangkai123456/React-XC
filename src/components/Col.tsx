import * as React from "react";

interface IOwnProps {
    span?: number;
    offset?: number;
}

export default class Col extends React.Component<IOwnProps> {
    public render() {
        return (
            <span
                className={`col-${this.props.span}  col-offset-${
                    this.props.offset
                }`}
            >
                {this.props.children}
            </span>
        );
    }
}
