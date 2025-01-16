import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AppRoutes } from  "./app.routes";
import { AuthRoutes } from "./auth.routes";

export default function Routes() {
  const { user } = { user: true };

  return (
    <NavigationContainer>
       {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
