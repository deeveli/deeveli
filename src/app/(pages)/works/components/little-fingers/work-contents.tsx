import React from "react";

interface TabContentPickProps {
    children: any;
}

const TabContent: React.FC<TabContentPickProps> = ({ children }) => {
    return <div className="leading-normal p-4">{children}</div>;
};

export default TabContent;