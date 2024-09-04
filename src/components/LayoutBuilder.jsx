import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DraggableComponents from './DraggableComponents';
import DropZone from './DropZone';
import SaveLoadButtons from './SaveLoadButtons';
import PublishButton from './PublishButton';
import { v4 as uuidv4 } from 'uuid';
import LayoutItem from './LayoutItem';

export default function LayoutBuilder() {

    const [layout, setLayout] = useState([]);
    const [layoutName, setLayoutName] = useState('');

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (over) {
            const activeId = active.id;
            const overId = over.id;

            if (activeId !== overId) {
                setLayout((prevLayout) => {
                    const newItemId = uuidv4();
                    let newItem = { id: newItemId, type: activeId, content: `Default ${activeId.charAt(0).toUpperCase() + activeId.slice(1)}` };
                    const newLayout = [...prevLayout, newItem];
                    return newLayout;
                });
            }
        }
    };

    const handleItemChange = (id, newProps) => {
        setLayout((prevLayout) =>
            prevLayout.map((item) =>
                item.id === id ? { ...item, content: newProps } : item
            )
        );
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="layout-builder">
                <DraggableComponents />
                <div className="right-pane">
                    <h3>Canvas to Build a Page</h3>
                    <input
                        type="text"
                        value={layoutName}
                        onChange={(e) => { setLayoutName(e.target.value), console.log('data changes') }}
                        placeholder="Enter layout name"
                        className="layout-name-input"
                    />
                    <DropZone>
                        <SortableContext items={layout.map(item => item.id)} strategy={verticalListSortingStrategy}>
                            {layout.map((item) => (
                                <LayoutItem
                                    key={item.id}
                                    id={item.id}
                                    type={item.type}
                                    content={item.content}
                                    onChange={(newProps) => handleItemChange(item.id, newProps)}
                                />
                            ))}
                        </SortableContext>
                    </DropZone>
                    <SaveLoadButtons layout={layout} setLayout={setLayout} />
                    <PublishButton layout={layout} />
                </div>
            </div>
        </DndContext>
    );
}
