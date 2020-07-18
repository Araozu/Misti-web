// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Parser$KanComp = require("./AnalisisSintactico/Parser.bs.js");
var Generador$KanComp = require("./Generador/Generador.bs.js");
var Gramatica$KanComp = require("./AnalisisLexico/Gramatica.bs.js");
var Generador2$KanComp = require("./Generador/Generador2.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function tknToStr(token2) {
  switch (token2.tag | 0) {
    case /* TNuevaLinea */0 :
        return "TNuevaLinea";
    case /* TIdentificador */1 :
        return "TIdentificador";
    case /* TGenerico */2 :
        return "TGenerico";
    case /* TComentario */3 :
        return "TComentario";
    case /* TNumero */4 :
        return "TNumero";
    case /* TTexto */5 :
        return "TTexto";
    case /* TBool */6 :
        return "TBool";
    case /* TOperador */7 :
        return "TOperador";
    case /* TParenAb */8 :
        return "TParenAb";
    case /* TParenCer */9 :
        return "TParenCer";
    case /* TAgrupAb */10 :
        return "TAgrupAb";
    case /* TAgrupCer */11 :
        return "TAgrupCer";
    case /* PC_LET */12 :
        return "PC_LET";
    case /* PC_CONST */13 :
        return "PC_CONST";
    
  }
}

function flujoPrincipal(entrada) {
  var lexer = Gramatica$KanComp.crearLexer(entrada);
  var expresion = Parser$KanComp.parseTokens(lexer);
  switch (expresion.tag | 0) {
    case /* ExitoParser */0 :
        return Generador$KanComp.generarJs(expresion[0], true, 0)[0];
    case /* ErrorLexerP */1 :
        throw [
              Caml_builtin_exceptions.match_failure,
              /* tuple */[
                "Inicio.re",
                26,
                4
              ]
            ];
    case /* ErrorParser */2 :
        return expresion[0];
    
  }
}

function flujo2(entrada, nombreArchivo, fn) {
  var lexer = Gramatica$KanComp.crearLexer(entrada);
  var expresion = Parser$KanComp.parseTokens(lexer);
  switch (expresion.tag | 0) {
    case /* ExitoParser */0 :
        return Generador2$KanComp.crearCodeWithSourceMap(expresion[0], true, 0, nombreArchivo)[0];
    case /* ErrorLexerP */1 :
    case /* ErrorParser */2 :
        console.log(expresion[0]);
        return Curry._4(fn, 0, 0, undefined, [""]);
    
  }
}

exports.tknToStr = tknToStr;
exports.flujoPrincipal = flujoPrincipal;
exports.flujo2 = flujo2;
/* Gramatica-KanComp Not a pure module */
