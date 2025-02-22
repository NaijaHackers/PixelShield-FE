import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={new QueryClient}>
			<PrivyProvider
				appId={import.meta.env.VITE_PRIVY_APP_ID!}
				config={{
					// Display email and wallet as login methods
					loginMethods: ["email", "wallet"],
					// Customize Privy's appearance in your app
					appearance: {
						theme: "light",
						accentColor: "#676FFF",
						logo: <div></div>,
					},
					// Create embedded wallets for users who don't have a wallet
					embeddedWallets: {
						createOnLogin: "users-without-wallets",
					},
				}}
			>
				<App />
			</PrivyProvider>
		</QueryClientProvider>
	</StrictMode>
);
