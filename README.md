# be-media-savvy

Set properties of a native or imported custom-element based on media queries.

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

Only setProps is implemented so far [TODO].