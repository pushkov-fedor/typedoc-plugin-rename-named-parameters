"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const converter_1 = require("typedoc/dist/lib/converter");
const constants_1 = require("./utils/constants");
const options_1 = require("./utils/options");
function load({ application }) {
    options_1.handlePluginOptions(application);
    const namedParametersName = application.options.getValue(constants_1.Constants.NAMED_PARAMETERS_RENAME_OPTIONS);
    console.log('New __namedParameters name:', namedParametersName);
    application.converter.on(converter_1.Converter.EVENT_CREATE_PARAMETER, (_, param) => {
        if (param.name === '__namedParameters')
            param.name = namedParametersName;
    });
}
exports.load = load;
