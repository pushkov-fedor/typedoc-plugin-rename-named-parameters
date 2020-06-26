import { ParameterType, Application } from "typedoc";
import { Constants } from "./constants";
import * as fs from 'fs'

export function handlePluginOptions(application: Application): void {
    application.options.addDeclaration({
        name: Constants.NAMED_PARAMETERS_RENAME_OPTIONS,
        help: 'Custom name for default __namedParameters',
        type: ParameterType.String,
        defaultValue: 'options'
      })
    
    const optionsFile = application.optionsFile
    const optionsJSON = JSON.parse(fs.readFileSync(optionsFile, 'utf8'))
    const namedParametersName = optionsJSON[Constants.NAMED_PARAMETERS_RENAME_OPTIONS]
    if(namedParametersName) {
        application.options.setValue(Constants.NAMED_PARAMETERS_RENAME_OPTIONS, namedParametersName)
        return
    }
      
    const processArgs = process.argv
    let namedParametersArgIndex = -1    
    processArgs.forEach((arg, index) => {
        if(arg.includes(Constants.NAMED_PARAMETERS_RENAME_OPTIONS)) {
          namedParametersArgIndex = index + 1
        }
    })
    if (namedParametersArgIndex > 0) {
        application.options.setValue(Constants.NAMED_PARAMETERS_RENAME_OPTIONS, processArgs[namedParametersArgIndex])
    }
}