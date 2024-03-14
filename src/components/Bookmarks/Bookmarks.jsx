import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="flex-1">
      <div className="bg-indigo-100 text-center p-4 rounded-xl mb-4">
        <h3 className="text-2xl font-bold text-indigo-800 text-center">
          Spent time on read : {readingTime} min
        </h3>
      </div>
      <div className=" bg-slate-200 p-4 rounded-xl">
        <h1 className="text-2xl font-bold ">
          Bookmarked Blogs:{bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
