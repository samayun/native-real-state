import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Homepage from '../components/Homepage/Homepage';
import Products from '../components/Products/Products';
import Orders from '../components/Orders/Orders';
import Blog from '../components/Blog/Blog';
import Auth from '../components/Auth/Auth';
import Review from '../components/Review/Review';

const Tab = createBottomTabNavigator();

function HomeTabs() {
    const loggedIn = true

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case "Home":
                            iconName = focused ? "home" : "home-outline"
                            break;
                        case "Products":
                            iconName = focused ? "cart" : "cart-outline"
                            break;

                        case "Reviews":
                            iconName = focused ? "star" : "star-outline"
                            break;

                        case "Orders":
                            iconName = focused ? "egg" : "egg-outline"
                            break;

                        case "Blogs":
                            iconName = focused ? "paper-plane" : "paper-plane-outline"
                            break;
                        case "Login":
                            iconName = focused ? "person" : "person-outline"
                            break;
                        default:
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            {loggedIn ?
                <>
                    <Tab.Screen name="Home" component={Homepage} />
                    {/* <Tab.Screen name="Products" component={Products} /> */}
                    <Tab.Screen name="Orders" component={Orders} />
                    <Tab.Screen name="Reviews" component={Review} />
                    <Tab.Screen name="Blogs" component={Blog} />
                </>
                :
                <>
                    <Tab.Screen name="Home" component={Homepage} />
                    <Tab.Screen name="Products" component={Products} />
                    <Tab.Screen name="Login" component={Auth} />
                </>}
        </Tab.Navigator>
    );
}

export default HomeTabs