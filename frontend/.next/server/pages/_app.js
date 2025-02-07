(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AuthContext.js":
/*!*********************************!*\
  !*** ./contexts/AuthContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": () => (/* binding */ AuthContext),
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
"use client";

var _jsxFileName = "C:\\Users\\nerus\\OneDrive\\Desktop\\notes taking app\\frontend\\contexts\\AuthContext.js";



const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const AuthProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const token = localStorage.getItem("token");

    if (token) {
      (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common["x-auth-token"]) = token;
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${"http://localhost:5000/api"}/auth/user`);
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      console.log("Sending login data:", {
        email,
        password
      });
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${"http://localhost:5000/api"}/auth/login`, {
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      localStorage.setItem("token", res.data.token);
      (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common["x-auth-token"]) = res.data.token;
      await fetchUser();
      return true;
    } catch (error) {
      var _error$response;

      console.error("Login error:", error);
      console.error("Response data:", (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
      return false;
    }
  };

  const register = async (username, email, password) => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${"http://localhost:5000/api"}/auth/register`, {
        username,
        email,
        password
      });
      localStorage.setItem("token", res.data.token);
      (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common["x-auth-token"]) = res.data.token;
      await fetchUser();
      return true;
    } catch (error) {
      console.error("Register error:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.common["x-auth-token"]);
    setUser(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(AuthContext.Provider, {
    value: {
      user,
      loading,
      login,
      register,
      logout
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/AuthContext */ "./contexts/AuthContext.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\nerus\\OneDrive\\Desktop\\notes taking app\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U1osS0FBdkM7QUFDQVIsTUFBQUEsc0ZBQUEsR0FBZ0RlLEdBQUcsQ0FBQ0ssSUFBSixDQUFTWixLQUF6RDtBQUNBLFlBQU1NLFNBQVMsRUFBZjtBQUNBLGFBQU8sSUFBUDtBQUNELEtBTkQsQ0FNRSxPQUFPTyxLQUFQLEVBQWM7QUFDZEMsTUFBQUEsT0FBTyxDQUFDRCxLQUFSLENBQWMsaUJBQWQsRUFBaUNBLEtBQWpDO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQVhEOztBQWFBLFFBQU1XLE1BQU0sR0FBRyxNQUFNO0FBQ25CdkIsSUFBQUEsWUFBWSxDQUFDd0IsVUFBYixDQUF3QixPQUF4QjtBQUNBLFdBQU9qQyxzRkFBUDtBQUNBSyxJQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFBRUQsTUFBQUEsSUFBRjtBQUFRRSxNQUFBQSxPQUFSO0FBQWlCaUIsTUFBQUEsS0FBakI7QUFBd0JPLE1BQUFBLFFBQXhCO0FBQWtDRSxNQUFBQTtBQUFsQyxLQUE3QjtBQUFBLGNBQ0c3QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBeEVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFDQTs7O0FBRUEsU0FBUytCLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSw4REFBQywrREFBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELGlFQUFlRixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGUtdGFraW5nLWFwcC1mcm9udGVuZC8uL2NvbnRleHRzL0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovL25vdGUtdGFraW5nLWFwcC1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbm90ZS10YWtpbmctYXBwLWZyb250ZW5kL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9ub3RlLXRha2luZy1hcHAtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25vdGUtdGFraW5nLWFwcC1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LWF1dGgtdG9rZW5cIl0gPSB0b2tlbjtcbiAgICAgIGZldGNoVXNlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hdXRoL3VzZXJgKTtcbiAgICAgIHNldFVzZXIocmVzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBsb2dpbiBkYXRhOlwiLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2F1dGgvbG9naW5gLFxuICAgICAgICB7IGVtYWlsLCBwYXNzd29yZCB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzLmRhdGEudG9rZW4pO1xuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJ4LWF1dGgtdG9rZW5cIl0gPSByZXMuZGF0YS50b2tlbjtcbiAgICAgIGF3YWl0IGZldGNoVXNlcigpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dpbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlc3BvbnNlIGRhdGE6XCIsIGVycm9yLnJlc3BvbnNlPy5kYXRhKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2F1dGgvcmVnaXN0ZXJgLCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlcy5kYXRhLnRva2VuKTtcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wieC1hdXRoLXRva2VuXCJdID0gcmVzLmRhdGEudG9rZW47XG4gICAgICBhd2FpdCBmZXRjaFVzZXIoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVnaXN0ZXIgZXJyb3I6XCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gICAgZGVsZXRlIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wieC1hdXRoLXRva2VuXCJdO1xuICAgIHNldFVzZXIobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9hZGluZywgbG9naW4sIHJlZ2lzdGVyLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIlxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL0F1dGhDb250ZXh0XCJcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJmZXRjaFVzZXIiLCJyZXMiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2ciLCJwb3N0Iiwic2V0SXRlbSIsInJlc3BvbnNlIiwicmVnaXN0ZXIiLCJ1c2VybmFtZSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=