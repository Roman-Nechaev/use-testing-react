import PropTypes from 'prop-types';
import { EventCard } from '../EventCard/EventCard';
import { EventBoardStyle } from './EventBoard.styled';

export const EventBoard = ({ events }) => {
  return (
    <EventBoardStyle>
      {events.map(({ name, location, speaker, type, time }) => (
        <EventCard
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </EventBoardStyle>
  );
};

EventBoard.protoType = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};
