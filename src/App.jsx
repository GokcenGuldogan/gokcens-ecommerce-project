import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </PageContent>
    </Router>
  );
}
