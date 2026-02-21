import PropTypes from "prop-types";
const InputAuth = (props) => {
  const { type, id, placeholder } = props;
  return (
    <div className="mb-2">
      <input
        id={id}
        name={id}
        type={type}
        className="text-sm text-white border border-solid border-default placeholder-gray placeholder-sm w-full bg-transparent rounded-3xl mb-2 p-2 pl-4"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

InputAuth.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputAuth;
