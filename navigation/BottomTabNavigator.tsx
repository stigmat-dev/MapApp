import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import TabOneScreen from '../screens/TabOneScreen/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen/TabTwoScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Map">
      <Tab.Screen
        name="Map" 
        component={TabOneScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Entypo
              name="globe" 
              color={color} 
              size={24}
            />
          ),
        }}  
      />
      <Tab.Screen
        name="List" 
        component={TabTwoScreen} 
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Entypo 
              name="pin" 
              color={color} 
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;