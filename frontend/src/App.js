import "./styles/normalize.scss";
import "./styles/variables.scss";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import RouterContent from "./navigation/RouterContent";
import { Provider } from "react-redux";
import store from "./redux/store";
import RouterHeader from "./navigation/components/RouterHeader";
import RouterSidebar from "./navigation/components/RouterSidebar";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/theme";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/authActions";
import { getFiles } from "./redux/actions/uploadActions";

function App() {
	// Tries to load the current user

	useEffect(() => {
		store.dispatch(loadUser());
		store.dispatch(getFiles());
	}, []);

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<div className="App">
						<div className="App__sidebar">
							<RouterSidebar />
						</div>
						<div className="App__content">
							<div className="content__wrapper">
								<div className="content__header">
									<RouterHeader />
								</div>
								<div className="content__main">
									<RouterContent />
								</div>
							</div>
						</div>
					</div>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
