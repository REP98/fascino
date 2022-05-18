function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
	* Fascino  
	* @version v1.0.0
	* @copyright 2021-2022 Robert Pérez.
	* @author Robert Pérez <delfinmundo@gmail.com>
	* 
	* @license Licensed under MIT
	*/
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var camelcase = {
  exports: {}
};
const UPPERCASE = /(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21])/;
const LOWERCASE = /(?:[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]|\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43])/;
const LEADING_CAPITAL = /^(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21])(?!(?:[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]))/g;
const IDENTIFIER = /((?:[0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u0669\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71-\u0B77\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0BE6-\u0BF2\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D63\u0D66-\u0D78\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1713\u171F-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1ABF\u1AC0\u1ACC-\u1ACE\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4C\u1B50-\u1B59\u1B80-\u1BA9\u1BAC-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2189\u2150-\u2182\u2460-\u249B\u24B6-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA805\uA807-\uA827\uA830-\uA835\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD27\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC52-\uDC6F\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD32\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB5\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD47\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])|$)/;
const SEPARATORS = /[_.\- ]+/;
const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (isLastCharLower && UPPERCASE.test(character)) {
      string = string.slice(0, i) + '-' + string.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
      string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
    }
  }

  return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
  LEADING_CAPITAL.lastIndex = 0;
  return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
  SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
  NUMBERS_AND_IDENTIFIER.lastIndex = 0;
  return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier)).replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase$1 = (input, options) => {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }

  options = _extends({
    pascalCase: false,
    preserveConsecutiveUppercase: false
  }, options);

  if (Array.isArray(input)) {
    input = input.map(x => x.trim()).filter(x => x.length).join('-');
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return '';
  }

  const toLowerCase = options.locale === false ? string => string.toLowerCase() : string => string.toLocaleLowerCase(options.locale);
  const toUpperCase = options.locale === false ? string => string.toUpperCase() : string => string.toLocaleUpperCase(options.locale);

  if (input.length === 1) {
    return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
  }

  const hasUpperCase = input !== toLowerCase(input);

  if (hasUpperCase) {
    input = preserveCamelCase(input, toLowerCase, toUpperCase);
  }

  input = input.replace(LEADING_SEPARATORS, '');

  if (options.preserveConsecutiveUppercase) {
    input = preserveConsecutiveUppercase(input, toLowerCase);
  } else {
    input = toLowerCase(input);
  }

  if (options.pascalCase) {
    input = toUpperCase(input.charAt(0)) + input.slice(1);
  }

  return postProcess(input, toUpperCase);
};

camelcase.exports = camelCase$1; // TODO: Remove this for the next major release

camelcase.exports.default = camelCase$1;
var camelCase = camelcase.exports;
/**
 * Alias String.prototype.valueOf
 * @memberOf module:Utils
 * @type {Function}
 */

var strValue = String.prototype.valueOf;
/**
 * Alias Object.prototype.toString
 * @memberOf module:Utils
 * @type {Function}
 */

var toStr = Object.prototype.toString;
/**
 * Valida String u Object
 * @memberOf module:Utils
 * @param  {(String|Object)} value la cadena a evaluar
 *
 * @return {Boolean} 
 */

var tryStringObject = function tryStringObject(value) {
  try {
    strValue.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
/**
 * Alias Object.defineProperty
 * @memberOf module:Utils
 * @type {Function}
 */


var defineProperty = Object.defineProperty;
/**
 * Alias Object.getOwnPropertyDescriptor
 * @memberOf module:Utils
 * @type {Function}
 */

var gOPD = Object.getOwnPropertyDescriptor;
/**
 * Verifica si es una Array
 * @memberOf module:Utils
 * @function isArray
 * @return {Boolean}
 */

var isArray = Array.isArray;
/**
 * Funtions
 */

/**
 * Establece Propiedades de los Objetos
 * @memberOf module:Utils
 * @private
 * @param {Object} target el Objecto
 * @param {Object} opt    opciones del objecto
 */

function setPropertyObj(target, opt) {
  if (defineProperty && opt.name === "__proto__") {
    defineProperty(target, opt.name, {
      enumerable: true,
      configurable: true,
      value: opt.newValue,
      writable: true
    });
  } else {
    target[opt.name] = opt.newValue;
  }
}
/**
 * Obtiene una propiedad de un objecto
 * @memberOf module:Utils
 * @private
 * @param  {Object} obj  El Objecto
 * @param  {String} name Nombre de la propiedad
 *
 * @return {(Void|*)}
 */


function getProperty(obj, name) {
  if (name === "__proto__") {
    if (!hasProp(obj, name)) {
      return void 0;
    } else if (gOPD) {
      return gOPD(obj, name).value;
    }
  }

  return obj[name];
}
/**
 * Extiende un objeto o matriz y combinar sus elementos
 * @memberOf module:Utils
 * @function extend
 * @param {...*} Argumentos Lista de Objetos a iterar
 * @return {(String|Object|Array)} retorna el elemento, o la unión de ellos
 */


function extend() {
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target,
      deep,
      i,
      length = 0;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    return void 0;
  }

  target = args[0];
  length = args.length;
  i = 1;
  deep = false;

  if (typeof target === "boolean") {
    deep = target;
    target = args[1] || {};
    i = 2;
  }

  if (empty(target) || _typeof(target) !== "object" && typeof target !== "function") {
    target = {};
  }

  for (; i < length; ++i) {
    if (args[i] !== null) {
      options = args[i];

      for (name in options) {
        if (hasProp(options, name)) {
          src = getProperty(target, name);
          copy = getProperty(options, name);

          if (target !== copy) {
            copyIsArray = isArrayish(copy);

            if (deep && copy && (isObject(copy) || copyIsArray)) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && isArrayish(src) ? src : [];
              } else {
                clone = src && isObject(src) ? src : {};
              }

              setPropertyObj(target, {
                name: name,
                newValue: extend(deep, clone, copy)
              });
            } else if (!not(copy)) {
              setPropertyObj(target, {
                name: name,
                newValue: copy
              });
            }
          }
        }
      }
    }
  }

  return target;
}
/**
 * Verifica si es un texto valido
 * @memberOf module:Utils
 * @function isString
 * @param  {*}  value
 * @return {Boolean}  verdadero si es un string
 */


function isString(value) {
  var strClass = "[object String]",
      hasToStringTag = typeof Symbol === "function" && _typeof(Symbol.toStringTag) === "symbol";

  if (typeof value === "string") {
    return true;
  }

  if (_typeof(value) !== "object") {
    return false;
  }

  return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
}
/**
 * Verifica si es un objecto
 * @memberOf module:Utils
 * @function isObject
 * @param  {*}  obj
 * @return {Boolean} verdadero si es un objecto
 */


function isObject(obj) {
  var proto;

  if (!obj || toStr.call(obj) !== "[object Object]") {
    return false;
  }

  proto = obj.prototype !== undefined;

  if (!proto) {
    return true;
  }

  return proto.constructor && typeof proto.constructor === "function";
}
/**
 * Verifica si es una Matriz
 * @memberOf module:Utils
 * @function isArrayish
 * @param  {*}  obj
 * @return {Boolean}  Verdadero si es un array
 */


function isArrayish(obj) {
  if (!obj) {
    return false;
  }

  return obj instanceof Array || isArray(obj) || obj.length >= 0 && obj.splice instanceof Function;
}
/**
 * Verifica si es un número
 * @function isNumber
 * @memberOf module:Utils
 * @param  {*}  num
 * @return {Boolean}  verdadero si es un tipo numérico
 */


function isNumber(num) {
  if (typeof num === "number") {
    return num - num === 0;
  }

  if (typeof num === "string" && num.trim() !== "") {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }

  return false;
}
/**
 * Verifica si es una función
 * @memberOf module:Utils
 * @function isFunction
 * @param  {*} fn
 * @return {Boolean}  verdadero si es una función
 */


function isFunction$1(fn) {
  if (!fn) {
    return false;
  }

  var string = toStr.call(fn);
  return string === "[object Function]" || typeof fn === "function" && string !== "[object RegExp]" || typeof window !== "undefined" && ( // IE8 and below
  fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
}
/**
 * Busca y valida la propiedad del objeto dato
 * @memberOf module:Utils
 * @function hasProp
 * @param  {Object}  obj  objeto a verificar
 * @param  {String}  prop propiedad a buscar
 * @return {Boolean}  verdadero si la propiedad existe dentro del objeto
 */


function hasProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/**
 * Extensión de [object|function|array|string].toString([native])
 * @memberOf module:Utils
 * @function toString
 * @param  {string} arg tipo que contiene la función toString
 * @return {(Boolean|String)}     El resultado del toString o falso
 */


function toString(arg) {
  return !empty(arg) && isFunction$1(arg.toString) ? arg.toString() : false;
}
/**
 * Verifica si es un selector valido
 * @memberOf module:Utils
 * @function isSelector
 * @param  {String}  selector
 * @return {Boolean}  Verdadero si es un selector
 */


function isSelector(selector) {
  if (!isString(selector)) {
    return false;
  }

  try {
    document.querySelector(selector);
  } catch (error) {
    return false;
  }

  return true;
}
/**
 * Verifica si la variable dada esta vaciá
 * @memberOf module:Utils
 * @function empty
 * @example
 * let a
 * empty(a) // true
 * empty(0) // true
 * empty(0.0) // true
 * empty(false) // true
 * empty([]) // true
 * empty({}) // true
 * empty("") // true
 * empty() // true
 * empty(1) // false
 * @param  {*} arg Variable, Objecto, matriz etc.. a verificar
 * @return {Boolean}  Verdadero si esta vació
 */


function empty(arg) {
  var und;
  var emptyVal = [undefined, null, false, 0, 0.0, "", "0", "0.0", und],
      l = emptyVal.length;

  if (typeof arg === "undefined") {
    return true;
  }

  for (var i = 0; i < l; i++) {
    if (arg === emptyVal[i]) return true;
  }

  if (isArrayish(arg)) {
    return arg.length === 0;
  }

  if (isObject(arg)) {
    var o = 0;

    for (var _i in arg) {
      if (hasProp(arg, _i)) {
        o++;
      }
    }

    return o === 0;
  }

  return false;
}
/**
 * Verifica si la variable dada no es nula o indefinida
 * @memberOf module:Utils
 * @function not
 * @param  {*} arg Variable
 * @return {Boolean} verdadero si esta nula o indefinida
 */


function not(arg) {
  return arg === undefined || arg === null;
}
/**
 * Obtiene los estilos computados del elemento
 * @memberOf module:Utils
 * @function getStyleComputed
 * @param  {Element} el El Elemento
 * @param  {String} prop La Propiedad
 * @param  {String} pseudoElt PseudoElt
 * @return {Array}
 */


function getStyleComputed(el, prop) {
  var pseudoElt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  if (empty(el) || !isElement(el)) {
    return;
  }

  if (!empty(prop) && prop.indexOf(":") === 0) {
    pseudoElt = prop;
    prop = undefined;
  }

  if (empty(prop)) {
    return window.getComputedStyle(el, pseudoElt);
  }

  if (isArrayish(prop)) {
    var ListProperty = {},
        propertys = window.getComputedStyle(el, pseudoElt);
    prop.forEach(function (property) {
      ListProperty[property] = propertys[property];
    });
    return ListProperty;
  }

  var propertyStyle = window.getComputedStyle(el, pseudoElt);
  return propertyStyle[prop];
}
/**
 * Verifica si es un elemento
 * @memberOf module:Utils
 * @function isElement
 * @param  {*}  el
 * @return {Boolean}  Verdadero si el es un Elemento del DOM
 */


function isElement(el) {
  if (empty(el)) {
    return false;
  }

  if (isString(el)) {
    return isSelector(el);
  }

  if (el instanceof HTMLElement) {
    return true;
  }

  return _typeof(el) === "object" && el.nodeType === 1 && isString(el.nodeName);
}
/**
 * Verifica si es un Elemento Fascino
 * @memberOf module:Utils
 * @function isFascinoElement
 * @param  {*}  el
 * @return {Boolean}    Verdadero si es un elemento de Fascino o _$
 */


function isFascinoElement(el) {
  if (empty(el)) {
    return false;
  }

  if (el.constructor && el.constructor.name.toUpperCase() === "FASCINO") {
    return true;
  }

  return hasProp(el, "Elem");
}
/**
 * Verifica si el elemento es visible en el DOM
 * @memberOf module:Utils
 * @function isVisible
 * @param  {(String|Element)}  el
 * @return {Boolean}    Verdadero si es visible
 */


function isVisible(el) {
  if (empty(el)) {
    return false;
  }

  var elem = !isElement(el) ? null : isSelector(el) ? document.querySelector(el) : el;

  if (empty(elem)) {
    return false;
  }

  var Body = document.querySelector("body"),
      HTML = document.querySelector("html");

  while (elem && elem !== Body && elem !== HTML) {
    var property = getStyleComputed(elem, ["display", "opacity", "visibility"]);

    if (property.display === "none") {
      return false;
    }

    if (toString(property.opacity) === "0") {
      return false;
    }

    if (property.visibility === "hidden") {
      return false;
    }

    elem = elem.parentNode;
  }

  return true;
}
/**
 * Verifica si el elemento esta oculto
 * @memberOf module:Utils
 * @function isHiden
 * @param  {(String|Element)}  el
 * @return {Boolean}    Verdadero si esta oculto
 */


function isHiden$1(el) {
  return el.hidden || !isVisible(el);
}
/**
 * Valida una URL
 * @memberOf module:Utils
 * @function isURL
 * @param  {(String|URL)}  u URI a validar
 * @return {Boolean}
 */


function isURL(u) {
  return u instanceof URL || /(http|https|ftp):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(u);
}
/**
 * Combinar 2 array
 * @memberOf module:Utils
 * @function merge
 * @param  {Array} n1 Matriz n1
 * @param  {Array} n2 Matriz n2
 * @return {Array}    El array resultante
 */


function merge(n1, n2) {
  var l = +n2.length,
      j = 0,
      i = n1.length;

  for (; j < l; j++) {
    n1[i++] = n2[j];
  }

  n1.length = i;
  return n1;
}
/**
 * ForEach Personalizado.
 * <p>Extiende la funcionalidad del forEach por defecto de los Array para todo tipo de elementos.</p>
 * <p>Para saber más visite <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" alt="Docuementación de ForEach">forEach en Developer Mozilla</a></p>
 * @memberOf module:Utils
 * @function each
 * @param  {(Object|Array)}   arr      El Objecto a iterar
 * @param  {Function} callback Función a ejecutar
 * @param  {(Object|Array)}   thisArg  Valor de la constante this
 */


function each(arr, callback, thisArg) {
  if (empty(arr)) {
    return;
  }

  if (typeof arr.forEach === "function") {
    return arr.forEach(callback, thisArg);
  }

  if (!isFunction$1(callback)) {
    return arr;
  }

  var T,
      k,
      O = Object(arr),
      len = O.length >>> 0;

  if (len === 0 && isObject(O)) {
    len = Object.keys(O).length;
  }

  if (!empty(thisArg)) {
    T = thisArg;
  }

  for (k in O) {
    if (hasProp(O, k)) {
      var KeyValue = O[k];
      callback.call(T, KeyValue, k, O);
    }
  }
}
/**
 * <p>Analiza y crea un nuevo elemento script que añada al body</p>
 * <p>Util para el uso de {@link Plugins.Ajax.XHR Ajax}, y cargas de html en linea</p>
 * @memberOf module:Utils
 * @function createScript
 * @param  {(String|Element|Array)} script
 * @return {Element}        El nuevo Script
 */


function createScript(script) {
  var s = document.createElement("script"),
      _s;

  s.type = "text/javascript";

  if (empty(script)) {
    return _$(s);
  }

  _s = _$(script).Elem[0];

  if (!empty(_s.src)) {
    s.src = _s.src;
  } else {
    s.textContent = _s.innerText;
  }

  document.body.appendChild(s);

  if (_s.parentNode) {
    _s.parentNode.removeChild(_s);
  }

  return s;
}
/**
 * Normaliza y busca los elementos Script
 * @memberOf module:Utils
 * @function script
 * @param  {Element} el El elemento script o padre del Script
 * @return {void}
 */


function script(el) {
  if (empty(el)) {
    return createScript();
  }

  var _el = _$(el).Elem[0];

  if (_el.tagName && _el.tagName === "SCRIPT") {
    createScript(_el);
  } else {
    _$(_el).find("script").each(function (s) {
      createScript(s);
    });
  }
}
/**
 * Esta función recibe una etiqueta e intenta crear un Object HTMLElement de la misma
 * @memberOf module:Utils
 * @function parseHTML
 * @param  {String} data el texto HTML
 * @return {(Element|Array)}  El nuevo objeto o una matriz
 */


function parseHTML(data) {
  var base,
      singleTag,
      result = [],
      ctx,
      _context,
      regexpSingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // eslint-disable-line


  if (typeof data !== "string") {
    return [];
  }

  data = data.trim();
  ctx = document.implementation.createHTMLDocument("");
  base = ctx.createElement("base");
  base.href = document.location.href;
  ctx.head.appendChild(base);
  _context = ctx.body;
  singleTag = regexpSingleTag.exec(data);

  if (singleTag) {
    result.push(document.createElement(singleTag[1]));
  } else {
    _context.innerHTML = data;

    for (var i = 0; i < _context.childNodes.length; i++) {
      result.push(_context.childNodes[i]);
    }
  }

  return result;
}
/**
 * Regula y normaliza el nombre de un atributo, función, o variable para su uso en Javascript
 * @memberOf module:Utils
 * @function normName
 * @param  {String} name variable
 * @return {(String|void)}  el nombre normalizado o indefinido
 */


function normName(name) {
  return typeof name !== "string" ? undefined : name.replace(/-/g, "").toLowerCase();
}
/**
 * Transforma un Byte en su unidad correspondiente
 * @memberOf module:Utils
 * @function formatBytes
 * @param  {Number} bytes    Bytes a dar formato
 * @param  {Number} decimals Cantidad de decimales a mostrar
 * @return {String}
 */


function formatBytes(bytes) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (bytes === 0) return "0 Bytes";
  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
/**
 * Establece opciones por defecto a los Simple plugins
 * @memberOf module:Utils
 * @function SetOptinsOfData
 * @param  {(Element|Fascino|String)} el      Elemento
 * @param  {Object} defaults Opciones por defecto
 * @return {Object}         Nuevas Opciones
 */


function setOptionsOfData(el, defaults) {
  var o = {},
      data = _$(el).data();

  each(data, function (d, i) {
    if (hasProp(defaults, i)) {
      try {
        o[i] = JSON.parse(d);
      } catch (e) {
        o[i] = d;
      }
    }
  });
  return extend({}, defaults, o);
}
/**
 * Genera un numero aleatorio entre rangos
 * @memberOf module:Utils
 * @function random
 * @param  {(Number|Undefined)} min Número minino
 * @param  {(Number|Undefined)} max Número máximo
 * @return {Number}      Resultado aleatorio
 */


function random(min, max) {
  if (min == undefined && max == undefined) {
    return Math.random();
  } else if (min == undefined || max == undefined) {
    var base = min || max;
    return Math.floor(Math.random() * base);
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
/**
 * Obtiene un valor Aleatorio de una Matriz o un Objeto
 * @memberOf module:Utils
 * @function randomMap
 * @param  {(Object|String)} arr Matriz u Objecto
 * @return {(Number|*)}     Valor de la Matriz u Objecto o -1 si no tiene éxito
 */


function randomMap(arr) {
  if (empty(arr)) {
    return -1;
  }

  if (isArrayish(arr)) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  if (isObject(arr)) {
    var k = Object.keys(arr);
    return arr[k[Math.floor(Math.random() * k.length)]];
  }

  return -1;
}
/**
 * Convierte los datos tipo texto JSON pasados por atributos a un objecto valido
 * @memberOf module:Utils
 * @function normalizeData
 * @param  {String} data
 * @return {Object} El objeto JSON
 */


function normalizeData(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
}
/**
 * Valida y obtiene un elemento dado
 * @memberOf module:Utils
 * @function normalizeElements
 * @param  {(String|Array|Fascino)} s
 * @return {(Object|Element|Array|undefined)}   El elemento en su expresión para su uso
 */


function normalizeElements(s) {
  var result;

  if (isString(s)) {
    result = isSelector(s) ? _$(s) : parseHTML(s);
  } else if (isElement(s)) {
    result = [s];
  } else if (isFascinoElement(s)) {
    result = s;
  } else if (isArrayish(s)) {
    result = s;
  }

  return result;
}
/**
 * Genera un Identificador único basado en la fecha y hora actual
 * @memberOf module:Utils
 * @function uniqueId
 * @param  {String} prefix Prefijo del identificador
 * @return {String}        Identificador
 */


function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "fs";
  var d = new Date().getTime();
  return (prefix !== "" ? prefix + "-" : "") + "xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
  });
}
/**
 * Genera una cadena HTML codificada para mostrar en pre o navegador
 * @memberOf module:Utils
 * @function htmlEntities
 * @param  {String} str Cadena de código Html
 * @example
 * <div>
 *   <pre></pre>
 *   <script>
 *   _$("pre").html(_$.htmlEntities("<section><h2>Hola Mundo</h2></section>"))
 *   </script>
 * </div>
 * @return {String}
 */


function htmlEntities(str) {
  return String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace('/"/g', "&quot;");
}
/**
 * Limpia un texto pre-codificado
 * @memberOf module:Utils
 * @function cleanPreCode
 * @param  {String} textContent Texto
 * @return {String}
 */


function cleanPreCode(textContent) {
  var txt = textContent.replace(/^[\r\n]+/, "") // strip leading newline
  .replace(/\s+$/g, ""),
      mat,
      str,
      re = /^[\t ]+/gm,
      len,
      min = 1e3;

  if (/^\S/gm.test(txt)) {
    return txt;
  }
  /* jshint -W084 */

  /* eslint-disable-next-line */


  while (mat = re.exec(txt)) {
    len = mat[0].length;

    if (len < min) {
      min = len;
      str = mat[0];
    }
  }

  if (min === 1e3) {
    return;
  }

  return txt.replace(new RegExp("^" + str, "gm"), "").trim();
}
/**
 * Transforma una cadena de texto en una matriz
 * @memberOf module:Utils
 * @function strToArr
 * @param  {String} str       La cadena
 * @param  {String} separator El separador
 *
 * @return {Array}
 */


function strToArr(str) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

  if (empty(str)) {
    return [];
  }

  if (str.indexOf(separator) === -1) {
    return [str];
  }

  return isArrayish(str) ? str : str.split(separator);
}
/**
 * Crea una uri a partir de un String
 * @memberOf module:Utils
 * @function createURI
 * @example
 * _$.createURI('mifile.php')
 * // return --> https://domain.ext/path/mifile.php
 * @param  {String} u Dirección o path a convertir
 * @return {String}   URI bien formateada
 */


function createURI(u) {
  var a = document.createElement('a');
  a.href = u;
  return !not(a.href) && isURL(a.href) ? a.href : u;
}
/**
 * Construye una URL valida para la API fetch o XMLHttpRequest
 * @memberOf module:Utils
 * @function url
 * @param  {String} urlBase URL
 * @param  {Object} params  Conjunto de parametros de URLSearchParams
 * @return {URL}         API URL
 */


function url(urlBase) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!isURL(urlBase)) {
    urlBase = createURI(urlBase);
  }

  var url = new URL(urlBase);
  Object.keys(params).forEach(function (key) {
    return url.searchParams.append(key, params[key]);
  });
  return url;
}
/**
 * Convierte un Objecto JSON a u objecto del tipo FromData
 * @memberOf module:Utils
 * @function jsonToFormdata
 * @param  {Object} obj El Objecto
 * @return {FromData}
 */


function jsonToFormdata(obj) {
  if (!isObject(obj)) {
    return null;
  }

  var fromdata = new FormData();
  each(obj, function (v, k) {
    fromdata.append(camelCase(k), v);
  });
  return fromdata;
}

var Utils$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  camelCase: camelCase,
  strValue: strValue,
  toStr: toStr,
  tryStringObject: tryStringObject,
  defineProperty: defineProperty,
  gOPD: gOPD,
  isArray: isArray,
  setPropertyObj: setPropertyObj,
  getProperty: getProperty,
  extend: extend,
  isString: isString,
  isObject: isObject,
  isArrayish: isArrayish,
  isNumber: isNumber,
  isFunction: isFunction$1,
  hasProp: hasProp,
  toString: toString,
  isSelector: isSelector,
  empty: empty,
  not: not,
  getStyleComputed: getStyleComputed,
  isElement: isElement,
  isFascinoElement: isFascinoElement,
  isVisible: isVisible,
  isHiden: isHiden$1,
  isURL: isURL,
  merge: merge,
  each: each,
  createScript: createScript,
  script: script,
  parseHTML: parseHTML,
  normName: normName,
  formatBytes: formatBytes,
  setOptionsOfData: setOptionsOfData,
  random: random,
  randomMap: randomMap,
  normalizeData: normalizeData,
  normalizeElements: normalizeElements,
  uniqueId: uniqueId,
  htmlEntities: htmlEntities,
  cleanPreCode: cleanPreCode,
  strToArr: strToArr,
  createURI: createURI,
  url: url,
  jsonToFormdata: jsonToFormdata
});
/**
 * Identificador Único para los Atributos
 * @memberOf module:Core.Data
 * @private
 * @type {Number}
 * @defaultvalue -1
 */

var DataUI = -1;
/**
 * Manejador de Eventos Data
 * @namespace Data
 * @memberOf module:Core
 * @requires Utils
 * @class
 * @tutorial Data
 */

var Data = /*#__PURE__*/function () {
  /**
   * @return {module:Core.Data}
   */
  function Data() {
    _classCallCheck(this, Data);

    this.UID = "FSData";
    DataUI++;
    this.ID = DataUI;
  }
  /**
   * Verifica si el objeto dado es un Elemento
   * @memberOf module:Core.Data
   * @public
   * @param  {Element} el El elemento
   * @return {Boolean}
   */


  _createClass(Data, [{
    key: "acceptData",
    value: function acceptData(el) {
      return el.nodeType === 1 || el.nodeType === 9 || !+el.nodeType;
    }
    /**
     * Valida si se puede establece o usar el Atributo DataSet del HTMLElement
     * @param  {Element} el El Elemento
     * @memberOf module:Core.Data
     * @public
     * @return {Boolean}
     */

  }, {
    key: "acceptDataSet",
    value: function acceptDataSet(el) {
      return this.acceptData(el) && !not(el.dataset);
    }
    /**
     * Obtiene los datos Almacenados en el Elemento
     * @memberOf module:Core.Data
     * @public
     * @param  {Element}  el El elemento
     * @param  {Boolean} config Indica si el objeto sera configurable
     * @return {Object}
     */

  }, {
    key: "storage",
    value: function storage(el) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var val = el[this.UID];

      if (!val) {
        val = {};

        if (this.acceptData(el)) {
          if (el.nodeType) {
            el[this.UID] = val;
          } else {
            defineProperty(el, this.UID, {
              value: val,
              configurable: config
            });
          }
        }
      }

      return val;
    }
    /**
     * Establece el nuevo valor de la propiedad
     * @memberOf module:Core.Data
     * @public
     * @param {Element} el El elemento
     * @param {(String|Object)} key  La clave
     * @param {(Object|String)} data El valor a establecer
     * @return {(Object|String)} El nuevo valor establecido
     */

  }, {
    key: "set",
    value: function set(el, key, data) {
      var store = this.storage(el);

      if (isString(key)) {
        store[camelCase(key)] = data;
      } else {
        for (var prop in key) {
          if (hasProp(key, prop)) {
            store[camelCase(prop)] = key[prop];
          }
        }
      }

      return store;
    }
    /**
     * Obtiene el valor del Atributo o todos
     * @memberOf module:Core.Data
     * @public
     * @param  {Element} el El elemento
     * @param  {(String|Null)} key La clave a buscar si se omite se buscaran todos los atributos
     * @return {(Object|String|Boolean)}
     */

  }, {
    key: "get",
    value: function get(el, key) {
      if (not(key)) {
        return this.storage(el);
      }

      return el[this.UID] && el[this.UID][key] ? el[this.UID][key] : false;
    }
    /**
     * Obtiene o Establece el atributo
     * @memberOf module:Core.Data
     * @public
     * @param  {Element} el El elemento
     * @param  {String} key  La clave
     * @param  {(String|Object)} data El valor
     * @return {(Object|String)}      El valor obtenido o establecido
     */

  }, {
    key: "access",
    value: function access(el, key, data) {
      if (not(key) || key && isString(key) && not(data)) {
        return this.get(el, key);
      }

      this.set(el, key, data);
      return not(data) ? key : data;
    }
    /**
     * Verifica si el elemento tiene la clave dada
     * @public
     * @memberOf module:Core.Data
     * @param  {Element}  el El elemento
     * @param  {String}  key La clave
     * @return {Boolean}
     */

  }, {
    key: "has",
    value: function has(el, key) {
      if (not(key)) {
        var c = this.storage(el);
        return !not(c);
      } else {
        return this.get(el, key) !== false ? true : el.hasAttributes && el.hasAttributes("data-".concat(key)) ? el.getAttribute("data-".concat(key)) : false;
      }
    }
    /**
     * Remueve una clave dada
     * @public
     * @memberOf module:Core.Data
     * @param  {Element} el El elemento
     * @param  {String} key La clave
     * @return {(void|Boolean)}
     */

  }, {
    key: "remove",
    value: function remove(el, key) {
      var i,
          store = el[this.UID];

      if (not(store)) {
        var ds = this.data(el);

        if (not(ds)) {
          return;
        }

        this.remove(el, key);

        if (this.acceptDataSet(el)) {
          attrs = el.attributes;
          i = attrs.length;

          while (i--) {
            if (attrs[i]) {
              var name = attrs[i].name;

              if (name.indexOf("data-") === 0) {
                el.removeAttribute(name);
              }
            }
          }
        }

        return;
      }

      if (!not(key)) {
        if (isArrayish(key)) {
          key = key.map(camelCase);
        } else {
          key = camelCase(key);
          key = key in store ? [key] : key.match(/[^\x20\t\r\n\f]+/g) || [];
        }

        i = key.length;

        while (i--) {
          delete store[key[i]];
        }
      }

      if (not(key) && not(store)) {
        if (el.nodeType) {
          el[this.UID] = undefined;
        } else {
          delete el[this.UID];
        }
      }

      return true;
    }
    /**
     * Establece los atributos data de un elemento
     * @memberOf module:Core.Data
     * @public 
     * @param  {Element} elem Elemento a manipular
     * @param  {String} key  La clave del atributo data ejemplo data-valor; key = valor
     * @param  {(Object|String|Array)} data El resultado del atributo data
     * @return {(Object|undefine|Array)}  El resultado del atributo data obtenido
     */

  }, {
    key: "attrToStorage",
    value: function attrToStorage(elem, key, data) {
      var name;

      if (empty(data) && elem.nodeType === 1) {
        name = "data-" + key.replace(/[A-Z]/g, "-$&").toLowerCase();
        data = elem.getAttribute(name);

        if (typeof data === "string") {
          data = normalizeData(data);
          this.set(elem, key, data);
        } else {
          data = undefined;
        }
      }

      return data;
    }
    /**
     * Establece u Obtiene los atributos de Data
     * @memberOf module:Core.Data
     * @public 
     * @param  {(NodeList|Element)}    els  El o los Elementos
     * @param  {...(Array|Object|String)} arg Cualqier argumento según su accion hasta 2 maximo
     *
     * @return {*}
     */

  }, {
    key: "data",
    value: function data(els) {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var ds, attrs, i, el;

      if (not(els.length)) {
        el = els;
        els = [els];
      } else {
        el = els[0];
      }

      if (args.length === 0) {
        ds = this.get(el);

        if (this.acceptDataSet(el)) {
          attrs = el.attributes;
          i = attrs.length;

          while (i--) {
            if (attrs[i]) {
              var name = attrs[i].name;

              if (name.indexOf("data-") === 0) {
                name = camelCase(name.slice(5));
                this.attrToStorage(el, name, ds[name]);
              }
            }
          }
        }

        return ds;
      }

      if (args.length === 1) {
        if (isArrayish(args[0])) {
          var res = {},
              _i = 0;
          each(els, function (elem) {
            var id = elem.getAttribute("id"),
                prefix = !not(id) ? id : el.tagName + _i;
            args[0].forEach(function (d) {
              res[prefix] = res[prefix] || {};

              var re = _this.get(elem, d);

              if (not(re)) {
                if (elem.nodeType === 1) {
                  re = elem.hasAttributes("data-".concat(d)) ? elem.getAttribute("data-".concat(d)) : re;
                  re = normalizeData(re);
                }
              }

              res[prefix][d] = re;
            });
            _i++;
          });
          return res;
        } else if (isObject(args[0])) {
          return each(els, function (elem) {
            for (var key in args[0]) {
              if (hasProp(args[0], key)) {
                var value = normalizeData(args[0][key]);

                _this.set(elem, key, value);
              }
            }
          });
        } else if (isString(args[0])) {
          var _res = this.get(el, args[0]);

          if (!_res || not(_res)) {
            if (el.nodeType === 1) {
              _res = el.hasAttributes("data-".concat(args[0])) ? el.getAttribute("data-".concat(args[0])) : _res;
              _res = normalizeData(_res);
            }
          }

          return _res;
        }
      }

      return each(els, function (elem) {
        _this.set(elem, args[0], args[1]);
      });
    }
  }]);

  return Data;
}();

var ListEvents$1 = ['blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'];
/**
 * Maneja y manipula los Eventos del DOM
 * @namespace Event
 * @memberOf module:Core
 * @requires Utils
 * @class
 * @tutorial Events
 */

var Event = /*#__PURE__*/function () {
  function Event() {
    _classCallCheck(this, Event);

    _defineProperty(this, "_ds", new Data());

    _defineProperty(this, "_eventName", "fsEvent");
  }
  /**
   * Añada un Evento Escucha al elemento
   * @private
   * @memberOf Core.Event
   * @param {Element}   el      El Elemento
   * @param {String}   event   Nombre del Evento
   * @param {Function} fn      Función a asignar
   * @param {Boolean}  capture use capture
   */


  _createClass(Event, [{
    key: "_add",
    value: function _add(el, event, fn) {
      var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      return el.addEventListener(event, fn, useCapture);
    }
    /**
     * Remueve un evento asignado
     * @private
     * @memberOf Core.Event
     * @param  {Element}   el      El Elemento
     * @param  {String}   event   el nombre del evento
     * @param  {Function} fn      Función asignada
     * @param  {(Boolean|Object)}   capture Use capture ó opciones de captura
     */

  }, {
    key: "_remove",
    value: function _remove(el, event, fn, capture) {
      if (not(capture)) {
        capture = true;
      }

      return el.removeEventListener(event, fn, capture);
    }
    /**
     * Dispara un Evento
     * @private
     * @memberOf Core.Event
     * @param  {Element} el       El elemento
     * @param  {(Event|CustomEvent)} newEvent Nombre del Evento a disparar
     * @return {Element}         
     */

  }, {
    key: "_dispatch",
    value: function _dispatch(el, newEvent) {
      return el.dispatchEvent(newEvent);
    }
    /**
     * Crea un Evento
     * @private
     * @memberOf Core.Event
     * @param  {string} name            Nombre del Evento
     * @param  {(Boolean|String|Object|Array|Fascino)} customEventInit Acciones del evento capturarle, estas acciones se captura con e.detail
     */

  }, {
    key: "_createEvent",
    value: function _createEvent(name) {
      var customEventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var o;

      if (hasProp(customEventInit, 'detail')) {
        o = extend({}, {
          bubbles: true,
          cancelable: true,
          detail: null
        }, customEventInit);
      } else {
        o = {
          bubbles: true,
          cancelable: true,
          detail: customEventInit
        };
      }

      return new CustomEvent(name, o);
    }
    /**
     * Almacena los eventos asignado a cada elemento en memoria del elemento
     * @private
     * @memberOf Core.Event
     * @param {Element} el   El Elemento
     * @param {String} name Nombre del Evento
     * @param {(Boolean|String|Object|Array|Fascino|Function)} data información del evento
     * @return {Object} Lista de Eventos Asignado
     */

  }, {
    key: "_setData",
    value: function _setData(el, event, data) {
      if (this._ds.acceptData(el) && el.self !== window) {
        var dataEv = this._ds.has(el, this._eventName) ? this._ds.get(el, this._eventName) : this._ds.access(el, this._eventName, {}),
            name = camelCase(event);
        strToArr(event, '.');
        var e = {};
        e[this._eventName] = dataEv;
        e[this._eventName][name] = name in dataEv === true ? e[this._eventName][name] : [];

        e[this._eventName][name].push(data);

        return this._ds.set(el, e);
      }
    }
    /**
     * Obtiene información sobre un evento asignado
     * @private
     * @memberOf Core.Event
     * @param  {Element} el    El Elemento
     * @param  {String} name  Nombre del Evento, se puede asignar namespace ejm: click.bs
     * @param  {Number} index posición del evento
     * @return {(Object|Array)}
     */

  }, {
    key: "_getData",
    value: function _getData(el) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

      var evList = this._ds.get(el, this._eventName);

      if (not(evList)) {
        return {};
      }

      if (not(name)) {
        return evList;
      }

      name = camelCase(name);

      if (name in evList === false) {
        return false;
      }

      return index === -1 ? evList[name] : evList[name][index];
    }
    /**
     * Verifica que un evento exista
     * @private
     * @memberOf Core.Event
     * @param  {Element}  el    El elemento
     * @param  {String}  name  Nombre
     * @param  {Number}  index Indice del evento
     * @return {Boolean}
     */

  }, {
    key: "_hasData",
    value: function _hasData(el, name) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

      if (this._ds.has(el, this._eventName)) {
        var evList = this._ds.get(el, this._eventName);

        if (!empty(evList)) {
          if (camelCase(name) in evList) {
            return index > -1 ? evList[camelCase(name)].indexOf(index) > -1 : true;
          }
        }
      }

      return false;
    }
    /**
     * Remueve un Evento Asignado
     * @private
     * @memberOf Core.Event
     * @param  {Element} el    Elemento
     * @param  {String} name  Nombre
     * @param  {Number} index Indice del Evento
     * @return {Boolean}
     */

  }, {
    key: "_removeData",
    value: function _removeData(el, name) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

      if (this._ds.has(el, this._eventName)) {
        var ds = this._getData(el, name, index);

        if (not(name)) {
          this._ds.set(el, this._eventName, {});

          return true;
        }

        var camelName = camelCase(name);

        if (camelName in ds) {
          if (index > -1) {
            delete ds[camelName][index];
          } else {
            delete ds[camelName];
          }

          this._ds.set(el, this._eventName, d);

          return this;
        }
      }

      return false;
    }
    /**
     * Remueve todos los Eventos de todos los elementos seleccionado
     * @private
     * @memberOf Core.Event
     * @return {Core.Event}
     */

  }, {
    key: "_off",
    value: function _off(el) {
      this._ds.remove(el, this._eventName);

      return this;
    }
    /**
     * Obtiene los NameSpaces del Evento
     * @private
     * @memberOf Core.Event
     * @param  {Array}  NS     Nombre separado en array
     * @param  {Boolean} onlyNS Si solo se retorna el NS ó se retorna Nombre y NS
     * @return {(String|Object)} 
     */

  }, {
    key: "_getNS",
    value: function _getNS(NS) {
      var onlyNS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var name = NS.shift(),
          ns = NS.join('.');
      return onlyNS ? ns : {
        name: name,
        ns: ns
      };
    } // Public

    /**
     * Obtiene los eventos almacenados
     * @public
     * @memberOf Core.Event
     * @see Core.Event._getData
     * @return {Object}
     */

  }, {
    key: "getEvents",
    value: function getEvents(el) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      return this._getData(el, name, index);
    }
    /**
     * Ejecuta los eventos dados
     * @memberOf Core.Event
     * @public
     * @param  {Element} el         El elemento
     * @param  {(String|Array)} eventList Lista de eventos con su namespace si es necesario
     * @param  {String} selector        Selector a iterar o null
     * @param  {Function} callback    Función a ejecutar
     * @param  {Object} options    Opciones de addEventListiner
     * @return {(Element|Object|Core.Event)}
     */

  }, {
    key: "on",
    value: function on(el, eventList, selector, callback, options) {
      var _this2 = this;

      if (not(el)) {
        return this;
      }

      if (isFunction$1(selector)) {
        options = callback;
        callback = selector;
        selector = undefined;
      }

      if (!isObject(options)) {
        options = {};
      }

      var EVL = strToArr(eventList, ' ');
      EVL.forEach(function (e) {
        var nameAndNs = strToArr(e, '.'),
            nameAndNSObj = _this2._getNS(nameAndNs, false),
            ns = nameAndNSObj.ns,
            name = nameAndNSObj.name,
            handler = function handler(ev) {
          var target = ev.target;

          if (!selector) {
            callback.call(el, ev);
          } else {
            while (target && target !== el) {
              if (Element.prototype.matches.call(target, selector)) {
                callback.call(target, ev);

                if (ev.isPropagationStopped) {
                  ev.stopImmediatePropagation();
                  break;
                }
              }

              target = target.parentNode;
            }
          }

          if (!not(options.once)) {
            _this2.off(el, eventList, selector, options);
          }
        };

        defineProperty(handler, 'name', {
          value: callback.name && callback.name !== '' ? callback.name : "func_event_".concat(name, "_").concat(not(ns) ? new Date().getTime() : ns)
        });
        var NameEvents = ListEvents$1.indexOf(name) > -1 ? name : e;

        _this2._add(el, NameEvents, handler, !not(options.capture) ? options.capture : false);

        _this2._setData(el, e, {
          event: e,
          handler: handler,
          selector: selector,
          ns: ns,
          options: !not(options) ? options : false
        });
      });
      return el;
    }
    /**
     * Ejecuta solo el primer eventos del elemento
     * @memberOf Core.Event
     * @public
     * @param  {Element} el      El Elemento
     * @param  {String} events  Eventos
     * @param  {String} sel     Selector o null
     * @param  {Function} handler Función a ejecutar
     * @param  {Object} options Opciones de addEventListiner
     * @return {(Element|Object|Core.Event)}
     */

  }, {
    key: "one",
    value: function one(el, events, sel, handler, options) {
      if (!isObject(options)) {
        options = {};
      }

      options.once = true;
      return this.on.apply(this, [el, events, sel, handler, options]);
    }
    /**
     * Remueve los Eventos de los elementos dado
     * @memberOf Core.Event
     * @public
     * @param  {Element} el         Elemento
     * @param  {String} eventsList Lista de Eventos
     * @param  {String} sel        Selecotr o null
     * @param  {Object} options    Opciones de removeEventListiner
     * @return {(Element|Object|Core.Event)}
     */

  }, {
    key: "off",
    value: function off(el, eventsList, sel, options) {
      var _this3 = this;

      var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      if (isObject(sel)) {
        options = sel;
        sel = null;
      }

      if (!isNaN(options)) {
        index = options;
        options = {};
      }

      if (!isObject(options)) {
        options = {};
      }

      var Dev = this._getData(el);

      if (not(eventsList) || eventsList.toLowerCase() === 'all' || eventsList === '*') {
        var _ret = function () {
          var _this = _this3;

          if (Dev) {
            for (var prop in Dev) {
              if (hasProp(Dev, prop)) {
                var e = Dev[prop];
                e.forEach(function (i) {
                  _this._remove(el, i.event, i.handler, i.options);
                });
              }
            }

            _this3._off();
          }

          return {
            v: el
          };
        }();

        if (_typeof(_ret) === "object") return _ret.v;
      }

      var EvL = strToArr(eventsList, ' ');
      EvL.forEach(function (e) {
        var nMap = strToArr(e, '.'),
            evMap = nMap.length > 1 ? _this3._getNS(nMap, true) : {
          name: nMap[0],
          ns: ''
        },
            name = normName(evMap.name);
        options.ns ? options.ns : evMap.ns;

        if (hasProp(Dev, name)) {
          var ev = Dev[name][index];

          _this3._remove(el, ev.event, ev.handler, ev.options);

          _this3._removeData(el, e, index);
        }
      });
      return el;
    }
    /**
     * Dispara un Evento
     * @public
     * @memberOf Core.Event
     * @param  {Element} el    Elemento HTMLELEMENT
     * @param  {String} event Nombre del Evento
     * @return {Element}
     */

  }, {
    key: "fire",
    value: function fire(el, event) {
      return this._dispatch(el, event);
    }
    /**
     * Crea un Evento, versión publica
     * @public
     * @memberOf Core.Event
     * @see Core.Event._createEvent
     */

  }, {
    key: "createEv",
    value: function createEv(name, data) {
      return this._createEvent(name, data);
    }
  }]);

  return Event;
}();

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$2()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * @memberOf module:Core.Selector
 * @private
 * @inner
 * @const {Number}
 * @default 3
 */


var NODETEXT$1 = 3;
/**
 * Errores Personalizados de la Clase Selector
 * @namespace SelectorError
 * @memberOf module:Core.Selector
 * @class
 * @extends {Error} Error
 */

var SelectorError = /*#__PURE__*/function (_Error) {
  _inherits(SelectorError, _Error);

  var _super = _createSuper$1(SelectorError);

  function SelectorError() {
    var _this;

    _classCallCheck(this, SelectorError);

    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(params));

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), SelectorError);
    }

    _this.name = 'SelectorError';
    return _this;
  }

  return _createClass(SelectorError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Selecciona los Elementos y almacena en una matriz,
 * <blockquote>Esta clase esta pensada para el uso de [Fascino JS]{@link Fascino}, para usarla use [Fascino JS]{@link Fascino}.</blockquote>
 * @namespace Selector
 * @memberOf module:Core
 * @class
 * @requires Utils
 * @example
 * let div = new Selector('div.miclassdiv') // Retorna todos los div con la clase miclassdiv
 * let span = new Selector('span#miSpanID', div) // Retorna todos los span miSpanID hijo de div.miclassdiv
 */


var Selector = /*#__PURE__*/function () {
  /**
   * @param  {(String|Element|Object|Function|Array)} selector el elemento a seleccionar si es un String vea los selectores CSS
   * @param  {Element} context  El elemento padre de donde se seleccionara el elemento dado ejm. <code>p[context] > span[selector]</code>
   * @return {module:Core.Selector}  Un objecto con nuevas funciones para el elemento
   */
  function Selector(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    _classCallCheck(this, Selector);

    this.Elem = Array.from('');
    this.context = context;

    if (empty(selector)) {
      return this;
    }

    if (isString(selector)) {
      selector = selector.trim();
    }

    this.sel(selector);
    return this;
  }
  /**
   * Combina el nuevo elemento con los ya obtenidos
   * @memberOf module:Core.Selector
   * @protected
   * @param  {(Array|Object|Element|window|document)} otherEl
   * @return {void}
   */


  _createClass(Selector, [{
    key: "mergeEl",
    value: function mergeEl(otherEl) {
      var _this2 = this;

      if (!empty(otherEl) && otherEl.length === undefined) {
        otherEl = [otherEl];
      } else if (otherEl.self === window) {
        otherEl = [otherEl];
      }

      var e = [].slice.call(otherEl);

      if (e.length > 0) {
        e.forEach(function (el) {
          _this2.Elem.push(el);
        });
      }
    }
    /**
     * Valida y verifica el selector dado
     * @memberOf module:Core.Selector
     * @protected
     * @param  {*} sel
     * @return {Object}
     */

  }, {
    key: "sel",
    value: function sel(_sel) {
      if (isFunction$1(_sel)) {
        document.addEventListener('DOMContentLoaded', _sel, false);
        return this;
      }

      if (_sel instanceof Element) {
        this.mergeEl([_sel]);
        return this;
      }

      if (_sel instanceof NodeList) {
        this.mergeEl(_sel);
        return this;
      }

      if (_sel instanceof HTMLCollection) {
        var dHtmlCol = Array.from(_sel);
        this.mergeEl(dHtmlCol);
        return this;
      }

      if (isObject(_sel) && hasProp(_sel, 'Elem')) {
        this.mergeEl(_sel.Elem);
        return this;
      }

      switch (_sel) {
        case 'window':
          _sel = window;
          break;

        case 'document':
          _sel = document;
          break;

        case 'body':
          _sel = document.body;
          break;

        case 'html':
          _sel = document.documentElement;
          break;

        case ':root':
          _sel = document.documentElement;
          break;

        case 'doctype':
          _sel = document.doctype;
          break;
      }

      if (_sel && (_sel.nodeType || _sel.self === window)) {
        this.mergeEl(_sel);
        return this;
      }

      if (isArrayish(_sel)) {
        if (hasProp(_sel, '_prevObj')) {
          this._prevObj = _sel._prevObj;
        }

        this.mergeEl(_sel);
        return this;
      }

      if (typeof _sel !== 'string' && _sel.self && _sel.self !== window) {
        return this;
      }

      var pHtml = parseHTML(_sel);

      if (pHtml.length === 1 && pHtml[0].nodeType === NODETEXT$1) {
        try {
          var el = this.querySelector(_sel);

          if (el.length === 0) {
            return this;
          } else {
            this.mergeEl(el);
          }
        } catch (e) {
          throw new SelectorError("\nFascino:\n ".concat(_sel, " is not a valid selector"));
        }
      } else if (pHtml.length > 0) {
        this.mergeEl(pHtml);
      } else {
        this.mergeEl(_sel);
      }

      return this;
    }
    /**
     * Hace uso de querySelector y valida la cantidad de elementos
     * @memberOf module:Core.Selector
     * @protected
     * @param  {String} selector
     * @return {(Array|NodeList)}
     */

  }, {
    key: "querySelector",
    value: function querySelector(selector) {
      var d = this.context || document;
      return d.querySelectorAll(selector).length > 1 ? d.querySelectorAll(selector) : d.querySelector(selector) != null ? [d.querySelector(selector)] : [];
    }
  }]);

  return Selector;
}();

var name = "@rep98/fascino";
var version = "1.0.0";
var description = "Fascino CSS/JS Framework";
var main = "dist/fascino.umd.js";
var scripts = {
  test: "karma start tests/karma.conf.js",
  dev: "rollup --environment DEV:true --config build/rollup.config.js --sourcemap",
  build: "rollup --environment DEV:false --config build/rollup.config.js --sourcemap",
  doc: "jsdoc --configure build/jsdoc.conf.js --verbose",
  fdev: "npm-run-all dev doc",
  prod: "npm-run-all build doc"
};
var publishConfig = {
  access: "public"
};
var keywords = ["framework", "js", "web", "javascript", "webcomponent"];
var module = "dist/fascino.esm.js";
var unpkg = "dist/fascino.min.js";
var exports = "./src/index.js";
var homepage = "https://rep98.github.io/fascino";
var author = "Robert Pérez <delfinmundo@gmail.com>";
var license = "MIT";
var contributors = [];
var repository = {
  type: "git",
  url: "https://github.com/REP98/fascino.git"
};
var files = ["src/**/*", "dist/*.{js,map}"];
var devDependencies = {
  "@babel/cli": "^7.17.10",
  "@babel/core": "^7.17.12",
  "@babel/plugin-transform-runtime": "^7.17.12",
  "@babel/preset-env": "^7.17.12",
  "@babel/runtime": "^7.17.9",
  "@rollup/plugin-babel": "^5.3.1",
  "@rollup/plugin-commonjs": "^22.0.0",
  "@rollup/plugin-eslint": "^8.0.2",
  "@rollup/plugin-json": "^4.1.0",
  "@rollup/plugin-node-resolve": "^13.3.0",
  "@rollup/plugin-replace": "^4.0.0",
  axios: "^0.27.2",
  camelcase: "^6.3.0",
  "clean-jsdoc-theme": "^3.3.4",
  eslint: "^8.15.0",
  "eslint-config-google": "^0.14.0",
  jsdoc: "^3.6.10",
  karma: "^6.3.20",
  "karma-firefox-launcher": "^2.1.2",
  "karma-jasmine": "^5.0.1",
  "karma-jasmine-html-reporter": "^1.7.0",
  "karma-phantomjs-launcher": "^1.0.4",
  "karma-rollup-preprocessor": "^7.0.8",
  "node-notifier": "^10.0.1",
  "npm-run-all": "^4.1.5",
  rollup: "^2.73.0",
  "rollup-plugin-istanbul": "^3.0.0",
  "rollup-plugin-terser": "^7.0.2",
  terser: "5.13.1"
};
var pkg = {
  name: name,
  version: version,
  description: description,
  main: main,
  scripts: scripts,
  publishConfig: publishConfig,
  keywords: keywords,
  module: module,
  unpkg: unpkg,
  exports: exports,
  homepage: homepage,
  author: author,
  license: license,
  contributors: contributors,
  repository: repository,
  files: files,
  devDependencies: devDependencies
};

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;

    while (--i >= 0 && matches.item(i) !== this) {}

    return i > -1;
  };
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}
/**
 * Lista de Eventos Nativos de Javascript <br>
 * Aquí se Almacenan los nombre de las funciones de eventos nativos 
 * 'blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove',
 * 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown',
 * 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'
 * @example <caption>Uso</caption>
 * _$('selector').clicK(function(e){})
 * @memberOf Fascino
 * @private
 * @type {Array}
 */


var ListEvents = ['blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'];
/**
 * @memberOf Fascino
 * @private
 * @const {Number}
 * @default 3
 */

var NODETEXT = 3;
/**
 * Función que reinvoca la Clase Fascino
 * @memberOf Fascino
 * @private
 * @param  {(String|Element|Array|Function|Object)} selector
 * @param  {HTMLElement} context
 * @return {Fascino}
 */

function w(sel, ctx) {
  return new Fascino(sel, ctx);
}
/**
 * Fascino, Encantador Framework JS para su fácil uso
 * @global
 * @namespace Fascino
 * @class
 * @extends {module:Core.Selector}
 */


var Fascino = /*#__PURE__*/function (_Selector) {
  _inherits(Fascino, _Selector);

  var _super = _createSuper(Fascino);
  /**
   * @param  {(String|Element|Array|Function|Object)} selector Seletor, Elemento ó funcion para iniciar FascinoJs
   * @param  {HTMLElement} context Contexto del selector, por defecto es <code>document</code>
   * @return {Fascino}
   */


  function Fascino(selector) {
    var _this2;

    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    _classCallCheck(this, Fascino);

    _this2 = _super.call(this, selector, context);

    _defineProperty(_assertThisInitialized(_this2), "_ds", new Data());

    _defineProperty(_assertThisInitialized(_this2), "_ev", new Event());

    _this2.name = 'FascinoJS';
    _this2.length = _this2.Elem.length;
    _this2.version = pkg.version;

    if (_this2.length == 1) {
      _this2.events = _this2.getEvent();
    }

    return _this2;
  } // STATICOS

  /**
   * Añade funciones a Fascino
   * @memberOf Fascino
   * @public
   * @param {String} name Nombre de la función
   * @param {Function} fn Función a asignar
   * @return {Fascino}
   */


  _createClass(Fascino, [{
    key: "_is",
    value: // PRIVADOS

    /**
     * Private _is
     * @memberOf Fascino
     * @private
     * @param  {String}  prop propiedad tipo
     * @return {Boolean}
     */
    function _is(prop) {
      var res = false;
      this.each(function (el) {
        res = el[prop];
      });
      return res;
    }
    /**
     * Busca y obtiene una propiedad de un elemento dado
     * @memberOf Fascino
     * @private
     * @param  {String} n Nombre de la propiedad
     * @param  {String} v Valor de la propiedad
     * @return {Fascino}
     */

  }, {
    key: "_prop",
    value: function _prop(n, v) {
      if (this.length === 0) {
        return this;
      }

      if (arguments.length === 1) {
        return n in this.Elem[0] ? this.Elem[0][n] : undefined;
      }

      if (empty(v)) {
        v = '';
      }

      return this.each(function (el) {
        el[n] = v;

        if (n === 'innerHTML') {
          script(el);
        }
      });
    }
    /**
     * Método privado que ayuda a establecer opciones a un elemento dado.
     * @memberOf Fascino
     * @private
     * @param {(Element|NodeList)} newNode
     * @param {Object} options
     */

  }, {
    key: "_setOptions",
    value: function _setOptions(newNode, options) {
      if (!empty(options)) {
        for (var key in options) {
          if (hasProp(options, key)) {
            var value = options[key];

            if (hasProp(this, key)) {
              w(newNode)[key].apply(this, value);
            }
          }
        }
      }
    }
    /**
     * Tamaño Externo del elemento
     * @memberOf Fascino
     * @private
     * @param  {String} prop
     * @param  {String} val
     * @return {(String|Number)}
     */

  }, {
    key: "_sizeOut",
    value: function _sizeOut(prop, val) {
      var el, size, style, result;

      if (this.length === 0) {
        return;
      }

      if (!empty(val) && typeof val !== 'boolean') {
        return this.each(function (el) {
          if (el === window || el === document) {
            return;
          }

          var h,
              style = getStyleComputed(el),
              bs = prop === 'width' ? parseInt(style['border-left-width']) + parseInt(style['border-right-width']) : parseInt(style['border-top-width']) + parseInt(style['border-bottom-width']),
              pa = prop === 'width' ? parseInt(style['padding-left']) + parseInt(style['padding-right']) : parseInt(style['padding-top']) + parseInt(style['padding-bottom']);
          h = w(el)[prop](val)[prop]() - bs - pa;
          el.style[prop] = h + 'px';
        });
      }

      el = this.Elem[0];
      size = el[prop === 'width' ? 'offsetWidth' : 'offsetHeight'];
      style = getStyleComputed(el);
      result = size + parseInt(style[prop === 'width' ? 'margin-left' : 'margin-top']) + parseInt(style[prop === 'width' ? 'margin-right' : 'margin-bottom']);
      return val === true ? result : size;
    }
    /**
     * Tamano real del elemento
     * @memberOf Fascino
     * @private
     * @param  {String} pro
     * @param  {String} val
     * @return {(fascino|Number|NaN|String)}
     */

  }, {
    key: "_size",
    value: function _size(prop, val) {
      if (this.length === 0) {
        return NaN;
      }

      if (empty(val)) {
        var el = this.Elem[0];

        if (prop === 'height') {
          return el === window ? window.innerHeight : el === document ? el.body.clientHeight : parseInt(getComputedStyle(el).height);
        } else if (prop === 'width') {
          return el === window ? window.innerWidth : el === document ? el.body.clientWidth : parseInt(getComputedStyle(el).width);
        }
      }

      return this.each(function (el) {
        if (el === window || el === document) {
          return;
        }

        el.style[prop] = isNaN(val) ? val : val + 'px';
      });
    } // PUBLICOS

    /**
     * Recorre los elementos
     * @memberOf Fascino
     * @public
     * @param  {...(Function|Array)} arg Argumentos
     * @return {Fascino}
     */

  }, {
    key: "each",
    value: function each() {
      var _this$Elem;

      (_this$Elem = this.Elem).forEach.apply(_this$Elem, arguments);

      return this;
    }
    /**
     * Verifica si el elemento es seleccionable por el Selector
     * @memberOf Fascino
     * @public
     * @param  {String} selectorString Selector CSS
     * @return {(Element|Array)}
     */

  }, {
    key: "matches",
    value: function matches(selectorString) {
      var elem = [];
      this.each(function (el) {
        if (el.matches(selectorString)) {
          elem.push(el);
        }
      });
      return elem;
    }
    /**
     * Crea una nueva matriz de elementos a través de la función dada
     * @memberOf Fascino
     * @public
     * @param  {Function} callback Función
     * @return {Array}
     */

  }, {
    key: "map",
    value: function map(callback) {
      return this.Elem.map(callback);
    }
    /**
     * Combina Elementos
     * @memberOf Fascino
     * @public
     * @param  {Array} els Matriz de elementos nueva
     * @return {Fascino}
     */

  }, {
    key: "merge",
    value: function merge$1(els) {
      merge(this.Elem, els);
      return this;
    }
    /**
     * Obtiene la posición del elemento dentro de su padre
     * @memberOf Fascino
     * @public
     * @param  {(Element|Null)} parent   El padre de los Elementos
     * @param  {String} nodeName tipo de nombre de nodo entre los cuales buscar
     * @return {Number}
     */

  }, {
    key: "index",
    value: function index(parent, nodeName) {
      var el = this.Elem[0],
          index = -1,
          child;
      parent = empty(parent) ? el.parentNode() : normalizeElements(parent);

      if (empty(nodeName)) {
        child = w(parent).children();
      } else {
        child = w(parent).find(nodeName);
      }

      child.each(function (element, i) {
        if (element === el) {
          index = i;
        }
      });
      return index;
    }
    /**
     * Obtiene el Elemento solicitado por su posición dentro de la matriz de Elementos, El Elemeto obtenido es de tipo Element
     * @memberOf Fascino
     * @public
     * @param  {Number} i Posición
     * @return {Element}
     */

  }, {
    key: "get",
    value: function get(i) {
      if (not(i)) {
        return this.Elem;
      }

      return i < 0 ? this.Elem[i + this.length] : this.Elem[i];
    }
    /**
     * Busca, valida y obtiene el elemento dado por su posición dentro de la matriz de elementos
     * @memberOf Fascino
     * @public
     * @param  {Number} i posición del elemento
     * @return {Fascino}
     */

  }, {
    key: "eq",
    value: function eq(i) {
      return !isNaN(i) && this.length > 0 ? extend(w(this.get(i)), {
        _prevObj: this
      }) : this;
    }
    /**
     * Obtiene el ultimo elemento de la matriz
     * @memberOf Fascino
     * @public
     * @return {Element}
     */

  }, {
    key: "last",
    value: function last() {
      return this.eq(this.length - 1);
    }
    /**
     * Obtiene el primer elemento de la matriz
     * @memberOf Fascino
     * @public
     * @return {Element}
     */

  }, {
    key: "first",
    value: function first() {
      return this.eq(0);
    }
    /**
     * Crea una nueva selección de elemento que cumplan con la condición dada en la función
     * @memberOf Fascino
     * @public
     * @param  {Function} fn Función para filtrar
     * @return {Fascino}
     */

  }, {
    key: "filter",
    value: function filter(fn) {
      if (isString(fn)) {
        var sel = fn;

        fn = function fn(el) {
          return el.matches(sel);
        };
      }

      return extend(merge(w().Elem, [].filter.call(this.Elem, fn)), {
        _prevObj: this
      });
    }
    /**
     * Obtiene los elementos impares de la matriz
     * @memberOf Fascino
     * @public
     * @return {(Element|Fascino)}
     */

  }, {
    key: "odd",
    value: function odd() {
      var result = this.filter(function (el, i) {
        return i % 2 === 0;
      });
      return extend(result, {
        _prevObj: this
      });
    }
    /**
     * Obtiene los numero pares de la matriz
     * @memberOf Fascino
     * @public
     * @return {(Element|Fascino)}
     */

  }, {
    key: "even",
    value: function even() {
      var result = this.filter(function (el, i) {
        return i % 2 !== 0;
      });
      return extend(result, {
        _prevObj: this
      });
    }
    /**
     * Busca un elemento hijo por su selector CSS
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} sel Selector CSS valido
     * @return {Fascino}
     */

  }, {
    key: "find",
    value: function find(sel) {
      var rEl = Array.from('');
      this.Elem.forEach(function (el) {
        var _ref;

        rEl.push((_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(el, sel))));
      });
      return rEl.length === 0 ? [] : rEl.length === 1 ? w(rEl[0]) : merge(w().Elem, rEl);
    }
    /**
     * Verifica si el elemento es hijo del Elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} s Selector CSS
     * @return {Boolean}
     */

  }, {
    key: "contains",
    value: function contains(s) {
      return this.find(s).length > 0;
    }
    /**
     * Obtiene los hijos de un elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} sel Selector o elemento hijo a buscar
     * @return {Array} Lista de hijos
     */

  }, {
    key: "children",
    value: function children(sel) {
      var _ref3;

      var element = this.Elem[0];

      if (empty(sel)) {
        var _ref2;

        return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(element.children));
      }

      return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(element.children)).filter(function (child) {
        return child.matches(sel);
      });
    }
    /**
     * Verifica de que tipo es el selector
     * @memberOf Fascino
     * @public
     * @param  {*}  s
     * @return {Boolean}
     */

  }, {
    key: "is",
    value: function is(s) {
      var result = false;

      if (this.length === 0) {
        return false;
      }

      if (s && hasProp(s, 'Elem')) {
        this.each(function (el) {
          s.each(function (o) {
            if (el === o) {
              result = true;
              return;
            }
          });
        });
      }

      if (isString(s)) {
        if (s === ':selected') {
          result = this._is('selected');
        } else if (s === ':checked') {
          result = this._is('checked');
        } else if (s === ':visible') {
          this.each(function (el) {
            if (isVisible(el)) {
              result = true;
            }
          });
        } else if (s === ':hidden') {
          this.each(function (el) {
            if (el.getAttribute('type') === 'hidden' || isHiden(el)) {
              result = true;
            }
          });
        } else if (s === ':disabled') {
          this.each(function (el) {
            if (el.getAttribute('disabled') || _$(el).hasClass('disabled')) {
              result = true;
            }
          });
        } else if (s === ':readonly') {
          this.each(function (el) {
            if (el.getAttribute('readonly') || _$(el).hasClass('readonly')) {
              result = true;
            }
          });
        } else {
          this.each(function (el) {
            if (el.matches(s) || Element.prototype.matches.call(el, s)) {
              result = true;
            }
          });
        }
      } else if (isArrayish(s)) {
        this.each(function (el) {
          s.forEach(function (sel) {
            if (el === sel) {
              result = true;
            }
          });
        });
      } else if (s.nodeType === 1) {
        this.each(function (el) {
          if (el === s) {
            result = true;
          }
        });
      }

      return result;
    }
    /**
     * Método público de Fascino._prop
     * @memberOf Fascino
     * @public
     * @param  {String} n
     * @param  {String} v
     * @return {Fascino}
     */

  }, {
    key: "prop",
    value: function prop(n, v) {
      return arguments.length === 1 ? this._prop(n) : this._prop(n, empty(v) ? '' : v);
    }
    /**
     * Agrega un elemento al padre seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(Element|Fascino|String)} node
     * @param  {Object} options
     * @return {Fascino}
     */

  }, {
    key: "append",
    value: function append(node, options) {
      if (this.length === 0) {
        return this;
      }

      var newNode = normalizeElements(node);

      this._setOptions(newNode, options);

      return this.each(function (el) {
        w(newNode).each(function (nN, i) {
          if (nN === el) {
            return;
          }

          var child = i === 0 ? nN : nN.cloneNode(true);
          script(child);

          if (child.tagName && child.tagName !== 'SCRIPT') {
            el.append(child);
          }
        });
      });
    }
    /**
     * Agrega el elemento seleccionado al nuevo padre
     * @memberOf Fascino
     * @public
     * @param  {(Element|Fascino|String)} node
     * @param  {Object} options
     * @return {Fascino}
     */

  }, {
    key: "appendTo",
    value: function appendTo(node, options) {
      if (this.length === 0) {
        return this;
      }

      var newNode = normalizeElements(node);

      this._setOptions(newNode, options);

      return this.each(function (el) {
        w(newNode).each(function (p, i) {
          if (el === p) {
            return p;
          }

          p.append(i === 0 ? el : el.cloneNode(true));
        });
      });
    }
    /**
     * Agrega un nuevo elemento al principio del padre seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(Element|Fascino|String)} node
     * @param  {Object} options
     * @return {Fascino}
     */

  }, {
    key: "prepend",
    value: function prepend(node, options) {
      if (this.length === 0) {
        return this;
      }

      var newNode = normalizeElements(node);

      this._setOptions(newNode, options);

      return this.each(function (el, elIndex) {
        w(newNode).each(function (e) {
          if (el === e) return;
          var child = elIndex === 0 ? e : e.cloneNode(true);
          script(child);

          if (child.tagName && child.tagName !== 'SCRIPT') {
            el.prepend(child);
          }
        });
      });
    }
    /**
     * Agrega el elemento seleccionado al nuevo padre
     * @memberOf Fascino
     * @public
     * @param  {(Element|Fascino)} node
     * @param  {Object} options
     * @return {Fascino}
     */

  }, {
    key: "prependTo",
    value: function prependTo(node, options) {
      if (this.length === 0) {
        return this;
      }

      var newNode = normalizeElements(node);

      this._setOptions(newNode, options);

      return this.each(function (el) {
        w(newNode).each(function (parent, parIndex) {
          if (el === parent) return parent;
          w(parent).prepend(parIndex === 0 ? el : el.cloneNode(true));
        });
      });
    }
    /**
     * Clona el elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {Boolean} deep Verdadero si los hijos del nodo también deben ser clonados
     * @return {Array}
     */

  }, {
    key: "clone",
    value: function clone() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var res = [];

      if (not(deep)) {
        deep = false;
      }

      this.each(function (e) {
        var el = e.cloneNode(deep);
        res.push(el);
      });
      return merge(w().Elem, res);
    }
    /**
     * Crea una copia de un nodo desde un documento externo
     * @memberOf Fascino
     * @public
     * @param  {Boolean} deep Verdadero si los hijos del nodo también deben ser importados
     * @return {Array}
     */

  }, {
    key: "import",
    value: function _import() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var res = [];

      if (not(deep)) {
        deep = true;
      }

      this.each(function (e) {
        res.push(document.importNode(e, deep));
      });
      return merge(w().Elem, res);
    }
    /**
     * Transfiere un node desde otro document al documento del método
     * @memberOf Fascino
     * @public
     * @return {Array}
     */

  }, {
    key: "adopt",
    value: function adopt() {
      var res = [];
      this.each(function (e) {
        res.push(document.adoptNode(e));
      });
      return merge(w().Elem, res);
    }
    /**
     * Obtiene el contenido de un Iframe o Template
     * @memberOf Fascino
     * @public
     * @return {Array}
     */

  }, {
    key: "contents",
    value: function contents() {
      if (this.length === 0) {
        return this;
      }

      var res = [];
      this.each(function (el) {
        var content;

        if (el.nodeName === 'IFRAME') {
          content = el.contentDocument || el.contentWindow.document;
        } else if (el.nodeName === 'TEMPLATE') {
          content = el.content;
        }

        res.push(content);
      });
      return merge(w().Elem, res);
    }
    /**
     * Obtiene el o los padres de un elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} sel Selector del padre a buscar
     * @return {Fascino} Lista de Padres
     */

  }, {
    key: "parents",
    value: function parents(sel) {
      var parents = [];
      this.each(function (el) {
        var ancestor = el.parentNode;

        while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODETEXT) {
          if (ancestor.matches(sel)) {
            parents.push(ancestor);
          }

          ancestor = ancestor.parentNode;
        }
      });
      return w(parents);
    }
    /**
     * Obtiene el padre del elemento
     * @memberOf Fascino
     * @public
     * @return {Fascino}
     */

  }, {
    key: "parent",
    value: function parent() {
      var parent = [];
      this.each(function (el) {
        parent.push(el.parentNode);
      });
      return w(parent);
    }
    /**
     * Obtiene o busca el hermano anterior
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} sel
     * @return {(Fascino|Array)}
     */

  }, {
    key: "prev",
    value: function prev(sel) {
      var el = this.Elem[0],
          previous = el.previousElementSibling;

      if (empty(sel)) {
        return w(previous);
      }

      while (previous) {
        if (previous.matches(sel)) {
          return w(previous);
        }

        previous = previous.previousElementSibling;
      }

      return [];
    }
    /**
     * Obtiene o busca el hermano siguiente
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)}   sel
     * @return {(Fascino|Array)}
     */

  }, {
    key: "next",
    value: function next(sel) {
      var el = this.Elem[0],
          next = el.nextElementSibling;

      if (empty(sel)) {
        return w(next);
      }

      while (next) {
        if (next.matches(sel)) {
          return w(next);
        }

        next = next.nextElementSibling;
      }

      return [];
    }
    /**
     * Busca el ascendiente más cercano al elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} sel Selector del ascendiente a buscar
     * @return {(Fascino|Element|Array|Null)}
     */

  }, {
    key: "closest",
    value: function closest(sel) {
      if (this.length === 0) return this;

      if (!sel) {
        return this.parent(sel);
      }

      var res = [];
      this.each(function (el) {
        if ('closest' in el) {
          res.push(el.closest(sel));
        } else {
          while (el) {
            if (!el) break;

            if (el.matches(sel)) {
              res.push(el);
              return;
            }

            el = el.parentElement;
          }
        }
      });
      return res;
    }
    /**
     * Vacía el contenido HTML de un elemento
     * @memberOf Fascino
     * @public
     * @return {Fascino}
     */

  }, {
    key: "emptyHtml",
    value: function emptyHtml() {
      return this.each(function (el) {
        el.innerHTML = '';
      });
    }
    /**
     * Vacía el valor de un elemento
     * @memberOf Fascino
     * @public
     * @return {Fascino}
     */

  }, {
    key: "emptyVal",
    value: function emptyVal() {
      return this.each(function (el) {
        el.value = '';
      });
    }
    /**
     * Encierra un elemento
     * @memberOf Fascino
     * @public
     * @param  {(Element|String)} el
     * @return {Fascino} El nuevo padre
     */

  }, {
    key: "wrap",
    value: function wrap(el) {
      if (this.length === 0) {
        return;
      }

      var wrapper = w(normalizeElements(el));

      if (!wrapper.length) {
        return;
      }

      var res = [];
      this.each(function (el) {
        var _target, _wrapper;

        _wrapper = w(wrapper.clone(true));

        _wrapper.insertBefore(el);

        _target = _wrapper;

        while (_target.children().length) {
          _target = _target.children().eq(0);
        }

        _target.append(el);

        res.push(_wrapper.e(0));
      });
      return w(res);
    }
    /**
     * Busca y encierra todos los elemento del tipo dado
     * @memberOf Fascino
     * @public
     * @param  {(NodeList|Fascino-Object|Object|Array)} el
     * @return {Fascino}
     */

  }, {
    key: "wrapAll",
    value: function wrapAll(el) {
      var wrapper, _wrapper, _target;

      if (this.length === 0) {
        return;
      }

      wrapper = w(normalizeElements(el));

      if (!wrapper.length) {
        return;
      }

      _wrapper = w(wrapper.clone(true));

      _wrapper.insertBefore(this.Elem[0]);

      _target = _wrapper;

      while (_target.children().length) {
        _target = _target.children().eq(0);
      }

      this.each(function (e) {
        _target.append(e);
      });
      return _wrapper;
    }
    /**
     * Busca y encierra los hijo de un elemento
     * @memberOf Fascino
     * @public
     * @param  {(Elemento|Fascino|String)} el
     * @return {Fascino}
     */

  }, {
    key: "wrapInner",
    value: function wrapInner(el) {
      if (this.length === 0) {
        return;
      }

      var wrapper = w(normalizeElements(el));

      if (!wrapper.length) {
        return;
      }

      var res = [];
      this.each(function (e) {
        var elem = w(e),
            html = elem.html(),
            wrp = w(wrapper.clone(true));
        elem.html(wrp.html(html));
        res.push(wrp);
      });
      return w(res);
    }
    /**
     * Desencierra los elemento
     * @memberOf Fascino
     * @public
     * @return {Fascino}
     */

  }, {
    key: "unwrap",
    value: function unwrap() {
      return this.each(function (el) {
        var p = el.parentNode;

        while (el.firstChild) {
          p.insertBefore(el.firstChild, el);
        }

        p.removeChild(el);
      });
    }
    /**
     * Elimina uno o todos los elementos del DOM
     * @memberOf Fascino
     * @public
     * @param  {(String|Element|Array)} sel Selector a eliminar
     * @return {Array}
     */

  }, {
    key: "remove",
    value: function remove(sel) {
      var _ref4;

      var out = !empty(sel) ? this.Elem.filter(function (el) {
        return el.matches(sel);
      }) : this.Elem,
          res = [];
      out.forEach(function (el) {
        res.push(el.parentNode.removeChild(el));
      });
      return (_ref4 = []).concat.apply(_ref4, _toConsumableArray(this.Elem).concat(res));
    }
    /**
     * Inserta un elemento antes del elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {Element} elements
     * @return {Fascino}
     */

  }, {
    key: "insertBefore",
    value: function insertBefore(elements) {
      var _el = w(elements);

      return this.each(function (el) {
        _el.each(function (_e, i) {
          if (_e === el) {
            return;
          }

          var p = _e.parentNode;

          if (p) {
            p.insertBefore(i === 0 ? el : el.cloneNode(true), _e);
          }
        });
      });
    }
    /**
     * Inserta un elemento después del elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {Element} elements
     * @return {Fascino}
     */

  }, {
    key: "insertAfter",
    value: function insertAfter(elements) {
      var _el = w(elements);

      return this.each(function (el) {
        _el.each(function (_e, i) {
          if (_e === el) {
            return;
          }

          var p = _e.parentNode;

          if (p) {
            p.insertBefore(i === 0 ? el : el.cloneNode(true), _e.nextSibling);
          }
        });
      });
    }
    /**
     * Agrega un elemento o etiquetas HTML después del elemento dado
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} html
     * @param  {String} position la posición equivale a afterbegin o afterend; @default afterbegin
     * @return {Fascino}
     */

  }, {
    key: "after",
    value: function after(html) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'afterbegin';
      return this.each(function (el) {
        if (isString(html)) {
          el.insertAdjacentHTML(position, html);
        } else {
          w(html).insertAfter(el);
        }
      });
    }
    /**
     * Agrega un elemento o HTML antes del elemento dado
     * @memberOf Fascino
     * @public
     * @param  {(String|Element)} html
     * @param  {String} position la posición equivale a beforebegin o beforeend; @default beforebegin
     * @return {Fascino}
     */

  }, {
    key: "before",
    value: function before(html) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'beforebegin';
      return this.each(function (el) {
        if (isString(html)) {
          el.insertAdjacentHTML(position, html);
        } else {
          w(html).insertBefore(el);
        }
      });
    }
    /**
     * Obtiene o Establece el texto al elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(String|Null)} txt
     * @return {(Fascino|String)}
     */

  }, {
    key: "text",
    value: function text(txt) {
      return empty(txt) ? this._prop('textContent') : this._prop('textContent', txt);
    }
    /**
     * Obtiene o Establece el contenido HTML del elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {(String|Fascino|Element)} html
     * @return {(Fascino|String)}
     */

  }, {
    key: "html",
    value: function html(_html) {
      var value = [];

      if (this.length === 0) {
        return this;
      }

      if (_html === '') {
        return this._prop('innerHTML', '');
      }

      if (empty(_html)) {
        return this._prop('innerHTML');
      }

      if (Array.isArray(_html)) {
        var _ref5;

        value = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(value).concat(_toConsumableArray(_html)));
      } else if (_html instanceof Element || isFascinoElement(_html)) {
        var _ref6;

        var res = [],
            h = _html instanceof Element ? w(_html) : _html;
        h.each(function (v) {
          res.push(w(v).outerHTML());
        });
        value = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(value).concat(res));
      } else {
        value.push(_html);
      }

      this._prop('innerHTML', value.length === 1 && empty(value[0]) ? '' : value.join('\n'));

      return this;
    }
    /**
     * Obtiene o Establece el valor de un elemento dado
     * @memberOf Fascino
     * @public
     * @param  {String} value Valor del input, textarea o elemento que contenta value
     * @return {(Fascino|String)}
     */

  }, {
    key: "val",
    value: function val(value) {
      if (not(value)) {
        return this.length === 0 ? undefined : this._prop('value');
      }

      return this.each(function (el) {
        if (typeof el.value != 'undefined') {
          el.value = value;
        } else {
          w(el).html(value);
        }
      });
    }
    /**
     * Obtiene el HTML o envoltura del elemento dado
     * @memberOf Fascino
     * @public
     * @return {String}
     */

  }, {
    key: "outerHTML",
    value: function outerHTML() {
      return this._prop('outerHTML');
    }
    /**
     * Agrega clases al elemento dado
     * @memberOf Fascino
     * @example
     * _$(mi-elem).addClass('miclass')
     * _$(mi-elem).addClass('miclass1', 'miclass2' /*...*\)
     * @public
     * @param {...String} arg Lista de clases separadas por coma(,)
     * @return {Fascino}
     */

  }, {
    key: "addClass",
    value: function addClass() {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      return this.each(function (e) {
        var _e$classList;

        (_e$classList = e.classList).add.apply(_e$classList, arg);
      });
    }
    /**
     * Elimina Clases del elemento seleccionado
     * @memberOf Fascino
     * @public
     * @param  {...String} args
     * @return {Fascino}
     */

  }, {
    key: "removeClass",
    value: function removeClass() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.each(function (e) {
        var _e$classList2;

        (_e$classList2 = e.classList).remove.apply(_e$classList2, args);
      });
    }
    /**
     * Intercambia clases del elemento dado
     * @memberOf Fascino
     * @public
     * @param  {...String} args Lista de Clases a cambiar
     * @return {Fascino}
     */

  }, {
    key: "toggleClass",
    value: function toggleClass() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.each(function (e) {
        var _e$classList3;

        (_e$classList3 = e.classList).toggle.apply(_e$classList3, args);
      });
    }
    /**
     * Reemplaza una clase por otra
     * @memberOf Fascino
     * @public
     * @param  {...String} args Clase vieja clase nueva
     * @example
     * miElement.replaceClass('oldClass', 'NewClass')
     * @return {Fascino}
     */

  }, {
    key: "replaceClass",
    value: function replaceClass() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.each(function (e) {
        var _e$classList4;

        (_e$classList4 = e.classList).replace.apply(_e$classList4, args);
      });
    }
    /**
     * Verifica si el elemento posee una clase
     * @memberOf Fascino
     * @public
     * @param  {String}  className Nombre de la clase
     * @return {Boolean} Verdadero si existe
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {
      return this.Elem[0].classList.contains(className);
    }
    /**
     * Agrega u Obtiene estilos CSS a los Elementos
     * @memberOf Fascino
     * @public
     * @param  {...(String|Array|Object)} arg
     * @example <caption>Uso</caption>
     * miElement.style('display', 'none') // establece la propiedad CSS a display none
     * miElement.style({
     *   border: '1px solid #ff0' // Establece un border Amarillo
     *   color: '#000' // y un color de texto Negro
     * })
     * miElement.style('display') // retorna none
     * miElement.style() // Retorna todos los Estilos establecidos(CSSStyleDeclaration)
     * miElement.style([
     *   'border', 'color' // Retorna un Objecto {IDfromMiElem: {border: '1px solid #ff0', color: '#000'}}
     * ]) // Importante: si el elemento no tiene ID se le creara uno aleatorio
     * @return {(Fascino|Array|Object|String)}
     */

  }, {
    key: "style",
    value: function style() {
      for (var _len5 = arguments.length, arg = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        arg[_key5] = arguments[_key5];
      }

      if (this.length === 0) {
        return this;
      }

      if (arg.length === 0) {
        return getComputedStyle(this.Elem[0]);
      }

      if (arg.length === 1) {
        if (isArrayish(arg[0])) {
          var getStyle = {},
              i = 0;
          this.each(function (el) {
            var id = el.getAttribute('id'),
                prefix = !empty(id) ? id : el.tagName + i;
            getStyle[prefix] = {};
            arg[0].forEach(function (nameStyle) {
              getStyle[prefix][nameStyle] = el.style[nameStyle];
            });
            i++;
          });
          return getStyle;
        } else if (isObject(arg[0])) {
          return this.each(function (el) {
            for (var key in arg[0]) {
              if (hasProp(arg[0], key)) {
                var value = arg[0][key];
                el.style.setProperty(key, value);
              }
            }
          });
        } else if (arg[0].indexOf(':') === 0) {
          return getStyleComputed(this.Elem[0], null, arg[0]);
        } else if (arg[0] === '*' || arg[0] === 'all') {
          return getStyleComputed(this.Elem[0]);
        } else {
          var st = getStyleComputed(this.Elem[0]);
          return arg[0] in st ? st[arg[0]] : '';
        }
      }

      if (arg.length === 2 || arg.length === 3) {
        return this.each(function (el) {
          var _el$style;

          (_el$style = el.style).setProperty.apply(_el$style, arg);
        });
      }

      return this;
    }
    /**
     * Remueve todos o los estilos establecidos
     * @memberOf Fascino
     * @public
     * @example
     * miElement.removeStyle('border', 'color') // Removerá los estilos del border y el color
     * @param  {...String} name Lista de Stilo}
     * @return {Fascino}
     */

  }, {
    key: "removeStyle",
    value: function removeStyle() {
      for (var _len6 = arguments.length, name = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        name[_key6] = arguments[_key6];
      }

      if (empty(name) || this.length === 0) {
        return this;
      }

      return this.each(function (el) {
        name.forEach(function (n) {
          el.style.removeProperty(n);
        });
      });
    }
    /**
     * Obtiene o estable el valor de la barra de desplazamiento vertical
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)} val
     * @return {(String|Number|Fascino)}
     */

  }, {
    key: "scrollTop",
    value: function scrollTop(val) {
      if (this.length === 0) {
        return this;
      }

      if (not(val)) {
        return this.Elem[0] === window ? window.pageYOffset : this.Elem[0].scrollTop;
      }

      return this.each(function (el) {
        el.scrollTop = val;
      });
    }
    /**
     * Obtiene o estable el valor de la barra de desplazamiento Horizontal
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)} val
     * @return {(String|Number|Fascino)}
     */

  }, {
    key: "scrollLeft",
    value: function scrollLeft(val) {
      if (this.length === 0) {
        return this;
      }

      if (empty(val)) {
        return this.Elem[0] === window ? window.pageXOffset : this.Elem[0].scrollLeft;
      }

      return this.each(function (el) {
        el.scrollLeft = val;
      });
    }
    /**
     * Obtiene o Establece el Ancho total del elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)} val
     * @return {(String|Number|Fascino)}
     */

  }, {
    key: "outerWidth",
    value: function outerWidth(val) {
      return this._sizeOut('width', val);
    }
    /**
     * Obtiene o Establece la Altura total del elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)} val
     * @return {(String|Number|Fascino)}
     */

  }, {
    key: "outerHeight",
    value: function outerHeight(val) {
      return this._sizeOut('height', val);
    }
    /**
     * Obtiene o Establece la posición del Elemento
     * @memberOf Fascino
     * @public
     * @param  {Object} val Objeto {top,left}
     * @return {(Object|Fascino)}
     */

  }, {
    key: "offset",
    value: function offset(val) {
      if (this.length === 0) {
        return this;
      }

      if (empty(val)) {
        var rect = this.Elem[0].getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
          top: rect.top + scrollTop,
          left: rect.left + scrollLeft
        };
      }

      return this.each(function (el) {
        var offset = w(el).offset(),
            top = val.top,
            left = val.left,
            position = getStyleComputed(el).position;

        if (position === 'static') {
          w(el).style('position', 'relative');
        }

        if (['absolute', 'fixed'].indexOf(position) === -1) {
          top = top - offset.top;
          left = left - offset.left;
        }

        w(el).style({
          top: top,
          left: left
        });
      });
    }
    /**
     * Obtiene la Posición del elemento
     * @memberOf Fascino
     * @public
     * @param  {Boolean} margin Verdader si se incluye el margen
     * @return {(Object|Undefined)}
     */

  }, {
    key: "position",
    value: function position() {
      var margin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.length === 0) {
        return undefined;
      }

      if (typeof margin != 'boolean') {
        try {
          margin = JSON.parse(margin);
        } catch (e) {
          margin = false;
        }
      }

      var ml = 0,
          mt = 0;

      if (margin) {
        var s = getStyleComputed(this.Elem[0]);
        ml = parseInt(s['margin-left']);
        mt = parseInt(s['margin-top']);
      }

      return {
        top: this.Elem[0].offsetTop - mt,
        left: this.Elem[0].offsetLeft - ml
      };
    }
    /**
     * Obtiene o Establece la posición horizontal del elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)}  v Nueva posición
     * @param  {Boolean} m Si se debe incluir el margen
     * @return {(String|Number|NaN)}
     */

  }, {
    key: "left",
    value: function left(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.length === 0) {
        return NaN;
      }

      if (typeof v === 'boolean') {
        m = v;
        v = undefined;
      }

      if (empty(v)) {
        return this.position(m).left;
      }

      return this.style('left', !isNaN(v) ? v + 'px' : v);
    }
    /**
     * Obtiene o Establece la posición vertical del elemento
     * @memberOf Fascino
     * @public
     * @param  {(String|Number)}  v Nueva posición
     * @param  {Boolean} m Si se debe incluir el margen
     * @return {(String|Number|NaN)}
     */

  }, {
    key: "top",
    value: function top(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.length === 0) {
        return NaN;
      }

      if (typeof v === 'boolean') {
        m = v;
        v = undefined;
      }

      if (empty(v)) {
        return this.position(m).top;
      }

      return this.style('top', !isNaN(v) ? v + 'px' : v);
    }
    /**
     * Obtiene el Ancho interno del elemento
     * @memberOf Fascino
     * @public
     * @return {Number}
     */

  }, {
    key: "innerWidth",
    value: function innerWidth() {
      return this.Elem[0] === window ? window.innerWidth : this.Elem[0].clientWidth;
    }
    /**
     * Obtiene el Alto interno del elemento
     * @memberOf Fascino
     * @public
     * @return {Number}
     */

  }, {
    key: "innerHeight",
    value: function innerHeight() {
      return this.Elem[0].clientHeight;
    }
    /**
     * Obtiene o establece la altura del elemento
     * @memberOf Fascino
     * @public
     * @param  {(Number|String)} val
     * @return {(Number|String|Fascino)}
     */

  }, {
    key: "height",
    value: function height(val) {
      return this._size('height', val);
    }
    /**
     * Obtiene o establece la anchura del elemento
     * @memberOf Fascino
     * @public
     * @param  {(Number|String)} val
     * @return {(Number|String|Fascino)}
     */

  }, {
    key: "width",
    value: function width(val) {
      return this._size('width', val);
    }
    /**
     * Oculta un ELemento y ejecuta la función dada
     * @memberOf Fascino
     * @public
     * @param  {Function} callback
     * @return {Fascino}
     */

  }, {
    key: "hide",
    value: function hide(callback) {
      var _this3 = this;

      return this.each(function (el) {
        var display = w(el).style('display'),
            opacity = w(el).style('opacity');

        if (display != 'none' && parseInt(opacity) != 0) {
          w(el).origin('display', display);
          w(el).origin('opacity', opacity);
          w(el).style({
            display: 'none',
            opacity: 0
          });
        }

        if (isFunction$1(callback)) {
          callback.call(_this3, el);
        }
      });
    }
    /**
     * Muestra un elemento y ejecuta la función dada
     * @memberOf Fascino
     * @public
     * @param  {Function} callback
     * @return {Fascino}
     */

  }, {
    key: "show",
    value: function show(callback) {
      var _this4 = this;

      return this.each(function (el) {
        var display = w(el).origin('display', undefined, 'block'),
            opacity = w(el).origin('opacity', undefined, '1'),
            setDisplay = 'block',
            setOpacity = 1;

        if (display && display !== 'none') {
          setDisplay = display;
        }

        if (opacity && opacity !== 0) {
          setOpacity = opacity;
        }

        w(el).style({
          display: setDisplay,
          opacity: setOpacity
        });

        if (isFunction$1(callback)) {
          callback.call(_this4, el);
        }
      });
    }
    /**
     * Muestra un elemento con desvanecimiento suave
     * @memberOf Fascino
     * @public
     * @param  {Function} fn   Funcion a ejecutar despues del efecto
     * @param  {Number}   time Tiempo del desvanecimiento
     * @return {Fascino} 
     */

  }, {
    key: "fadeIn",
    value: function fadeIn(fn) {
      var _this5 = this;

      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
      this.style({
        opacity: 0,
        display: ''
      });

      if (isNumber(fn)) {
        time = fn;

        fn = function fn(el) {};
      }

      var last = +new Date(),
          element = this.Elem[0],
          view = function view() {
        _this5.style('opacity', +element.style.opacity + (new Date() - last) / time);

        last = +new Date();

        if (+element.style.opacity < 1) {
          window.requestAnimationFrame && requestAnimationFrame(view) || setTimeout(view, 16);
        }
      };

      view();

      if (isFunction$1(fn)) {
        fn.apply(this, [element]);
      }

      return this;
    }
    /**
     * Funcion que Oculta con un desvanecimiento suave
     * @memberOf Fascino
     * @public
     * @param  {Function} fn   Función a ejecutar luego de ocultar
     * @param  {Number}   time Tiempo del desvanecimiento
     * @return {Fascino}
     */

  }, {
    key: "fadeOut",
    value: function fadeOut(fn) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
      this.style({
        opacity: 1,
        display: ''
      });

      var last = +new Date(),
          element = this.Elem[0],
          view = function view() {
        element.style.opacity = Number(+element.style.opacity - (new Date() - last) / time).toFixed(4);
        last = +new Date();

        if (-element.style.opacity <= 0) {
          window.requestAnimationFrame && requestAnimationFrame(view) || setTimeout(view, 16);
        }
      };

      view();

      if (isFunction$1(fn)) {
        fn.apply(this, [element]);
      }

      return this;
    }
    /**
     * Obtiene o Establece los Atributos de un elemento
     * @memberOf Fascino
     * @public
     * @param  {...(String|Array|Object|Function)} args
     * @example <caption>Uso</caption>
     * miElement.attr('name', 'paswd') // Establece el Atributo Name a passwd
     * miElement.attr({
     *   id:'miElementID', // Establece el Id a miElementID y cambia el placeholder
     *   placeholder:'Escribe Aquí'
     * })
     * miElement.attr() // Re-establece los Atributos y retorna un NodeMap con ellos en caso de no poseer atributos retornara un Objecto Fascino
     * miElement.attr('name') // Retorna 'passwd' o false
     * miElement.attr(['name', 'id']) // Retorna un objecto {miElementID: {name: 'passwd', id:'miElementID'}}
     * // Ademas podemos pasar una función que se invocara dentro de un bucle que recorre los atributos
     * miElement.attr( function(attrName, attrValue, Attr) {
     *   console.log(
     *       this, // El Elemento iterado
     *       attrName, // El nombre del atributo
     *       attrValue, // El Valor del Attributo
     *       Attr // Lista de todos los atributos
     * )
     * })
     * @return {(String|Array|Object|Fascino)}
     */

  }, {
    key: "attr",
    value: function attr() {
      var _this6 = this;

      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      if (this.length === 0) {
        return this;
      }

      if (args.length === 0) {
        if (this.Elem[0].hasAttributes()) {
          var Attr = this.Elem[0].attributes;
          Array.from(Attr).forEach(function (a) {
            _this6.Elem[0].setAttribute(a.nodeName, a.nodeValue);
          });
          return Attr;
        } else {
          return this;
        }
      }

      if (args.length === 1) {
        if (isArrayish(args[0])) {
          var Attrs = {};
          var i = 0;
          this.each(function (el) {
            var id = el.getAttribute('id'),
                prefix = !not(id) ? id : el.tagName + i;
            Attrs[prefix] = {};
            args[0].forEach(function (a) {
              if (el.hasAttributes(a)) {
                Attrs[prefix][a] = el.getAttribute(a);
              } else {
                Attrs[prefix][a] = false;
              }
            });
            i++;
          });
          return Attrs;
        } else if (isObject(args[0])) {
          return this.each(function (el) {
            for (var key in args[0]) {
              if (hasProp(args[0], key)) {
                var value = normalizeData(args[0][key]);

                if (key in el) {
                  el[key] = value;
                } else {
                  el.setAttribute(key, value);
                }
              }
            }
          });
        } else if (isString(args[0])) {
          return this.Elem[0].hasAttributes(args[0]) ? this.Elem[0].getAttribute(args[0]) : false;
        } else if (isFunction$1(args[0])) {
          return this.each(function (el) {
            if (el.hasAttributes()) {
              var a = el.attributes;
              Array.from(a).forEach(function (attr) {
                args[0].call(el, [attr.nodeName, attr.nodeValue, attr]);
              });
            }
          });
        }
      }

      return this.each(function (el) {
        var key = args[0],
            value = normalizeData(args[1]);

        if (key in el) {
          el[key] = value;
        } else {
          el.setAttribute(key, value);
        }
      });
    }
    /**
     * Remueve los atributos dados
     * @memberOf Fascino
     * @public
     * @param  {...String} args Lista de Atributos
     * @example
     * miElement.removeAttr('style', 'name')
     * @return {Fascino}
     */

  }, {
    key: "removeAttr",
    value: function removeAttr() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      return this.each(function (el) {
        var attrs = [];

        if (args.length == 1 && !isArrayish(args[0])) {
          attrs.push(args[0]);
        } else {
          attrs = [].slice(args);
        }

        attrs.forEach(function (a) {
          el.removeAttribute(a);
        });
      });
    }
    /**
     * Verifica si el elemento tiene el atributo dado
     * @memberOf Fascino
     * @public
     * @param  {String}  attr
     * @return {Boolean}
     */

  }, {
    key: "hasAttr",
    value: function hasAttr(attr) {
      if (empty(attr)) {
        return false;
      }

      return this.Elem[0].hasAttribute(attr);
    }
    /**
     * Alterna los Atributos y su valor
     * @memberOf Fascino
     * @public
     * @param  {String} name  Nombre del Atributo
     * @param  {String} value Valor d el Atributo
     * @return {Fascino}
     */

  }, {
    key: "toggleAttr",
    value: function toggleAttr(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var _this = this;

      return this.each(function (el) {
        if (name in el && el[name] !== value) {
          el[name] = value;
        }

        if (!empty(name) && not(value)) {
          if (el.hasAttributes(name)) {
            el.removeAttribute(name);
          }
        } else {
          _this.Elem = [el];

          _this.attr(name, value);
        }
      });
    }
    /**
     * Elimina todos los atributos de un elemento
     * @memberOf Fascino
     * @public
     * @return {Fascino}
     */

  }, {
    key: "cleanAttr",
    value: function cleanAttr() {
      return this.each(function (el) {
        if (el.hasAttributes()) {
          var attr = el.attributes;
          attr.forEach(function (a) {
            el.removeAttribute(a.nodeName);
          });
        }
      });
    }
    /**
     * Establece u Obtiene los datos del Elemento Dataset
     * @memberOf Fascino
     * @public
     * @example <caption>Uso</caption>
     * miElement.data('role', 'dialog')  // Establece el Rol a dialog
     * // Esteble al data-json al objecto dado
     * miElement.data({
     *   json:{
     *      a: 1,
     *      b: 2
     * }
     * })
     * miElement.data() // Retorna un Objecto con todos los datos del Atributo data
     * miElement.data('role') // Retorna Dialog
     * miElement.data(['role','json']) // Retornara un Objecto {miElementID: {role: 'dialog', json: {a:1,b:2}}}
     * @param  {...(String|Array|Object)} args
     * @return {(String|Array|Object|Fascino)}
     */

  }, {
    key: "data",
    value: function data() {
      var _this$_ds;

      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      return this.length === 0 ? this : (_this$_ds = this._ds).data.apply(_this$_ds, [this.Elem].concat(args));
    }
    /**
     * Remueve los Atributos data
     * @memberOf Fascino
     * @public
     * @param  {...String} keys Lista de nombres de data sin el data
     * @example
     * // <input id="miElement" data-role='pick' data-color="#fff">
     * _$('#miElement').removeData('role', 'color');
     * // Obtendremos
     * // <input id="miElement">
     * @return {Fascino}
     */

  }, {
    key: "removeData",
    value: function removeData() {
      var _this7 = this;

      for (var _len10 = arguments.length, keys = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        keys[_key10] = arguments[_key10];
      }

      return this.each(function (el) {
        var _this7$_ds;

        (_this7$_ds = _this7._ds).remove.apply(_this7$_ds, [el].concat(keys));
      });
    }
    /**
     * Verifica si el Elemento tiene un atributo data dado
     * @memberOf Fascino
     * @public
     * @param  {String}  key Nombre sin el data
     * @return {Boolean}
     */

  }, {
    key: "hasData",
    value: function hasData(key) {
      if (empty(key)) {
        return false;
      }

      if (this._ds.has(this.Elem[0], key)) {
        return this._ds.get(this.Elem[0], key);
      }

      if (hasProp(this.Elem[0].dataset, key)) {
        return true;
      }

      return this.hasAttr("data-".concat(key));
    }
    /**
     * Alterna entre los atributos data
     * @memberOf Fascino
     * @public
     * @param  {String} name  Nombre del Atributo sin el data
     * @param  {(String|Object|Array)} value Valor del atributo data
     * @return {(Boolean|String|Object|Array|Fascino)}
     */

  }, {
    key: "toggleData",
    value: function toggleData(name, value) {
      if (arguments.length === 0) {
        return false;
      }

      if (this.hasData()) {
        return this._ds.access(this.ELem[0], name, value);
      }

      return this.toggleAttr("data-".concat(name), value);
    }
    /**
     * Establece el Evento para un elemento<br>
     * Si va usar eventos estándar es mejor que use los de la lista <code>_$().click(), $().blur() ...</code>
     * @memberOf Fascino
     * @public
     * @param  {(String|Array)} eventsList El nombre del Evento
     * @param  {String} sel Namespace o selector
     * @param  {Function} handler Función a ejecutar
     * @param  {Object} options Opciones de AddEventListiner
     * @return {Fascino}
     */

  }, {
    key: "on",
    value: function on(eventsList, sel, handler, options) {
      var _this8 = this;

      return this.each(function (el) {
        _this8._ev.on(el, eventsList, sel, handler, options);
      });
    }
    /**
     * Desvincula el Evento para un elemento
     * @memberOf Fascino
     * @public
     * @param  {String} eventsList El nombre del Evento
     * @param  {String} sel Namespace o selector
     * @param  {Function} handler Función a ejecutar
     * @param  {Object} options Opciones de AddEventListiner
     * @param  {Number} ix Index del evento
     * @return {Fascino}
     */

  }, {
    key: "off",
    value: function off(eventsList, sel, options, ix) {
      var _this9 = this;

      return this.each(function (el) {
        _this9._ev.off(el, eventsList, sel, options, ix);
      });
    }
    /**
     * Ejecuta el evento solo para el primer evento dado
     * @memberOf Fascino
     * @param  {String} events  El evento
     * @param  {String} sel Namespace o selector
     * @param  {Function} handler Función a ejecutar
     * @param  {Object} options Opciones de AddEventListiner
     * @return {Fascino}
     */

  }, {
    key: "one",
    value: function one(events, sel, handler, options) {
      var _this10 = this;

      return this.each(function (el) {
        _this10._ev.one(el, events, sel, handler, options);
      });
    }
    /**
     * Dispara o Crea un Evento Personalizado
     * @memberOf Fascino
     * @public
     * @param  {String} name Nombre del Evento
     * @param  {Object} data Información del Evento
     * @return {(void|Fascino)}
     */

  }, {
    key: "fire",
    value: function fire(name, data) {
      var _this11 = this;

      var _name = normName(name),
          newEv;

      if (['submit', 'reset'].indexOf(_name) > -1) {
        if (this.Elem[0].nodeName === 'FORM') {
          this.Elem[0][_name].call(this.Elem[0]);
        } else {
          var form = this.parents('form');

          form.Elem[0][_name].call(form.Elem[0]);
        }

        return this;
      }

      if (ListEvents.indexOf(_name) > -1) {
        this.Elem[0][_name].call(this.Elem[0]);
      }

      newEv = this._ev.createEv(name, data);
      return this.each(function (el) {
        var customEvent = w(el).data('customEvent'),
            et = {};
        et[_name] = newEv;

        if (not(customEvent)) {
          w(el).data('customEvent', et);
        } else {
          w(el).data('customEvent', extend({}, customEvent, et));
        }

        _this11._ev.fire(el, newEv);
      });
    }
    /**
     * Dispara un evento
     * @memberOf Fascino
     * @public
     * @param  {String} name Nombre del Evento
     * @param  {Object} data Información del evento
     * @return {Fascino}
     */

  }, {
    key: "trigger",
    value: function trigger(name, data) {
      var _this12 = this;

      var _name = normName(name);

      return this.each(function (el) {
        if (ListEvents.indexOf(_name) > -1) {
          el[_name].call(el);
        } else if (w(el).hasData('customEvent')) {
          var customEvent = w(el).data('customEvent');

          if (!not(customEvent) && hasProp(customEvent, _name)) {
            _this12._ev.fire(el, customEvent[_name]);
          } else {
            w(el).fire(name, data);
          }
        }
      });
    }
    /**
     * Crea el evento hover
     * @memberOf Fascino
     * @public
     * @param  {Function} fnOver Función de entrada
     * @param  {Function} fnOut  Función de Salida
     * @return {Fascino}
     */

  }, {
    key: "hover",
    value: function hover(fnOver, fnOut) {
      var _this13 = this;

      return this.each(function (el) {
        _this13.on('mouseenter', fnOver).on('mouseleave', fnOut);
      });
    }
    /**
     * Obtiene las lista de eventos asignados aun elemento, si no se pasa ningun argumento se obtendran todos los eventos
     * @param  {String} name  Nombre del Evento
     * @param  {Number} index Posición del evento a buscar
     * @return {Object}
     */

  }, {
    key: "getEvent",
    value: function getEvent(name, index) {
      return this._ev.getEvents(this.Elem[0], name, index);
    }
  }], [{
    key: "addFn",
    value: function addFn(name, fn) {
      if (!hasProp(this, name)) {
        this.prototype[name] = fn;
      }

      return this;
    }
  }]);

  return Fascino;
}(Selector);

[
/**
 * Obtiene o Establece el relleno del Elemento dado
 * @memberOf Fascino
 * @public
 * @function padding
 * @param  {(String|Number|null)} val   Valor del Elemento a establecer
 * @param  {String} pseudo      Important
 * @return {(Object|Fascino)}
 */
'padding',
/**
 * Obtiene o Establece el relleno del Elemento dado
 * @memberOf Fascino
 * @public
 * @function margin
 * @param  {(String|Number|null)} val   Valor del Elemento a establecer
 * @param  {String} pseudo      Important
 * @return {(Object|Fascino)}
 */
'margin',
/**
 * Obtiene o Establece el relleno del Elemento dado
 * @memberOf Fascino
 * @public
 * @function border
 * @param  {(String|Number|null)} val   Valor del Elemento a establecer
 * @param  {String} pseudo      Important
 * @return {(Object|Fascino)}
 */
'border'].forEach(function (name) {
  Fascino.addFn(name, function (val, pseudo) {
    if (this.length === 0) {
      return;
    }

    if (isString(val)) {
      if (val.indexOf(':') === 0) {
        pseudo = val;
        val = undefined;
      }
    }

    if (empty(val)) {
      var s = getStyleComputed(this.Elem[0], null, !empty(pseudo) ? pseudo : ''),
          res = {};

      if (name !== 'border') {
        res = {
          top: parseInt(s["".concat(name, "-top")]),
          right: parseInt(s["".concat(name, "-right")]),
          bottom: parseInt(s["".concat(name, "-bottom")]),
          left: parseInt(s["".concat(name, "-left")])
        };
      } else {
        res = {
          top: parseInt(s['border-top-width']),
          right: parseInt(s['border-right-width']),
          bottom: parseInt(s['border-bottom-width']),
          left: parseInt(s['border-left-width'])
        };
      }

      return res;
    }

    return this.each(function (el) {
      if (isArrayish(val)) {
        w(el).style(name, val.join(' '));
      } else if (isObject(val)) {
        var _res = {},
            ext = name === 'border' ? '-width' : '';

        for (var i in val) {
          if (hasProp(val, i)) {
            _res["".concat(name, "-").concat(i).concat(ext)] = val[i];
          }
        }

        w(el).style(_res);
      } else {
        w(el).style(name, val);
      }
    });
  });
});
/**
 * Eventos Nativos de Javascript <br>
 * 'blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove',
 * 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown',
 * 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'
 * @example <caption>Uso</caption>
 * // Formato
 * // _$(miselector).[nameEvento](selector, function, options)
 * _$('body').clicK(function(e){
 * 	console.log("Presionastes sobre el body")
 * })
 * // Al hacer doble click sobre una section del elemento main, se ejecuta la funcion del click del body
 * _$('main').dblclick("section", function(e){
 * 		_$('body').click()
 * })
 * @memberOf Fascino
 * @public
 * @param  {String} s selector
 * @param  {Function} f Función a ejecutar
 * @param  {Object} o Opciones de AddEventListiner
 * @return {Fascino}
 */

ListEvents.forEach(function (n) {
  Fascino.addFn(n, function (s, f, o) {
    return arguments.length > 0 ? this.on(n, s, f, o) : this.fire(n, {
      detail: 'Fire ' + n
    });
  });
});
/**
 * Mini Motor de plantillas javascript
 * @memberOf module:Utils
 * @function template
 * @example <caption>Uso</caption>
 * var html = `
 *    <div class='alert alert<%this.type%>' role="alert">
 *       <%this.content%>
 *    </div>
 * `;
 * var options = {
 *    type: 'info',
 *    content:'This is Alerts'
 * }
 *
 * document.write(_$.template(html,options))
 * @param  {String} html    Código HTML de la plantilla
 * @param  {Object} options Opciones de plantilla para reemplazar
 * @param  {Object} conf    Configuraciones del motor
 * @return {String}
 */

function template$1(html, options, conf) {
  var ReEx,
      re = '<%(.+?)%>',
      reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,
      code = 'with(obj) { var r=[];\n',
      cursor = 0,
      result,
      match,
      add = function add(line, js) {
    /* jshint -W030 */
    js ? code += line.match(reExp) ? "".concat(line, "\n") : "r.push(".concat(line, ")\n") : code += line !== '' ? "r.push('".concat(line, "')\n") : '';
    return add;
  };

  if (!empty(conf)) {
    if (hasProp(conf, 'beginToken')) {
      re = re.replace('<%', conf.beginToken);
    }

    if (hasProp(conf, 'endToken')) {
      re = re.replace('%>', conf.endToken);
    }
  }

  ReEx = new RegExp(re, 'g');
  match = ReEx.exec(html);

  while (match) {
    add(html.slice(cursor, match.index).replace(/[\n]/g, ' '))(match[1], true);
    cursor = match.index + match[0].length;
    match = ReEx.exec(html);
  }

  add(html.substr(cursor, html.length - cursor).replace(/[\n]/g, ' '));
  code = (code + "return r.join('') }").replace(/[\r\t]/g, ' ');
  /* jshint -W054 */

  try {
    result = new Function('obj', code).apply(options, [options]);
  } catch (err) {
    console.error(err);
    console.error("'" + err.message + "'", ' in \n\nCode:\n', code, '\n');
    /* eslint no-console: 0, quotes: 0 */
  }

  return result;
}
/**
 * Funciones Útiles para el manejo de colores con javascript en formatos Hex, RGB(A), HSL(A), HWB
 * @namespace Colors
 * @memberOf module:Utils 
 * @tutorial Colors
 */
// CONVERSORES Y VALIDADORES
//============================================================================================
//-------------------- HEXADECIMA -------------------------------------------------------------

/**
 * Valida si es un color Hexadecimal valido
 * @memberOf module:Utils.Colors
 * @function isHex
 * @param  {String}  color Hexadecimal a validar
 * @return {Boolean}
 */


function isHex(color) {
  return /(^#[0-9a-f]{3}$)|(^#[0-9a-f]{4}$)|(^#[0-9a-f]{6}$)|(^#[0-9a-f]{8}$)/i.test(color);
}
/**
 * Obtiene el canal Alpha de un hexadecimal y lo convierte en decimal
 * @memberOf module:Utils.Colors
 * @function AlphaHex
 * @param {Hexadecimal} hex Color Hexadecimal en formato #RRGGBBAA
 * @return {(Number|Boolean)} El numero del porcentaje o false si no es un hexadecimal valido
 */


function AlphaHex(hex) {
  if (!isHex(hex)) {
    return false;
  }

  var r = /^#([0-9a-f]{6})([0-9a-f]{2})$/i.exec(hex);
  return r.length > 2 ? Hex2Per(r[2]) : 100;
}
/**
 * Convierte Colores Hexadecimales a RGB
 * @see [Github]{http://gist.github.com/983661}
 * @memberOf module:Utils.Colors
 * @function Hex2Rgb
 * @param {String} hex Color Hexadecimal
 * @return {(Object|Boolean)} Objecto con el color RGBA o false si no es valido
 */


function Hex2Rgb(hex) {
  if (!isHex(hex)) {
    return false;
  }

  var withAlpha = /(^#[0-9a-f]{4}$)|(^#[0-9a-f]{8}$)/i.test(hex),
      alpha = withAlpha ? AlphaHex(hex) : 100;

  if (withAlpha) {
    if (hex.length == 4) {
      hex = hex.substring(1, 4);
    } else {
      hex = hex.substring(1, 7);
    }
  } else {
    hex = hex.slice(1);
  }

  hex = +("0x" + hex.replace(hex.length < 5 && /./g, '$&$&'));
  return {
    r: hex >> 16 & 255,
    g: hex >> 8 & 255,
    b: hex & 255,
    a: alpha
  };
}
/**
 * Convierte Hexadecimal en HSL
 * @memberOf module:Utils.Colors
 * @function Hex2Hsl
 * @param {String} hex Color
 * @return {(Object|Boolean)} Objecto hsl o false
 */


function Hex2Hsl(hex) {
  if (!isHex(hex)) {
    return false;
  }

  var c = Hex2Rgb(hex);
  return Rgb2Hsl(c.r, c.g, c.b, c.a);
}
/**
 * Convierte un Hexadecimal a HWB
 * @memberOf module:Utils.Colors
 * @function Hex2Hsl
 * @param {String} hex
 * @return {(Object|Boolean)} Objecto hsl o false
 */


function Hex2Hwb(hex) {
  if (!isHex(hex)) {
    return false;
  }

  var c = Hex2Rgb(hex);
  return Rgb2Hwb(c.r, c.g, c.b);
} //-------------------- RGBA --------------------------------------------------------------------

/**
 * Valida si es un Objecto o String valido para rgb
 * @memberOf module:Utils.Colors
 * @function isRGB
 * @param  {(Object|String)}  rgb RGBA
 * @return {Boolean}
 */


function isRGB(rgb) {
  return isObject(rgb) && hasProp(rgb, 'r') || /(^rgb\([\d,?\s?]+\)$)|(^rgba\(([\d,?\s?]+)\s?\/?\s?(([\d.\d]|[\d\%])+)\)$)/gi.test(rgb);
}
/**
 * Convierte un valor RGBA a HEXADECIMAL
 * @memberOf module:Utils.Colors
 * @function Rgb2Hex
 * @param {Number} r     Rojo
 * @param {Number} g     Verde
 * @param {Number} b     Azul
 * @param {Number} a 	 Alfa
 * @return {String}		Expresión Hexadecimal
 */


function Rgb2Hex(r, g, b) {
  var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

  var ts = function ts(c) {
    var rt = c.toString(16);
    return rt.length == 1 ? rt + rt : rt;
  },
      hex = "#" + ts(r) + ts(g) + ts(b);

  if (a < 100) {
    hex += Per2Hex(a);
  }

  return hex.toUpperCase();
}
/**
 * Convierte un rgba a Hsla, el alfa es opcional
 * @memberOf module:Utils.Colors
 * @function Rgb2Hsl
 * @param {Number} r     Rojo
 * @param {Number} g     Verde
 * @param {Number} b     Azul
 * @param {Number} alpha Opacidad
 * @return {Object} Objecto con los datos HSLA
 */


function Rgb2Hsl(r, g, b) {
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  r /= 255;
  g /= 255;
  b /= 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var hue = NaN,
      sat = 0,
      light = (max + min) / 2;
  var d = max - min;

  if (d !== 0) {
    sat = light === 0 || light === 1 ? 0 : (max - light) / Math.min(light, 1 - light);

    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        hue = (b - r) / d + 2;
        break;

      case b:
        hue = (r - g) / d + 4;
    }

    hue = hue * 60;
  }

  return {
    h: Math.round(hue),
    s: Math.round(sat * 100),
    l: Math.round(light * 100),
    a: alpha
  };
}
/**
 * Convierte un RGB en HWB
 * @memberOf module:Utils.Colors
 * @function Rgb2Hwb
 * @param {Number} r Rojo
 * @param {Number} g Verde
 * @param {Number} b Azul
 * @return {Object} Objecto HWB
 */


function Rgb2Hwb(r, g, b) {
  var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  return function (b) {
    var hsl = Rgb2Hsl(r, g, b, a),
        w = 1 / 255 * Math.min(r, Math.min(g, b)),
        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return {
      h: hsl.h,
      w: Math.round(100 * w),
      b: Math.round(100 * b),
      a: hsl.a
    };
  }(b);
}
/**
 * Calcula el HSP de un RGB 
 * @memberOf module:Utils.Colors
 * @function Rgb2Hsp
 * @param {Number} r Rojo(0-255)
 * @param {Number} g Verde(0-255)
 * @param {Number} b Azul(0-255)
 * @return {Object} Un Objecto confomado por una clave hsp y una booleana isDark que indica si es o no oscuro el color
 */


function Rgb2Hsp(r, g, b) {
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  var hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  return {
    hsp: hsp,
    isDark: !(hsp > 127.5)
  };
} //-------------------- HSLA --------------------------------------------------------------------

/**
 * Valida si es un Objecto o String HSL
 * @memberOf module:Utils.Colors
 * @function isHSL
 * @param  {(Object|String)}  hsl
 * @return {Boolean}
 */


function isHSL(hsl) {
  return isObject(hsl) && hasProp(hsl, 's') || /(^hsl\([\d%?,?\s?]+\)$)|(^hsla\(([\d%?,?\s?]+)\s?\/?\s?(([\d.\d]|[\d\%])+)\)$)/gi.test(hsl);
}
/**
 * Convierte HSLA en RGBA
 * @memberOf module:Utils.Colors
 * @function Hsl2Rgb
 * @param {Number} hue   HUE
 * @param {Number} sat   Saturación
 * @param {Number} light Luz
 * @param {Number} alpha Opciada opcional
 * @return {Object} Object rgba
 */


function Hsl2Rgb() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var sat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  hue = hue % 360;

  if (hue < 0) {
    hue += 360;
  }

  sat /= 100;
  light /= 100;

  var f = function f(n) {
    var k = (n + hue / 30) % 12,
        a = sat * Math.min(light, 1 - light);
    return light - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
  };

  return {
    r: Math.round(255 * f(0)),
    g: Math.round(255 * f(8)),
    b: Math.round(255 * f(4)),
    a: alpha
  };
}
/**
 * Convierte Hsl a Hexadecimal
 * @memberOf module:Utils.Colors
 * @function Hsl2Hex
 * @param {Number} hue   HUE
 * @param {Number} sat   Saturación
 * @param {Number} light Luz
 * @param {Number} alpha Opciada opcional
 * @return {String}
 */


function Hsl2Hex() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var sat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var r = Hsl2Rgb(hue, sat, light, alpha);
  return Rgb2Hex(r.r, r.g, r.b, r.a);
}
/**
 * Convierte HSL a HWB
 * @memberOf module:Utils.Colors
 * @function Hsl2Hwb
 * @param {Number} hue   HUE
 * @param {Number} sat   Saturación
 * @param {Number} light Luz
 * @param {Number} alpha Opciada opcional
 * @return {Object} Objecto hwba
 */


function Hsl2Hwb() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var sat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var r = Hsl2Rgb(hue, sat, light, alpha),
      w = 1 / 255 * Math.min(r.r, Math.min(r.g, r.b)),
      b = 1 - 1 / 255 * Math.max(r.r, Math.max(r.g, r.b));
  w = Math.round(w);
  b = Math.round(b);
  return {
    h: Math.round(hue),
    w: w,
    b: b,
    a: alpha
  };
} //-------------------- HWB ---------------------------------------------------------------------

/**
 * Valida si es un Objecto o string HWB valido 
 * @memberOf module:Utils.Colors
 * @function isHwb
 * @param  {(Object|String)}  hwb
 * @return {Boolean}
 */


function isHwb(hwb) {
  return isObject(hwb) && hasProp(hwb, 'w') || /^hwb\(([\/?\d%?\s?]+)\)$/gi.test(hwb);
}
/**
 * Convierte un HWB en RGBA
 * @memberOf module:Utils.Colors
 * @function Hwb2Rgb
 * @param {Number} hue  
 * @param {Number} white
 * @param {Number} black
 * @param {Number} alpha
 * @return {Object}
 */


function Hwb2Rgb() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var white = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var black = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  hue /= 360;
  white /= 100;
  black /= 100;
  var radio = white + black,
      r,
      g,
      b,
      i,
      v,
      f,
      n;

  if (radio > 1) {
    white = black = radio;
  }

  i = Math.floor(6 * hue);
  v = 1 - black, f = 6 * hue - i;

  if ((i & 0x01) !== 0) {
    f = 1 - f;
  }

  n = white + f * (v - white);

  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = white;
      break;

    case 1:
      r = n;
      g = v;
      b = white;
      break;

    case 2:
      r = white;
      g = v;
      b = n;
      break;

    case 3:
      r = white;
      g = n;
      b = v;
      break;

    case 4:
      r = n;
      g = white;
      b = v;
      break;

    case 5:
      r = v;
      g = white;
      b = n;
      break;
  }

  return {
    r: Math.round(255 * r),
    g: Math.round(255 * g),
    b: Math.round(255 * b),
    a: alpha
  };
}
/**
 * Convierte un HWB a HEX
 * @memberOf module:Utils.Colors
 * @function Hwb2Hex
 * @param {Number} hue  
 * @param {Number} white
 * @param {Number} black
 * @param {Number} alpha
 * @return {String}
 */


function Hwb2Hex() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var white = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var black = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var r = Hwb2Rgb(hue, white, black, alpha);
  return Rgb2Hex(r.r, r.g, r.b, r.a);
}
/**
 * Convierte un HWB a HSL
 * @memberOf module:Utils.Colors
 * @function Hwb2Hsl
 * @param {Number} hue  
 * @param {Number} white
 * @param {Number} black
 * @param {Number} alpha
 * @return {Object}
 */


function Hwb2Hsl() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var white = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var black = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
  var r = Hwb2Rgb(hue, white, black, alpha);
  return Rgb2Hsl(r.r, r.g, r.b, r.a);
} //============================================================================================
// UTILIDADES PARRA LAS FUNCIONES DE COLORES
//============================================================================================

/**
 * Convierte un color a su representacion en String
 * @memberOf module:Utils.Colors
 * @function Color2Str
 * @param {(String|Object)} color El color
 * @return {String}
 */


function Color2Str(color) {
  if (isObject(color)) {
    if (hasProp(color, 'r')) {
      return hasProp(color, 'a') && color.a < 100 ? "rgba(".concat(color.r, " ").concat(color.g, " ").concat(color.b, " / ").concat(color.a, "%)") : "rgb(".concat(color.r, " ").concat(color.g, " ").concat(color.b, ")");
    } else if (hasProp(color, 'w')) {
      return hasProp(color, 'a') && color.a < 100 ? "hwb(".concat(color.h, " ").concat(color.w, "% ").concat(color.b, "% / ").concat(color.a, ")") : "hwb(".concat(color.h, " ").concat(color.w, "% ").concat(color.b, "%)");
    } else if (hasProp(color, 'h')) {
      return hasProp(color, 'a') && color.a < 100 ? "hsla(".concat(color.h, " ").concat(color.s, "% ").concat(color.l, "% / ").concat(color.a, "%)") : "hsl(".concat(color.h, " ").concat(color.s, "% ").concat(color.l, "%)");
    }
  } else {
    return "#".concat(color.toUpperCase());
  }
}
/**
 * Convierte un porcentaje a una expresión Hexadecimal
 * @memberOf module:Utils.Colors
 * @function Per2Hex
 * @see [Github]{https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4?permalink_comment_id=3036936#gistcomment-3036936}
 * @param {Number} percent El valor del porcentaje
 * @return {String}
 */


function Per2Hex(percent) {
  percent = Math.max(0, Math.min(100, percent));
  var PerHex = Math.round(percent / 100 * 255).toString(16);
  return PerHex.padStart(2, "0").toUpperCase();
}
/**
 * Convierte un Hexadecimal a Porcentaje
 * @memberOf module:Utils.Colors
 * @function Hex2Per
 * @param {String} Hex Hexadecimal
 * @return {Number}
 */


function Hex2Per(Hex) {
  return Math.round((parseInt(Hex, 16) - 0) / 255 * 100);
}
/**
 * Ilumina u oscurece un color <br/>
 * Similar a las funciones de Sass
 * @memberOf module:Utils.Colors
 * @function lightOrDark
 * @see [Author y Blog original]{https://css-tricks.com/snippets/javascript/lighten-darken-color/}
 * @param  {String} color Color Hexadecimal
 * @param  {Number} amt   Importe si e positivo seria Light negativo para dark
 * @return {String}       Color Hexadecimal
 */


function lightOrDark(color, amt) {
  if (!isHex(color)) {
    return color;
  }

  var hex = color.slice(1),
      num = parseInt(hex, 16),
      nor = function nor(c) {
    if (c > 255) {
      c = 255;
    } else if (c < 0) {
      c = 0;
    }

    return c;
  },
      r = nor((num >> 16) + amt),
      g = nor((num & 0x0000FF) + amt),
      b = nor((num >> 8 & 0x00FF) + amt);

  return "#" + String("000000" + (g | b << 8 | r << 16).toString(16)).slice(-6);
}
/**
 * Convierte un representación String de un color a un Objecto, si toRgb es verdadero el color suministrado
 * sera trasformado en un color RGB  y retorna su objecto dado.
 * @memberOf module:Utils.Colors
 * @function ColorStr2Obj
 * @param {String}  color representación de colores
 * @param {Boolean} toRgb Retorna objecto rgb si se establece a true
 */


function ColorStr2Obj(color) {
  var toRgb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isHex(color)) {
    return Hex2Rgb(color);
  } else {
    var c = /^([rgb|rgba|hsl|hsla|hwb]+)\(([\d]+),?\s?([\d%?]+),?\s?([\d%?]+),?\s?\/?\s?([\d%?]+)?\)$/gi.exec(color),
        o = {},
        rgb;

    if (not(c)) {
      return color;
    }

    switch (c[1]) {
      case 'rgb':
      case 'rgba':
        o.r = parseInt(c[2]);
        o.g = parseInt(c[3]);
        o.b = parseInt(c[4]);
        o.a = parseInt(c[5] || 100);
        rgb = o;
        break;

      case 'hsl':
      case 'hsla':
        o.h = parseInt(c[2]);
        o.s = parseInt(c[3]);
        o.l = parseInt(c[4]);
        o.a = parseInt(c[5] || 100);
        rgb = toRgb ? Hsl2Rgb(o.h, o.s, o.l, o.a) : null;
        break;

      case 'hwb':
        o.h = parseInt(c[2]);
        o.w = parseInt(c[3]);
        o.b = parseInt(c[4]);
        o.a = parseInt(c[5] || 100);
        rgb = toRgb ? Hwb2Rgb(o.h, o.w, o.b, o.a) : null;
        break;
    }

    return toRgb ? rgb : o;
  }
}

String.prototype.toObject = function () {
  var toRgb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return ColorStr2Obj(this, toRgb);
};

var Colors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isHex: isHex,
  AlphaHex: AlphaHex,
  Hex2Rgb: Hex2Rgb,
  Hex2Hsl: Hex2Hsl,
  Hex2Hwb: Hex2Hwb,
  isRGB: isRGB,
  Rgb2Hex: Rgb2Hex,
  Rgb2Hsl: Rgb2Hsl,
  Rgb2Hwb: Rgb2Hwb,
  Rgb2Hsp: Rgb2Hsp,
  isHSL: isHSL,
  Hsl2Rgb: Hsl2Rgb,
  Hsl2Hex: Hsl2Hex,
  Hsl2Hwb: Hsl2Hwb,
  isHwb: isHwb,
  Hwb2Rgb: Hwb2Rgb,
  Hwb2Hex: Hwb2Hex,
  Hwb2Hsl: Hwb2Hsl,
  Color2Str: Color2Str,
  Per2Hex: Per2Hex,
  Hex2Per: Hex2Per,
  lightOrDark: lightOrDark,
  ColorStr2Obj: ColorStr2Obj
});
/**
 * Conjunto de Utilidades
 * <p>Grupo de Funciones Utiles para nuestros proyectos</p>
 * @module Utils
 */

var Utils = {
  Colors: Colors,
  Utils: Utils$1,
  template: template$1
};
/**
 * Fascino desde el Navegador <br>
 * Esta variable sera la que interactué desde el navegador
 * @global
 * @namespace _$
 * @param  {(String|Function|Element|Object)} selector Selector CSS o HTMLElement o Array de HTMLElememnt
 * @param  {(HTMLElement|document)} context  Entorno de selección
 * @return {Fascino} Class [Fascino]{@link Fascino}
 */

function _$$1(selector, context) {
  return new Fascino(selector, context);
}

if (typeof window._$ === 'undefined') {
  window._$ = _$$1;
}

var U = Utils.Utils,
    template = Utils.template,
    C = Utils.Colors;
_$$1.template = template;
U.extend(_$$1, U);
U.extend(_$$1, C);
U.extend(_$$1, {
  /**
   * Añade funciones a Fascino JS
   * @memberOf _$
   * @public
   * @param {String} name      Nombre de la función
   * @param {Function} callbacks Función a añadir
   * @example
   * _$.addFn('decir', function(quedigo){
   * 	return this.each((el) => {
   * 		_$(el).html(quedigo)
   * 	})
   * })
   * // Ahora la usamos
   * _$('body').decir('Hola')
   *
   * // si lo ejecutamos el body contendrá la palabra "Hola"
   * @return {Fascino}
   * 
   */
  addFn: function addFn(name, callbacks) {
    return Fascino.addFn.apply(Fascino, [name, callbacks]);
  },

  /**
   * Globaliza la variable $,
   * Ojo si usa jQuery no use esta función
   * @memberOf _$
   * @public
   */
  global: function global() {
    window.$ = _$$1;
  },

  /**
   * Libera la variable $
   * @memberOf _$
   * @public
   */
  setFree$: function setFree$() {
    if (window.$ === window._$) {
      window.$ = undefined;
    }
  },

  /**
   * Intenta evitar conflicto con jQuery y Otros framework que usen el $
   * @memberOf _$
   * @public
   * @return {Fascino}
   */
  noConflict: function noConflict() {
    if (window.$ === $) {
      window.$ = _$$1;
    }

    return _$$1;
  },

  /**
   * Ejecuta una función cuando el DOM a cargado
   * @memberOf _$
   * @public
   * @param {Function} fn      función a ejecutar
   * @param {Object}   options Opciones para addEventListiner
   */
  DOMLoad: function DOMLoad(fn, options) {
    if (document.readyState != 'loading') {
      if (isFunction(fn)) {
        fn();
      }
    } else {
      document.addEventListener('DOMContentLoaded', fn, options || false);
    }
  },

  /**
   * Ejecuta una función cuando window a cargado
   * @memberOf _$
   * @public
   * @param {Function} fn Función a ejecutar
   * @return {Fascino}
   */
  WLoad: function WLoad(fn) {
    return _$$1(window).on('load', fn);
  },

  /**
   * Ejecuta una función cuando la ventana, el documento y sus recursos están a punto de ser descargados
   * @memberOf _$
   * @public
   * @param  {Function} fn Función a ejecutar
   * @return {Fascino}
   */
  beforeunload: function beforeunload(fn) {
    if (typeof fn === 'string') {
      return _$$1(window).on('beforeunload', function (e) {
        e.returnValue = fn;
        return fn;
      });
    } else {
      return _$$1(window).on('beforeunload', fn);
    }
  },

  /**
   * Carga perezosa de imágenes
   * @memberOf _$
   * @public
   * @param {Object} o Opciones de carga
   * @exclude {String} exclude Selector css de imágenes a excluir
   * @return {Fascino} Lista de imágenes cargadas
   */
  Lazy: function Lazy(o) {
    var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var img = _$$1('img'),
        picture = _$$1('picture'),
        bgImg = _$$1('[data-lazy-bg]'),
        LazyOptions = {
      root: document.querySelector('body'),
      rootMargin: '0px',
      threshold: 1.0
    };

    var opt = _$$1.extend({}, LazyOptions, o);

    var IO = new IntersectionObserver(function (entries, imgObserver) {
      entries.forEach(function (entry) {
        // If the image is not visible.
        _$$1.hooks.run('before.lazy', entry, imgObserver);

        if (entry.isIntersecting) {
          // If it's visible.
          var _img = entry.target;

          if (_$$1(_img).hasData('lazy-bg')) {
            _$$1(_img).style('background-image', "url('".concat(_$$1(_img).data('lazy-bg'), "')"));
          }

          if (_img.nodeName === 'IMG') {
            _img.src = _$$1(_img).data('src');

            if (_$$1(_img).hasData('srcset')) {
              _img.srcset = _$$1(_img).data('srcset');
            }
          }

          if (_img.nodeName === 'PICTURE') {
            var imgp = _$$1(_img).find('img');

            imgp.src = _$$1(imgp).data('src');

            if (_$$1(imgp).hasData('srcset')) {
              imgp.srcset = _$$1(imgp).data('srcset');
            }
          }

          _$$1(_img).fadeIn();

          imgObserver.unobserve(entry.target);
        }

        _$$1.hooks.run('after.lazy', entry, imgObserver);
      });
    }, opt); // Observing the images.

    if (img.length > 0) {
      img.each(function (img) {
        if (img.parentNode.nodeName !== 'PICTURE') {
          _$$1(img).fadeOut();

          if (img && !_$$1.empty(exclude)) {
            if (!img.matches(exclude)) {
              IO.observe(img);
            }
          } else {
            IO.observe(img);
          }
        }
      });
    }

    if (picture.length > 0) {
      picture.each(function (img) {
        _$$1(img).fadeOut();

        if (img && !_$$1.empty(exclude)) {
          IO.observe(img);
        } else {
          IO.observe(img);
        }
      });
    }

    if (bgImg.length > 0) {
      bgImg.each(function (img) {
        _$$1(img).fadeOut();

        if (img && !_$$1.empty(exclude)) {
          IO.observe(img);
        } else {
          IO.observe(img);
        }
      });
    }

    return img;
  },

  /**
   * Sistema de Ganchos de [Fascino JS]{@link Fascino}
   * @memberOf _$
   * @public
   * @namespace Hooks
   * @type {Object}
   * @example 
   * // Añadimos una función a anclar
   * _$.hooks.add('name.myhooks', function(Elemet) {
   *   // ...
   * })
   * // Ejecutamos la Función anclada y pasamos el argumento Element
   * _$.hooks.run('name.myhooks', Elemet)
   * // Puede pasar la cantidad de argumentos que desee asi
   * _$.hooks.run('name.myhooks', Elemet, Args1, Args2)
   * // Y en la función add los recibimos de igual manera
   * _$.hooks.add('name.myhooks', function(Elemet, Args1, Args2) {
   *   // ...
   * })
   * // Para listar todas las funciones ancladas use
   * _$.hooks.hook // No se recomienda su uso de esta manera
   * // Es recomendable si se require saber si existe o no una función anclada use el método _$.hasProp
   * _$.hasProp(_$.hooks.hook, 'name.myhooks') // Retornara true si existe
   */
  hooks: {
    /**
     * Lista de Ganchos anclados
     * @memberOf _$.Hooks
     * @inner
     * @type {Object}
     */
    hook: {},

    /**
     * Añade funciones a los ganchos
     * @memberOf _$.Hooks
     * @public
     * @param {String} name    Nombre
     * @param {Function} actions función a ejecutar
     */
    add: function add(name, actions) {
      var hook = this.hook;
      hook[name] = hook[name] || [];
      hook[name].push(actions);
    },

    /**
     * Ejecuta un Gancho,
     * La mayoria de los componente de [Fascino]{@link module:core.Fascino} poseen un gancho para anclarnos a sus funciones
     * @memberOf _$.Hooks
     * @public
     * @param  {String}    name Nombre del Gancho existente
     * @param  {...*} args Lista de argumentos que pasar a la función
     */
    run: function run(name) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (args.length === 0) return;
      var callbacks = this.hook[name];
      if (_$$1.empty(callbacks)) return;

      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].apply(this, args);
      }
    }
  }
});
export { Fascino, _$$1 as _$ };
//# sourceMappingURL=fascino.es.js.map
