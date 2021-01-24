import yup from 'yup'
import yupLocalesKo from '../index.js'

yup.setLocale(yupLocalesKo)

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().min(18),
})

const res = schema.validateSync({
  name: 'Hi',
  age: '20'
}, {
  abortEarly: false
})

console.log(res)
// ValidationError: age은(는) 18보다 크거나 같아야합니다