import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Button } from "@/components/ui";

export default function WelcomeScreen() {
	const router = useRouter();
	const insets = useSafeAreaInsets();

	return (
		<View
			className="flex flex-1 bg-background p-4"
			// HACK: This is a workaround for the SafeAreaView className prop not working
			style={{
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
			}}
		>
			<View className="flex flex-1 items-center justify-center gap-y-4">
				<Text className="text-4xl text-foreground font-extrabold tracking-tight lg:text-5xl text-center">
					Welcome to Boda Boda Law
				</Text>
				<Text className="text-sm text-muted-foreground text-center">
					A simple application to aid you in your needs a a rider,and conect you to Lawyers,Insurance and AI assistant
				</Text>
				<Button
					className="flex-1"
					size="default"
					variant="mainColor"
					onPress={() => {
						router.push("/sign-up");
					}}
				>
					Sign up
				</Button>
				<Text
					className="text-sm text-muted-foreground text-center"
					onPress={() => {
						router.replace("/sign-in");
					}}
				>
					Already have an account?{" "}
					<Text className="leading-7 text-foreground">Sign in</Text>
				</Text>
			</View>
		</View>
	);
}
