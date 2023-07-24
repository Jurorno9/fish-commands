"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxTime = exports.localDebug = exports.getGamemode = exports.FishServers = exports.ip = exports.substitutions = exports.adminNames = exports.bannedNames = exports.bannedWords = exports.MUTED_PREFIX = exports.MARKED_PREFIX = void 0;
exports.MARKED_PREFIX = '[yellow]\u26A0[scarlet]Marked Griefer[yellow]\u26A0[white]';
exports.MUTED_PREFIX = '[white](muted)';
exports.bannedWords = (function (words) {
    return words.map(function (word) { return typeof word == "string" ? [word, []] : [word[0], word.slice(1)]; });
})([
    "uwu",
    "nig" + "ger", "nig" + "ga", "niger",
    "re" + "tard", 'kill yourself', 'kill urself', ['kys', "skys", "pokys", "sneakys"], "co" + "ck", "co" + "ck sucker", "iamasussyimposter",
    ["rape", "grape", "therap", "drape", "scrape", "trapez"],
    ["fa" + "g", "fage"],
    "porn", "ur gay", "your gay", "youre gay", "you're gay"
]);
exports.bannedNames = ['goldberg', 'eshay', "VALVE", "hitler"];
exports.adminNames = ["fish", "balam314", "xyralith", "firefridge", "clashgone", "hawo", "eternal hawo", "aricia", "yin", "yang", "rawsewage", "raw sewage"];
exports.substitutions = Object.fromEntries(Object.entries({
    "a": ["а", "ą", "ẚ", "ạ", "ḁ", "ä", "α", "@"],
    "b": ["ḃ", "ḇ", "ḃ", "ɓ", "ƅ"],
    "c": ["с", "ⅽ", "ç", "ς", "ċ"],
    "d": ["ⅾ", "ḋ", "ḑ", "ď", "ḓ", "ḍ", "ḏ", "ɗ", "₫", "ɖ", "ժ"],
    "e": ["е", "ḛ", "ē", "ḗ", "ȩ", "ё", "ě", "ȅ", "ϵ", "ε", "ɛ", "3"],
    "f": ["ḟ", "ғ", "ƒ"],
    "g": ["ց", "ģ", "ǵ", "ɠ", "ğ", "ĝ", "ǥ", "ḡ"],
    "h": ["ḣ", "ȟ", "ḥ", "ḫ", "հ", "ի", "ḩ", "ɦ", "ḧ", "ḣ", "ɦ", "ẖ", "ħ"],
    "i": ["і", "į", "ι", "ỉ", "ἱ", "ί", "ī"],
    "j": ["ј", "ʝ", "յ", "ɟ", "ĵ", "ȷ", "ǰ"],
    "k": ["ҟ", "ḱ", "ķ", "ĸ", "к", "ƙ", "ҝ"],
    "l": ["ⅼ", "ḽ", "ḻ", "ľ", "ŀ", "ļ", "ḹ", "ł", "Ί", "Ì", "Í", "Î", "Ï", "Ĩ", "Ī", "Ĭ", "Į", "İ", "Ɩ", "Ȉ", "Ȋ", "Ι", "Ϊ", "І", "Ї", "Ӏ", "ӏ", "Ḭ", "Ỉ", "Ἰ", "Ἱ", "Ῐ", "Ῑ", "Ὶ", "ǐ"],
    "m": ["ⅿ", "ṃ", "ɱ", "ṁ", "ḿ"],
    "n": ["n", "ñ", "ń", "ņ", "ň", "ŉ", "ǹ", "ή", "η", "ո", "ռ", "ր", "ṅ", "ṇ"],
    "o": ["o", "ò", "ộ", "ớ", "ờ", "ở", "ỡ", "ợ", "ὀ", "ὁ", "ὂ", "ὃ", "ὄ", "ὅ", "ὸ", "ό", "σ", "๐", "ö", "ō", "ŏ", "ő", "ơ", "ǒ", "0"],
    "p": ["p", "ρ", "р", "ҏ", "ṕ", "ṗ", "ῤ", "ῥ", "⍴"],
    "q": ["ԛ", "գ", "զ", "q", "գ", "զ"],
    "r": ["ŕ", "ŗ", "ř", "ȑ", "ȓ", "ɼ", "ɽ", "г", "ѓ", "ґ", "ӷ", "ṙ", "ṛ", "ṝ"],
    "s": ["ś", "ŝ", "ş", "š", "ș", "ʂ", "ѕ", "ṡ", "ṣ", "ṥ", "ṧ", "ṩ"],
    "t": ["ţ", "ť", "ƫ", "ț", "ʈ", "ṫ", "ṭ", "ṯ", "ṱ", "ẗ", "ȶ", "†", "ҭ"],
    "u": ["µ", "μ", "ù", "ú", "û", "ü", "ũ", "ū", "ŭ", "ů", "ű", "ų", "ư", "ǔ", "ȕ", "ȗ", "ɥ", "ứ", "ừ", "ử", "ữ", "ự"],
    "v": ["ν", "ѵ", "ѷ", "ṽ", "ṿ", "ⅴ", "∨"],
    "w": ["ŵ", "ԝ", "ẁ", "ẃ", "ẅ", "ẇ", "ẉ", "ẘ"],
    "x": ["х", "ҳ", "ẋ", "ẍ"],
    "y": ["ý", "ÿ", "ŷ", "ƴ", "ȳ", "γ", "у", "ў", "ӯ", "ӱ", "ӳ", "ẏ", "ẙ", "ỳ", "ỵ", "ỷ", "ỹ", "ү", "ұ"],
    "z": ["ź", "ż", "ž", "ƶ", "ȥ", "ʐ", "ẑ", "ẓ", "ẕ"],
    "A": ["Ḁ", "Ạ", "Ả", "Ấ", "Ầ", "Ẩ", "Ậ", "Ἀ", "Ἁ", "ᾈ", "ᾉ", "Ᾰ", "Ᾱ", "Ὰ", "ᾼ", "Å"],
    "B": ["Ɓ", "Β", "В", "Ḃ", "Ḅ", "Ḇ"],
    "C": ["Ç", "Ć", "Ĉ", "Ċ", "Č", "Ƈ", "С", "Ҫ", "Ḉ", "Ⅽ", "Ϲ"],
    "D": ["Ð", "Ď", "Đ", "Ɖ", "Ɗ", "Ḋ", "Ḍ", "Ḏ", "Ⅾ"],
    "E": ["È", "É", "Ê", "Ë", "Ē", "Ĕ", "Ė", "Ę", "Ě", "Ȅ", "Ȇ", "Ȩ", "Ε", "Ѐ", "Е", "Ӗ", "Ḙ", "Ԑ", "ℇ", "Ɛ", "Ἑ", "Ὲ", "Є"],
    "F": ["Ϝ", "Ḟ", "Ғ", "Ƒ", "Ғ", "ғ"],
    "G": ["Ĝ", "Ğ", "Ġ", "Ģ", "Ɠ", "Ǧ", "Ǵ", "Ḡ"],
    "H": ["Ĥ", "Ȟ", "Η", "Н", "Ң", "Ҥ", "Ӈ", "Ӊ", "Ḣ", "Ḥ", "Ḧ", "Ḩ", "Ḫ", "ῌ", "Ꜧ"],
    "I": ["Ί", "Ì", "Í", "Î", "Ï", "Ĩ", "Ī", "Ĭ", "Į", "İ", "Ɩ", "Ȉ", "Ȋ", "Ι", "Ϊ", "І", "Ї", "Ӏ", "ӏ", "Ḭ", "Ỉ", "Ἰ", "Ἱ", "Ῐ", "Ῑ", "Ὶ", "ǐ", "ⅼ", "ḽ", "ḻ", "ɫ", "ľ", "ŀ", "ļ", "ḹ"],
    "J": ["Ĵ", "Ј", "J"],
    "K": ["Ķ", "Ƙ", "Ǩ", "Κ", "Ќ", "К", "Ԟ", "Ḱ", "Ḳ", "Ḵ", "₭", "K"],
    "L": ["Ĺ", "Ļ", "Ľ", "Ŀ", "Ł", "Լ", "Ḷ", "Ḹ", "Ḻ", "Ḽ", "Ⅼ"],
    "M": ["Μ", "М", "Ӎ", "Ḿ", "Ṁ", "Ṃ", "Ⅿ"],
    "N": ["Ñ", "Ń", "Ņ", "Ň", "Ǹ", "Ν", "Ṅ", "Ṇ", "Ṉ", "Ṋ", "Ɲ"],
    "O": ["θ", "⍬", "Ò", "Ó", "Ô", "Õ", "Ö", "Ō", "Ŏ", "Ő", "Ɵ", "Ơ", "Ǒ", "Ȏ", "Ȯ", "Ȱ", "Θ", "Ο", "О", "Ӧ", "Օ", "Ọ", "Ỏ", "Ổ", "Ό", "Ό"],
    "P": ["Ƥ", "Ρ", "Р", "Ҏ", "Ṕ", "Ṗ", "Ῥ"],
    "Q": ["Ԛ"],
    "R": ["Ŕ", "Ŗ", "Ř", "Ȑ", "Ȓ", "Ṙ", "Ṛ", "Ṝ", "Ṟ", "℞", "Ɍ", "Ɽ"],
    "S": ["Ś", "Ŝ", "Ş", "Š", "Ș", "Ѕ", "Տ", "Ṡ", "Ṣ", "Ṩ", "Ṥ", "Ṧ"],
    "T": ["Ţ", "Ť", "Ŧ", "Ʈ", "Ț", "Τ", "Т", "Ҭ", "Ṫ", "Ṭ", "Ṯ", "Ṱ", "Ί", "Ί", "Ꚍ"],
    "U": ["Ū", "Ŭ", "Ů", "Ű", "Ų", "Ư", "Ǔ", "Ứ", "Ừ", "Ử", "Ữ", "Մ"],
    "V": ["Ѵ", "Ѷ", "Ṽ", "Ṿ", "⋁", "Ⅴ"],
    "W": ["Ԝ", "Ẁ", "Ẃ", "Ẅ", "Ẇ", "Ẉ", "Ɯ"],
    "X": ["Χ", "Х", "Ҳ", "Ẋ", "Ẍ", "Ⅹ"],
    "Y": ["Ƴ", "Ȳ", "Υ", "Ϋ", "ϓ", "У", "Ү", "Ұ", "Ẏ", "Ỳ", "Ỵ"],
    "Z": ["Ź", "Ż", "Ž", "Ȥ", "Ζ", "Ẑ", "Ẓ", "Ẕ"],
}).map(function (_a) {
    var _b = __read(_a, 2), char = _b[0], alts = _b[1];
    return alts.map(function (alt) { return [alt, char]; });
}).flat(1));
// export const ip = 'localhost';
exports.ip = '45.79.202.111';
exports.FishServers = {
    attack: { ip: "162.248.100.98", port: "6567" },
    survival: { ip: "162.248.101.95", port: "6567" },
    pvp: { ip: "162.248.100.133", port: "6567" },
    sandbox: { ip: "162.248.102.204", port: "6567" },
};
var getGamemode = function () { return Vars.state.rules.mode().name(); };
exports.getGamemode = getGamemode;
exports.localDebug = new Fi("config/.debug").exists();
exports.maxTime = 9999999999999;
