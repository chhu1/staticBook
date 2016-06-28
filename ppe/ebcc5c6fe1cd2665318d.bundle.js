webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(137);


/***/ },

/***/ 88:
/***/ function(module, exports) {

	module.exports = function (React, desc) {
	  desc.displayName = "ReactRouterProxy";
	  desc.getInitialState = function () {
	    return { component: this.loadComponent() };
	  };
	  desc.componentDidMount = function () {
	    this.___isMounted = true;
	    if (!this.state.component) {
	      this.loadComponent(function (component) {
	        if (this.___isMounted) {
	          this.setState({ component: component });
	        }
	      }.bind(this));
	    }
	  };
	  desc.componentWillUnmount = function () {
	    this.___isMounted = false;
	  };
	  desc.render = function () {
	    var Component = this.state.component;
	    if (Component) {
	      return React.createElement(Component, this.props, this.props.children);
	    } else if (this.renderUnavailable) {
	      return this.renderUnavailable();
	    }
	    return null;
	  };
	};


/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.components = exports.containers = undefined;

	var _Main = __webpack_require__(162);

	var _Main2 = _interopRequireDefault(_Main);

	var _Login = __webpack_require__(161);

	var _Login2 = _interopRequireDefault(_Login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var containers = exports.containers = {
	    Main: _Main2.default
	};

	var components = exports.components = {
	    Login: _Login2.default
	};

/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(84);

	var _reactRouter = __webpack_require__(55);

	var _history = __webpack_require__(81);

	var _reactRedux = __webpack_require__(85);

	var _configureStore = __webpack_require__(141);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _routes = __webpack_require__(140);

	var _routes2 = _interopRequireDefault(_routes);

	__webpack_require__(142);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _configureStore2.default)();
	var history = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)();

	(0, _reactDom.render)(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store, __self: undefined
	    },
	    _react2.default.createElement(_reactRouter.Router, { history: history, routes: (0, _routes2.default)(store), __self: undefined
	    })
	), document.getElementById('root'));

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(48);

	var _main = __webpack_require__(139);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	    main: _main2.default
	});

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case 'changePage':
	            state.set('page', action.page.page);
	        default:
	            return state;
	    }
	};

	var _immutable = __webpack_require__(83);

	var initialState = (0, _immutable.Map)({ page: '' });

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (store) {
	    function changePage() {
	        var dispatch = store.dispatch;

	        var page = this.path.split('/')[0] || '';
	        dispatch({ type: 'changePage', page: { page: page } });
	    }

	    return _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _components.containers.Main, __self: this
	        },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _components.components.Login, __self: this
	        }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _components.components.Login, __self: this
	        })
	    );
	};

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(55);

	var _components = __webpack_require__(136);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(48);

	var _reduxThunk = __webpack_require__(267);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(138);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore(initialState) {
	    var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (fun) {
	        return fun;
	    })(_redux.createStore);

	    var store = finalCreateStore(_reducers2.default, initialState);

	    if (false) {
	        module.hot.accept('../reducers', function () {
	            var nextRootReducer = require('../reducers').default;
	            store.replaceReducer(nextRootReducer);
	        });
	    }

	    return store;
	}

/***/ },

/***/ 142:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(4);
	var component;
	var desc = {
	    loadComponent: function(callback) {
	        if(!component) {
	            __webpack_require__.e/* nsure */(2, function() {
	                var module = __webpack_require__(134);
	                component = module.__esModule ? module.default : module;
	                if(callback) callback(component);
	            });
	        } else if(callback) callback(component);
	        return component;
	    }
	};
	var mixinReactProxy = __webpack_require__(88);
	mixinReactProxy(React, desc);
	module.exports = React.createClass(desc);
	module.exports.Mixin = desc;

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(4);
	var component;
	var desc = {
	    loadComponent: function(callback) {
	        if(!component) {
	            __webpack_require__.e/* nsure */(1, function() {
	                var module = __webpack_require__(135);
	                component = module.__esModule ? module.default : module;
	                if(callback) callback(component);
	            });
	        } else if(callback) callback(component);
	        return component;
	    }
	};
	var mixinReactProxy = __webpack_require__(88);
	mixinReactProxy(React, desc);
	module.exports = React.createClass(desc);
	module.exports.Mixin = desc;

/***/ },

/***/ 267:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ }

});