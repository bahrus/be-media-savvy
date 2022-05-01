import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeMediaSavvyActions, BeMediaSavvyProps, BeMediaSavvyVirtualProps} from './types';
import {register} from 'be-hive/register.js';

export class BeMediaSavvy implements BeMediaSavvyActions{
    #propMqls: MediaQueryList[] = [];
    #propSettings: {[key: string]: any} = {};
    async onSetProps({setProps}: this): void {
        this.disconnectPropMqls();
        for(const key in setProps){
            const newMql = window.matchMedia(key);
            const propSettings = setProps[key];
            this.#propSettings[newMql.media] = propSettings;
            if(newMql.matches){
                const {setProp} = await import('trans-render/lib/setProp.js');
                for(const key in propSettings){
                    setProp(this.proxy, key, propSettings[key]);
                }
            }
            newMql.addEventListener('change', this.propMediaQueryHandler);

        }
        
    }

    propMediaQueryHandler = async (e: MediaQueryListEvent) => {
        const propSettings = this.#propSettings[e.media];
        const {setProp} = await import('trans-render/lib/setProp.js');
        for(const key in propSettings){
            setProp(this.proxy, key, propSettings[key]);
        }
    }

    disconnectPropMqls(){
        for(const mql of this.#propMqls){
            mql.removeEventListener('change', this.propMediaQueryHandler);
        }
        this.#propMqls = [];
    }

    finale(proxy: Element & BeMediaSavvyVirtualProps, target: Element, beDecorProps: BeDecoratedProps){
        this.disconnectPropMqls();
    }
}

export interface BeMediaSavvy extends BeMediaSavvyProps{}

const tagName = 'be-media-savvy';

const ifWantsToBe = 'media-savvy';

const upgrade = '*';

define<BeMediaSavvyProps & BeDecoratedProps<BeMediaSavvyProps, BeMediaSavvyActions>, BeMediaSavvyActions>({
    config:{
        tagName,
        propDefaults:{
            upgrade,
            ifWantsToBe,
            virtualProps:['setProps'],
            finale: 'finale',
        },
        actions:{
            onSetProps: 'setProps',
        }
    },
    complexPropDefaults:{
        controller: BeMediaSavvy,
    }
});

register(ifWantsToBe, upgrade, tagName);