import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeMediaSavvyActions, BeMediaSavvyProps, BeMediaSavvyVirtualProps} from './types';
import {register} from 'be-hive/register.js';

export class BeMediaSavvy implements BeMediaSavvyActions{

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
            virtualProps:['setProps']
        },
        actions:{

        }
    },
    complexPropDefaults:{
        controller: BeMediaSavvy,
    }
});

register(ifWantsToBe, upgrade, tagName);