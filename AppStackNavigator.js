import {createStackNavigator,createAppContainer} from 'react-navigation';

import HomePage from './page/HomePage';
import Page1 from './page/Page1';
import Page2 from './page/Page2';
import InitPage from './page/InitPage';
/**
 * 导航器
 */
export const AppStackNavigator = createStackNavigator({
    // InitPage: {
    //     screen: InitPage,
    //     navigationOptions: {
    //         headerTitle: 'page1',
    //     },
    // },
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerTitle: 'page2',
        },
    },
    Page1: {
        screen: Page1,
        navigationOptions: {
            headerTitle: 'page3',
        },
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            headerTitle: 'page4',
        },
    }
});
// export default createAppContainer(AppStackNavigator);