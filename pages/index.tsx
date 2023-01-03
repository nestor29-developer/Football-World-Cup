import Container from "@mui/material/Container";
import { Home } from "../components/Home";

export default function Index() {
  return (
    <Container maxWidth="md" sx={{display: 'flex', justifyContent: 'center', }}>
      <Home />
    </Container>
  );
}
