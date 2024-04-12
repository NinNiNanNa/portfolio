const DATA_PATH = process.env.REACT_APP_DATA_PATH;

export interface IList {
  type: string;
  name: string;
  img: string;
  description: string;
  tags: string[];
  source_code?: string;
  detail_notion?: string;
  detail_url?: string;
  drive_url?: string;
  distribute?: string;
  created_year: string;
}

export interface IGetResult {
  projects: IList[];
}

export function getProjects() {
  return fetch(`https://ninninanna.github.io/${DATA_PATH}`).then((res) =>
    res.json()
  );
}
