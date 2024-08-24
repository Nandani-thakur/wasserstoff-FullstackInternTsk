


// eslint-disable-next-line react/prop-types
const UnitToggle = ({ units, onToggle }) => {
  return (
    <div className='toggle-button'>
      <button onClick={onToggle}>
        {units === 'metric' ? 'Show in Fahrenheit' : 'Show in Celsius'}
      </button>
    </div>
  );
};

export default UnitToggle;
