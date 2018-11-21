import * as React from "react";

class Example extends React.Component {
    public render() {
        return <div>Example Component</div>;
    }
}

const editProps = {
    text: "input"
};

export default {
    component: <Example />,
    editProps
};
