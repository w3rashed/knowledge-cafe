import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({
  blog,
  handleAddToBookmark,
  handleMarkAsRead,
  // reading_time,
}) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
    id,
  } = blog;
  //   console.log(blog);
  return (
    <div>
      <img
        className="w-full"
        src={cover}
        alt={`cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        {/* left */}
        <div className="flex gap-6 my-9 ">
          <img className="w-16 rounded-3xl " src={author_img} alt="" />
          <div>
            <h2 className="text-2xl font-bold">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        {/* right */}
        <div className="flex gap-2">
          <p className="text-lg">{reading_time} min read </p>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-red-500 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-10 ">Tittle: {title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="mr-2" href="">
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-800 font-bold underline"
      >
        Mark aas read
      </button>
      <div className="border-b-2 my-10"></div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
