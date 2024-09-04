import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const DropZone = ({ children }) => {
    const { setNodeRef } = useDroppable({
        id: 'dropzone', // Ensure this ID is not conflicting with sortable items
    });

    return (
        <div ref={setNodeRef} className="dropzone">
            {children || <p>Drag components here to build your layout</p>}
        </div>
    );
};

export default DropZone;
