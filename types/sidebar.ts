export interface IWrapperItem {
  label: string
  icon: JSX.Element
  link: string
  activeItem: string
  setActiveItem: React.Dispatch<React.SetStateAction<string>>
}

export interface ISidebarItem {
  label: string
  icon: JSX.Element
  activeItem: string
}

export interface IMessageCounter {
  counter: number
}

export interface ILabelTooltip {
  hover: boolean
  label: string
}
