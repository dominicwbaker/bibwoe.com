"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _netlifyCmsApp = _interopRequireDefault(require("netlify-cms-app"));

var _PagesPreview = _interopRequireDefault(require("./preview-templates/PagesPreview"));

var _PostsPreview = _interopRequireDefault(require("./preview-templates/PostsPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_netlifyCmsApp["default"].registerPreviewTemplate('pages', _PagesPreview["default"]);

_netlifyCmsApp["default"].registerPreviewTemplate('posts', _PostsPreview["default"]);

var _default = {
  CMS: _netlifyCmsApp["default"]
};
exports["default"] = _default;