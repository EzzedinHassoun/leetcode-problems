
var checkString = function(s) {
    if(s.indexOf('a') == -1 || s.indexOf('b') == -1) {
        return true
    }
    return s.lastIndexOf('a') < s.indexOf('b')
};