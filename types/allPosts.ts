export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type AllPostsType = PostType[];

export enum PostFieldsEnum {
  title = "title",
  body = "body",
}
