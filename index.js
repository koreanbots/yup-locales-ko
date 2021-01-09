import printValue from './printValue.js';


export let mixed = {
  default: '${path}(이)가 올바르지 않습니다',
  required: '${path}은(는) 필수 항목입니다',
  oneOf: '${path}은(는) 다음 값 중 하나여야합니다: ${values}',
  notOneOf: '${path}은(는) 다음 값이 아니여야합니다: ${values}',
  notType: ({ path, type, value, originalValue }) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path}는 \`${type}\` 타입이여야합니다., ` +
      `하지만 마지막 값은 \`${printValue(value, true)}\`이었습니다.` +
      (isCast
        ? ` (\`${printValue(originalValue, true)}\` 값에서 변환됨).`
        : '.');

    if (value === null) {
      msg += `\n "null"이 빈 값으로 의도된 경우 스키마를 \`.nullable()\`로 표시해야합니다.`;
    }

    return msg;
  },
  defined: '${path}을(를) 정의해야 합니다.',
};

export let string = {
  length: '${path}은(는) ${length}자여야합니다',
  min: '${path}은(는) 최소 ${min}자여야합니다',
  max: '${path}은(는) 최대 ${max}자여야합니다',
  matches: '${path}은(는) 다음 정규표현식을 만족해야합니다: "${regex}"',
  email: '${path}은(는) 올바른 이메일이여야합니다',
  url: '${path}은(는) 올바른 URL이어야합니다',
  uuid: '${path}은(는) 올바른 UUID이어야합니다',
  trim: '${path}은(는) 띄어쓰기를 시작과 끝에 포함하지 않는 문자열이어야합니다',
  lowercase: '${path}은(는) 소문자 문자열이어야합니다',
  uppercase: '${path}은(는) 대문자 문자열이어야합니다',
};

export let number = {
  min: '${path}은(는) ${min}보다 크거나 같아야합니다',
  max: '${path}은(는) ${max}보다 작거나 같아야합니다',
  lessThan: '${path}은(는) ${less}보다 작아야합니다',
  moreThan: '${path}은(는) ${more}보다 커야합니다',
  positive: '${path}은(는) 양수여야합니다',
  negative: '${path}은(는) 음수여야합니다',
  integer: '${path}은(는) 정수여야합니다',
};

export let date = {
  min: '${path} 필드는 ${min}보다 미래여야합니다',
  max: '${path} 필드는 ${max}보다 과거여야합니다',
};

export let boolean = {
  isValue: '${path} 필드는 ${value}(이)여야합니다',
};

export let object = {
  noUnknown: '${path} 필드에 지정되지 않은 키가 있습니다: ${path}',
};

export let array = {
  min: '${path} 필드에는 ${min}개 이상의 항목이 있어야 합니다.',
  max: '${path} 필드에는 ${max}개보다 작거나 같아야 합니다.',
  length: '${path}에는 ${length}개의 항목이 있어야 합니다.',
};

export default Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
});