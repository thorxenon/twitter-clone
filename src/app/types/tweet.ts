import { User } from "./User";

export type Tweet = {
    id: number;
    user: User;
    body: string;
    image?: string;
    likeCount: number;
    retweetCount: number;
    commentCount: number;
    liked: boolean;
    retweeted: boolean;
    dataPost: Date;
}