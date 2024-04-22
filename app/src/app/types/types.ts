export interface ISlogan {
  id:number | null
  slogan:string,
  themeId: number
  theme?: ITheme
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

export interface IThemeOption {
  id:number | null,
  label: string
}
