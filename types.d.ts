import {BeDecoratedProps} from 'be-decorated/types';

export interface BeMediaSavvyVirtualProps<TProps = any>{
    setProps: {[key: string]: Partial<TProps>};
}

export interface BeMediaSavvyProps<TProps = any> extends BeMediaSavvyVirtualProps<TProps>{
    proxy: Element & BeMediaSavvyVirtualProps;
}

export interface BeMediaSavvyActions{
    onSetProps(self: this): void;
    finale(proxy: Element & BeMediaSavvyVirtualProps, target: Element, beDecorProps: BeDecoratedProps): void;
}