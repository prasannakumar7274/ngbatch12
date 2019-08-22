var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = /** @class */ (function () {
    function Engine(engineType, manufacturingProcess, transmissionSystem) {
        this.engineType = engineType;
        this.manufacturingProcess = manufacturingProcess;
        this.transmissionSystem = transmissionSystem;
    }
    Object.defineProperty(Engine.prototype, "value", {
        get: function () {
            return this.manufacturingProcess;
        },
        set: function (v) {
            this.manufacturingProcess = v;
        },
        enumerable: true,
        configurable: true
    });
    return Engine;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(et, mp) {
        var _this = this;
        var ts = "xyz";
        _this = _super.call(this, et, mp, ts) || this;
        return _this;
    }
    Bike.prototype.sample = function () {
        console.log(this.engineType);
        console.log(this.manufacturingProcess);
        console.log(this.transmissionSystem);
    };
    return Bike;
}(Engine));
function sample() {
}
var twoWheelerInfo = new Engine('twin cylinder', 'machinemade');
var twoWheeler = new Bike('twin cylinder', 'machinemade');
console.log(twoWheelerInfo.trans);
twoWheelerInfo.value = "lean process";
console.log(twoWheelerInfo.value);
