
# 🚀 Next.js 15 CRUD App — Topics Manager

A **modern, animated, and responsive** CRUD web application built with **Next.js 15 (App Router)**, **MongoDB + Mongoose**, and **Tailwind CSS v4**.  
Features **animated popups**, **optimistic UI updates**, and a **beautiful minimal UI** for managing "Topics" (title + description).

![Next.js CRUD Banner](public/banner.png)

---

## ✨ Features

✅ **Create / Read / Update / Delete** topics in real-time  
✅ **Next.js 15 App Router** for scalable architecture  
✅ **MongoDB + Mongoose** integration with schema validation  
✅ **Animated popups & transitions** using Framer Motion  
✅ **Optimistic updates** for instant feedback  
✅ **Form validation** with client & server checks  
✅ **Toasts** for success & error messages  
✅ **Responsive UI** with Tailwind CSS v4  
✅ **Clean, modular project structure**

---

## 📂 Project Structure

```

📦 my-crud-app
┣ 📂 app
┃ ┣ 📂 addTopic
┃ ┣ 📂 editTopic/\[id]
┃ ┣ 📂 api/topics
┃ ┃ ┣ 📜 route.js
┃ ┃ ┗ 📜 \[id]/route.js
┃ ┣ 📜 layout.jsx
┃ ┗ 📜 page.jsx
┣ 📂 components
┃ ┣ 📜 NavBar.jsx
┃ ┣ 📜 TopicsList.jsx
┃ ┣ 📜 EditTopicForm.jsx
┃ ┣ 📜 RemoveBtn.jsx
┃ ┗ 📜 AnimatedModal.jsx
┣ 📂 libs
┃ ┗ 📜 mongodb.js
┣ 📂 models
┃ ┗ 📜 Topic.js
┣ 📂 public
┃ ┗ 📜 banner.png
┣ 📜 package.json
┣ 📜 postcss.config.js
┣ 📜 .env.local
┗ 📜 README.md

````

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas) + [Mongoose](https://mongoosejs.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/nextjs-crud-topics.git
cd nextjs-crud-topics
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=your-mongodb-uri
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Now open **[http://localhost:3000](http://localhost:3000)** 🎉

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](public/screenshots/home.png)

### ➕ Add Topic Popup

![Add Topic](public/screenshots/add.png)

### ✏️ Edit Topic

![Edit Topic](public/screenshots/edit.png)

---

## ⚙️ API Endpoints

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/api/topics`     | Get all topics     |
| POST   | `/api/topics`     | Create a new topic |
| GET    | `/api/topics/:id` | Get a single topic |
| PUT    | `/api/topics/:id` | Update a topic     |
| DELETE | `/api/topics/:id` | Delete a topic     |

---

## 🖌️ UI/UX Details

* **Popups:** Smooth fade & scale animations using **Framer Motion**
* **Toasts:** Success/error feedback with **React Hot Toast**
* **Optimistic UI:** Updates the UI instantly before the server confirms
* **Responsive Design:** Works beautifully on desktop & mobile

---

## 📜 License

This project is **MIT Licensed** — free to use, modify, and share.

---

## 💡 Inspiration

Built to demonstrate how to create a **robust, modern, and animated CRUD app** with the latest **Next.js** and **Tailwind CSS v4**, while keeping code clean and maintainable.


