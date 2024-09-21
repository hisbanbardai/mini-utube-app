# Mini Utube App - A Simplified YouTube Project

This is a simplified YouTube-like application built with React and Recoil. The app replicates core features of YouTube, allowing users to browse videos by category, play videos, view detailed information, and interact with recommended videos.


## Features

- **Home Page**:

  - Displays a list of popular videos.
  - Sidebar with categories, allowing users to filter videos by category.
  - Clicking on a category fetches videos from the YouTube API and displays them in the feed.

- **Video Page**:
  - Plays the selected video.
  - Displays video details such as title, views, and published date.
  - Shows the channel information.
  - Lists user comments.
  - Shows recommended videos, allowing users to click and play a different video.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Recoil**: State management for handling video and category data.
- **Axios**: For making API requests to YouTube.
- **Moment.js**: For handling date formatting.
- **Vite**: Fast build tool and development server.
- **YouTube API**: For fetching video data.
- **HTML5 & CSS3**: Structuring and styling the application.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/mini-utube-app.git
   ```
2. **Install dependencies**

```
npm install
```

### Environment Variables

1. **Create environment variable files:**

   Create a .env file at the root of your project and add your YouTube API key:

```
VITE_API_KEY=your_youtube_api_key
```

### Running the application

1. **Start the development server:**

```
npm run dev
```

2. **Open the app in your browser:**

```
http://localhost:5173
```

## Live Demo

You can access the live demo of the application <a href="https://mini-utube-app.netlify.app/" target="_blank">here</a>.
