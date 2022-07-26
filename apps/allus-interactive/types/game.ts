export type Game = {
  title: string;
  altText: string;
  category: string;
  description: {
    text: string;
  };
  featuredGame: boolean;
  image: {
    url: string;
  };
  url: string;
};
