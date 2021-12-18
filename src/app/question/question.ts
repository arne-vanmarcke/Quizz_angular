
export interface Question{
  question:string,
  answer:string,
  choises:QuestionButton[],
  difficulty:string,
}

export interface QuestionButton{
  id:number,
  value:string
}

export interface Http_Response{
  response_code: number,
  results: QuestionReceived[]
}

export interface QuestionReceived{
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  type: string,
}

export interface HtmlParsed{
  sourcespan?:any,
  i18n?:any,
  value:string,
  tokens:any[],
}
