import { PropTypes } from "prop-types";

const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          {`${payload[0].value}` +
            ` ` +
            (payload[0].value > 1 ? `années` : `année`)}
        </p>
      </div>
    );
  }
};

CustomTooltip.propTypes = {
  payload: PropTypes.array,
};

export default CustomTooltip;
