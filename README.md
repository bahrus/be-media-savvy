# be-media-savvy

Set properties of a native or imported custom-element based on media queries.

[![Playwright Tests](https://github.com/bahrus/be-media-savvy/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-media-savvy/actions/workflows/CI.yml)

<a href="https://nodei.co/npm/be-media-savvy/"><img src="https://nodei.co/npm/be-media-savvy.png"></a>

Size of package, including custom element behavior framework (be-decorated):

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-media-savvy?style=for-the-badge)](https://bundlephobia.com/result?p=be-media-savvy)

Size of new code in this package:

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-media-savvy?compression=gzip">

```html
<my-vlist be-media-savvy='{
    "setProps":{
        "(min-width: 30em) and (max-width: 50em)":{
          "heightPerRow": "1.5em"
        }
    },
    "transformLC": { //light children
        "(min-width: 10em) and (max-width: 60em)":{
            "spanElements": [{"title": ["some title"]}]
        }
    },
    "transformSD":{ //shadow DOM children
        "(min-width: 10em) and (max-width: 60em)":{
            "spanElements": [{},{}{"aria-label": "some label"}]
        }
    }
}'>
    <template slot=row>
        ...
    </template>
</my-vlist>
```

... results in setting property myVlist.heightPerRow = "1.5em" when the viewport is between 30em and 50em.

[TODO]  add support for template stamping.

Only setProps is implemented so far [TODO].