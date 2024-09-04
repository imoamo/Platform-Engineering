import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const DraggableComponent = ({ id, children }) => {
    const { attributes, listeners, setNodeRef } = useDraggable({ id });

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} className="draggable-item">
            {children}
        </div>
    );
};

export default function DraggableComponents() {
    const components = [
        { id: 'label', name: 'Label' },
        { id: 'input', name: 'Input Box' },
        { id: 'checkbox', name: 'Check Box' },
        { id: 'button', name: 'Button' },
    ];

    return (
        <div className="controls">
            <h3>Controls to Drag</h3>
            {components.map(component => (
                <DraggableComponent key={component.id} id={component.id}>
                    {component.name}
                </DraggableComponent>
            ))}
        </div>
    );
}
