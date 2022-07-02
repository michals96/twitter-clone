// Interface vs Type
// https://blog.mimacom.com/testing-optimistic-locking-handling-spring-boot-jpa/
// https://www.webdesignerdepot.com/2021/09/the-pros-and-cons-of-tailwind-css/
// https://www.nafrontendzie.pl/metodyki-css-2-bem
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
