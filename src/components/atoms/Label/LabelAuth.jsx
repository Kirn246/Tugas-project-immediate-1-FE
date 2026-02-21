import PropTypes from "prop-types";

const LabelAuth = (props) => {
  const { id, text } = props;
  return (
    <div className="mb-2">
      <label className="text-sm text-white" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

LabelAuth.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default LabelAuth;
