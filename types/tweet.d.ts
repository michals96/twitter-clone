export interface Tweet extends TweetBody {
    id: string
    createdAt: string
    updatedAt: string
    rev: string
    type: 'tweet'
    blockTweet: boolean
}

export type TweetBody = {
    text: string
    username: string
    profileImg: string
    image?: string
}