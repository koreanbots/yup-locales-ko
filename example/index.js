import yup from 'yup'
import yupLocalesKo from '../index.js'

yup.setLocale(yupLocalesKo)

const schema = yup.object().shape({
  name: yup.string(),
  age: yup.number().min(18),
})

schema.validateSync({
  name: 'Wonderlandpark',
  age: 1
})

// ValidationError: age은(는) 18보다 크거나 같아야합니다