import { Admin, Resource, ListGuesser } from "react-admin";
import {PocketBaseProvider} from "./ra-pocketbase";
import { Dashboard } from "./dashboard";
import { CrewList } from "./crew_overview";

const pbProvider = PocketBaseProvider("https://fuzzy-space-fishstick-4j7wqj7prw6p3vx5-8090.app.github.dev/");

const App = () => (
  <Admin 
  dashboard={Dashboard}
  dataProvider={pbProvider.dataProvider}
  authProvider={pbProvider.authProvider}
  >
    <Resource name="Pirates"  list={CrewList} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
// options={{ label: "Crew Overview" }}