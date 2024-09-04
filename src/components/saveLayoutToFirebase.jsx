import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Adjust path as needed

const saveLayoutToFirebase = async (layout, layoutName) => {
    try {
        await addDoc(collection(db, 'layouts'), {
            name: layoutName,
            layout: layout,
            timestamp: new Date()
        });
        console.log('Layout saved successfully');
    } catch (error) {
        console.error('Error saving layout:', error);
    }
};
