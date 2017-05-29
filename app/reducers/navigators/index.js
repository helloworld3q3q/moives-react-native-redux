/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-27 06:18:01
 * @modify date 2017-05-27 06:18:01
 * @desc [description]
*/

import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';

// const firstAction = AppNavigator.router.getActionForPathAndParams('Hotshow');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Soonshow');
// const initialNavState = AppNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );

const initialNavState = {
  index: 0,
  routes: [
    {
      key: 'hotshow',
      routeName:'Hotshow',
      index: 0,
    },
    {
      key: 'usshow',
      routeName:'Usshow',
    },
    {
      key: 'soonshow',
      routeName:'Soonshow',
    },
    {
      key: 'nearcinemas',
      routeName:'Nearcinemas',
    },
  ],
};

export const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Usshow':
      nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Usshow' }),
          state
      );
      break;
    case 'Soonshow':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Soonshow' }),
        state
      );
      break;
    case 'Nearcinemas':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Nearcinemas' }),
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
  return nextState || state;
}
