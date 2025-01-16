var MixedEnum;
(function (MixedEnum) {
    MixedEnum[MixedEnum["No"] = 0] = "No";
    MixedEnum["Yes"] = "YES";
})(MixedEnum || (MixedEnum = {}));
var answer = MixedEnum.Yes;
console.log(answer); // Output: "YES"
