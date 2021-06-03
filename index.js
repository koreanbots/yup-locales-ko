const { josa } = require('josa')
const printValue = require('./printValue.js')


let mixed = {
  default: ({ path }) => `${path}#{가} 올바르지 않습니다`,
  required: ({ path }) => `${path}#{는} 필수 항목입니다`,
  oneOf: ({ path }) => `${path}#{는} 다음 값 중 하나여야합니다: ${values}`,
  notOneOf: ({ path }) => `${path}#{는} 다음 값이 아니여야합니다: ${values}`,
  notType: ({ path, type, value, originalValue }) => {
    let isCast = originalValue != null && originalValue !== value
    let msg =
      josa(`${path}는 \`${type}\` 타입이여야합니다. `) +
      josa(`하지만 최종 값은 \`${printValue(value, true)}\`이었습니다`) +
      (isCast
        ? josa(` (값 \`${printValue(originalValue, true)}\`#{로} 변환됨).`)
        : '.')

    if (value === null) {
      msg += `\n 만약 "null"이 빈 값으로 의도된 경우 스키마를 \`.nullable()\`로 표시해야합니다`
    }

    return msg
  },
  defined: ({ path }) => josa(`${path}#{를} 정의해야 합니다
  
  `),
}

exports.mixed = mixed

let string = {
  length: ({ path, length }) => josa(`${path}#{는} ${length}자여야합니다`),
  min: ({ path, min }) => josa(`${path}#{는} 최소 ${min}자여야합니다`),
  max: ({ path, max }) => josa(`${path}#{는} 최대 ${max}자여야합니다`),
  matches: ({ path, regex }) => josa(`${path}#{는} 다음 정규표현식을 만족해야합니다: "${regex}"`),
  email: ({ path }) => josa(`${path}#{는} 올바른 이메일이여야합니다`),
  url: ({ path }) => josa(`${path}#{는} 올바른 URL이어야합니다`),
  uuid: ({ path }) => josa(`${path}#{는} 올바른 UUID이어야합니다`),
  trim: ({ path }) => josa(`${path}#{는} 띄어쓰기를 시작과 끝에 포함하지 않는 문자열이어야합니다`),
  lowercase: ({ path }) => josa(`${path}#{는} 소문자 문자열이어야합니다`),
  uppercase: ({ path }) => josa(`${path}#{는} 대문자 문자열이어야합니다`),
}

exports.string = string

let number = {
  min: ({ path, min }) => josa(`${path}#{는} ${min}보다 크거나 같아야합니다`),
  max: ({ path, max }) => josa(`${path}#{는} ${max}보다 작거나 같아야합니다`),
  lessThan: ({ path, less }) => josa(`${path}#{는} ${less}보다 작아야합니다`),
  moreThan: ({ path, more }) => josa(`${path}#{는} ${more}보다 커야합니다`),
  positive: ({ path }) => josa(`${path}#{는} 양수여야합니다`),
  negative: ({ path }) => josa(`${path}#{는} 음수여야합니다`),
  integer: ({ path }) => josa(`${path}#{는} 정수여야합니다`),
}

exports.number = number

let date = {
  min: ({ path, min }) => josa(`${path}#{는} ${min}보다 미래여야합니다`),
  max: ({ path, max }) => josa(`${path}#{는} ${max}보다 과거여야합니다`),
}

exports.date = date

let boolean = {
  isValue: ({ path, value }) => josa(`${path}#{는} ${value}(이)여야합니다`),
}

exports.boolean = boolean

let object = {
  noUnknown: ({ path, unknown }) => `${path}에 지정되지 않은 키가 있습니다: ${unknown}}`,
}

exports.object = object

let array = {
  min: ({ path }) => josa(`${path}#{는} 최소 ${min}개 항목을 가져야합니다`),
  max: ({ path }) => josa(`${path}#{는} 최대 ${max}개 항목을 가져야합니다`),
  length: ({ path, length }) => josa(`${path}#{는} ${length}개의 항목을 가져야합니다`),
}

exports.array = array

module.exports = {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
}