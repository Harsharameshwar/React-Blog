import { Container} from "semantic-ui-react";
const Comment = ({ children }) => (
  <Container style={{'margin':'20px'}}>
    {children}
  </Container>

);
export default Comment;