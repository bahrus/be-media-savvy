# be-media-savvy [TODO]


```html
<my-vlist be-media-savvy='{
    "(min-width: 30em) and (max-width: 50em)":{
        "heightPerRow": "1.5em",
    }
}'>
    <template slot=row>
        ...
    </template>
</my-vlist>
```

results in setting property myVlist.heightPerRow = "1.5em" when the viewport is between 30em and 50em.
