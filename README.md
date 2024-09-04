# 🚀 Layout Builder Application

Welcome to the **Layout Builder Application**! This project empowers users to design and customize page layouts with an intuitive drag-and-drop interface. Built with modern technologies like **React**, **Vite**, and **Firebase**, this tool allows you to create, save, load, and publish custom layouts with ease.

## 🌐 Live Demo

Check out the live application [here](https://fanciful-devlopment.netlify.app/).

## ✨ Features

- **Drag-and-Drop Interface:** Seamlessly add components such as labels, input boxes, checkboxes, and buttons to your layout.
- **Dynamic Editing:** Easily edit content by double-clicking on labels and inputs. Customize checkboxes and buttons as per your needs.
- **Save & Load Layouts:** Persist your layouts in Firebase and reload them anytime.
- **Publish Layouts:** Instantly generate and preview HTML output of your design in a new tab.

## 🛠 Technologies Used

- **React:** For building a responsive and dynamic user interface.
- **Vite:** Ensures fast and optimized development experience.
- **Firebase:** Facilitates saving and loading layouts securely.

## ⚙️ Setup & Installation

Get started with the project on your local machine by following these steps:

1. **Clone the Repository**

   ```bash
    git clone https://github.com/imoamo/Platform-Engineering.git
    cd Platform-Engineering
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Firebase**

    - Create a Firebase project at the [Firebase Console](https://console.firebase.google.com/).
    - Replace the Firebase configuration in `firebaseConfig.js` located in the `src` directory with your project’s credentials:

        ```javascript
        import { initializeApp } from 'firebase/app';
        import { getFirestore } from 'firebase/firestore';

        const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };

        const app = initializeApp(firebaseConfig);
        export const db = getFirestore(app);
        ```

4. **Run the Development Server**

    ```bash
    npm run dev
    ```

5. **Access the App:** Open [http://localhost:5173](http://localhost:5173) in your browser to see the application in action.

## 🎮 Usage

1. **Drag Components:** Drag and drop components from the sidebar onto the canvas to build your layout.
2. **Edit Content:** Double-click to edit labels and inputs. Customize checkboxes and buttons as needed.
3. **Save Layout:** Click the **Save** button to store your layout in Firebase.
4. **Load Layout:** Retrieve and load your saved layouts from Firebase.
5. **Publish Layout:** Click the **Publish** button to view and export your layout as HTML in a new tab.

## 📸 Screenshots


![Layout Example 1](https://github.com/user-attachments/assets/df03ac8f-bdec-4f76-8815-527fb1d79bbc)
![Layout Example 2](https://github.com/user-attachments/assets/171b2e44-6e2f-49f0-877a-a92ae0b62874)


## 🔧 Troubleshooting

Having trouble? Here are some tips:

- **Firebase Configuration Issues:** Double-check your Firebase credentials and ensure your project is properly set up.
- **State Management:** Ensure that all component states are correctly handled and updated within the app.

## 🤝 Contributing

We welcome contributions! If you’d like to contribute, please feel free to open an issue or submit a pull request.

