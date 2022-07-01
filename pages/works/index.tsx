import { useRouter } from "next/router";
import Article from "../../components/article";
import Container from "../../components/container";
import {
  ItemContent,
  ItemName,
  List,
  ListItem,
  Paragraph,
  Title,
} from "../../components/work";
import { workList } from "../../db/data";

function Works() {
  const router = useRouter();

  const { workId } = router.query;

  if (workId === undefined) {
    return (
      <Article title="No data">
        <Container>
          <h1>No data</h1>
        </Container>
      </Article>
    );
  }

  const currentWork = workList.find((work) => work.id === 1);

  return (
    <Article title="work">
      <Container>
        <Title>{currentWork?.title}</Title>
        <Paragraph>{currentWork?.description}</Paragraph>
        <List>
          {currentWork?.items.map((item, index) => (
            <ListItem key={index}>
              <ItemName>{item.name}</ItemName>
              <ItemContent>{item.content}</ItemContent>
            </ListItem>
          ))}
        </List>
      </Container>
    </Article>
  );
}

export default Works;
