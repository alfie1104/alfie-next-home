import { ObjectId } from "mongodb";

export interface IExperienceItem {
  name: string;
  content: string;
}

export interface IExperience {
  id: string;
  title: string;
  items: IExperienceItem[];
}

export interface IWorkItem extends IExperienceItem {}

export interface IWork extends IExperience {
  description: string;
  workImage?: string;
  alt?: string;
  items: IWorkItem[];
}