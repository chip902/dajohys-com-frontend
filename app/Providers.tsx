// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { ReactNode } from "react";

interface ProviderProps {
	children: ReactNode;
}

export function Providers({ children }: ProviderProps) {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
