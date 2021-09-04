import PrincipalPanel from "./components/PrincipalPanel/PrincipalPanel";
import "@fontsource/pt-sans/400.css";
import "@fontsource/pt-sans/700.css";
import { Stack } from "@chakra-ui/react";
import ContentBody from "./components/Content/ContentBody";
const App = () => {
  return (
    <>
      <Stack direction="row">
        <PrincipalPanel />
        <ContentBody />
      </Stack>
    </>
  );
};

export default App;
