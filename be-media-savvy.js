import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeMediaSavvy {
    #propMqls = [];
    onSetProps({ setProps }) {
    }
    propMediaQueryHandler = (e) => {
    };
    disconnectPropMqls() {
        for (const mql of this.#propMqls) {
            mql.removeEventListener('change', this.propMediaQueryHandler);
        }
    }
    finale(proxy, target, beDecorProps) {
        this.disconnectPropMqls();
    }
}
const tagName = 'be-media-savvy';
const ifWantsToBe = 'media-savvy';
const upgrade = '*';
define({
    config: {
        tagName,
        propDefaults: {
            upgrade,
            ifWantsToBe,
            virtualProps: ['setProps'],
            finale: 'finale',
        },
        actions: {
            onSetProps: 'setProps',
        }
    },
    complexPropDefaults: {
        controller: BeMediaSavvy,
    }
});
register(ifWantsToBe, upgrade, tagName);
