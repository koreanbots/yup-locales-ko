const yup = require('yup')
const yupLocalesKo = require('../index')

yup.setLocale(yupLocalesKo)

const schema = yup.object().shape({
  name: yup.string().required().label('이름'),
  age: yup.number().max(18).label('나이'),
})

const res = schema.validateSync({
  name: 'Hi',
  age: '20'
}, {
  abortEarly: false
})

console.log(res)
// 나이는 18보다 작거나 같아야합니다