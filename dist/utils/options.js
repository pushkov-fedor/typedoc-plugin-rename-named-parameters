"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePluginOptions = void 0;
const typedoc_1 = require("typedoc");
const constants_1 = require("./constants");
const fs = require("fs");
function handlePluginOptions(application) {
    application.options.addDeclaration({
        name: constants_1.Constants.NAMED_PARAMETERS_RENAME_OPTIONS,
        help: 'Custom name for default __namedParameters',
        type: typedoc_1.ParameterType.String,
        defaultValue: 'options'
    });
    const optionsFile = application.optionsFile;
    const optionsJSON = JSON.parse(fs.readFileSync(optionsFile, 'utf8'));
    const namedParametersName = optionsJSON[constants_1.Constants.NAMED_PARAMETERS_RENAME_OPTIONS];
    if (namedParametersName) {
        application.options.setValue(constants_1.Constants.NAMED_PARAMETERS_RENAME_OPTIONS, namedParametersName);
        return;
    }
    const processArgs = process.argv;
    let namedParametersArgIndex = -1;
    processArgs.forEach((arg, index) => {
        if (arg.includes(constants_1.Constants.NAMED_PARAMETERS_RENAME_OPTIONS)) {
            namedParametersArgIndex = index + 1;
        }
    });
    if (namedParametersArgIndex > 0) {
        application.options.setValue(constants_1.Constants.NAMED_PARAMETERS_RENAME_OPTIONS, processArgs[namedParametersArgIndex]);
    }
}
exports.handlePluginOptions = handlePluginOptions;
