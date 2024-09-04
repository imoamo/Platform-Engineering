import React from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function SaveLoadButtons({ layout, setLayout }) {

    // Function to serialize the layout
    const serializeLayout = (layout) => {
        return layout.map(item => {
            // Remove the table serialization logic
            return item;
        });
    };

    // Function to deserialize the layout
    const deserializeLayout = (layout) => {
        return layout.map(item => {
            // Remove the table deserialization logic
            return item;
        });
    };

    // Function to save the layout
    const saveLayout = async () => {
        try {
            const serializedLayout = serializeLayout(layout);
            console.log('Serialized Layout:', serializedLayout); // For debugging

            await setDoc(doc(db, 'layouts', 'myLayout'), { layout: serializedLayout });
            alert('Layout saved!');
        } catch (error) {
            console.error('Error saving layout: ', error);
            alert('Failed to save layout.');
        }
    };

    // Function to load the layout
    const loadLayout = async () => {
        try {
            const docSnap = await getDoc(doc(db, 'layouts', 'myLayout'));
            if (docSnap.exists()) {
                const loadedLayout = docSnap.data().layout;
                console.log('Loaded Layout:', loadedLayout); // For debugging
                const deserializedLayout = deserializeLayout(loadedLayout);
                console.log('Deserialized Layout:', deserializedLayout); // For debugging
                setLayout(deserializedLayout);
                alert('Layout loaded!');
            } else {
                alert('No layout found!');
            }
        } catch (error) {
            console.error('Error loading layout: ', error);
            alert('Failed to load layout.');
        }
    };

    return (
        <div className="save-load-buttons">
            <button type="button" onClick={saveLayout} className="save-btn">Save Layout</button>
            <button type="button" onClick={loadLayout} className="load-btn">Load Layout</button>
        </div>
    );
}
