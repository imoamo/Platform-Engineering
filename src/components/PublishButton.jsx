import React from 'react';

export default function PublishButton({ layout }) {
    // Function to publish the layout
    const publishLayout = () => {
        const newWindow = window.open('', '_blank');

        if (!newWindow) {
            alert('Popup blocked. Please allow popups for this site.');
            return;
        }

        // Prepare HTML content with inline styles
        let htmlContent = `
            <html>
            <head>
                <title>Published Layout</title>
                <style>
                    .editable-label { margin: 5px 0; font-size: 16px; }
                    .editable-input { margin: 5px 0; font-size: 16px; }
                    .editable-checkbox { margin: 5px 0; }
                    .editable-button { margin: 5px 0; padding: 8px 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }
                </style>
            </head>
            <body>
        `;

        layout.forEach(item => {
            switch (item.type) {
                case 'label':
                    htmlContent += `<div class="editable-label">${item.content.text || item.content}</div>`;
                    break;
                case 'input':
                    // Use item.content.text for the value of the input
                    htmlContent += `<input type="text" value="${item.content.text || ''}" placeholder="Enter your data" class="editable-input"><br>`;
                    break;
                case 'checkbox':
                    htmlContent += `<input type="checkbox" id="${item.id}" ${item.content.checked ? 'checked' : ''}><label for="${item.id}">${item.content.label || ''}</label><br>`;
                    break;
                case 'button':
                    // Use item.content.text for the button text
                    htmlContent += `<button class="editable-button">${item.content.text || 'Save'}</button><br>`;
                    break;
                default:
                    htmlContent += `<div>Unknown component</div>`;
            }
        });

        htmlContent += '</body></html>';

        // Write HTML content to the new window
        try {
            newWindow.document.open();
            newWindow.document.write(htmlContent);
            newWindow.document.close();
        } catch (error) {
            console.error('Error writing to the new window:', error);
        }
    };

    return (
        <button onClick={publishLayout} className="publish-btn">Publish</button>
    );
}
