export interface ILink {
    text: string,
    href: string,
    target: '_parent' | '_blank'
}

export type IconSize = 'small' | 'large';

export interface IIconObject {
    name: string,
    getIcon: (size: IconSize, tStyles?: string) => React.JSX.Element
}

export interface IIcons {
    [key: string]: IIconObject
}