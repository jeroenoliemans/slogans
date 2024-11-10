export interface ISlogan {
  id:number | null
  slogan:string
  themeId: number
  theme?: ITheme
}

export interface ITheme {
  id:number | null,
  label: string
  backgroundColor: string
  backgroundColorLeft: string
  backgroundColorRight: string
  borderColor: string | null
  fontColor: string | '#000000'
}

export interface IThemeOption {
  id:number | null,
  label: string
}
