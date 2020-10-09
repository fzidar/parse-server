"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteObject = exports.updateObject = exports.createObject = void 0;

var _rest = _interopRequireDefault(require("../../rest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createObject = async (className, fields, config, auth, info) => {
  if (!fields) {
    fields = {};
  }

  return (await _rest.default.create(config, auth, className, fields, info.clientSDK, info.context)).response;
};

exports.createObject = createObject;

const updateObject = async (className, objectId, fields, config, auth, info) => {
  if (!fields) {
    fields = {};
  }

  return (await _rest.default.update(config, auth, className, {
    objectId
  }, fields, info.clientSDK, info.context)).response;
};

exports.updateObject = updateObject;

const deleteObject = async (className, objectId, config, auth, info) => {
  await _rest.default.del(config, auth, className, objectId, info.context);
  return true;
};

exports.deleteObject = deleteObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9HcmFwaFFML2hlbHBlcnMvb2JqZWN0c011dGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVPYmplY3QiLCJjbGFzc05hbWUiLCJmaWVsZHMiLCJjb25maWciLCJhdXRoIiwiaW5mbyIsInJlc3QiLCJjcmVhdGUiLCJjbGllbnRTREsiLCJjb250ZXh0IiwicmVzcG9uc2UiLCJ1cGRhdGVPYmplY3QiLCJvYmplY3RJZCIsInVwZGF0ZSIsImRlbGV0ZU9iamVjdCIsImRlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE9BQU9DLFNBQVAsRUFBa0JDLE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQ0MsSUFBbEMsRUFBd0NDLElBQXhDLEtBQWlEO0FBQ3BFLE1BQUksQ0FBQ0gsTUFBTCxFQUFhO0FBQ1hBLElBQUFBLE1BQU0sR0FBRyxFQUFUO0FBQ0Q7O0FBRUQsU0FBTyxDQUNMLE1BQU1JLGNBQUtDLE1BQUwsQ0FDSkosTUFESSxFQUVKQyxJQUZJLEVBR0pILFNBSEksRUFJSkMsTUFKSSxFQUtKRyxJQUFJLENBQUNHLFNBTEQsRUFNSkgsSUFBSSxDQUFDSSxPQU5ELENBREQsRUFTTEMsUUFURjtBQVVELENBZkQ7Ozs7QUFpQkEsTUFBTUMsWUFBWSxHQUFHLE9BQ25CVixTQURtQixFQUVuQlcsUUFGbUIsRUFHbkJWLE1BSG1CLEVBSW5CQyxNQUptQixFQUtuQkMsSUFMbUIsRUFNbkJDLElBTm1CLEtBT2hCO0FBQ0gsTUFBSSxDQUFDSCxNQUFMLEVBQWE7QUFDWEEsSUFBQUEsTUFBTSxHQUFHLEVBQVQ7QUFDRDs7QUFFRCxTQUFPLENBQ0wsTUFBTUksY0FBS08sTUFBTCxDQUNKVixNQURJLEVBRUpDLElBRkksRUFHSkgsU0FISSxFQUlKO0FBQUVXLElBQUFBO0FBQUYsR0FKSSxFQUtKVixNQUxJLEVBTUpHLElBQUksQ0FBQ0csU0FORCxFQU9KSCxJQUFJLENBQUNJLE9BUEQsQ0FERCxFQVVMQyxRQVZGO0FBV0QsQ0F2QkQ7Ozs7QUF5QkEsTUFBTUksWUFBWSxHQUFHLE9BQU9iLFNBQVAsRUFBa0JXLFFBQWxCLEVBQTRCVCxNQUE1QixFQUFvQ0MsSUFBcEMsRUFBMENDLElBQTFDLEtBQW1EO0FBQ3RFLFFBQU1DLGNBQUtTLEdBQUwsQ0FBU1osTUFBVCxFQUFpQkMsSUFBakIsRUFBdUJILFNBQXZCLEVBQWtDVyxRQUFsQyxFQUE0Q1AsSUFBSSxDQUFDSSxPQUFqRCxDQUFOO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FIRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXN0IGZyb20gJy4uLy4uL3Jlc3QnO1xuXG5jb25zdCBjcmVhdGVPYmplY3QgPSBhc3luYyAoY2xhc3NOYW1lLCBmaWVsZHMsIGNvbmZpZywgYXV0aCwgaW5mbykgPT4ge1xuICBpZiAoIWZpZWxkcykge1xuICAgIGZpZWxkcyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBhd2FpdCByZXN0LmNyZWF0ZShcbiAgICAgIGNvbmZpZyxcbiAgICAgIGF1dGgsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBmaWVsZHMsXG4gICAgICBpbmZvLmNsaWVudFNESyxcbiAgICAgIGluZm8uY29udGV4dFxuICAgIClcbiAgKS5yZXNwb25zZTtcbn07XG5cbmNvbnN0IHVwZGF0ZU9iamVjdCA9IGFzeW5jIChcbiAgY2xhc3NOYW1lLFxuICBvYmplY3RJZCxcbiAgZmllbGRzLFxuICBjb25maWcsXG4gIGF1dGgsXG4gIGluZm9cbikgPT4ge1xuICBpZiAoIWZpZWxkcykge1xuICAgIGZpZWxkcyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBhd2FpdCByZXN0LnVwZGF0ZShcbiAgICAgIGNvbmZpZyxcbiAgICAgIGF1dGgsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB7IG9iamVjdElkIH0sXG4gICAgICBmaWVsZHMsXG4gICAgICBpbmZvLmNsaWVudFNESyxcbiAgICAgIGluZm8uY29udGV4dFxuICAgIClcbiAgKS5yZXNwb25zZTtcbn07XG5cbmNvbnN0IGRlbGV0ZU9iamVjdCA9IGFzeW5jIChjbGFzc05hbWUsIG9iamVjdElkLCBjb25maWcsIGF1dGgsIGluZm8pID0+IHtcbiAgYXdhaXQgcmVzdC5kZWwoY29uZmlnLCBhdXRoLCBjbGFzc05hbWUsIG9iamVjdElkLCBpbmZvLmNvbnRleHQpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU9iamVjdCwgdXBkYXRlT2JqZWN0LCBkZWxldGVPYmplY3QgfTtcbiJdfQ==