'use strict';

var _debug2 = require('debug');

var _debug3 = _interopRequireDefault(_debug2);

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

var _helper = require('../utils/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var debug = (0, _debug3.default)('dev:' + __filename);
var error = (0, _debug3.default)('dev:' + __filename);

/**
 {
    list: [
        {
            id: 'javli4rvsy',
            no: 'ABP-670',
            name: '身動き出来ない美少女をひたすらイカせまくる拘束性交 004 園田みおん緊縛解禁。',
            cover: {
                small: 'http://pics.dmm.co.jp/mono/movie/adult/118abp670/118abp670ps.jpg',
                large: 'http://pics.dmm.co.jp/mono/movie/adult/118abp670/118abp670pl.jpg',
            }
        }
    ],

    next: {
        order: 1,
        page: 2,
    }
 }
 * */
module.exports = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$order = _ref2.order,
            order = _ref2$order === undefined ? 1 : _ref2$order,
            _ref2$page = _ref2.page,
            page = _ref2$page === undefined ? 1 : _ref2$page;

        var response, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _request2.default.get(_helper.URL_NEWRELEASES + '?page=' + page + '&mode=' + order);

                    case 3:
                        response = _context.sent;
                        data = (0, _helper.parseList)(response, {
                            order: order, page: page
                        });


                        debug('%O', data);
                        return _context.abrupt('return', data);

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](0);

                        error('%O', _context.t0);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 9]]);
    }));

    return function () {
        return _ref.apply(this, arguments);
    };
}();