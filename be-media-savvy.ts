import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeMediaSavvyActions, BeMediaSavvyProps, BeMediaSavvyVirtualProps} from './types';
import {register} from 'be-hive/register.js';

export class BeMediaSavvy implements BeMediaSavvyActions{
    #propMqls: MediaQueryList[] = [];
    onSetProps({setProps}: this): void {
        
    }

    propMediaQueryHandler = (e: MediaQueryListEvent) => {

    }

    disconnectPropMqls(){
        for(const mql of this.#propMqls){
            mql.removeEventListener('change', this.propMediaQueryHandler);
        }
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