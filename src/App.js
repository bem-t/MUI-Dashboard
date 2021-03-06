import { Box, Container, Stack } from "@mui/material";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" >
      <Sidebar />
      <Feed />
      <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
