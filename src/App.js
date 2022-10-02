import { Routes, Route, Navigate } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/Meetups-App-React"
          element={<AllMeetupsPage></AllMeetupsPage>}
        />
        <Route path="/" element={<Navigate to="/Meetups-App-React" />} />
        <Route path="/new-meetup" element={<NewMeetupPage></NewMeetupPage>} />
        <Route path="/favorite" element={<FavoritesPage></FavoritesPage>} />
      </Routes>
    </Layout>
  );
}

export default App;
