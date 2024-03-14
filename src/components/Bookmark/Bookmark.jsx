import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-white rounded-2xl my-4 p-4">
      <h3 className=" text-xl">{title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};
export default Bookmark;
