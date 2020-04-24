"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Enter first name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Enter Lastname'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Enter Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Your Email Address'
    }
];
exports.getIdQuestions = [
    {
        type: 'input',
        name: 'id',
        message: 'Enter the contact id'
    }
];
exports.updateContactQuestions = __spreadArrays([
    {
        type: 'input',
        name: 'id',
        message: 'Enter the contact id'
    }
], exports.questions);
