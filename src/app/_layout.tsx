import migrations from "@/drizzle/migrations";
import { useThemeColor } from "@/hooks/useThemeColor";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Stack } from "expo-router";
import { openDatabaseSync, SQLiteProvider } from "expo-sqlite";
import { Suspense } from "react";
import { ActivityIndicator } from "react-native";

export const DATABASE_NAME = "flow";

export default function RootLayout() {
  const expoDb = openDatabaseSync(DATABASE_NAME);
  const db = drizzle(expoDb);
  useDrizzleStudio(expoDb);
  const { success, error } = useMigrations(db, migrations);
  const headerBackgroundColor = useThemeColor({}, "background");
  const headerTintColor = useThemeColor({}, "text");

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
      >
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: headerBackgroundColor,
            },
            headerTintColor: headerTintColor,
          }}
        />
      </SQLiteProvider>
    </Suspense>
  );
}
