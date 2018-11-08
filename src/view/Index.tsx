import * as React from "react";
import Col from "src/components/Col";
import ComList from "src/components/ComList";
import DragContainer from "src/components/DragContainer";
import Row from "src/components/Row";

export class Index extends React.Component {
    public render() {
        return (
            <div className="drag-container">
                <h3>Drag Dashboard</h3>
                <Row>
                    <Col span={8}>
                        <h3>放置区域</h3>
                        <DragContainer />
                    </Col>
                    <Col span={3} offset={1}>
                        <ComList />
                    </Col>
                </Row>
            </div>
        );
    }
}
