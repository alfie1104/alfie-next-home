import { ObjectId } from "mongodb";
import { IExperience, IWork } from "./data.type";
import { MongoClient } from "mongodb";
import { Experience } from "../components/experience";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.xp3cg.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
  );

  return client;
}

export async function insertDocument(
  client: MongoClient,
  collection: string,
  document: any
) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(
  client: MongoClient,
  collection: string,
  sort = {},
  filter = {}
) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}

export async function getWorks(filter = {}, sort = {}) {
  const client = await connectToDatabase();
  const db = client.db();
  const temp = await db
    .collection<IWork>("works")
    .find(filter)
    .sort(sort)
    .toArray();

  client.close();

  const result: IWork[] = temp.map((work) => ({
    id: work._id.toString(),
    title: work.title,
    description: work.description,
    items: work.items,
    ...(work.workImage && { workImage: work.workImage }),
  }));

  return result;
}

export async function getExperiences(filter = {}, sort = {}) {
  const client = await connectToDatabase();
  const db = client.db();
  const temp = await db
    .collection<IExperience>("experiences")
    .find(filter)
    .sort(sort)
    .toArray();

  client.close();

  const result: IExperience[] = temp.map((experience) => ({
    id: experience._id.toString(),
    title: experience.title,
    items: experience.items,
  }));

  return result;
}

export async function getWorkById(id: string) {
  const client = await connectToDatabase();
  const db = client.db();
  const temp = await db.collection<IWork>("works").findOne({
    _id: ObjectId.createFromHexString(id),
  });
  client.close();

  if (temp) {
    return {
      id: temp._id.toString(),
      title: temp.title,
      description: temp.description,
      items: temp.items,
      ...(temp.workImage && { workImage: temp.workImage }),
    };
  }

  return undefined;
}

export async function getExperienceById(id: string) {
  const client = await connectToDatabase();
  const db = client.db();
  const temp = await db.collection<IExperience>("experiences").findOne({
    _id: ObjectId.createFromHexString(id),
  });

  client.close();

  if (temp) {
    return {
      id: temp._id.toString(),
      title: temp.title,
      items: temp.items,
    };
  }

  return undefined;
}
