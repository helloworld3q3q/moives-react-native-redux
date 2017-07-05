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
      index: 1,
    },
    {
      key: 'soonshow',
      routeName:'Soonshow',
      index: 2,
    },
    {
      key: 'nearcinemas',
      routeName:'Nearcinemas',
      index: 3,
    },
  ],
};

export const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Usshow':
      state.index = 1;
      nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Usshow' }),
          state
      );
      break;
    case 'Soonshow':
      state.index = 2;
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Soonshow' }),
        state
      );
      break;
    case 'Nearcinemas':
      state.index = 3;
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Nearcinemas' }),
        state
      );
      break;
    case 'Hotshow':
      //nextState = AppNavigator.router.getStateForAction(action, state);
      // nextState = AppNavigator.router.getStateForAction(
      //   state
      // );
      state.index = 0;
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Hotshow' }),
        state
      );
      break;
  }
  
  return nextState || state;
}
