import PrincipalPanel from "./components/PrincipalPanel/PrincipalPanel";
import "@fontsource/pt-sans/400.css";
import "@fontsource/pt-sans/700.css";
import { Grid, GridItem } from "@chakra-ui/react";
import ContentBody from "./components/Content/ContentBody";
const App = () => {
  return (
    <>
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns={["1fr", "1fr%", "1fr%", "18% 82%"]}
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          position="sticky"
          display={["none", "none", "none", "block"]}
        >
          <PrincipalPanel />
          {/* <ContentBody /> */}
        </GridItem>
        <GridItem rowSpan={2}>
          <ContentBody />
        </GridItem>
        {/* <GridItem colSpan={4} bg="tomato" /> */}
      </Grid>
    </>
  );
};

export default App;
