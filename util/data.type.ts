import { PostgrestError } from "@supabase/supabase-js";

export interface IExperienceItem {
  id: string;
  name: string;
  content: string;
}

export interface IExperience {
  id: string;
  title: string;
  items?: IExperienceItem[];
}

export interface IWorkItem extends IExperienceItem {}

export interface IWork extends IExperience {
  description: string;
  items?: IWorkItem[];
  workImages?: IWorkImage[];
}

export interface IWorkImage {
  id: string;
  uri: string;
  description: string;
}

export interface IResult<T> {
  ok: boolean;
  error?: PostgrestError | string | null;
  result?: T;
}
