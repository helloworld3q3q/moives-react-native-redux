/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-27 06:18:01
 * @modify date 2017-05-27 06:18:01
 * @desc [description]
*/

import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Hotshow');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Soonshow');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'hotshow':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'soonshow':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Soonshow' }),
        state
      );
      break;
    default:
      //nextState = AppNavigator.router.getStateForAction(action, state);
      nextState = AppNavigator.router.getStateForAction(
        state
      );
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
