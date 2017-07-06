/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-27 06:18:01
 * @modify date 2017-05-27 06:18:01
 * @desc [description]
*/

import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';

const initialNavState = {
  index: 0,
  routes: [
    {
      key: 'Hotshow',
      routeName:'Hotshow',
    },
    {
      key: 'Usshow',
      routeName:'Usshow',
    },
    {
      key: 'Soonshow',
      routeName:'Soonshow',
    },
    {
      key: 'Nearcinemas',
      routeName:'Nearcinemas',
    },
  ],
};

export const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Usshow':
      return AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Usshow' }),
          state
      );
    case 'Soonshow':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Soonshow' }),
        state
      );
    case 'Nearcinemas':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Nearcinemas' }),
        state
      );
    default:
     //return AppNavigator.router.getStateForAction(action, state) || state;
      // return AppNavigator.router.getStateForAction(
      //   state
      // );
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Hotshow' }),
        state
      ) || state ;
  }
}
