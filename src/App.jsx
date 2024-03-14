import { useState } from "react";
import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    console.log(blog);
  };

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);

    // // remove the blog from book mark
    // console.log("remove book mark", id);

    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="container mx-auto">
        <div className="md:flex justify-between gap-6">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
