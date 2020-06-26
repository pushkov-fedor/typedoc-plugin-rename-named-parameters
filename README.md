
## typedoc-plugin-rename-named-parameters

  

### Plugin

  

A plugin for [Typedoc](http://typedoc.org)

When using [Typedoc](http://typedoc.org) for API docs generation you may want to render custom output name instead of **"__namedParameters"** for destructuring params.

  

### Installing

  

```

npm install typedoc-plugin-rename-named-parameters --save-dev

```

  

### Usage

  

#### Arguments

`--namedParameters <yourCustomName>`<br>

Specifies the name which will be rendered instead of **__namedParameters**.

  

> You can specify **namedParameters** inside TypeDoc's configuration file  by
>> {
> ...
> **"namedParameters": "options",**
>  ....
>  }

