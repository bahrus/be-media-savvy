import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeMediaSavvy {
    #propMqls = [];
    #propSettings = {};
    onSetProps({ setProps }) {
        this.disconnectPropMqls();
        for (const key in setProps) {
            const newMql = window.matchMedia(key);
            this.#propSettings[newMql.media] = setProps[key];
            newMql.addEventListener('change', this.propMediaQueryHandler);
        }
    }
    propMediaQueryHandler = async (e) => {
        const propSettings = this.#propSettings[e.media];
        const { setProp } = await import('trans-render/lib/setProp.js');
        for (const key in propSettings) {
            setProp(this.proxy, key, propSettings[key]);
        }
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
