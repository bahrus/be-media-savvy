# be-media-savvy [TODO]

Set properties of a native or imported custom-element based on media queries.

```html
<my-vlist be-media-savvy='{
    "setProps":{
        "(min-width: 30em) and (max-width: 50em)":{
          "heightPerRow": "1.5em",
        }
    },
    "transformLC": { //light children
        "spanElements": [{"style": "font-size: 1.5em"}]
    },
    "transformSD":{ //shadow DOM children
        "spanElements": [{"style": "font-size: 1.5em"}]
    }
}'>
    <template slot=row>
        ...
    </template>
</my-vlist>
```

... results in setting property myVlist.heightPerRow = "1.5em" when the viewport is between 30em and 50em.
