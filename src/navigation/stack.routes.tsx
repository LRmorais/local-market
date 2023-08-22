import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Screens from '../screens'

const { Screen, Navigator} = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
             name="Login" 
             component={Screens.Login}
             options={{
                headerShown: false 
             }}
             />
            <Screen name="Inicio" component={Screens.Inicio}/>
        </Navigator>
    )
}