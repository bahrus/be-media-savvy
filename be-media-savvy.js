import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeMediaSavvy {
    #propMqls = [];
    onSetProps({ setProps }) {
        this.disconnectPropMqls();
        for (const key in setProps) {
            const newMql = window.matchMedia(key);
            newMql.addEventListener('change', this.propMediaQueryHandler);
        }
    }
    propMediaQueryHandler = (e) => {
    };
    disconnectPropMqls() {
        for (const mql of this.#propMqls) {
            mql.removeEventListener('change', this.propMediaQueryHandler);
        }
        this.#propMqls = [];
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
