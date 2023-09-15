type Comment = {
  username: string;
  commentText: string;
  profilePic: string;
};

// type Comment = Pick<User, "username"> & { commentText: string };

export type User = {
  username: string;
  profilePic: string;
  storyImages?: string[];
  name?: string;
};

export type CurrentUser = Pick<User, "username" | "profilePic" | "name">;
export type SuggestUser = User;

export type Post = {
  id: string;
  user: User;
  location: string;
  image: string;
  caption: string;
  likes: User[];
  comments: Comment[];
  timestamp: Date;
};
