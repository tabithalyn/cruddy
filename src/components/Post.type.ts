export interface IPost {
  id:string;
  postTitle:string;
  postBody:string;
  currentMood:string;
}

export enum PageEnum {
  list,
  add,
  edit
}