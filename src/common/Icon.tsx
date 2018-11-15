import * as React from "react";

interface IOwnProps {
    icon?: string;
}

const Icon: React.SFC<IOwnProps> = ({ icon }) => (
    <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#icon-${icon}`} />
    </svg>
);

export default Icon;
