# Yup korean locale

[NPM](https://www.npmjs.com/package/yup-locales-ko)

Meet the yup module in Korean using `yup.setLocale()`.

## Install

```sh
npm i yup-locales-ko
```

## Usage

```js
import yup from 'yup'
import yupLocalesKo from 'yup-locales-ko'

yup.setLocale(yupLocalesKo)

const schema = yup.object().shape({
  name: yup.string(),
  age: yup.number().min(18)
})
```
