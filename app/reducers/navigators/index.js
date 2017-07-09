import { NavigationActions } from 'react-navigation';
import { AppNavigator, Navigator } from '../../navigators/AppNavigator';
//import AppNavigations from '../../navigators/AppNavigations';
import DtlWebView from '../../containers/webview/dtl-webview';

const initialNavState = {
    index: 0,
    routes: [{
        key: 'Hotshow',
        routeName: 'Hotshow',
    }, {
        key: 'Usshow',
        routeName: 'Usshow',
    }, {
        key: 'Soonshow',
        routeName: 'Soonshow',
    }, {
        key: 'Nearcinemas',
        routeName: 'Nearcinemas',

    }, {
        key: 'Tab',
        routeName: 'WebDetail',
    }],
};

export const nav = (state, action) => {
    switch (action.type) {
        case 'WebDetail':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'WebDetail' }), 
                {...state, webViewURL: action.webViewURL }
            );
        default:
            return Navigator.router.getStateForAction(action, state) || state;
    }
}
