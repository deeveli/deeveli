import React from 'react';
import Image from 'next/image';

interface WorkCategoryPickProps {
    tabNumber: any;
    selectedTab: any;
    onClick: any;
    children: any;
}

const WorkCategoryPick: React.FC<WorkCategoryPickProps> = ({ tabNumber, selectedTab, onClick, children }) => {
    const isSelected = tabNumber === selectedTab;

    return (
        <div
            className={`flex flex-row items-center cursor-pointer p-2 hover:text-opacity-50`}
            onClick={() => onClick(tabNumber)}
        >
            {/* <div id='dot' className='p-1 w-1 h-1 rounded-full mr-3 bg-black' /> */}
            <div className={`${isSelected ? 'p-1 w-1 h-1 rounded-full mr-3 bg-black dark:bg-slate-50' : ''}`} />
            <div className={`${isSelected ? '' : 'ml-3'}`}>{children}</div>
        </div>
    );
}

export default WorkCategoryPick;
