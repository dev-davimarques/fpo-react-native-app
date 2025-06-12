import { Stack } from 'expo-router';

export default function Layout(){
    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#112B11'
                },
                headerTintColor: '#fff'
            }}
        >
            <Stack.Screen name="index" options={{ title: "Meus Eventos"}}/>
            <Stack.Screen name="profile" options={{ title: "Registrar Evento"}}/>
        </Stack>
    );
}