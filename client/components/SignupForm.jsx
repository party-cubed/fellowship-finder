/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-one-expression-per-line */

//subject to change. also at the moment id 4 & 5 let you type anything but it should only allow you
//to select yes or no
const inputsArr = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'username',
    label: 'Username: '
  },
  {
    id: 2,
    name: 'email',
    type: 'text',
    placeholder: 'email',
    label: 'Email: '
  },
  {
    id: 3,
    name: 'age',
    type: 'number',
    placeholder: 'age (minimum 18)',
    label: 'Age: ',
    min: 18
  },
  {
    id: 4,
    name: 'maxTravelDist',
    type: 'number',
    placeholder: 'maximum travel distance',
    label: "Max distance you're willing to travel?"
  },
  {
    id: 5,
    name: 'canHost',
    type: 'select',
    options: ['Yes', 'No'],
    placeholder: 'can host',
    label: 'Can you host?'
  },
  {
    id: 6,
    name: 'DM',
    type: 'select',
    options: ['Yes', 'No'],
    placeholder: 'DM',
    label: 'Are you a Dungeon Master?'
  },
  {
    id: 7,
    name: 'combatHeaviness',
    type: 'number',
    placeholder: 'combat heaviness (1-5)',
    label: 'Combat Heaviness? (1 being a little, 5 being a lot.)',
    min: 1,
    max: 5
  },
  {
    id: 8,
    name: 'strategyHeaviness',
    type: 'number',
    placeholder: 'strategy heaviness (1-5)',
    label: 'Strategy Heaviness? (1 being a little, 5 being a lot.)',
    min: 1,
    max: 5
  },
  {
    id: 9,
    name: 'roleplayFocus',
    type: 'number',
    placeholder: 'roleplay focus (1-5)',
    label: 'Roleplay Focus? (1 being a little, 5 being a lot.)',
    min: 1,
    max: 5
  },
  {
    id: 10,
    name: 'storyFocus',
    type: 'number',
    placeholder: 'story focus (1-5)',
    label: 'Story Focus? (1 being a little, 5 being a lot.)',
    min: 1,
    max: 5
  }
];


function FormInput(props) {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div className="formInput">
      <label htmlFor="username"> {label} </label>
      <input {...inputProps} onChange={onChange} />

    </div>
  );
}

export { FormInput, inputsArr };
