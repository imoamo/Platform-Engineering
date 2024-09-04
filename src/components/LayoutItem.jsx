import React, { useState, useEffect } from 'react';

const LayoutItem = ({ id, type, content, onChange }) => {
    const [editableContent, setEditableContent] = useState(content.text || content.label || '');
    const [isChecked, setIsChecked] = useState(content.checked || false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setEditableContent(content.text || content.label || '');
    }, [content]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setEditableContent(newValue);
        onChange({ ...content, text: newValue });
    };

    const handleDoubleClick = () => setIsEditing(true);

    const handleBlur = () => {
        setIsEditing(false);
        onChange({ ...content, text: editableContent });
    };

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setIsChecked(checked);
        onChange({ ...content, checked });
    };

    switch (type) {
        case 'label':
            return isEditing ? (
                <input
                    type="text"
                    value={editableContent}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                    className="editable-label-input"
                />
            ) : (
                <div onDoubleClick={handleDoubleClick} className="editable-label">
                    {editableContent}
                </div>
            );
        case 'input':
            return (
                <input
                    type="text"
                    value={editableContent}  // Use value here
                    placeholder="Enter your data"  // Default placeholder
                    onChange={handleChange}
                    className="editable-input"
                />
            );
        case 'checkbox':
            return (
                <div className="editable-checkbox">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
            );
        case 'button':
            return <button className="editable-button">{editableContent || 'Save'}</button>;
        default:
            return <div>Unknown component</div>;
    }
};

export default LayoutItem;
