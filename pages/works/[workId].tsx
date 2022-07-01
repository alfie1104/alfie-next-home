import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
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
import { getWorkById, getWorks } from "../../util/api";

function WorkPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { work } = props;

  if (work === undefined) {
    return (
      <Article title="No data">
        <Container>
          <h1>No data</h1>
        </Container>
      </Article>
    );
  }

  const { title, description, items } = work;

  return (
    <Article title="work">
      <Container>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
        <List>
          {items.map((item, index) => (
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

export default WorkPage;

export async function getStaticProps(context: GetStaticPropsContext) {
  const workId = context.params?.workId;

  let work;
  if (typeof workId === "string") {
    work = await getWorkById(workId);
  }

  return {
    props: {
      work,
    },
  };
}

export async function getStaticPaths() {
  const workList = await getWorks();
  return {
    // paths: [
    //   {
    //     params: {
    //       workId: "1",
    //     },
    //   },
    // ],
    paths: workList.map((work) => ({
      params: {
        workId: work.id,
      },
    })),
    //미리만들어둔 페이지가 없을 경우 행동방안
    fallback: true,
    // true : data will be prepared and fetched on demand when we visit the page
    // blocking : wait until the page has been generated
  };
}
