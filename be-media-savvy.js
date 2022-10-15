import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeMediaSavvy {
    #propSettings = {};
    #mediaQueryControllers = [];
    async onSetProps(pp) {
        this.disconnect();
        const { setProps, proxy } = pp;
        for (const key in setProps) {
            const newMql = window.matchMedia(key);
            const propSettings = setProps[key];
            this.#propSettings[newMql.media] = propSettings;
            if (newMql.matches) {
                const { setProp } = await import('trans-render/lib/setProp.js');
                for (const key in propSettings) {
                    setProp(proxy, key, propSettings[key]);
                }
            }
            const c = new AbortController();
            newMql.addEventListener('change', async (e) => {
                this.#propMediaQueryHandler(pp, e);
            }, { signal: c.signal });
        }
    }
    async #propMediaQueryHandler({ self }, e) {
        const propSettings = this.#propSettings[e.media];
        const { setProp } = await import('trans-render/lib/setProp.js');
        for (const key in propSettings) {
            setProp(self, key, propSettings[key]);
        }
    }
    disconnect() {
        if (this.#mediaQueryControllers !== undefined) {
            for (const c of this.#mediaQueryControllers) {
                c.abort();
            }
        }
        this.#mediaQueryControllers = [];
    }
    finale(proxy, target, beDecorProps) {
        this.disconnect();
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
