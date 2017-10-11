import { TabNavigator } from 'react-navigation';

import { JobsScreen } from "./JobsScreen";
import { PersonScreen } from "./PersonScreen";
import { CompanyScreen } from "./CompanyScreen";
import { MySettingScreen } from "./MySettingScreen";

const TabNavigatorConfig = {
    tabBarOptions: {
        activeTintColor: 'red',
      }
}

export const TabScreenStack = TabNavigator(
    {
        enterprise: {screen: CompanyScreen},
        jobs: {screen: JobsScreen},
        people: {screen: PersonScreen},
        profile: {screen: MySettingScreen}
    },
    TabNavigatorConfig
)
