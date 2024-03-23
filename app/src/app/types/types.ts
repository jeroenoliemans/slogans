export interface ISlogan {
  id:number | null
  slogan:string,
  themeId: number
}

export interface ITheme {
  id:number | null,
  label: string
  backgroundColor: string
  backgroundColorLeft: string
  backgroundColorRight: string
  borderColor: string
  fontColor: string
}
