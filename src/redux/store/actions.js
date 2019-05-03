import * as types from './action-types'

// 搜索框动画
export const handlerInputFocus = () => (
  {
    type: types.INPUT_FOCUS
  }
)

export const handlerInputBlur = () => (
  {
    type: types.INPUT_BLUR
  }
)