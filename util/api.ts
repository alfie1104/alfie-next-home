import {
  IExperience,
  IExperienceItem,
  IResult,
  IWork,
  IWorkImage,
  IWorkItem,
} from "./data.type";
import { supabase } from "./superbaseClient";

export async function getWorks(): Promise<IResult<IWork[]>> {
  let { data, error, status } = await supabase
    .from("work")
    .select(
      `id, title, description, 
      work_image (id, image_uri, description),
      work_item (id, name, content)
    `
    )
    .is("expired_at", null)
    .order("id", { ascending: false });

  if (error && status !== 406) {
    return {
      ok: false,
      error,
    };
  }

  if (data) {
    const result: IWork[] = data.map((work) => {
      const items: IWorkItem[] = work.work_item.map((item: any) => ({
        id: item.id + "",
        name: item.name,
        content: item.content,
      }));
      const workImages: IWorkImage[] = work.work_image.map(
        (workImage: any) => ({
          id: workImage.id + "",
          uri: workImage.uri,
          description: workImage.description,
        })
      );

      return {
        id: work.id + "",
        title: work.title,
        description: work.description,
        items,
        workImages,
      };
    });

    return {
      ok: true,
      result,
    };
  } else {
    return {
      ok: true,
      result: [],
    };
  }
}

export async function getExperiences(): Promise<IResult<IExperience[]>> {
  let { data, error, status } = await supabase
    .from("experience")
    .select("id, title, experience_item (id, name, content)")
    .is("expired_at", null)
    .order("id", { ascending: false });

  if (error && status !== 406) {
    return {
      ok: false,
      error,
    };
  }

  if (data) {
    const result: IExperience[] = data.map((exp) => {
      const items: IExperienceItem[] = exp.experience_item.map((item: any) => ({
        id: item.id + "",
        name: item.name,
        content: item.content,
      }));
      return {
        id: exp.id + "",
        title: exp.title,
        items,
      };
    });

    return {
      ok: true,
      result,
    };
  } else {
    return {
      ok: true,
      result: [],
    };
  }
}

export async function getWorkById(id: string): Promise<IResult<IWork>> {
  let { data, error, status } = await supabase
    .from("work")
    .select(
      `id, title, description, 
      work_image (id, image_uri, description),
      work_item (id, name, content)
    `
    )
    .eq("id", id)
    .single();

  if (error && status !== 406) {
    return {
      ok: false,
      error,
    };
  }

  if (data) {
    const items: IWorkItem[] = data.work_item.map((item: any) => ({
      id: item.id + "",
      name: item.name,
      content: item.content,
    }));
    const workImages: IWorkImage[] = data.work_image.map((workImage: any) => ({
      id: workImage.id + "",
      uri: workImage.uri,
      description: workImage.description,
    }));

    const result = {
      id: data.id + "",
      title: data.title,
      description: data.description,
      items,
      workImages,
    };

    return {
      ok: true,
      result,
    };
  } else {
    return {
      ok: true,
    };
  }
}

export async function getExperienceById(
  id: string
): Promise<IResult<IExperience>> {
  let { data, error, status } = await supabase
    .from("experience")
    .select(`id, title, experience_item (id, name, content)`)
    .eq("id", id)
    .single();

  if (error && status !== 406) {
    return {
      ok: false,
      error,
    };
  }

  if (data) {
    const items: IExperienceItem[] = data.experience_item.map((item: any) => ({
      id: item.id + "",
      name: item.name,
      content: item.content,
    }));

    const result = {
      id: data.id + "",
      title: data.title,
      items,
    };

    return {
      ok: true,
      result,
    };
  } else {
    return {
      ok: true,
    };
  }
}
