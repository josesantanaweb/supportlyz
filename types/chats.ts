export interface IChatResponse {
  id: number
  name: string
  image: string
  brand: string
  message: string
  code: number
  count: number
}

export interface IChats {
  chats: IChatResponse[]
}

export interface IChat {
  chat: IChatResponse
}
