import React, { useState } from 'react';

import { ToggleButton } from './ToggleButton';
import { SwitchTitle } from './SwitchTitle';

export const ToggleContext = React.createContext<any>('');

// const ToggleCosumer = (props: any): any => {
//   <ToggleContext.Consumer>
//     {(context) => {
//       if (!context) {
//         throw new Error('Error');
//       }

//       return props.children(context);
//     }}
//   </ToggleContext.Consumer>;
// };

const Toggle = ({ onToggle, children }: any) => {
  const [on, setOn] = useState(false);

  const toggle = () => (
    setOn(!on),
    (() => {
      onToggle(on);
    })()
  );

  return (
    <ToggleContext.Provider
      value={{
        on,
        toggle,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

// extending our functional component object
Toggle.On = SwitchTitle;
Toggle.Button = ToggleButton;

const Usage = ({
  onToggle = (...args: any[]): void => console.log('onToggle', ...args),
}): any => {
  return (
    <Toggle onToggle={onToggle}>
      <div>
        <Toggle.On>The button is on</Toggle.On>
      </div>
      <Toggle.Button></Toggle.Button>
    </Toggle>
  );
};

Usage.title = 'Build Toggle';

export { Toggle, Usage as default };
