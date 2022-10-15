import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';

export interface EndUserProps<TProps = any>{
    setProps?: {[key: string]: Partial<TProps>};
}
export interface VirtualProps<TProps = any> extends EndUserProps<TProps>, MinimalProxy{
    
}

export type Proxy = Element & VirtualProps;

export interface ProxyProps<TProps = any> extends VirtualProps<TProps>{
    proxy: Proxy;
}

export type PP = ProxyProps;

export interface Actions{
    onSetProps(pp: PP): void;
    finale(proxy: Proxy, target: Element, beDecorProps: BeDecoratedProps): void;
}