import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "@common/routes";
import ProtectedRoute from "@components/ProtectedRoute";

const AppRoutes = () => {
	return (
		<>
			<Routes>
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
								<ProtectedRoute
									element={ELEMENT}
									requiresAuth={REQUIRES_AUTH}
									authPage={IS_AUTH_PAGE}
								/>
							}
						/>
					)
				)}
				<Route path="*" element={<div>404</div>} />
			</Routes>
			{/* OTHER STUFFS HERE like toast container */}
		</>
	)
}

function App() {
	return (
		<Router>
			<AppRoutes />
		</Router>
	);
}

export default App;
