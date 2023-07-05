type Comment = {
  username: string;
  commentText: string;
};

export type User = {
  username: string;
  profilePic: string;
};

export type Post = {
  user: User;
  location: string;
  image: string;
  caption: string;
  likes: User[];
  comments: Comment[];
  timestamp: Date;
};

const Hello: React.FC = () => {
  return <div>hi</div>;
};

export default Hello;
