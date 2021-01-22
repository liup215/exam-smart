define(['dart_sdk', 'packages/angular_components/utils/color/color'], (function load__packages__angular_components__utils__color__material(dart_sdk, packages__angular_components__utils__color__color) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const color = packages__angular_components__utils__color__color.utils__color__color;
  var material = Object.create(dart.library);
  var $first = dartx.first;
  var $keys = dartx.keys;
  var $_get = dartx._get;
  var $forEach = dartx.forEach;
  var $addAll = dartx.addAll;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ColorL = () => (ColorL = dart.constFn(dart.legacy(color.Color)))();
  var StringLAndColorLToNull = () => (StringLAndColorLToNull = dart.constFn(dart.fnType(core.Null, [StringL(), ColorL()])))();
  var MapOfStringL$ColorL = () => (MapOfStringL$ColorL = dart.constFn(core.Map$(StringL(), ColorL())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 0,
        [Color_blue]: 0,
        [Color_green]: 0,
        [Color_red]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 0,
        [Color_red]: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 255,
        [Color_red]: 255
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 0.87,
        [Color_blue]: 0,
        [Color_green]: 0,
        [Color_red]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 0.54,
        [Color_blue]: 0,
        [Color_green]: 0,
        [Color_red]: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 0.7,
        [Color_blue]: 255,
        [Color_green]: 255,
        [Color_red]: 255
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 0.38,
        [Color_blue]: 0,
        [Color_green]: 0,
        [Color_red]: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 0.5,
        [Color_blue]: 255,
        [Color_green]: 255,
        [Color_red]: 255
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 0.26,
        [Color_blue]: 0,
        [Color_green]: 0,
        [Color_red]: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 0.3,
        [Color_blue]: 255,
        [Color_green]: 255,
        [Color_red]: 255
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 0.12,
        [Color_blue]: 0,
        [Color_green]: 0,
        [Color_red]: 0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 0.12,
        [Color_blue]: 255,
        [Color_green]: 255,
        [Color_red]: 255
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 231,
        [Color_green]: 233,
        [Color_red]: 251
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 195,
        [Color_green]: 199,
        [Color_red]: 244
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 155,
        [Color_green]: 162,
        [Color_red]: 237
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 115,
        [Color_green]: 124,
        [Color_red]: 230
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 85,
        [Color_green]: 96,
        [Color_red]: 224
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 55,
        [Color_green]: 68,
        [Color_red]: 219
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 49,
        [Color_green]: 63,
        [Color_red]: 210
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 41,
        [Color_green]: 57,
        [Color_red]: 197
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 33,
        [Color_green]: 50,
        [Color_red]: 185
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 20,
        [Color_green]: 39,
        [Color_red]: 165
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 128,
        [Color_green]: 138,
        [Color_red]: 255
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 82,
        [Color_green]: 82,
        [Color_red]: 255
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 68,
        [Color_green]: 23,
        [Color_red]: 255
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 0,
        [Color_red]: 213
      });
    },
    get C26() {
      return C26 = dart.constMap(StringL(), ColorL(), ["mat-red-50", C12 || CT.C12, "mat-red-100", C13 || CT.C13, "mat-red-200", C14 || CT.C14, "mat-red-300", C15 || CT.C15, "mat-red-400", C16 || CT.C16, "mat-red-500", C17 || CT.C17, "mat-red-600", C18 || CT.C18, "mat-red-700", C19 || CT.C19, "mat-red-800", C20 || CT.C20, "mat-red-900", C21 || CT.C21, "mat-red-A100", C22 || CT.C22, "mat-red-A200", C23 || CT.C23, "mat-red-A400", C24 || CT.C24, "mat-red-A700", C25 || CT.C25]);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 236,
        [Color_green]: 228,
        [Color_red]: 252
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 208,
        [Color_green]: 187,
        [Color_red]: 248
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 177,
        [Color_green]: 143,
        [Color_red]: 244
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 146,
        [Color_green]: 98,
        [Color_red]: 240
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 122,
        [Color_green]: 64,
        [Color_red]: 236
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 99,
        [Color_green]: 30,
        [Color_red]: 233
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 96,
        [Color_green]: 27,
        [Color_red]: 216
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 91,
        [Color_green]: 24,
        [Color_red]: 194
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 87,
        [Color_green]: 20,
        [Color_red]: 173
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 79,
        [Color_green]: 14,
        [Color_red]: 136
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 171,
        [Color_green]: 128,
        [Color_red]: 255
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 129,
        [Color_green]: 64,
        [Color_red]: 255
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 87,
        [Color_green]: 0,
        [Color_red]: 245
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 98,
        [Color_green]: 17,
        [Color_red]: 197
      });
    },
    get C41() {
      return C41 = dart.constMap(StringL(), ColorL(), ["mat-pink-50", C27 || CT.C27, "mat-pink-100", C28 || CT.C28, "mat-pink-200", C29 || CT.C29, "mat-pink-300", C30 || CT.C30, "mat-pink-400", C31 || CT.C31, "mat-pink-500", C32 || CT.C32, "mat-pink-600", C33 || CT.C33, "mat-pink-700", C34 || CT.C34, "mat-pink-800", C35 || CT.C35, "mat-pink-900", C36 || CT.C36, "mat-pink-A100", C37 || CT.C37, "mat-pink-A200", C38 || CT.C38, "mat-pink-A400", C39 || CT.C39, "mat-pink-A700", C40 || CT.C40]);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 245,
        [Color_green]: 229,
        [Color_red]: 243
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 231,
        [Color_green]: 190,
        [Color_red]: 225
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 216,
        [Color_green]: 147,
        [Color_red]: 206
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 200,
        [Color_green]: 104,
        [Color_red]: 186
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 188,
        [Color_green]: 71,
        [Color_red]: 171
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 176,
        [Color_green]: 39,
        [Color_red]: 156
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 170,
        [Color_green]: 36,
        [Color_red]: 142
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 162,
        [Color_green]: 31,
        [Color_red]: 123
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 154,
        [Color_green]: 27,
        [Color_red]: 106
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 140,
        [Color_green]: 20,
        [Color_red]: 74
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 252,
        [Color_green]: 128,
        [Color_red]: 234
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 251,
        [Color_green]: 64,
        [Color_red]: 224
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 249,
        [Color_green]: 0,
        [Color_red]: 213
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 0,
        [Color_red]: 170
      });
    },
    get C56() {
      return C56 = dart.constMap(StringL(), ColorL(), ["mat-purple-50", C42 || CT.C42, "mat-purple-100", C43 || CT.C43, "mat-purple-200", C44 || CT.C44, "mat-purple-300", C45 || CT.C45, "mat-purple-400", C46 || CT.C46, "mat-purple-500", C47 || CT.C47, "mat-purple-600", C48 || CT.C48, "mat-purple-700", C49 || CT.C49, "mat-purple-800", C50 || CT.C50, "mat-purple-900", C51 || CT.C51, "mat-purple-A100", C52 || CT.C52, "mat-purple-A200", C53 || CT.C53, "mat-purple-A400", C54 || CT.C54, "mat-purple-A700", C55 || CT.C55]);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 246,
        [Color_green]: 231,
        [Color_red]: 237
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 233,
        [Color_green]: 196,
        [Color_red]: 209
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 219,
        [Color_green]: 157,
        [Color_red]: 179
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 205,
        [Color_green]: 117,
        [Color_red]: 149
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 194,
        [Color_green]: 87,
        [Color_red]: 126
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 183,
        [Color_green]: 58,
        [Color_red]: 103
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 177,
        [Color_green]: 53,
        [Color_red]: 94
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 168,
        [Color_green]: 45,
        [Color_red]: 81
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 160,
        [Color_green]: 39,
        [Color_red]: 69
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 146,
        [Color_green]: 27,
        [Color_red]: 49
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 136,
        [Color_red]: 179
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 77,
        [Color_red]: 124
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 31,
        [Color_red]: 101
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 234,
        [Color_green]: 0,
        [Color_red]: 98
      });
    },
    get C71() {
      return C71 = dart.constMap(StringL(), ColorL(), ["mat-deep-purple-50", C57 || CT.C57, "mat-deep-purple-100", C58 || CT.C58, "mat-deep-purple-200", C59 || CT.C59, "mat-deep-purple-300", C60 || CT.C60, "mat-deep-purple-400", C61 || CT.C61, "mat-deep-purple-500", C62 || CT.C62, "mat-deep-purple-600", C63 || CT.C63, "mat-deep-purple-700", C64 || CT.C64, "mat-deep-purple-800", C65 || CT.C65, "mat-deep-purple-900", C66 || CT.C66, "mat-deep-purple-A100", C67 || CT.C67, "mat-deep-purple-A200", C68 || CT.C68, "mat-deep-purple-A400", C69 || CT.C69, "mat-deep-purple-A700", C70 || CT.C70]);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 246,
        [Color_green]: 234,
        [Color_red]: 232
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 233,
        [Color_green]: 202,
        [Color_red]: 197
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 218,
        [Color_green]: 168,
        [Color_red]: 159
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 203,
        [Color_green]: 134,
        [Color_red]: 121
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 192,
        [Color_green]: 107,
        [Color_red]: 92
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 181,
        [Color_green]: 81,
        [Color_red]: 63
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 171,
        [Color_green]: 73,
        [Color_red]: 57
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 159,
        [Color_green]: 63,
        [Color_red]: 48
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 147,
        [Color_green]: 53,
        [Color_red]: 40
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 126,
        [Color_green]: 35,
        [Color_red]: 26
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 158,
        [Color_red]: 140
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 254,
        [Color_green]: 109,
        [Color_red]: 83
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 254,
        [Color_green]: 90,
        [Color_red]: 61
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 254,
        [Color_green]: 79,
        [Color_red]: 48
      });
    },
    get C86() {
      return C86 = dart.constMap(StringL(), ColorL(), ["mat-indigo-50", C72 || CT.C72, "mat-indigo-100", C73 || CT.C73, "mat-indigo-200", C74 || CT.C74, "mat-indigo-300", C75 || CT.C75, "mat-indigo-400", C76 || CT.C76, "mat-indigo-500", C77 || CT.C77, "mat-indigo-600", C78 || CT.C78, "mat-indigo-700", C79 || CT.C79, "mat-indigo-800", C80 || CT.C80, "mat-indigo-900", C81 || CT.C81, "mat-indigo-A100", C82 || CT.C82, "mat-indigo-A200", C83 || CT.C83, "mat-indigo-A400", C84 || CT.C84, "mat-indigo-A700", C85 || CT.C85]);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 254,
        [Color_green]: 240,
        [Color_red]: 232
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 252,
        [Color_green]: 218,
        [Color_red]: 198
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 250,
        [Color_green]: 194,
        [Color_red]: 161
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 247,
        [Color_green]: 170,
        [Color_red]: 123
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 246,
        [Color_green]: 151,
        [Color_red]: 94
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 244,
        [Color_green]: 133,
        [Color_red]: 66
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 231,
        [Color_green]: 120,
        [Color_red]: 59
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 214,
        [Color_green]: 103,
        [Color_red]: 51
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 198,
        [Color_green]: 86,
        [Color_red]: 42
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 169,
        [Color_green]: 58,
        [Color_red]: 28
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 177,
        [Color_red]: 130
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 138,
        [Color_red]: 68
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 121,
        [Color_red]: 41
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 98,
        [Color_red]: 41
      });
    },
    get C101() {
      return C101 = dart.constMap(StringL(), ColorL(), ["mat-blue-50", C87 || CT.C87, "mat-blue-100", C88 || CT.C88, "mat-blue-200", C89 || CT.C89, "mat-blue-300", C90 || CT.C90, "mat-blue-400", C91 || CT.C91, "mat-blue-500", C92 || CT.C92, "mat-blue-600", C93 || CT.C93, "mat-blue-700", C94 || CT.C94, "mat-blue-800", C95 || CT.C95, "mat-blue-900", C96 || CT.C96, "mat-blue-A100", C97 || CT.C97, "mat-blue-A200", C98 || CT.C98, "mat-blue-A400", C99 || CT.C99, "mat-blue-A700", C100 || CT.C100]);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 254,
        [Color_green]: 245,
        [Color_red]: 225
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 252,
        [Color_green]: 229,
        [Color_red]: 179
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 250,
        [Color_green]: 212,
        [Color_red]: 129
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 247,
        [Color_green]: 195,
        [Color_red]: 79
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 246,
        [Color_green]: 182,
        [Color_red]: 41
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 244,
        [Color_green]: 169,
        [Color_red]: 3
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 229,
        [Color_green]: 155,
        [Color_red]: 3
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 209,
        [Color_green]: 136,
        [Color_red]: 2
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 189,
        [Color_green]: 119,
        [Color_red]: 2
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 155,
        [Color_green]: 87,
        [Color_red]: 1
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 216,
        [Color_red]: 128
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 196,
        [Color_red]: 64
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 176,
        [Color_red]: 0
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 234,
        [Color_green]: 145,
        [Color_red]: 0
      });
    },
    get C116() {
      return C116 = dart.constMap(StringL(), ColorL(), ["mat-light-blue-50", C102 || CT.C102, "mat-light-blue-100", C103 || CT.C103, "mat-light-blue-200", C104 || CT.C104, "mat-light-blue-300", C105 || CT.C105, "mat-light-blue-400", C106 || CT.C106, "mat-light-blue-500", C107 || CT.C107, "mat-light-blue-600", C108 || CT.C108, "mat-light-blue-700", C109 || CT.C109, "mat-light-blue-800", C110 || CT.C110, "mat-light-blue-900", C111 || CT.C111, "mat-light-blue-A100", C112 || CT.C112, "mat-light-blue-A200", C113 || CT.C113, "mat-light-blue-A400", C114 || CT.C114, "mat-light-blue-A700", C115 || CT.C115]);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 250,
        [Color_green]: 247,
        [Color_red]: 224
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 242,
        [Color_green]: 235,
        [Color_red]: 178
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 234,
        [Color_green]: 222,
        [Color_red]: 128
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 225,
        [Color_green]: 208,
        [Color_red]: 77
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 218,
        [Color_green]: 198,
        [Color_red]: 38
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 212,
        [Color_green]: 188,
        [Color_red]: 0
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 193,
        [Color_green]: 172,
        [Color_red]: 0
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 167,
        [Color_green]: 151,
        [Color_red]: 0
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 143,
        [Color_green]: 131,
        [Color_red]: 0
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 100,
        [Color_green]: 96,
        [Color_red]: 0
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 255,
        [Color_red]: 132
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 255,
        [Color_red]: 24
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 229,
        [Color_red]: 0
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 212,
        [Color_green]: 184,
        [Color_red]: 0
      });
    },
    get C131() {
      return C131 = dart.constMap(StringL(), ColorL(), ["mat-cyan-50", C117 || CT.C117, "mat-cyan-100", C118 || CT.C118, "mat-cyan-200", C119 || CT.C119, "mat-cyan-300", C120 || CT.C120, "mat-cyan-400", C121 || CT.C121, "mat-cyan-500", C122 || CT.C122, "mat-cyan-600", C123 || CT.C123, "mat-cyan-700", C124 || CT.C124, "mat-cyan-800", C125 || CT.C125, "mat-cyan-900", C126 || CT.C126, "mat-cyan-A100", C127 || CT.C127, "mat-cyan-A200", C128 || CT.C128, "mat-cyan-A400", C129 || CT.C129, "mat-cyan-A700", C130 || CT.C130]);
    },
    get C132() {
      return C132 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 241,
        [Color_green]: 242,
        [Color_red]: 224
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 219,
        [Color_green]: 223,
        [Color_red]: 178
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 196,
        [Color_green]: 203,
        [Color_red]: 128
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 172,
        [Color_green]: 182,
        [Color_red]: 77
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 154,
        [Color_green]: 166,
        [Color_red]: 38
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 136,
        [Color_green]: 150,
        [Color_red]: 0
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 123,
        [Color_green]: 137,
        [Color_red]: 0
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 107,
        [Color_green]: 121,
        [Color_red]: 0
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 92,
        [Color_green]: 105,
        [Color_red]: 0
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 64,
        [Color_green]: 77,
        [Color_red]: 0
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 235,
        [Color_green]: 255,
        [Color_red]: 167
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 218,
        [Color_green]: 255,
        [Color_red]: 100
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 182,
        [Color_green]: 233,
        [Color_red]: 29
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 165,
        [Color_green]: 191,
        [Color_red]: 0
      });
    },
    get C146() {
      return C146 = dart.constMap(StringL(), ColorL(), ["mat-teal-50", C132 || CT.C132, "mat-teal-100", C133 || CT.C133, "mat-teal-200", C134 || CT.C134, "mat-teal-300", C135 || CT.C135, "mat-teal-400", C136 || CT.C136, "mat-teal-500", C137 || CT.C137, "mat-teal-600", C138 || CT.C138, "mat-teal-700", C139 || CT.C139, "mat-teal-800", C140 || CT.C140, "mat-teal-900", C141 || CT.C141, "mat-teal-A100", C142 || CT.C142, "mat-teal-A200", C143 || CT.C143, "mat-teal-A400", C144 || CT.C144, "mat-teal-A700", C145 || CT.C145]);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 235,
        [Color_green]: 243,
        [Color_red]: 226
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 205,
        [Color_green]: 225,
        [Color_red]: 183
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 172,
        [Color_green]: 206,
        [Color_red]: 135
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 138,
        [Color_green]: 187,
        [Color_red]: 87
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 113,
        [Color_green]: 172,
        [Color_red]: 51
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 88,
        [Color_green]: 157,
        [Color_red]: 15
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 79,
        [Color_green]: 144,
        [Color_red]: 13
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 67,
        [Color_green]: 128,
        [Color_red]: 11
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 56,
        [Color_green]: 113,
        [Color_red]: 9
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 36,
        [Color_green]: 85,
        [Color_red]: 5
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 202,
        [Color_green]: 246,
        [Color_red]: 185
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 174,
        [Color_green]: 240,
        [Color_red]: 105
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 118,
        [Color_green]: 230,
        [Color_red]: 0
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 83,
        [Color_green]: 200,
        [Color_red]: 0
      });
    },
    get C161() {
      return C161 = dart.constMap(StringL(), ColorL(), ["mat-green-50", C147 || CT.C147, "mat-green-100", C148 || CT.C148, "mat-green-200", C149 || CT.C149, "mat-green-300", C150 || CT.C150, "mat-green-400", C151 || CT.C151, "mat-green-500", C152 || CT.C152, "mat-green-600", C153 || CT.C153, "mat-green-700", C154 || CT.C154, "mat-green-800", C155 || CT.C155, "mat-green-900", C156 || CT.C156, "mat-green-A100", C157 || CT.C157, "mat-green-A200", C158 || CT.C158, "mat-green-A400", C159 || CT.C159, "mat-green-A700", C160 || CT.C160]);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 233,
        [Color_green]: 248,
        [Color_red]: 241
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 200,
        [Color_green]: 237,
        [Color_red]: 220
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 165,
        [Color_green]: 225,
        [Color_red]: 197
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 129,
        [Color_green]: 213,
        [Color_red]: 174
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 101,
        [Color_green]: 204,
        [Color_red]: 156
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 74,
        [Color_green]: 195,
        [Color_red]: 139
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 66,
        [Color_green]: 179,
        [Color_red]: 124
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 56,
        [Color_green]: 159,
        [Color_red]: 104
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 47,
        [Color_green]: 139,
        [Color_red]: 85
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 30,
        [Color_green]: 105,
        [Color_red]: 51
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 144,
        [Color_green]: 255,
        [Color_red]: 204
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 89,
        [Color_green]: 255,
        [Color_red]: 178
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 3,
        [Color_green]: 255,
        [Color_red]: 118
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 23,
        [Color_green]: 221,
        [Color_red]: 100
      });
    },
    get C176() {
      return C176 = dart.constMap(StringL(), ColorL(), ["mat-light-green-50", C162 || CT.C162, "mat-light-green-100", C163 || CT.C163, "mat-light-green-200", C164 || CT.C164, "mat-light-green-300", C165 || CT.C165, "mat-light-green-400", C166 || CT.C166, "mat-light-green-500", C167 || CT.C167, "mat-light-green-600", C168 || CT.C168, "mat-light-green-700", C169 || CT.C169, "mat-light-green-800", C170 || CT.C170, "mat-light-green-900", C171 || CT.C171, "mat-light-green-A100", C172 || CT.C172, "mat-light-green-A200", C173 || CT.C173, "mat-light-green-A400", C174 || CT.C174, "mat-light-green-A700", C175 || CT.C175]);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 231,
        [Color_green]: 251,
        [Color_red]: 249
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 195,
        [Color_green]: 244,
        [Color_red]: 240
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 156,
        [Color_green]: 238,
        [Color_red]: 230
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 117,
        [Color_green]: 231,
        [Color_red]: 220
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 87,
        [Color_green]: 225,
        [Color_red]: 212
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 57,
        [Color_green]: 220,
        [Color_red]: 205
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 51,
        [Color_green]: 202,
        [Color_red]: 192
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 43,
        [Color_green]: 180,
        [Color_red]: 175
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 36,
        [Color_green]: 157,
        [Color_red]: 158
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 23,
        [Color_green]: 119,
        [Color_red]: 130
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 129,
        [Color_green]: 255,
        [Color_red]: 244
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 65,
        [Color_green]: 255,
        [Color_red]: 238
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 255,
        [Color_red]: 198
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 234,
        [Color_red]: 174
      });
    },
    get C191() {
      return C191 = dart.constMap(StringL(), ColorL(), ["mat-lime-50", C177 || CT.C177, "mat-lime-100", C178 || CT.C178, "mat-lime-200", C179 || CT.C179, "mat-lime-300", C180 || CT.C180, "mat-lime-400", C181 || CT.C181, "mat-lime-500", C182 || CT.C182, "mat-lime-600", C183 || CT.C183, "mat-lime-700", C184 || CT.C184, "mat-lime-800", C185 || CT.C185, "mat-lime-900", C186 || CT.C186, "mat-lime-A100", C187 || CT.C187, "mat-lime-A200", C188 || CT.C188, "mat-lime-A400", C189 || CT.C189, "mat-lime-A700", C190 || CT.C190]);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 224,
        [Color_green]: 246,
        [Color_red]: 254
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 178,
        [Color_green]: 232,
        [Color_red]: 252
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 128,
        [Color_green]: 218,
        [Color_red]: 250
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 77,
        [Color_green]: 203,
        [Color_red]: 247
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 38,
        [Color_green]: 191,
        [Color_red]: 246
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 180,
        [Color_red]: 244
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 166,
        [Color_red]: 242
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 147,
        [Color_red]: 240
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 129,
        [Color_red]: 238
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 97,
        [Color_red]: 234
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 128,
        [Color_green]: 222,
        [Color_red]: 255
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 64,
        [Color_green]: 205,
        [Color_red]: 255
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 188,
        [Color_red]: 255
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 158,
        [Color_red]: 255
      });
    },
    get C206() {
      return C206 = dart.constMap(StringL(), ColorL(), ["mat-yellow-50", C192 || CT.C192, "mat-yellow-100", C193 || CT.C193, "mat-yellow-200", C194 || CT.C194, "mat-yellow-300", C195 || CT.C195, "mat-yellow-400", C196 || CT.C196, "mat-yellow-500", C197 || CT.C197, "mat-yellow-600", C198 || CT.C198, "mat-yellow-700", C199 || CT.C199, "mat-yellow-800", C200 || CT.C200, "mat-yellow-900", C201 || CT.C201, "mat-yellow-A100", C202 || CT.C202, "mat-yellow-A200", C203 || CT.C203, "mat-yellow-A400", C204 || CT.C204, "mat-yellow-A700", C205 || CT.C205]);
    },
    get C207() {
      return C207 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 224,
        [Color_green]: 243,
        [Color_red]: 255
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 178,
        [Color_green]: 224,
        [Color_red]: 255
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 128,
        [Color_green]: 204,
        [Color_red]: 255
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 77,
        [Color_green]: 183,
        [Color_red]: 255
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 38,
        [Color_green]: 167,
        [Color_red]: 255
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 152,
        [Color_red]: 255
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 140,
        [Color_red]: 251
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 124,
        [Color_red]: 245
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 108,
        [Color_red]: 239
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 81,
        [Color_red]: 230
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 128,
        [Color_green]: 209,
        [Color_red]: 255
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 64,
        [Color_green]: 171,
        [Color_red]: 255
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 145,
        [Color_red]: 255
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 109,
        [Color_red]: 255
      });
    },
    get C221() {
      return C221 = dart.constMap(StringL(), ColorL(), ["mat-orange-50", C207 || CT.C207, "mat-orange-100", C208 || CT.C208, "mat-orange-200", C209 || CT.C209, "mat-orange-300", C210 || CT.C210, "mat-orange-400", C211 || CT.C211, "mat-orange-500", C212 || CT.C212, "mat-orange-600", C213 || CT.C213, "mat-orange-700", C214 || CT.C214, "mat-orange-800", C215 || CT.C215, "mat-orange-900", C216 || CT.C216, "mat-orange-A100", C217 || CT.C217, "mat-orange-A200", C218 || CT.C218, "mat-orange-A400", C219 || CT.C219, "mat-orange-A700", C220 || CT.C220]);
    },
    get C222() {
      return C222 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 188,
        [Color_green]: 204,
        [Color_red]: 255
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 145,
        [Color_green]: 171,
        [Color_red]: 255
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 101,
        [Color_green]: 138,
        [Color_red]: 255
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 67,
        [Color_green]: 112,
        [Color_red]: 255
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 34,
        [Color_green]: 87,
        [Color_red]: 255
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 30,
        [Color_green]: 81,
        [Color_red]: 244
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 25,
        [Color_green]: 74,
        [Color_red]: 230
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 21,
        [Color_green]: 67,
        [Color_red]: 216
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 12,
        [Color_green]: 54,
        [Color_red]: 191
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 128,
        [Color_green]: 158,
        [Color_red]: 255
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 64,
        [Color_green]: 110,
        [Color_red]: 255
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 61,
        [Color_red]: 255
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 44,
        [Color_red]: 221
      });
    },
    get C235() {
      return C235 = dart.constMap(StringL(), ColorL(), ["mat-deep-orange-50", C12 || CT.C12, "mat-deep-orange-100", C222 || CT.C222, "mat-deep-orange-200", C223 || CT.C223, "mat-deep-orange-300", C224 || CT.C224, "mat-deep-orange-400", C225 || CT.C225, "mat-deep-orange-500", C226 || CT.C226, "mat-deep-orange-600", C227 || CT.C227, "mat-deep-orange-700", C228 || CT.C228, "mat-deep-orange-800", C229 || CT.C229, "mat-deep-orange-900", C230 || CT.C230, "mat-deep-orange-A100", C231 || CT.C231, "mat-deep-orange-A200", C232 || CT.C232, "mat-deep-orange-A400", C233 || CT.C233, "mat-deep-orange-A700", C234 || CT.C234]);
    },
    get C236() {
      return C236 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 233,
        [Color_green]: 235,
        [Color_red]: 239
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 200,
        [Color_green]: 204,
        [Color_red]: 215
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 164,
        [Color_green]: 170,
        [Color_red]: 188
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 127,
        [Color_green]: 136,
        [Color_red]: 161
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 99,
        [Color_green]: 110,
        [Color_red]: 141
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 72,
        [Color_green]: 85,
        [Color_red]: 121
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 65,
        [Color_green]: 76,
        [Color_red]: 109
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 55,
        [Color_green]: 64,
        [Color_red]: 93
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 46,
        [Color_green]: 52,
        [Color_red]: 78
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 35,
        [Color_green]: 39,
        [Color_red]: 62
      });
    },
    get C246() {
      return C246 = dart.constMap(StringL(), ColorL(), ["mat-brown-50", C236 || CT.C236, "mat-brown-100", C237 || CT.C237, "mat-brown-200", C238 || CT.C238, "mat-brown-300", C239 || CT.C239, "mat-brown-400", C240 || CT.C240, "mat-brown-500", C241 || CT.C241, "mat-brown-600", C242 || CT.C242, "mat-brown-700", C243 || CT.C243, "mat-brown-800", C244 || CT.C244, "mat-brown-900", C245 || CT.C245]);
    },
    get C247() {
      return C247 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 250,
        [Color_green]: 250,
        [Color_red]: 250
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 245,
        [Color_green]: 245,
        [Color_red]: 245
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 238,
        [Color_green]: 238,
        [Color_red]: 238
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 224,
        [Color_green]: 224,
        [Color_red]: 224
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 189,
        [Color_green]: 189,
        [Color_red]: 189
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 158,
        [Color_green]: 158,
        [Color_red]: 158
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 117,
        [Color_green]: 117,
        [Color_red]: 117
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 97,
        [Color_green]: 97,
        [Color_red]: 97
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 66,
        [Color_green]: 66,
        [Color_red]: 66
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 33,
        [Color_green]: 33,
        [Color_red]: 33
      });
    },
    get C257() {
      return C257 = dart.constMap(StringL(), ColorL(), ["mat-grey-50", C247 || CT.C247, "mat-grey-100", C248 || CT.C248, "mat-grey-200", C249 || CT.C249, "mat-grey-300", C250 || CT.C250, "mat-grey-400", C251 || CT.C251, "mat-grey-500", C252 || CT.C252, "mat-grey-600", C253 || CT.C253, "mat-grey-700", C254 || CT.C254, "mat-grey-800", C255 || CT.C255, "mat-grey-900", C256 || CT.C256]);
    },
    get C258() {
      return C258 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 241,
        [Color_green]: 239,
        [Color_red]: 236
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 220,
        [Color_green]: 216,
        [Color_red]: 207
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 197,
        [Color_green]: 190,
        [Color_red]: 176
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 174,
        [Color_green]: 164,
        [Color_red]: 144
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 156,
        [Color_green]: 144,
        [Color_red]: 120
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 139,
        [Color_green]: 125,
        [Color_red]: 96
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 122,
        [Color_green]: 110,
        [Color_red]: 84
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 100,
        [Color_green]: 90,
        [Color_red]: 69
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 79,
        [Color_green]: 71,
        [Color_red]: 55
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 56,
        [Color_green]: 50,
        [Color_red]: 38
      });
    },
    get C268() {
      return C268 = dart.constMap(StringL(), ColorL(), ["mat-blue-grey-50", C258 || CT.C258, "mat-blue-grey-100", C259 || CT.C259, "mat-blue-grey-200", C260 || CT.C260, "mat-blue-grey-300", C261 || CT.C261, "mat-blue-grey-400", C262 || CT.C262, "mat-blue-grey-500", C263 || CT.C263, "mat-blue-grey-600", C264 || CT.C264, "mat-blue-grey-700", C265 || CT.C265, "mat-blue-grey-800", C266 || CT.C266, "mat-blue-grey-900", C267 || CT.C267]);
    },
    get C269() {
      return C269 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 220,
        [Color_green]: 224,
        [Color_red]: 253
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 187,
        [Color_green]: 189,
        [Color_red]: 249
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 136,
        [Color_green]: 153,
        [Color_red]: 246
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 96,
        [Color_green]: 108,
        [Color_red]: 243
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 64,
        [Color_green]: 78,
        [Color_red]: 232
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 35,
        [Color_green]: 28,
        [Color_red]: 229
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 29,
        [Color_green]: 25,
        [Color_red]: 221
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 22,
        [Color_green]: 23,
        [Color_red]: 208
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 17,
        [Color_green]: 20,
        [Color_red]: 196
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 10,
        [Color_green]: 18,
        [Color_red]: 176
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 151,
        [Color_green]: 121,
        [Color_red]: 255
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 119,
        [Color_green]: 81,
        [Color_red]: 255
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 111,
        [Color_green]: 45,
        [Color_red]: 255
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 50,
        [Color_green]: 0,
        [Color_red]: 224
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 206,
        [Color_green]: 248,
        [Color_red]: 208
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 164,
        [Color_green]: 233,
        [Color_red]: 163
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 114,
        [Color_green]: 213,
        [Color_red]: 114
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 65,
        [Color_green]: 189,
        [Color_red]: 66
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 43,
        [Color_green]: 175,
        [Color_red]: 43
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 36,
        [Color_green]: 155,
        [Color_red]: 37
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 8,
        [Color_green]: 143,
        [Color_red]: 10
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 7,
        [Color_green]: 126,
        [Color_red]: 10
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 111,
        [Color_red]: 5
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 2,
        [Color_green]: 83,
        [Color_red]: 13
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 141,
        [Color_green]: 247,
        [Color_red]: 162
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 88,
        [Color_green]: 241,
        [Color_red]: 90
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 21,
        [Color_green]: 231,
        [Color_red]: 20
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 199,
        [Color_red]: 18
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 253,
        [Color_green]: 233,
        [Color_red]: 231
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 217,
        [Color_red]: 208
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 191,
        [Color_red]: 175
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 167,
        [Color_red]: 145
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 254,
        [Color_green]: 143,
        [Color_red]: 115
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 252,
        [Color_green]: 119,
        [Color_red]: 86
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 239,
        [Color_green]: 108,
        [Color_red]: 78
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 222,
        [Color_green]: 94,
        [Color_red]: 69
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 206,
        [Color_green]: 80,
        [Color_red]: 59
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 177,
        [Color_green]: 54,
        [Color_red]: 42
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 186,
        [Color_red]: 166
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 137,
        [Color_red]: 104
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 115,
        [Color_red]: 77
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 255,
        [Color_green]: 105,
        [Color_red]: 77
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 231,
        [Color_green]: 253,
        [Color_red]: 255
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 196,
        [Color_green]: 249,
        [Color_red]: 255
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 157,
        [Color_green]: 245,
        [Color_red]: 255
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 118,
        [Color_green]: 241,
        [Color_red]: 255
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 88,
        [Color_green]: 238,
        [Color_red]: 255
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 59,
        [Color_green]: 235,
        [Color_red]: 255
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 53,
        [Color_green]: 216,
        [Color_red]: 253
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 45,
        [Color_green]: 192,
        [Color_red]: 251
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 37,
        [Color_green]: 168,
        [Color_red]: 249
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 23,
        [Color_green]: 127,
        [Color_red]: 245
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 141,
        [Color_green]: 255,
        [Color_red]: 255
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 255,
        [Color_red]: 255
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 234,
        [Color_red]: 255
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 214,
        [Color_red]: 255
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 225,
        [Color_green]: 248,
        [Color_red]: 255
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 179,
        [Color_green]: 236,
        [Color_red]: 255
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 130,
        [Color_green]: 224,
        [Color_red]: 255
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 79,
        [Color_green]: 213,
        [Color_red]: 255
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 40,
        [Color_green]: 202,
        [Color_red]: 255
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 7,
        [Color_green]: 193,
        [Color_red]: 255
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 179,
        [Color_red]: 255
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 160,
        [Color_red]: 255
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 143,
        [Color_red]: 255
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 111,
        [Color_red]: 255
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 127,
        [Color_green]: 229,
        [Color_red]: 255
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 64,
        [Color_green]: 215,
        [Color_red]: 255
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 196,
        [Color_red]: 255
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: color.Color.prototype,
        [Color_alpha]: 1,
        [Color_blue]: 0,
        [Color_green]: 171,
        [Color_red]: 255
      });
    },
    get C339() {
      return C339 = dart.constMap(StringL(), ColorL(), ["mat-amber-50", C325 || CT.C325, "mat-amber-100", C326 || CT.C326, "mat-amber-200", C327 || CT.C327, "mat-amber-300", C328 || CT.C328, "mat-amber-400", C329 || CT.C329, "mat-amber-500", C330 || CT.C330, "mat-amber-600", C331 || CT.C331, "mat-amber-700", C332 || CT.C332, "mat-amber-800", C333 || CT.C333, "mat-amber-900", C334 || CT.C334, "mat-amber-A100", C335 || CT.C335, "mat-amber-A200", C336 || CT.C336, "mat-amber-A400", C337 || CT.C337, "mat-amber-A700", C338 || CT.C338]);
    }
  }, false);
  material.closestMaterialColorName = function closestMaterialColorName(searchColor) {
    let closestColorName = material.materialColors[$keys][$first];
    let minDistance = searchColor.distanceFrom(material.materialColors[$_get](closestColorName));
    material.materialColors[$forEach](dart.fn((name, color) => {
      let distance = searchColor.distanceFrom(color);
      if (dart.notNull(distance) < dart.notNull(minDistance)) {
        minDistance = distance;
        closestColorName = name;
      }
    }, StringLAndColorLToNull()));
    return closestColorName;
  };
  var Color_alpha = dart.privateName(color, "Color.alpha");
  var Color_blue = dart.privateName(color, "Color.blue");
  var Color_green = dart.privateName(color, "Color.green");
  var Color_red = dart.privateName(color, "Color.red");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C11;
  var C12;
  var C13;
  var C14;
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  var C43;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C52;
  var C53;
  var C54;
  var C55;
  var C56;
  var C57;
  var C58;
  var C59;
  var C60;
  var C61;
  var C62;
  var C63;
  var C64;
  var C65;
  var C66;
  var C67;
  var C68;
  var C69;
  var C70;
  var C71;
  var C72;
  var C73;
  var C74;
  var C75;
  var C76;
  var C77;
  var C78;
  var C79;
  var C80;
  var C81;
  var C82;
  var C83;
  var C84;
  var C85;
  var C86;
  var C87;
  var C88;
  var C89;
  var C90;
  var C91;
  var C92;
  var C93;
  var C94;
  var C95;
  var C96;
  var C97;
  var C98;
  var C99;
  var C100;
  var C101;
  var C102;
  var C103;
  var C104;
  var C105;
  var C106;
  var C107;
  var C108;
  var C109;
  var C110;
  var C111;
  var C112;
  var C113;
  var C114;
  var C115;
  var C116;
  var C117;
  var C118;
  var C119;
  var C120;
  var C121;
  var C122;
  var C123;
  var C124;
  var C125;
  var C126;
  var C127;
  var C128;
  var C129;
  var C130;
  var C131;
  var C132;
  var C133;
  var C134;
  var C135;
  var C136;
  var C137;
  var C138;
  var C139;
  var C140;
  var C141;
  var C142;
  var C143;
  var C144;
  var C145;
  var C146;
  var C147;
  var C148;
  var C149;
  var C150;
  var C151;
  var C152;
  var C153;
  var C154;
  var C155;
  var C156;
  var C157;
  var C158;
  var C159;
  var C160;
  var C161;
  var C162;
  var C163;
  var C164;
  var C165;
  var C166;
  var C167;
  var C168;
  var C169;
  var C170;
  var C171;
  var C172;
  var C173;
  var C174;
  var C175;
  var C176;
  var C177;
  var C178;
  var C179;
  var C180;
  var C181;
  var C182;
  var C183;
  var C184;
  var C185;
  var C186;
  var C187;
  var C188;
  var C189;
  var C190;
  var C191;
  var C192;
  var C193;
  var C194;
  var C195;
  var C196;
  var C197;
  var C198;
  var C199;
  var C200;
  var C201;
  var C202;
  var C203;
  var C204;
  var C205;
  var C206;
  var C207;
  var C208;
  var C209;
  var C210;
  var C211;
  var C212;
  var C213;
  var C214;
  var C215;
  var C216;
  var C217;
  var C218;
  var C219;
  var C220;
  var C221;
  var C222;
  var C223;
  var C224;
  var C225;
  var C226;
  var C227;
  var C228;
  var C229;
  var C230;
  var C231;
  var C232;
  var C233;
  var C234;
  var C235;
  var C236;
  var C237;
  var C238;
  var C239;
  var C240;
  var C241;
  var C242;
  var C243;
  var C244;
  var C245;
  var C246;
  var C247;
  var C248;
  var C249;
  var C250;
  var C251;
  var C252;
  var C253;
  var C254;
  var C255;
  var C256;
  var C257;
  var C258;
  var C259;
  var C260;
  var C261;
  var C262;
  var C263;
  var C264;
  var C265;
  var C266;
  var C267;
  var C268;
  var C269;
  var C270;
  var C271;
  var C272;
  var C273;
  var C274;
  var C275;
  var C276;
  var C277;
  var C278;
  var C279;
  var C280;
  var C281;
  var C282;
  var C283;
  var C284;
  var C285;
  var C286;
  var C287;
  var C288;
  var C289;
  var C290;
  var C291;
  var C292;
  var C293;
  var C294;
  var C295;
  var C296;
  var C297;
  var C298;
  var C299;
  var C300;
  var C301;
  var C302;
  var C303;
  var C304;
  var C305;
  var C306;
  var C307;
  var C308;
  var C309;
  var C310;
  var C311;
  var C312;
  var C313;
  var C314;
  var C315;
  var C316;
  var C317;
  var C318;
  var C319;
  var C320;
  var C321;
  var C322;
  var C323;
  var C324;
  var C325;
  var C326;
  var C327;
  var C328;
  var C329;
  var C330;
  var C331;
  var C332;
  var C333;
  var C334;
  var C335;
  var C336;
  var C337;
  var C338;
  var C339;
  dart.defineLazy(material, {
    /*material.transparent*/get transparent() {
      return C0 || CT.C0;
    },
    /*material.black*/get black() {
      return C1 || CT.C1;
    },
    /*material.white*/get white() {
      return C2 || CT.C2;
    },
    /*material.opacityStrong*/get opacityStrong() {
      return 0.87;
    },
    /*material.opacityLight*/get opacityLight() {
      return 0.54;
    },
    /*material.opacityLighter*/get opacityLighter() {
      return 0.38;
    },
    /*material.opacityLightest*/get opacityLightest() {
      return 0.26;
    },
    /*material.darkOpacityStrong*/get darkOpacityStrong() {
      return 1;
    },
    /*material.darkOpacityLight*/get darkOpacityLight() {
      return 0.7;
    },
    /*material.darkOpacityLighter*/get darkOpacityLighter() {
      return 0.5;
    },
    /*material.darkOpacityLightest*/get darkOpacityLightest() {
      return 0.3;
    },
    /*material.rippleOpacity*/get rippleOpacity() {
      return 0.16;
    },
    /*material.dividerOpacity*/get dividerOpacity() {
      return 0.12;
    },
    /*material.transparentBlack*/get transparentBlack() {
      return C3 || CT.C3;
    },
    /*material.transparentWhite*/get transparentWhite() {
      return C2 || CT.C2;
    },
    /*material.lightTransparentBlack*/get lightTransparentBlack() {
      return C4 || CT.C4;
    },
    /*material.lightTransparentWhite*/get lightTransparentWhite() {
      return C5 || CT.C5;
    },
    /*material.lighterTransparentBlack*/get lighterTransparentBlack() {
      return C6 || CT.C6;
    },
    /*material.lighterTransparentWhite*/get lighterTransparentWhite() {
      return C7 || CT.C7;
    },
    /*material.lightestTransparentBlack*/get lightestTransparentBlack() {
      return C8 || CT.C8;
    },
    /*material.lightestTransparentWhite*/get lightestTransparentWhite() {
      return C9 || CT.C9;
    },
    /*material.borderLight*/get borderLight() {
      return C10 || CT.C10;
    },
    /*material.borderDark*/get borderDark() {
      return C11 || CT.C11;
    },
    /*material.borderDottedLight*/get borderDottedLight() {
      return C8 || CT.C8;
    },
    /*material.textPrimary*/get textPrimary() {
      return C3 || CT.C3;
    },
    /*material.textSecondary*/get textSecondary() {
      return C4 || CT.C4;
    },
    /*material.textHint*/get textHint() {
      return C6 || CT.C6;
    },
    /*material.textDisabled*/get textDisabled() {
      return C6 || CT.C6;
    },
    /*material.textDivider*/get textDivider() {
      return C10 || CT.C10;
    },
    /*material.textDarkPrimary*/get textDarkPrimary() {
      return C2 || CT.C2;
    },
    /*material.textDarkSecondary*/get textDarkSecondary() {
      return C5 || CT.C5;
    },
    /*material.textDarkHint*/get textDarkHint() {
      return C7 || CT.C7;
    },
    /*material.textDarkDisabled*/get textDarkDisabled() {
      return C7 || CT.C7;
    },
    /*material.textDarkDivider*/get textDarkDivider() {
      return C11 || CT.C11;
    },
    /*material.iconFocused*/get iconFocused() {
      return C3 || CT.C3;
    },
    /*material.icon*/get icon() {
      return C4 || CT.C4;
    },
    /*material.iconInactive*/get iconInactive() {
      return C6 || CT.C6;
    },
    /*material.iconDarkFocused*/get iconDarkFocused() {
      return C2 || CT.C2;
    },
    /*material.iconDark*/get iconDark() {
      return C5 || CT.C5;
    },
    /*material.iconDarkInactive*/get iconDarkInactive() {
      return C7 || CT.C7;
    },
    /*material.scrollbarThumb*/get scrollbarThumb() {
      return C8 || CT.C8;
    },
    /*material.scrollbarBackground*/get scrollbarBackground() {
      return C0 || CT.C0;
    },
    /*material.scrollbarBackgroundHover*/get scrollbarBackgroundHover() {
      return C10 || CT.C10;
    },
    /*material.red50*/get red50() {
      return C12 || CT.C12;
    },
    /*material.red100*/get red100() {
      return C13 || CT.C13;
    },
    /*material.red200*/get red200() {
      return C14 || CT.C14;
    },
    /*material.red300*/get red300() {
      return C15 || CT.C15;
    },
    /*material.red400*/get red400() {
      return C16 || CT.C16;
    },
    /*material.red500*/get red500() {
      return C17 || CT.C17;
    },
    /*material.red600*/get red600() {
      return C18 || CT.C18;
    },
    /*material.red700*/get red700() {
      return C19 || CT.C19;
    },
    /*material.red800*/get red800() {
      return C20 || CT.C20;
    },
    /*material.red900*/get red900() {
      return C21 || CT.C21;
    },
    /*material.redA100*/get redA100() {
      return C22 || CT.C22;
    },
    /*material.redA200*/get redA200() {
      return C23 || CT.C23;
    },
    /*material.redA400*/get redA400() {
      return C24 || CT.C24;
    },
    /*material.redA700*/get redA700() {
      return C25 || CT.C25;
    },
    /*material.red*/get red() {
      return C17 || CT.C17;
    },
    /*material.reds*/get reds() {
      return C26 || CT.C26;
    },
    /*material.pink50*/get pink50() {
      return C27 || CT.C27;
    },
    /*material.pink100*/get pink100() {
      return C28 || CT.C28;
    },
    /*material.pink200*/get pink200() {
      return C29 || CT.C29;
    },
    /*material.pink300*/get pink300() {
      return C30 || CT.C30;
    },
    /*material.pink400*/get pink400() {
      return C31 || CT.C31;
    },
    /*material.pink500*/get pink500() {
      return C32 || CT.C32;
    },
    /*material.pink600*/get pink600() {
      return C33 || CT.C33;
    },
    /*material.pink700*/get pink700() {
      return C34 || CT.C34;
    },
    /*material.pink800*/get pink800() {
      return C35 || CT.C35;
    },
    /*material.pink900*/get pink900() {
      return C36 || CT.C36;
    },
    /*material.pinkA100*/get pinkA100() {
      return C37 || CT.C37;
    },
    /*material.pinkA200*/get pinkA200() {
      return C38 || CT.C38;
    },
    /*material.pinkA400*/get pinkA400() {
      return C39 || CT.C39;
    },
    /*material.pinkA700*/get pinkA700() {
      return C40 || CT.C40;
    },
    /*material.pink*/get pink() {
      return C32 || CT.C32;
    },
    /*material.pinks*/get pinks() {
      return C41 || CT.C41;
    },
    /*material.purple50*/get purple50() {
      return C42 || CT.C42;
    },
    /*material.purple100*/get purple100() {
      return C43 || CT.C43;
    },
    /*material.purple200*/get purple200() {
      return C44 || CT.C44;
    },
    /*material.purple300*/get purple300() {
      return C45 || CT.C45;
    },
    /*material.purple400*/get purple400() {
      return C46 || CT.C46;
    },
    /*material.purple500*/get purple500() {
      return C47 || CT.C47;
    },
    /*material.purple600*/get purple600() {
      return C48 || CT.C48;
    },
    /*material.purple700*/get purple700() {
      return C49 || CT.C49;
    },
    /*material.purple800*/get purple800() {
      return C50 || CT.C50;
    },
    /*material.purple900*/get purple900() {
      return C51 || CT.C51;
    },
    /*material.purpleA100*/get purpleA100() {
      return C52 || CT.C52;
    },
    /*material.purpleA200*/get purpleA200() {
      return C53 || CT.C53;
    },
    /*material.purpleA400*/get purpleA400() {
      return C54 || CT.C54;
    },
    /*material.purpleA700*/get purpleA700() {
      return C55 || CT.C55;
    },
    /*material.purple*/get purple() {
      return C47 || CT.C47;
    },
    /*material.purples*/get purples() {
      return C56 || CT.C56;
    },
    /*material.deepPurple50*/get deepPurple50() {
      return C57 || CT.C57;
    },
    /*material.deepPurple100*/get deepPurple100() {
      return C58 || CT.C58;
    },
    /*material.deepPurple200*/get deepPurple200() {
      return C59 || CT.C59;
    },
    /*material.deepPurple300*/get deepPurple300() {
      return C60 || CT.C60;
    },
    /*material.deepPurple400*/get deepPurple400() {
      return C61 || CT.C61;
    },
    /*material.deepPurple500*/get deepPurple500() {
      return C62 || CT.C62;
    },
    /*material.deepPurple600*/get deepPurple600() {
      return C63 || CT.C63;
    },
    /*material.deepPurple700*/get deepPurple700() {
      return C64 || CT.C64;
    },
    /*material.deepPurple800*/get deepPurple800() {
      return C65 || CT.C65;
    },
    /*material.deepPurple900*/get deepPurple900() {
      return C66 || CT.C66;
    },
    /*material.deepPurpleA100*/get deepPurpleA100() {
      return C67 || CT.C67;
    },
    /*material.deepPurpleA200*/get deepPurpleA200() {
      return C68 || CT.C68;
    },
    /*material.deepPurpleA400*/get deepPurpleA400() {
      return C69 || CT.C69;
    },
    /*material.deepPurpleA700*/get deepPurpleA700() {
      return C70 || CT.C70;
    },
    /*material.deepPurple*/get deepPurple() {
      return C62 || CT.C62;
    },
    /*material.deepPurples*/get deepPurples() {
      return C71 || CT.C71;
    },
    /*material.indigo50*/get indigo50() {
      return C72 || CT.C72;
    },
    /*material.indigo100*/get indigo100() {
      return C73 || CT.C73;
    },
    /*material.indigo200*/get indigo200() {
      return C74 || CT.C74;
    },
    /*material.indigo300*/get indigo300() {
      return C75 || CT.C75;
    },
    /*material.indigo400*/get indigo400() {
      return C76 || CT.C76;
    },
    /*material.indigo500*/get indigo500() {
      return C77 || CT.C77;
    },
    /*material.indigo600*/get indigo600() {
      return C78 || CT.C78;
    },
    /*material.indigo700*/get indigo700() {
      return C79 || CT.C79;
    },
    /*material.indigo800*/get indigo800() {
      return C80 || CT.C80;
    },
    /*material.indigo900*/get indigo900() {
      return C81 || CT.C81;
    },
    /*material.indigoA100*/get indigoA100() {
      return C82 || CT.C82;
    },
    /*material.indigoA200*/get indigoA200() {
      return C83 || CT.C83;
    },
    /*material.indigoA400*/get indigoA400() {
      return C84 || CT.C84;
    },
    /*material.indigoA700*/get indigoA700() {
      return C85 || CT.C85;
    },
    /*material.indigo*/get indigo() {
      return C77 || CT.C77;
    },
    /*material.indigos*/get indigos() {
      return C86 || CT.C86;
    },
    /*material.blue50*/get blue50() {
      return C87 || CT.C87;
    },
    /*material.blue100*/get blue100() {
      return C88 || CT.C88;
    },
    /*material.blue200*/get blue200() {
      return C89 || CT.C89;
    },
    /*material.blue300*/get blue300() {
      return C90 || CT.C90;
    },
    /*material.blue400*/get blue400() {
      return C91 || CT.C91;
    },
    /*material.blue500*/get blue500() {
      return C92 || CT.C92;
    },
    /*material.blue600*/get blue600() {
      return C93 || CT.C93;
    },
    /*material.blue700*/get blue700() {
      return C94 || CT.C94;
    },
    /*material.blue800*/get blue800() {
      return C95 || CT.C95;
    },
    /*material.blue900*/get blue900() {
      return C96 || CT.C96;
    },
    /*material.blueA100*/get blueA100() {
      return C97 || CT.C97;
    },
    /*material.blueA200*/get blueA200() {
      return C98 || CT.C98;
    },
    /*material.blueA400*/get blueA400() {
      return C99 || CT.C99;
    },
    /*material.blueA700*/get blueA700() {
      return C100 || CT.C100;
    },
    /*material.blue*/get blue() {
      return C92 || CT.C92;
    },
    /*material.blues*/get blues() {
      return C101 || CT.C101;
    },
    /*material.lightBlue50*/get lightBlue50() {
      return C102 || CT.C102;
    },
    /*material.lightBlue100*/get lightBlue100() {
      return C103 || CT.C103;
    },
    /*material.lightBlue200*/get lightBlue200() {
      return C104 || CT.C104;
    },
    /*material.lightBlue300*/get lightBlue300() {
      return C105 || CT.C105;
    },
    /*material.lightBlue400*/get lightBlue400() {
      return C106 || CT.C106;
    },
    /*material.lightBlue500*/get lightBlue500() {
      return C107 || CT.C107;
    },
    /*material.lightBlue600*/get lightBlue600() {
      return C108 || CT.C108;
    },
    /*material.lightBlue700*/get lightBlue700() {
      return C109 || CT.C109;
    },
    /*material.lightBlue800*/get lightBlue800() {
      return C110 || CT.C110;
    },
    /*material.lightBlue900*/get lightBlue900() {
      return C111 || CT.C111;
    },
    /*material.lightBlueA100*/get lightBlueA100() {
      return C112 || CT.C112;
    },
    /*material.lightBlueA200*/get lightBlueA200() {
      return C113 || CT.C113;
    },
    /*material.lightBlueA400*/get lightBlueA400() {
      return C114 || CT.C114;
    },
    /*material.lightBlueA700*/get lightBlueA700() {
      return C115 || CT.C115;
    },
    /*material.lightBlue*/get lightBlue() {
      return C107 || CT.C107;
    },
    /*material.lightBlues*/get lightBlues() {
      return C116 || CT.C116;
    },
    /*material.cyan50*/get cyan50() {
      return C117 || CT.C117;
    },
    /*material.cyan100*/get cyan100() {
      return C118 || CT.C118;
    },
    /*material.cyan200*/get cyan200() {
      return C119 || CT.C119;
    },
    /*material.cyan300*/get cyan300() {
      return C120 || CT.C120;
    },
    /*material.cyan400*/get cyan400() {
      return C121 || CT.C121;
    },
    /*material.cyan500*/get cyan500() {
      return C122 || CT.C122;
    },
    /*material.cyan600*/get cyan600() {
      return C123 || CT.C123;
    },
    /*material.cyan700*/get cyan700() {
      return C124 || CT.C124;
    },
    /*material.cyan800*/get cyan800() {
      return C125 || CT.C125;
    },
    /*material.cyan900*/get cyan900() {
      return C126 || CT.C126;
    },
    /*material.cyanA100*/get cyanA100() {
      return C127 || CT.C127;
    },
    /*material.cyanA200*/get cyanA200() {
      return C128 || CT.C128;
    },
    /*material.cyanA400*/get cyanA400() {
      return C129 || CT.C129;
    },
    /*material.cyanA700*/get cyanA700() {
      return C130 || CT.C130;
    },
    /*material.cyan*/get cyan() {
      return C122 || CT.C122;
    },
    /*material.cyans*/get cyans() {
      return C131 || CT.C131;
    },
    /*material.teal50*/get teal50() {
      return C132 || CT.C132;
    },
    /*material.teal100*/get teal100() {
      return C133 || CT.C133;
    },
    /*material.teal200*/get teal200() {
      return C134 || CT.C134;
    },
    /*material.teal300*/get teal300() {
      return C135 || CT.C135;
    },
    /*material.teal400*/get teal400() {
      return C136 || CT.C136;
    },
    /*material.teal500*/get teal500() {
      return C137 || CT.C137;
    },
    /*material.teal600*/get teal600() {
      return C138 || CT.C138;
    },
    /*material.teal700*/get teal700() {
      return C139 || CT.C139;
    },
    /*material.teal800*/get teal800() {
      return C140 || CT.C140;
    },
    /*material.teal900*/get teal900() {
      return C141 || CT.C141;
    },
    /*material.tealA100*/get tealA100() {
      return C142 || CT.C142;
    },
    /*material.tealA200*/get tealA200() {
      return C143 || CT.C143;
    },
    /*material.tealA400*/get tealA400() {
      return C144 || CT.C144;
    },
    /*material.tealA700*/get tealA700() {
      return C145 || CT.C145;
    },
    /*material.teal*/get teal() {
      return C137 || CT.C137;
    },
    /*material.teals*/get teals() {
      return C146 || CT.C146;
    },
    /*material.green50*/get green50() {
      return C147 || CT.C147;
    },
    /*material.green100*/get green100() {
      return C148 || CT.C148;
    },
    /*material.green200*/get green200() {
      return C149 || CT.C149;
    },
    /*material.green300*/get green300() {
      return C150 || CT.C150;
    },
    /*material.green400*/get green400() {
      return C151 || CT.C151;
    },
    /*material.green500*/get green500() {
      return C152 || CT.C152;
    },
    /*material.green600*/get green600() {
      return C153 || CT.C153;
    },
    /*material.green700*/get green700() {
      return C154 || CT.C154;
    },
    /*material.green800*/get green800() {
      return C155 || CT.C155;
    },
    /*material.green900*/get green900() {
      return C156 || CT.C156;
    },
    /*material.greenA100*/get greenA100() {
      return C157 || CT.C157;
    },
    /*material.greenA200*/get greenA200() {
      return C158 || CT.C158;
    },
    /*material.greenA400*/get greenA400() {
      return C159 || CT.C159;
    },
    /*material.greenA700*/get greenA700() {
      return C160 || CT.C160;
    },
    /*material.green*/get green() {
      return C152 || CT.C152;
    },
    /*material.greens*/get greens() {
      return C161 || CT.C161;
    },
    /*material.lightGreen50*/get lightGreen50() {
      return C162 || CT.C162;
    },
    /*material.lightGreen100*/get lightGreen100() {
      return C163 || CT.C163;
    },
    /*material.lightGreen200*/get lightGreen200() {
      return C164 || CT.C164;
    },
    /*material.lightGreen300*/get lightGreen300() {
      return C165 || CT.C165;
    },
    /*material.lightGreen400*/get lightGreen400() {
      return C166 || CT.C166;
    },
    /*material.lightGreen500*/get lightGreen500() {
      return C167 || CT.C167;
    },
    /*material.lightGreen600*/get lightGreen600() {
      return C168 || CT.C168;
    },
    /*material.lightGreen700*/get lightGreen700() {
      return C169 || CT.C169;
    },
    /*material.lightGreen800*/get lightGreen800() {
      return C170 || CT.C170;
    },
    /*material.lightGreen900*/get lightGreen900() {
      return C171 || CT.C171;
    },
    /*material.lightGreenA100*/get lightGreenA100() {
      return C172 || CT.C172;
    },
    /*material.lightGreenA200*/get lightGreenA200() {
      return C173 || CT.C173;
    },
    /*material.lightGreenA400*/get lightGreenA400() {
      return C174 || CT.C174;
    },
    /*material.lightGreenA700*/get lightGreenA700() {
      return C175 || CT.C175;
    },
    /*material.lightGreen*/get lightGreen() {
      return C167 || CT.C167;
    },
    /*material.lightGreens*/get lightGreens() {
      return C176 || CT.C176;
    },
    /*material.lime50*/get lime50() {
      return C177 || CT.C177;
    },
    /*material.lime100*/get lime100() {
      return C178 || CT.C178;
    },
    /*material.lime200*/get lime200() {
      return C179 || CT.C179;
    },
    /*material.lime300*/get lime300() {
      return C180 || CT.C180;
    },
    /*material.lime400*/get lime400() {
      return C181 || CT.C181;
    },
    /*material.lime500*/get lime500() {
      return C182 || CT.C182;
    },
    /*material.lime600*/get lime600() {
      return C183 || CT.C183;
    },
    /*material.lime700*/get lime700() {
      return C184 || CT.C184;
    },
    /*material.lime800*/get lime800() {
      return C185 || CT.C185;
    },
    /*material.lime900*/get lime900() {
      return C186 || CT.C186;
    },
    /*material.limeA100*/get limeA100() {
      return C187 || CT.C187;
    },
    /*material.limeA200*/get limeA200() {
      return C188 || CT.C188;
    },
    /*material.limeA400*/get limeA400() {
      return C189 || CT.C189;
    },
    /*material.limeA700*/get limeA700() {
      return C190 || CT.C190;
    },
    /*material.lime*/get lime() {
      return C182 || CT.C182;
    },
    /*material.limes*/get limes() {
      return C191 || CT.C191;
    },
    /*material.yellow50*/get yellow50() {
      return C192 || CT.C192;
    },
    /*material.yellow100*/get yellow100() {
      return C193 || CT.C193;
    },
    /*material.yellow200*/get yellow200() {
      return C194 || CT.C194;
    },
    /*material.yellow300*/get yellow300() {
      return C195 || CT.C195;
    },
    /*material.yellow400*/get yellow400() {
      return C196 || CT.C196;
    },
    /*material.yellow500*/get yellow500() {
      return C197 || CT.C197;
    },
    /*material.yellow600*/get yellow600() {
      return C198 || CT.C198;
    },
    /*material.yellow700*/get yellow700() {
      return C199 || CT.C199;
    },
    /*material.yellow800*/get yellow800() {
      return C200 || CT.C200;
    },
    /*material.yellow900*/get yellow900() {
      return C201 || CT.C201;
    },
    /*material.yellowA100*/get yellowA100() {
      return C202 || CT.C202;
    },
    /*material.yellowA200*/get yellowA200() {
      return C203 || CT.C203;
    },
    /*material.yellowA400*/get yellowA400() {
      return C204 || CT.C204;
    },
    /*material.yellowA700*/get yellowA700() {
      return C205 || CT.C205;
    },
    /*material.yellow*/get yellow() {
      return C197 || CT.C197;
    },
    /*material.yellows*/get yellows() {
      return C206 || CT.C206;
    },
    /*material.orange50*/get orange50() {
      return C207 || CT.C207;
    },
    /*material.orange100*/get orange100() {
      return C208 || CT.C208;
    },
    /*material.orange200*/get orange200() {
      return C209 || CT.C209;
    },
    /*material.orange300*/get orange300() {
      return C210 || CT.C210;
    },
    /*material.orange400*/get orange400() {
      return C211 || CT.C211;
    },
    /*material.orange500*/get orange500() {
      return C212 || CT.C212;
    },
    /*material.orange600*/get orange600() {
      return C213 || CT.C213;
    },
    /*material.orange700*/get orange700() {
      return C214 || CT.C214;
    },
    /*material.orange800*/get orange800() {
      return C215 || CT.C215;
    },
    /*material.orange900*/get orange900() {
      return C216 || CT.C216;
    },
    /*material.orangeA100*/get orangeA100() {
      return C217 || CT.C217;
    },
    /*material.orangeA200*/get orangeA200() {
      return C218 || CT.C218;
    },
    /*material.orangeA400*/get orangeA400() {
      return C219 || CT.C219;
    },
    /*material.orangeA700*/get orangeA700() {
      return C220 || CT.C220;
    },
    /*material.orange*/get orange() {
      return C212 || CT.C212;
    },
    /*material.oranges*/get oranges() {
      return C221 || CT.C221;
    },
    /*material.deepOrange50*/get deepOrange50() {
      return C12 || CT.C12;
    },
    /*material.deepOrange100*/get deepOrange100() {
      return C222 || CT.C222;
    },
    /*material.deepOrange200*/get deepOrange200() {
      return C223 || CT.C223;
    },
    /*material.deepOrange300*/get deepOrange300() {
      return C224 || CT.C224;
    },
    /*material.deepOrange400*/get deepOrange400() {
      return C225 || CT.C225;
    },
    /*material.deepOrange500*/get deepOrange500() {
      return C226 || CT.C226;
    },
    /*material.deepOrange600*/get deepOrange600() {
      return C227 || CT.C227;
    },
    /*material.deepOrange700*/get deepOrange700() {
      return C228 || CT.C228;
    },
    /*material.deepOrange800*/get deepOrange800() {
      return C229 || CT.C229;
    },
    /*material.deepOrange900*/get deepOrange900() {
      return C230 || CT.C230;
    },
    /*material.deepOrangeA100*/get deepOrangeA100() {
      return C231 || CT.C231;
    },
    /*material.deepOrangeA200*/get deepOrangeA200() {
      return C232 || CT.C232;
    },
    /*material.deepOrangeA400*/get deepOrangeA400() {
      return C233 || CT.C233;
    },
    /*material.deepOrangeA700*/get deepOrangeA700() {
      return C234 || CT.C234;
    },
    /*material.deepOrange*/get deepOrange() {
      return C226 || CT.C226;
    },
    /*material.deepOranges*/get deepOranges() {
      return C235 || CT.C235;
    },
    /*material.brown50*/get brown50() {
      return C236 || CT.C236;
    },
    /*material.brown100*/get brown100() {
      return C237 || CT.C237;
    },
    /*material.brown200*/get brown200() {
      return C238 || CT.C238;
    },
    /*material.brown300*/get brown300() {
      return C239 || CT.C239;
    },
    /*material.brown400*/get brown400() {
      return C240 || CT.C240;
    },
    /*material.brown500*/get brown500() {
      return C241 || CT.C241;
    },
    /*material.brown600*/get brown600() {
      return C242 || CT.C242;
    },
    /*material.brown700*/get brown700() {
      return C243 || CT.C243;
    },
    /*material.brown800*/get brown800() {
      return C244 || CT.C244;
    },
    /*material.brown900*/get brown900() {
      return C245 || CT.C245;
    },
    /*material.brown*/get brown() {
      return C241 || CT.C241;
    },
    /*material.browns*/get browns() {
      return C246 || CT.C246;
    },
    /*material.grey50*/get grey50() {
      return C247 || CT.C247;
    },
    /*material.grey100*/get grey100() {
      return C248 || CT.C248;
    },
    /*material.grey200*/get grey200() {
      return C249 || CT.C249;
    },
    /*material.grey300*/get grey300() {
      return C250 || CT.C250;
    },
    /*material.grey400*/get grey400() {
      return C251 || CT.C251;
    },
    /*material.grey500*/get grey500() {
      return C252 || CT.C252;
    },
    /*material.grey600*/get grey600() {
      return C253 || CT.C253;
    },
    /*material.grey700*/get grey700() {
      return C254 || CT.C254;
    },
    /*material.grey800*/get grey800() {
      return C255 || CT.C255;
    },
    /*material.grey900*/get grey900() {
      return C256 || CT.C256;
    },
    /*material.grey*/get grey() {
      return C252 || CT.C252;
    },
    /*material.greys*/get greys() {
      return C257 || CT.C257;
    },
    /*material.gray50*/get gray50() {
      return C247 || CT.C247;
    },
    /*material.gray100*/get gray100() {
      return C248 || CT.C248;
    },
    /*material.gray200*/get gray200() {
      return C249 || CT.C249;
    },
    /*material.gray300*/get gray300() {
      return C250 || CT.C250;
    },
    /*material.gray400*/get gray400() {
      return C251 || CT.C251;
    },
    /*material.gray500*/get gray500() {
      return C252 || CT.C252;
    },
    /*material.gray600*/get gray600() {
      return C253 || CT.C253;
    },
    /*material.gray700*/get gray700() {
      return C254 || CT.C254;
    },
    /*material.gray800*/get gray800() {
      return C255 || CT.C255;
    },
    /*material.gray900*/get gray900() {
      return C256 || CT.C256;
    },
    /*material.gray*/get gray() {
      return C252 || CT.C252;
    },
    /*material.blueGrey50*/get blueGrey50() {
      return C258 || CT.C258;
    },
    /*material.blueGrey100*/get blueGrey100() {
      return C259 || CT.C259;
    },
    /*material.blueGrey200*/get blueGrey200() {
      return C260 || CT.C260;
    },
    /*material.blueGrey300*/get blueGrey300() {
      return C261 || CT.C261;
    },
    /*material.blueGrey400*/get blueGrey400() {
      return C262 || CT.C262;
    },
    /*material.blueGrey500*/get blueGrey500() {
      return C263 || CT.C263;
    },
    /*material.blueGrey600*/get blueGrey600() {
      return C264 || CT.C264;
    },
    /*material.blueGrey700*/get blueGrey700() {
      return C265 || CT.C265;
    },
    /*material.blueGrey800*/get blueGrey800() {
      return C266 || CT.C266;
    },
    /*material.blueGrey900*/get blueGrey900() {
      return C267 || CT.C267;
    },
    /*material.blueGrey*/get blueGrey() {
      return C263 || CT.C263;
    },
    /*material.blueGreys*/get blueGreys() {
      return C268 || CT.C268;
    },
    /*material.vanillaRed50*/get vanillaRed50() {
      return C269 || CT.C269;
    },
    /*material.vanillaRed100*/get vanillaRed100() {
      return C270 || CT.C270;
    },
    /*material.vanillaRed200*/get vanillaRed200() {
      return C271 || CT.C271;
    },
    /*material.vanillaRed300*/get vanillaRed300() {
      return C272 || CT.C272;
    },
    /*material.vanillaRed400*/get vanillaRed400() {
      return C273 || CT.C273;
    },
    /*material.vanillaRed500*/get vanillaRed500() {
      return C274 || CT.C274;
    },
    /*material.vanillaRed600*/get vanillaRed600() {
      return C275 || CT.C275;
    },
    /*material.vanillaRed700*/get vanillaRed700() {
      return C276 || CT.C276;
    },
    /*material.vanillaRed800*/get vanillaRed800() {
      return C277 || CT.C277;
    },
    /*material.vanillaRed900*/get vanillaRed900() {
      return C278 || CT.C278;
    },
    /*material.vanillaRedA100*/get vanillaRedA100() {
      return C279 || CT.C279;
    },
    /*material.vanillaRedA200*/get vanillaRedA200() {
      return C280 || CT.C280;
    },
    /*material.vanillaRedA400*/get vanillaRedA400() {
      return C281 || CT.C281;
    },
    /*material.vanillaRedA700*/get vanillaRedA700() {
      return C282 || CT.C282;
    },
    /*material.vanillaRed*/get vanillaRed() {
      return C274 || CT.C274;
    },
    /*material.vanillaGreen50*/get vanillaGreen50() {
      return C283 || CT.C283;
    },
    /*material.vanillaGreen100*/get vanillaGreen100() {
      return C284 || CT.C284;
    },
    /*material.vanillaGreen200*/get vanillaGreen200() {
      return C285 || CT.C285;
    },
    /*material.vanillaGreen300*/get vanillaGreen300() {
      return C286 || CT.C286;
    },
    /*material.vanillaGreen400*/get vanillaGreen400() {
      return C287 || CT.C287;
    },
    /*material.vanillaGreen500*/get vanillaGreen500() {
      return C288 || CT.C288;
    },
    /*material.vanillaGreen600*/get vanillaGreen600() {
      return C289 || CT.C289;
    },
    /*material.vanillaGreen700*/get vanillaGreen700() {
      return C290 || CT.C290;
    },
    /*material.vanillaGreen800*/get vanillaGreen800() {
      return C291 || CT.C291;
    },
    /*material.vanillaGreen900*/get vanillaGreen900() {
      return C292 || CT.C292;
    },
    /*material.vanillaGreenA100*/get vanillaGreenA100() {
      return C293 || CT.C293;
    },
    /*material.vanillaGreenA200*/get vanillaGreenA200() {
      return C294 || CT.C294;
    },
    /*material.vanillaGreenA400*/get vanillaGreenA400() {
      return C295 || CT.C295;
    },
    /*material.vanillaGreenA700*/get vanillaGreenA700() {
      return C296 || CT.C296;
    },
    /*material.vanillaGreen*/get vanillaGreen() {
      return C288 || CT.C288;
    },
    /*material.vanillaBlue50*/get vanillaBlue50() {
      return C297 || CT.C297;
    },
    /*material.vanillaBlue100*/get vanillaBlue100() {
      return C298 || CT.C298;
    },
    /*material.vanillaBlue200*/get vanillaBlue200() {
      return C299 || CT.C299;
    },
    /*material.vanillaBlue300*/get vanillaBlue300() {
      return C300 || CT.C300;
    },
    /*material.vanillaBlue400*/get vanillaBlue400() {
      return C301 || CT.C301;
    },
    /*material.vanillaBlue500*/get vanillaBlue500() {
      return C302 || CT.C302;
    },
    /*material.vanillaBlue600*/get vanillaBlue600() {
      return C303 || CT.C303;
    },
    /*material.vanillaBlue700*/get vanillaBlue700() {
      return C304 || CT.C304;
    },
    /*material.vanillaBlue800*/get vanillaBlue800() {
      return C305 || CT.C305;
    },
    /*material.vanillaBlue900*/get vanillaBlue900() {
      return C306 || CT.C306;
    },
    /*material.vanillaBlueA100*/get vanillaBlueA100() {
      return C307 || CT.C307;
    },
    /*material.vanillaBlueA200*/get vanillaBlueA200() {
      return C308 || CT.C308;
    },
    /*material.vanillaBlueA400*/get vanillaBlueA400() {
      return C309 || CT.C309;
    },
    /*material.vanillaBlueA700*/get vanillaBlueA700() {
      return C310 || CT.C310;
    },
    /*material.vanillaBlue*/get vanillaBlue() {
      return C302 || CT.C302;
    },
    /*material.vanillaYellow50*/get vanillaYellow50() {
      return C311 || CT.C311;
    },
    /*material.vanillaYellow100*/get vanillaYellow100() {
      return C312 || CT.C312;
    },
    /*material.vanillaYellow200*/get vanillaYellow200() {
      return C313 || CT.C313;
    },
    /*material.vanillaYellow300*/get vanillaYellow300() {
      return C314 || CT.C314;
    },
    /*material.vanillaYellow400*/get vanillaYellow400() {
      return C315 || CT.C315;
    },
    /*material.vanillaYellow500*/get vanillaYellow500() {
      return C316 || CT.C316;
    },
    /*material.vanillaYellow600*/get vanillaYellow600() {
      return C317 || CT.C317;
    },
    /*material.vanillaYellow700*/get vanillaYellow700() {
      return C318 || CT.C318;
    },
    /*material.vanillaYellow800*/get vanillaYellow800() {
      return C319 || CT.C319;
    },
    /*material.vanillaYellow900*/get vanillaYellow900() {
      return C320 || CT.C320;
    },
    /*material.vanillaYellowA100*/get vanillaYellowA100() {
      return C321 || CT.C321;
    },
    /*material.vanillaYellowA200*/get vanillaYellowA200() {
      return C322 || CT.C322;
    },
    /*material.vanillaYellowA400*/get vanillaYellowA400() {
      return C323 || CT.C323;
    },
    /*material.vanillaYellowA700*/get vanillaYellowA700() {
      return C324 || CT.C324;
    },
    /*material.vanillaYellow*/get vanillaYellow() {
      return C316 || CT.C316;
    },
    /*material.amber50*/get amber50() {
      return C325 || CT.C325;
    },
    /*material.amber100*/get amber100() {
      return C326 || CT.C326;
    },
    /*material.amber200*/get amber200() {
      return C327 || CT.C327;
    },
    /*material.amber300*/get amber300() {
      return C328 || CT.C328;
    },
    /*material.amber400*/get amber400() {
      return C329 || CT.C329;
    },
    /*material.amber500*/get amber500() {
      return C330 || CT.C330;
    },
    /*material.amber600*/get amber600() {
      return C331 || CT.C331;
    },
    /*material.amber700*/get amber700() {
      return C332 || CT.C332;
    },
    /*material.amber800*/get amber800() {
      return C333 || CT.C333;
    },
    /*material.amber900*/get amber900() {
      return C334 || CT.C334;
    },
    /*material.amberA100*/get amberA100() {
      return C335 || CT.C335;
    },
    /*material.amberA200*/get amberA200() {
      return C336 || CT.C336;
    },
    /*material.amberA400*/get amberA400() {
      return C337 || CT.C337;
    },
    /*material.amberA700*/get amberA700() {
      return C338 || CT.C338;
    },
    /*material.amber*/get amber() {
      return C330 || CT.C330;
    },
    /*material.ambers*/get ambers() {
      return C339 || CT.C339;
    },
    /*material.linkDefault*/get linkDefault() {
      return C94 || CT.C94;
    },
    /*material.linkVisited*/get linkVisited() {
      return C62 || CT.C62;
    },
    /*material.linkActive*/get linkActive() {
      return C19 || CT.C19;
    },
    /*material.materialColors*/get materialColors() {
      let t0;
      return MapOfStringL$ColorL().unmodifiable((t0 = new _js_helper.LinkedMap.new(), (() => {
        t0[$addAll](material.reds);
        t0[$addAll](material.pinks);
        t0[$addAll](material.purples);
        t0[$addAll](material.deepPurples);
        t0[$addAll](material.indigos);
        t0[$addAll](material.blues);
        t0[$addAll](material.lightBlues);
        t0[$addAll](material.cyans);
        t0[$addAll](material.teals);
        t0[$addAll](material.greens);
        t0[$addAll](material.lightGreens);
        t0[$addAll](material.limes);
        t0[$addAll](material.yellows);
        t0[$addAll](material.oranges);
        t0[$addAll](material.deepOranges);
        t0[$addAll](material.browns);
        t0[$addAll](material.greys);
        t0[$addAll](material.blueGreys);
        t0[$addAll](material.ambers);
        return t0;
      })()));
    }
  }, true);
  dart.trackLibraries("packages/angular_components/utils/color/material", {
    "package:angular_components/utils/color/material.dart": material
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["material.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wEA4zBsC;AAChC,2BAAmB,AAAe,AAAK;AACvC,sBAAc,AAAY,WAAD,cAAc,AAAc,+BAAC,gBAAgB;AAOxE,IANF,AAAe,kCAAQ,SAAQ,MAAY;AACrC,qBAAW,AAAY,WAAD,cAAc,KAAK;AAC7C,UAAa,aAAT,QAAQ,iBAAG,WAAW;AACF,QAAtB,cAAc,QAAQ;AACC,QAAvB,mBAAmB,IAAI;;;AAG3B,UAAO,iBAAgB;EACzB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAh0BM,oBAAW;;;MAOX,cAAK;;;MACL,cAAK;;;MAGL,sBAAa;;;MACb,qBAAY;;;MACZ,uBAAc;;;MACd,wBAAe;;;MAGf,0BAAiB;;;MACjB,yBAAgB;;;MAChB,2BAAkB;;;MAClB,4BAAmB;;;MAEnB,sBAAa;;;MACb,uBAAc;;;MAGd,yBAAgB;;;MAChB,yBAAgB;;;MAChB,8BAAqB;;;MACrB,8BAAqB;;;MACrB,gCAAuB;;;MACvB,gCAAuB;;;MACvB,iCAAwB;;;MACxB,iCAAwB;;;MAGxB,oBAAW;;;MACX,mBAAU;;;MACV,0BAAiB;;;MAIjB,oBAAW;;;MACX,sBAAa;;;MACb,iBAAQ;;;MACR,qBAAY;;;MACZ,oBAAW;;;MAEX,wBAAe;;;MACf,0BAAiB;;;MACjB,qBAAY;;;MACZ,yBAAgB;;;MAChB,wBAAe;;;MAIf,oBAAW;;;MACX,aAAI;;;MACJ,qBAAY;;;MAEZ,wBAAe;;;MACf,iBAAQ;;;MACR,yBAAgB;;;MAGhB,uBAAc;;;MACd,4BAAmB;;;MACnB,iCAAwB;;;MAGxB,cAAK;;;MACL,eAAM;;;MACN,eAAM;;;MACN,eAAM;;;MACN,eAAM;;;MACN,eAAM;;;MACN,eAAM;;;MACN,eAAM;;;MACN,eAAM;;;MACN,eAAM;;;MAEN,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,YAAG;;;MAEH,aAAI;;;MAkBJ,eAAM;;;MACN,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MAEP,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,aAAI;;;MAEJ,cAAK;;;MAkBL,iBAAQ;;;MACR,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MAET,mBAAU;;;MACV,mBAAU;;;MACV,mBAAU;;;MACV,mBAAU;;;MACV,eAAM;;;MAEN,gBAAO;;;MAkBP,qBAAY;;;MACZ,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MAEb,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,mBAAU;;;MAEV,oBAAW;;;MAkBX,iBAAQ;;;MACR,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MAET,mBAAU;;;MACV,mBAAU;;;MACV,mBAAU;;;MACV,mBAAU;;;MACV,eAAM;;;MAEN,gBAAO;;;MAkBP,eAAM;;;MACN,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MAEP,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,aAAI;;;MAEJ,cAAK;;;MAkBL,oBAAW;;;MACX,qBAAY;;;MACZ,qBAAY;;;MACZ,qBAAY;;;MACZ,qBAAY;;;MACZ,qBAAY;;;MACZ,qBAAY;;;MACZ,qBAAY;;;MACZ,qBAAY;;;MACZ,qBAAY;;;MAEZ,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,kBAAS;;;MAET,mBAAU;;;MAkBV,eAAM;;;MACN,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MAEP,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,aAAI;;;MAEJ,cAAK;;;MAkBL,eAAM;;;MACN,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MAEP,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,aAAI;;;MAEJ,cAAK;;;MAkBL,gBAAO;;;MACP,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MAER,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,cAAK;;;MAEL,eAAM;;;MAkBN,qBAAY;;;MACZ,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MAEb,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,mBAAU;;;MAEV,oBAAW;;;MAkBX,eAAM;;;MACN,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MAEP,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,aAAI;;;MAEJ,cAAK;;;MAkBL,iBAAQ;;;MACR,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MAET,mBAAU;;;MACV,mBAAU;;;MACV,mBAAU;;;MACV,mBAAU;;;MACV,eAAM;;;MAEN,gBAAO;;;MAkBP,iBAAQ;;;MACR,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MAET,mBAAU;;;MACV,mBAAU;;;MACV,mBAAU;;;MACV,mBAAU;;;MACV,eAAM;;;MAEN,gBAAO;;;MAkBP,qBAAY;;;MACZ,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MAEb,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,mBAAU;;;MAEV,oBAAW;;;MAkBX,gBAAO;;;MACP,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,cAAK;;;MAEL,eAAM;;;MAcN,eAAM;;;MACN,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,aAAI;;;MAEJ,cAAK;;;MAaL,eAAM;;;MACN,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,gBAAO;;;MACP,aAAI;;;MAGJ,mBAAU;;;MACV,oBAAW;;;MACX,oBAAW;;;MACX,oBAAW;;;MACX,oBAAW;;;MACX,oBAAW;;;MACX,oBAAW;;;MACX,oBAAW;;;MACX,oBAAW;;;MACX,oBAAW;;;MACX,iBAAQ;;;MAER,kBAAS;;;MAgBT,qBAAY;;;MACZ,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MACb,sBAAa;;;MAEb,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,mBAAU;;;MAGV,uBAAc;;;MACd,wBAAe;;;MACf,wBAAe;;;MACf,wBAAe;;;MACf,wBAAe;;;MACf,wBAAe;;;MACf,wBAAe;;;MACf,wBAAe;;;MACf,wBAAe;;;MACf,wBAAe;;;MAEf,yBAAgB;;;MAChB,yBAAgB;;;MAChB,yBAAgB;;;MAChB,yBAAgB;;;MAChB,qBAAY;;;MAGZ,sBAAa;;;MACb,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MACd,uBAAc;;;MAEd,wBAAe;;;MACf,wBAAe;;;MACf,wBAAe;;;MACf,wBAAe;;;MACf,oBAAW;;;MAGX,wBAAe;;;MACf,yBAAgB;;;MAChB,yBAAgB;;;MAChB,yBAAgB;;;MAChB,yBAAgB;;;MAChB,yBAAgB;;;MAChB,yBAAgB;;;MAChB,yBAAgB;;;MAChB,yBAAgB;;;MAChB,yBAAgB;;;MAEhB,0BAAiB;;;MACjB,0BAAiB;;;MACjB,0BAAiB;;;MACjB,0BAAiB;;;MACjB,sBAAa;;;MAGb,gBAAO;;;MACP,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MACR,iBAAQ;;;MAER,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,kBAAS;;;MACT,cAAK;;;MAEL,eAAM;;;MAkBN,oBAAW;;;MACX,oBAAW;;;MACX,mBAAU;;;MAGV,uBAAc;;YAAG,0EAAgC;AACnD,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO;AACP,oBAAO","file":"material.unsound.ddc.js"}');
  // Exports:
  return {
    utils__color__material: material
  };
}));

//# sourceMappingURL=material.unsound.ddc.js.map
