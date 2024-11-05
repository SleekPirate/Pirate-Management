import { Admin, Resource, ListGuesser } from "react-admin";
import {PocketBaseProvider} from "./ra-pocketbase";
import { Dashboard } from "./dashboard";
import { CrewCreate, CrewList } from "./crew_overview";
import PeopleIcon from '@mui/icons-material/People'

const pbProvider = PocketBaseProvider("https://fuzzy-space-fishstick-4j7wqj7prw6p3vx5-8090.app.github.dev/");

const App = () => (
  <Admin 
  dashboard={Dashboard}
  dataProvider={pbProvider.dataProvider}
  authProvider={pbProvider.authProvider}
  >
    <Resource icon={PeopleIcon} name="Pirates"  list={CrewList} create={CrewCreate} />
  </Admin>
);

export default App;
// options={{ label: "Crew Overview" }}