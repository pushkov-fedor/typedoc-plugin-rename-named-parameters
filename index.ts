import {Converter} from 'typedoc/dist/lib/converter'
import type {Context} from 'typedoc/dist/lib/converter'
import {PluginHost} from 'typedoc/dist/lib/utils'
import { ParameterReflection } from 'typedoc'
import { Constants } from './utils/constants'
import { handlePluginOptions } from './utils/options'

export function load({application}: PluginHost) {
  handlePluginOptions(application)

  const namedParametersName: string = <string> application.options.getValue(Constants.NAMED_PARAMETERS_RENAME_OPTIONS)
  console.log('New __namedParameters name:', namedParametersName)
  application.converter.on(Converter.EVENT_CREATE_PARAMETER, (_: Context, param: ParameterReflection) => {
    if (param.name === '__namedParameters') param.name = namedParametersName
  })
}