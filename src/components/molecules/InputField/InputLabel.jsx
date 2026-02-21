import PropTypes from "prop-types";
import LabelAuth from "../../atoms/Label/LabelAuth";
import InputAuth from "../../atoms/Input/InputAuth";
const InputLabel = (props) => {
  const { label, id, type, placeholder } = props;
  return (
    <div>
      <LabelAuth htmlFor={id} text={label} />
      <InputAuth id={id} name={id} type={type} placeholder={placeholder} />
    </div>
  );
};

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputLabel;
