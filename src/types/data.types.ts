export interface AnyKeys {[key: string]: any}

export type Lang = 'ru-RU' | 'en-EN';

export interface StructureInner {
    header: AnyKeys;
    aside: AnyKeys;
    main: AnyKeys;
    footer: AnyKeys;
}

export interface RootLangTree {
    content: StructureInner;
    ui: StructureInner;
}

export interface ContentMain {
    'ru-RU': RootLangTree;
    'en-EN': RootLangTree;
}