import { Admin, Resource, ListGuesser } from "react-admin";
import PocketBaseProvider from "./ra-pocketbase";

const pbProvider = PocketBaseProvider("https://fuzzy-space-fishstick-4j7wqj7prw6p3vx5-8090.app.github.dev/");

const App = () => (
  <Admin dataProvider={pbProvider.dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
