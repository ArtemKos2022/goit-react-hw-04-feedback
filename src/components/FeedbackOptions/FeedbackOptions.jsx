import PropTypes from 'prop-types';
import { ButtonBox, Button } from './FeedBeckOptions.Styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedBeckTypes = Object.keys(options);
  return (
    <ButtonBox>
      {feedBeckTypes.map((feedBeckType, index) => {
        return (
          <Button
            key={index}
            type="button"
            onClick={() => onLeaveFeedback(feedBeckType)}
          >
            {feedBeckType}
          </Button>
        );
      })}
    </ButtonBox>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.shape(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};