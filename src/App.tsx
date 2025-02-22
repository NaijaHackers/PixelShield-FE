import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ROUTES } from "@common/routes";
import ProtectedRoute from "@components/ProtectedRoute";

const AppRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				{Object.values(ROUTES).map(
					({
						PATH,
						ELEMENT,
						REQUIRES_AUTH,
						IS_AUTH_PAGE,
					}) => (
						<Route
							key={PATH}
							path={PATH}
							element={
								<motion.div
									className="w-full h-full overflow-hidden flex"
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -50 }}
									transition={{ duration: 0.3 }}
								>
									<ProtectedRoute
										element={ELEMENT}
										requiresAuth={REQUIRES_AUTH}
										authPage={IS_AUTH_PAGE}
									/>
								</motion.div>
							}
						/>
					)
				)}
				<Route
					path="*"
					element={
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<div>404</div>
						</motion.div>
					}
				/>
			</Routes>
		</AnimatePresence>
	);
};

function App() {
	return (
		<Router>
			<AppRoutes />
		</Router>
	);
}

export default App;