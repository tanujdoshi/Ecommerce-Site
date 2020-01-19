(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n  <body>\n    <app-header></app-header>\n    <!-- <app-home></app-home> -->\n    <!--<app-category></app-category>-->\n <!--   <app-single></app-single>-->\n    <!-- <app-cart></app-cart> -->\n    <app-footer></app-footer>\n  </body>\n</html>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" />\n  <link rel=\"icon\" href=\"../assets/img/favicon.png\" type=\"image/png\" />\n  <title>Eiser ecommerce</title>\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"../assets/css/bootstrap.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/linericon/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/font-awesome.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/themify-icons.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/flaticon.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/owl-carousel/owl.carousel.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/lightbox/simpleLightbox.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/nice-select/css/nice-select.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/animate-css/animate.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/jquery-ui/jquery-ui.css\" />\n  <!-- main css -->\n  <link rel=\"stylesheet\" href=\"../assets/css/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/responsive.css\" />\n</head>\n<body>\n        <section class=\"banner_area\">\n                <div class=\"banner_inner d-flex align-items-center\">\n                  <div class=\"container\">\n                    <div\n                      class=\"banner_content d-md-flex justify-content-between align-items-center\"\n                    >\n                      <div class=\"mb-3 mb-md-0\">\n                        <h2>Cart</h2>\n                        <p>Very us move be blessed multiply night</p>\n                      </div>\n                      <div class=\"page_link\">\n                        <a href=\"index.html\">Home</a>\n                        <a href=\"cart.html\">Cart</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <!--================End Home Banner Area =================-->\n          \n              <!--================Cart Area =================-->\n              <section class=\"cart_area\">\n                <div class=\"container\">\n                  <div class=\"cart_inner\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">Product</th>\n                            <th scope=\"col\">Price</th>\n                            <th scope=\"col\">Quantity</th>\n                            <th scope=\"col\">Total</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <td>\n                              <div class=\"media\">\n                                <div class=\"d-flex\">\n                                  <img\n                                    src=\"../assets/img/product/single-product/cart-1.jpg\"\n                                    alt=\"\"\n                                  />\n                                </div>\n                                <div class=\"media-body\">\n                                  <p>Minimalistic shop for multipurpose use</p>\n                                </div>\n                              </div>\n                            </td>\n                            <td>\n                              <h5>$360.00</h5>\n                            </td>\n                            <td>\n                              <div class=\"product_count\">\n                                <input\n                                  type=\"text\"\n                                  name=\"qty\"\n                                  id=\"sst\"\n                                  maxlength=\"12\"\n                                  value=\"1\"\n                                  title=\"Quantity:\"\n                                  class=\"input-text qty\"\n                                />\n                                <button\n                                  onclick=\"var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;\"\n                                  class=\"increase items-count\"\n                                  type=\"button\"\n                                >\n                                  <i class=\"lnr lnr-chevron-up\"></i>\n                                </button>\n                                <button\n                                  onclick=\"var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;\"\n                                  class=\"reduced items-count\"\n                                  type=\"button\"\n                                >\n                                  <i class=\"lnr lnr-chevron-down\"></i>\n                                </button>\n                              </div>\n                            </td>\n                            <td>\n                              <h5>$720.00</h5>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"media\">\n                                <div class=\"d-flex\">\n                                  <img\n                                    src=\"../assets/img/product/single-product/cart-1.jpg\"\n                                    alt=\"\"\n                                  />\n                                </div>\n                                <div class=\"media-body\">\n                                  <p>Minimalistic shop for multipurpose use</p>\n                                </div>\n                              </div>\n                            </td>\n                            <td>\n                              <h5>$360.00</h5>\n                            </td>\n                            <td>\n                              <div class=\"product_count\">\n                                <input\n                                  type=\"text\"\n                                  name=\"qty\"\n                                  id=\"sst\"\n                                  maxlength=\"12\"\n                                  value=\"1\"\n                                  title=\"Quantity:\"\n                                  class=\"input-text qty\"\n                                />\n                                <button\n                                  onclick=\"var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;\"\n                                  class=\"increase items-count\"\n                                  type=\"button\"\n                                >\n                                  <i class=\"lnr lnr-chevron-up\"></i>\n                                </button>\n                                <button\n                                  onclick=\"var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;\"\n                                  class=\"reduced items-count\"\n                                  type=\"button\"\n                                >\n                                  <i class=\"lnr lnr-chevron-down\"></i>\n                                </button>\n                              </div>\n                            </td>\n                            <td>\n                              <h5>$720.00</h5>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td>\n                              <div class=\"media\">\n                                <div class=\"d-flex\">\n                                  <img\n                                    src=\"../assets/img/product/single-product/cart-1.jpg\"\n                                    alt=\"\"\n                                  />\n                                </div>\n                                <div class=\"media-body\">\n                                  <p>Minimalistic shop for multipurpose use</p>\n                                </div>\n                              </div>\n                            </td>\n                            <td>\n                              <h5>$360.00</h5>\n                            </td>\n                            <td>\n                              <div class=\"product_count\">\n                                <input\n                                  type=\"text\"\n                                  name=\"qty\"\n                                  id=\"sst\"\n                                  maxlength=\"12\"\n                                  value=\"1\"\n                                  title=\"Quantity:\"\n                                  class=\"input-text qty\"\n                                />\n                                <button\n                                  onclick=\"var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;\"\n                                  class=\"increase items-count\"\n                                  type=\"button\"\n                                >\n                                  <i class=\"lnr lnr-chevron-up\"></i>\n                                </button>\n                                <button\n                                  onclick=\"var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;\"\n                                  class=\"reduced items-count\"\n                                  type=\"button\"\n                                >\n                                  <i class=\"lnr lnr-chevron-down\"></i>\n                                </button>\n                              </div>\n                            </td>\n                            <td>\n                              <h5>$720.00</h5>\n                            </td>\n                          </tr>\n                          <tr class=\"bottom_button\">\n                            <td>\n                              <a class=\"gray_btn\" href=\"#\">Update Cart</a>\n                            </td>\n                            <td></td>\n                            <td></td>\n                            <td>\n                              <div class=\"cupon_text\">\n                                <input type=\"text\" placeholder=\"Coupon Code\" />\n                                <a class=\"main_btn\" href=\"#\">Apply</a>\n                                <a class=\"gray_btn\" href=\"#\">Close Coupon</a>\n                              </div>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td></td>\n                            <td></td>\n                            <td>\n                              <h5>Subtotal</h5>\n                            </td>\n                            <td>\n                              <h5>$2160.00</h5>\n                            </td>\n                          </tr>\n                          <tr class=\"shipping_area\">\n                            <td></td>\n                            <td></td>\n                            <td>\n                              <h5>Shipping</h5>\n                            </td>\n                            <td>\n                              <div class=\"shipping_box\">\n                                <ul class=\"list\">\n                                  <li>\n                                    <a href=\"#\">Flat Rate: $5.00</a>\n                                  </li>\n                                  <li>\n                                    <a href=\"#\">Free Shipping</a>\n                                  </li>\n                                  <li>\n                                    <a href=\"#\">Flat Rate: $10.00</a>\n                                  </li>\n                                  <li class=\"active\">\n                                    <a href=\"#\">Local Delivery: $2.00</a>\n                                  </li>\n                                </ul>\n                                <h6>\n                                  Calculate Shipping\n                                  <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n                                </h6>\n                                <select class=\"shipping_select\">\n                                  <option value=\"1\">Bangladesh</option>\n                                  <option value=\"2\">India</option>\n                                  <option value=\"4\">Pakistan</option>\n                                </select>\n                                <select class=\"shipping_select\">\n                                  <option value=\"1\">Select a State</option>\n                                  <option value=\"2\">Select a State</option>\n                                  <option value=\"4\">Select a State</option>\n                                </select>\n                                <input type=\"text\" placeholder=\"Postcode/Zipcode\" />\n                                <a class=\"gray_btn\" href=\"#\">Update Details</a>\n                              </div>\n                            </td>\n                          </tr>\n                          <tr class=\"out_button_area\">\n                            <td></td>\n                            <td></td>\n                            <td></td>\n                            <td>\n                              <div class=\"checkout_btn_inner\">\n                                <a class=\"gray_btn\" href=\"#\">Continue Shopping</a>\n                                <a class=\"main_btn\" href=\"#\">Proceed to checkout</a>\n                              </div>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </section>\n              </body>\n            </html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" />\n  <link rel=\"icon\" href=\"../assets/img/favicon.png\" type=\"image/png\" />\n  <title>Eiser ecommerce</title>\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"../assets/css/bootstrap.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/linericon/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/font-awesome.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/themify-icons.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/flaticon.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/owl-carousel/owl.carousel.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/lightbox/simpleLightbox.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/nice-select/css/nice-select.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/animate-css/animate.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/jquery-ui/jquery-ui.css\" />\n  <!-- main css -->\n  <link rel=\"stylesheet\" href=\"../assets/css/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/responsive.css\" />\n</head>\n<body>\n        <section class=\"banner_area\">\n                <div class=\"banner_inner d-flex align-items-center\">\n                  <div class=\"container\">\n                    <div class=\"banner_content d-md-flex justify-content-between align-items-center\">\n                      <div class=\"mb-3 mb-md-0\">\n                        <h2>Shop Category</h2>\n                        <p>Very us move be blessed multiply night</p>\n                      </div>\n                      <div class=\"page_link\">\n                        <a href=\"index.html\">Home</a>\n                        <a href=\"category.html\">Shop</a>\n                        <a href=\"category.html\">Women Fashion</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <!--================End Home Banner Area =================-->\n          \n              <!--================Category Product Area =================-->\n              <section class=\"cat_product_area section_gap\">\n                <div class=\"container\">\n                  <div class=\"row flex-row-reverse\">\n                    <div class=\"col-lg-9\">\n                      <div class=\"product_top_bar\">\n                        <div class=\"left_dorp\">\n                          <select class=\"sorting\">\n                            <option value=\"1\">Default sorting</option>\n                            <option value=\"2\">Default sorting 01</option>\n                            <option value=\"4\">Default sorting 02</option>\n                          </select>\n                          <select class=\"show\">\n                            <option value=\"1\">Show 12</option>\n                            <option value=\"2\">Show 14</option>\n                            <option value=\"4\">Show 16</option>\n                          </select>\n                        </div>\n                      </div>\n                      \n                      <div class=\"latest_product_inner\">\n                        <div class=\"row\">\n                          <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img\n                                  class=\"card-img\"\n                                  src=\"../assets/img/product/inspired-product/i1.jpg\"\n                                  alt=\"\"\n                                />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Latest men’s sneaker</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n          \n                          <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img\n                                  class=\"card-img\"\n                                  src=\"../assets/img/product/inspired-product/i2.jpg\"\n                                  alt=\"\"\n                                />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Latest men’s sneaker</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n          \n                          <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img\n                                  class=\"card-img\"\n                                  src=\"../assets/img/product/inspired-product/i3.jpg\"\n                                  alt=\"\"\n                                />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Latest men’s sneaker</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n          \n                          <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img\n                                  class=\"card-img\"\n                                  src=\"../assets/img/product/inspired-product/i4.jpg\"\n                                  alt=\"\"\n                                />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Latest men’s sneaker</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n          \n                          <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img\n                                  class=\"card-img\"\n                                  src=\"../assets/img/product/inspired-product/i5.jpg\"\n                                  alt=\"\"\n                                />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Latest men’s sneaker</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n          \n                          <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img\n                                  class=\"card-img\"\n                                  src=\"../assets/img/product/inspired-product/i6.jpg\"\n                                  alt=\"\"\n                                />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Latest men’s sneaker</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n          \n                          <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img\n                                  class=\"card-img\"\n                                  src=\"../assets/img/product/inspired-product/i7.jpg\"\n                                  alt=\"\"\n                                />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Latest men’s sneaker</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n          \n                          <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img\n                                  class=\"card-img\"\n                                  src=\"../assets/img/product/inspired-product/i8.jpg\"\n                                  alt=\"\"\n                                />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Latest men’s sneaker</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n          \n                          <div class=\"col-lg-4 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img\n                                  class=\"card-img\"\n                                  src=\"../assets/img/product/inspired-product/i2.jpg\"\n                                  alt=\"\"\n                                />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Latest men’s sneaker</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n          \n                    <div class=\"col-lg-3\">\n                      <div class=\"left_sidebar_area\">\n                        <aside class=\"left_widgets p_filter_widgets\">\n                          <div class=\"l_w_title\">\n                            <h3>Browse Categories</h3>\n                          </div>\n                          <div class=\"widgets_inner\">\n                            <ul class=\"list\">\n                              <li>\n                                <a href=\"#\">Frozen Fish</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Dried Fish</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Fresh Fish</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Meat Alternatives</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Fresh Fish</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Meat Alternatives</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Meat</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </aside>\n          \n                        <aside class=\"left_widgets p_filter_widgets\">\n                          <div class=\"l_w_title\">\n                            <h3>Product Brand</h3>\n                          </div>\n                          <div class=\"widgets_inner\">\n                            <ul class=\"list\">\n                              <li>\n                                <a href=\"#\">Apple</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Asus</a>\n                              </li>\n                              <li class=\"active\">\n                                <a href=\"#\">Gionee</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Micromax</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Samsung</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </aside>\n          \n                        <aside class=\"left_widgets p_filter_widgets\">\n                          <div class=\"l_w_title\">\n                            <h3>Color Filter</h3>\n                          </div>\n                          <div class=\"widgets_inner\">\n                            <ul class=\"list\">\n                              <li>\n                                <a href=\"#\">Black</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Black Leather</a>\n                              </li>\n                              <li class=\"active\">\n                                <a href=\"#\">Black with red</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Gold</a>\n                              </li>\n                              <li>\n                                <a href=\"#\">Spacegrey</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </aside>\n          \n                        <aside class=\"left_widgets p_filter_widgets\">\n                          <div class=\"l_w_title\">\n                            <h3>Price Filter</h3>\n                          </div>\n                          <div class=\"widgets_inner\">\n                            <div class=\"range_item\">\n                              <div id=\"slider-range\"></div>\n                              <div class=\"\">\n                                <label for=\"amount\">Price : </label>\n                                <input type=\"text\" id=\"amount\" readonly />\n                              </div>\n                            </div>\n                          </div>\n                        </aside>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n</body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" />\n  <link rel=\"icon\" href=\"../assets/img/favicon.png\" type=\"image/png\" />\n  <title>Eiser ecommerce</title>\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"../assets/css/bootstrap.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/linericon/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/font-awesome.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/themify-icons.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/flaticon.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/owl-carousel/owl.carousel.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/lightbox/simpleLightbox.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/nice-select/css/nice-select.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/animate-css/animate.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/jquery-ui/jquery-ui.css\" />\n  <!-- main css -->\n  <link rel=\"stylesheet\" href=\"../assets/css/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/responsive.css\" />\n</head>\n<body>\n        <footer class=\"footer-area section_gap\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-2 col-md-6 single-footer-widget\">\n                      <h4>Top Products</h4>\n                      <ul>\n                        <li><a href=\"#\">Managed Website</a></li>\n                        <li><a href=\"#\">Manage Reputation</a></li>\n                        <li><a href=\"#\">Power Tools</a></li>\n                        <li><a href=\"#\">Marketing Service</a></li>\n                      </ul>\n                    </div>\n                    <div class=\"col-lg-2 col-md-6 single-footer-widget\">\n                      <h4>Quick Links</h4>\n                      <ul>\n                        <li><a href=\"#\">Jobs</a></li>\n                        <li><a href=\"#\">Brand Assets</a></li>\n                        <li><a href=\"#\">Investor Relations</a></li>\n                        <li><a href=\"#\">Terms of Service</a></li>\n                      </ul>\n                    </div>\n                    <div class=\"col-lg-2 col-md-6 single-footer-widget\">\n                      <h4>Features</h4>\n                      <ul>\n                        <li><a href=\"#\">Jobs</a></li>\n                        <li><a href=\"#\">Brand Assets</a></li>\n                        <li><a href=\"#\">Investor Relations</a></li>\n                        <li><a href=\"#\">Terms of Service</a></li>\n                      </ul>\n                    </div>\n                    <div class=\"col-lg-2 col-md-6 single-footer-widget\">\n                      <h4>Resources</h4>\n                      <ul>\n                        <li><a href=\"#\">Guides</a></li>\n                        <li><a href=\"#\">Research</a></li>\n                        <li><a href=\"#\">Experts</a></li>\n                        <li><a href=\"#\">Agencies</a></li>\n                      </ul>\n                    </div>\n                    <div class=\"col-lg-4 col-md-6 single-footer-widget\">\n                      <h4>Newsletter</h4>\n                      <p>You can trust us. we only send promo offers,</p>\n                      <div class=\"form-wrap\" id=\"mc_embed_signup\">\n                        <form target=\"_blank\" action=\"https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01\"\n                          method=\"get\" class=\"form-inline\">\n                          <input class=\"form-control\" name=\"EMAIL\" placeholder=\"Your Email Address\" onfocus=\"this.placeholder = ''\"\n                            onblur=\"this.placeholder = 'Your Email Address '\" required=\"\" type=\"email\">\n                          <button class=\"click-btn btn btn-default\">Subscribe</button>\n                          <div style=\"position: absolute; left: -5000px;\">\n                            <input name=\"b_36c4fd991d266f23781ded980_aefe40901a\" tabindex=\"-1\" value=\"\" type=\"text\">\n                          </div>\n            \n                          <div class=\"info\"></div>\n                        </form>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"footer-bottom row align-items-center\">\n                    <p class=\"footer-text m-0 col-lg-8 col-md-12\"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\n            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>\n                    <div class=\"col-lg-4 col-md-12 footer-social\">\n                      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                      <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n                      <a href=\"#\"><i class=\"fa fa-behance\"></i></a>\n                    </div>\n                  </div>\n                </div>\n              </footer>\n              <!--================ End footer Area  =================-->\n            \n              <!-- Optional JavaScript -->\n              <!-- jQuery first, then Popper.js, then Bootstrap JS -->\n              <script src=\"js/jquery-3.2.1.min.js\"></script>\n              <script src=\"js/popper.js\"></script>\n              <script src=\"js/bootstrap.min.js\"></script>\n              <script src=\"js/stellar.js\"></script>\n              <script src=\"vendors/lightbox/simpleLightbox.min.js\"></script>\n              <script src=\"vendors/nice-select/js/jquery.nice-select.min.js\"></script>\n              <script src=\"vendors/isotope/imagesloaded.pkgd.min.js\"></script>\n              <script src=\"vendors/isotope/isotope-min.js\"></script>\n              <script src=\"vendors/owl-carousel/owl.carousel.min.js\"></script>\n              <script src=\"js/jquery.ajaxchimp.min.js\"></script>\n              <script src=\"vendors/counter-up/jquery.waypoints.min.js\"></script>\n              <script src=\"vendors/counter-up/jquery.counterup.js\"></script>\n              <script src=\"js/mail-script.js\"></script>\n              <script src=\"js/theme.js\"></script>\n            </body>\n            \n            </html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" />\n  <link rel=\"icon\" href=\"../assets/img/favicon.png\" type=\"image/png\" />\n  <title>Eiser ecommerce</title>\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"../assets/css/bootstrap.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/linericon/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/font-awesome.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/themify-icons.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/flaticon.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/owl-carousel/owl.carousel.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/lightbox/simpleLightbox.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/nice-select/css/nice-select.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/animate-css/animate.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/jquery-ui/jquery-ui.css\" />\n  <!-- main css -->\n  <link rel=\"stylesheet\" href=\"../assets/css/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/responsive.css\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/brands.min.css\" integrity=\"sha256-UZFVAO0Fn854ajzdWnJ2Oze6k1X4LNqE2RJPW3MBfq8=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css\" integrity=\"sha256-/sdxenK1NDowSNuphgwjv8wSosSNZB0t5koXqd7XqOI=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/regular.min.css\" integrity=\"sha256-1xUFPzbRrl0qOLXDyBNYpuBMMThdiVPJEtZx24deLeg=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/solid.min.css\" integrity=\"sha256-8DcgqUGhWHHsTLj1qcGr0OuPbKkN1RwDjIbZ6DKh/RA=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/svg-with-js.min.css\" integrity=\"sha256-JYHDEdWyJZOBj9BG3bP4M/jNGY6Mq+bYCjZPQsA0EVc=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/v4-shims.min.css\" integrity=\"sha256-L4B/tCDq4GACEVL8PJebMOHv1j+ry0TFsUOdJzjdw5M=\" crossorigin=\"anonymous\" />\n\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css\" integrity=\"sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=\" crossorigin=\"anonymous\" />\n</head>\n\n<body>\n  <!--================Header Menu Area =================-->\n  <header class=\"header_area\">\n    <div class=\"top_menu\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-7\">\n            <div class=\"float-left\">\n              <p>Phone: +01 256 25 235</p>\n              <p>email: info@eiser.com</p>\n            </div>\n          </div>\n          <div class=\"col-lg-5\">\n            <div class=\"float-right\">\n              <ul class=\"right_side\">\n                <li>\n                  <a href=\"cart.html\">\n                    gift card\n                  </a>\n                </li>\n                <li>\n                  <a href=\"tracking.html\">\n                    track order\n                  </a>\n                </li>\n                <li>\n                  <a href=\"contact.html\">\n                    Contact Us\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"main_menu\">\n      <div class=\"container\">\n        <nav class=\"navbar navbar-expand-lg navbar-light w-100\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <a class=\"navbar-brand logo_h\" href=\"index.html\">\n            <img src=\"../assets/img/logo.png\" alt=\"\" />\n          </a>\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse offset w-100\" id=\"navbarSupportedContent\">\n            <div class=\"row w-100 mr-0\">\n              <div class=\"col-lg-7 pr-0\">\n                <ul class=\"nav navbar-nav center_nav pull-right\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"index.html\">Home</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" routerLink=\"category\">Fashion</a>\n                    </li>\n                    \n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" routerLink=\"category\">Elecronics</a>\n                    </li>\n                    \n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" routerLink=\"category\">Foot-wear</a>\n                    </li>     <!--  <li class=\"nav-item submenu dropdown\">\n                    <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n                      aria-expanded=\"false\">Shop</a>\n                   <ul class=\"dropdown-menu\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" routerLink=\"/category\">Shop Category</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"single-product.html\">Product Details</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"checkout.html\">Product Checkout</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"cart.html\">Shopping Cart</a>\n                      </li>\n                    </ul>\n                  </li>-\n                  <li class=\"nav-item submenu dropdown\">\n                    <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n                      aria-expanded=\"false\">Blog</a>\n                    <ul class=\"dropdown-menu\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"blog.html\">Blog</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"single-blog.html\">Blog Details</a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li class=\"nav-item submenu dropdown\">\n                    <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n                      aria-expanded=\"false\">Pages</a>\n                    <ul class=\"dropdown-menu\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"tracking.html\">Tracking</a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"elements.html\">Elements</a>\n                      </li>\n                    </ul>\n                  </li>-->\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"contact.html\">Contact</a>\n                  </li>\n                </ul>\n              </div>\n\n              <div class=\"col-lg-5 pr-0\">\n                <ul class=\"nav navbar-nav navbar-right right_nav pull-right\">\n                  <li class=\"nav-item\">\n                    <a href=\"#\" class=\"icons\">\n                        <i class=\"fas fa-search\"></i>\n                    </a>\n                  </li>\n\n                  <li class=\"nav-item\">\n                    <a routerLink=\"/cart\" class=\"icons\">\n                        <i class=\"fas fa-cart-plus\"></i>\n                      <!-- <i class=\"ti-shopping-cart\"></i> -->\n                    </a>\n                  </li>\n\n                  <li class=\"nav-item\">\n                    <a routerLink=\"/register\" class=\"icons\">\n                        <i class=\"fas fa-users\"></i>\n                      <!-- <i class=\"ti-user\" aria-hidden=\"true\"></i> -->\n                    </a>\n                  </li>\n\n                  <!-- <li class=\"nav-item\"> \n                    <a href=\"#\" class=\"icons\">\n                      <i class=\"ti-heart\" aria-hidden=\"true\"></i> \n                    </a>\n                  </li>-->\n                </ul>\n              </div>\n            </div>\n          </div>\n        </nav>\n      </div>\n    </div>\n  </header>\n   <script src=\"../assets/js/jquery-3.2.1.min.js\"></script>\n  <script src=\"../assets/js/popper.js\"></script>\n  <script src=\"../assets/js/bootstrap.min.js\"></script>\n  <script src=\"../assets/js/stellar.js\"></script>\n  <script src=\"../assets/vendors/lightbox/simpleLightbox.min.js\"></script>\n  <script src=\"../assets/vendors/nice-select/js/jquery.nice-select.min.js\"></script>\n  <script src=\"../assets/vendors/isotope/imagesloaded.pkgd.min.js\"></script>\n  <script src=\"../assets/vendors/isotope/isotope-min.js\"></script>\n  <script src=\"../assets/vendors/owl-carousel/owl.carousel.min.js\"></script>\n  <script src=\"../assets/js/jquery.ajaxchimp.min.js\"></script>\n  <script src=\"../assets/vendors/counter-up/jquery.waypoints.min.js\"></script>\n  <script src=\"../assets/vendors/counter-up/jquery.counterup.js\"></script>\n  <script src=\"../assets/js/mail-script.js\"></script>\n  <script src=\"../assets/js/theme.js\"></script>\n  <script src=\"https://kit.fontawesome.com/28f55bfa61.js\" crossorigin=\"anonymous\"></script>\n\n  </body>\n</html>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" />\n  <link rel=\"icon\" href=\"../assets/img/favicon.png\" type=\"image/png\" />\n  <title>Eiser ecommerce</title>\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"../assets/css/bootstrap.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/linericon/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/font-awesome.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/themify-icons.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/flaticon.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/owl-carousel/owl.carousel.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/lightbox/simpleLightbox.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/nice-select/css/nice-select.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/animate-css/animate.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/jquery-ui/jquery-ui.css\" />\n  <!-- main css -->\n  <link rel=\"stylesheet\" href=\"../assets/css/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/responsive.css\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/brands.min.css\" integrity=\"sha256-UZFVAO0Fn854ajzdWnJ2Oze6k1X4LNqE2RJPW3MBfq8=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css\" integrity=\"sha256-/sdxenK1NDowSNuphgwjv8wSosSNZB0t5koXqd7XqOI=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/regular.min.css\" integrity=\"sha256-1xUFPzbRrl0qOLXDyBNYpuBMMThdiVPJEtZx24deLeg=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/solid.min.css\" integrity=\"sha256-8DcgqUGhWHHsTLj1qcGr0OuPbKkN1RwDjIbZ6DKh/RA=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/svg-with-js.min.css\" integrity=\"sha256-JYHDEdWyJZOBj9BG3bP4M/jNGY6Mq+bYCjZPQsA0EVc=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/v4-shims.min.css\" integrity=\"sha256-L4B/tCDq4GACEVL8PJebMOHv1j+ry0TFsUOdJzjdw5M=\" crossorigin=\"anonymous\" />\n\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css\" integrity=\"sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=\" crossorigin=\"anonymous\" />\n</head>\n\n  <!--================Header Menu Area =================-->\n \n\n\n\n  <body>\n      <section class=\"home_banner_area mb-40\">\n              <div class=\"banner_inner d-flex align-items-center\">\n                <div class=\"container\">\n                  <div class=\"banner_content row\">\n                    <div class=\"col-lg-12\">\n                      <p class=\"sub text-uppercase\">men Collection</p>\n                      <h3><span>Show</span> Your <br />Personal <span>Style</span></h3>\n                      <h4>Fowl saw dry which a above together place.</h4>\n                      <a class=\"main_btn mt-40\" href=\"#\">View Collection</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <!--================End Home Banner Area =================-->\n          \n            <!-- Start feature Area -->\n            <section class=\"feature-area section_gap_bottom_custom\">\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"single-feature\">\n                      <a href=\"#\" class=\"title\">\n                        <!-- <i class=\"flaticon-money\"></i> -->\n                        <i class=\"fa fa-coins\"></i>\n                        <h3>Money back gurantee</h3>\n                      </a>\n                      <p>Shall open divide a one</p>\n                    </div>\n                  </div>\n          \n                  <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"single-feature\">\n                      <a href=\"#\" class=\"title\">\n                        <!-- <i class=\"flaticon-truck\"></i>-->\n                        <i class=\"fa fa-truck\"></i>\n\n                        <h3>Free Delivery</h3>\n                      </a>\n                      <p>Shall open divide a one</p>\n                    </div>\n                  </div>\n          \n                  <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"single-feature\">\n                      <a href=\"#\" class=\"title\">\n                        <!-- <i class=\"flaticon-support\"></i> -->\n                        <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> \n                        <h3>Alway support</h3>\n                      </a>\n                      <p>Shall open divide a one</p>\n                    </div>\n                  </div>\n          \n                  <div class=\"col-lg-3 col-md-6\">\n                    <div class=\"single-feature\">\n                      <a href=\"#\" class=\"title\">\n                        <!-- <i class=\"flaticon-blockchain\"></i> -->\n                        <i class=\"fa fa-anchor\"></i>\n                        <h3>Secure payment</h3>\n                      </a>\n                      <p>Shall open divide a one</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </section>\n            <!-- End feature Area -->\n            <section class=\"feature_product_area section_gap_bottom_custom\">\n                <div class=\"container\">\n                  <div class=\"row justify-content-center\">\n                    <div class=\"col-lg-12\">\n                      <div class=\"main_title\">\n                        <h2><span>Featured product</span></h2>\n                        <p>Bring called seed first of third give itself now ment</p>\n                      </div>\n                    </div>\n                  </div>\n            \n                  <div class=\"row\">\n                    <div class=\"col-lg-4 col-md-6\">\n                      <div class=\"single-product\">\n                        <div class=\"product-img\">\n                          <img class=\"img-fluid w-100\" src=\"../assets/img/product/feature-product/f-p-1.jpg\" alt=\"\" />\n                          <div class=\"p_icon\">\n                            <a routerLink=\"single\">\n                                <i class=\"fa fa-eye\"></i>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fas fa-cart-plus\"></i>\n                            </a>\n                          </div>\n                        </div>\n                        <div class=\"product-btm\">\n                          <a href=\"#\" class=\"d-block\">\n                            <h4>Latest men’s sneaker</h4>\n                          </a>\n                          <div class=\"mt-3\">\n                            <span class=\"mr-4\">$25.00</span>\n                            <del>$35.00</del>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n            \n                    <div class=\"col-lg-4 col-md-6\">\n                      <div class=\"single-product\">\n                        <div class=\"product-img\">\n                          <img class=\"img-fluid w-100\" src=\"../assets/img/product/feature-product/f-p-2.jpg\" alt=\"\" />\n                          <div class=\"p_icon\">\n                            <a href=\"#\">\n                              <i class=\"ti-eye\"></i>\n                            </a>\n                            <a href=\"#\">\n                              <i class=\"ti-heart\"></i>\n                            </a>\n                            <a href=\"#\">\n                              <i class=\"ti-shopping-cart\"></i>\n                            </a>\n                          </div>\n                        </div>\n                        <div class=\"product-btm\">\n                          <a href=\"#\" class=\"d-block\">\n                            <h4>Red women purses</h4>\n                          </a>\n                          <div class=\"mt-3\">\n                            <span class=\"mr-4\">$25.00</span>\n                            <del>$35.00</del>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n            \n                    <div class=\"col-lg-4 col-md-6\">\n                      <div class=\"single-product\">\n                        <div class=\"product-img\">\n                          <img class=\"img-fluid w-100\" src=\"../assets/img/product/feature-product/f-p-3.jpg\" alt=\"\" />\n                          <div class=\"p_icon\">\n                            <a href=\"#\">\n                              <i class=\"ti-eye\"></i>\n                            </a>\n                            <a href=\"#\">\n                              <i class=\"ti-heart\"></i>\n                            </a>\n                            <a href=\"#\">\n                              <i class=\"ti-shopping-cart\"></i>\n                            </a>\n                          </div>\n                        </div>\n                        <div class=\"product-btm\">\n                          <a href=\"#\" class=\"d-block\">\n                            <h4>Men stylist Smart Watch</h4>\n                          </a>\n                          <div class=\"mt-3\">\n                            <span class=\"mr-4\">$25.00</span>\n                            <del>$35.00</del>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <!--================ End Feature Product Area =================-->\n            \n              <!--================ Offer Area =================-->\n              <section class=\"offer_area\">\n                <div class=\"container\">\n                  <div class=\"row justify-content-center\">\n                    <div class=\"offset-lg-4 col-lg-6 text-center\">\n                      <div class=\"offer_content\">\n                        <h3 class=\"text-uppercase mb-40\">all men’s collection</h3>\n                        <h2 class=\"text-uppercase\">50% off</h2>\n                        <a href=\"#\" class=\"main_btn mb-20 mt-5\">Discover Now</a>\n                        <p>Limited Time Offer</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <section class=\"new_product_area section_gap_top section_gap_bottom_custom\">\n                  <div class=\"container\">\n                    <div class=\"row justify-content-center\">\n                      <div class=\"col-lg-12\">\n                        <div class=\"main_title\">\n                          <h2><span>new products</span></h2>\n                          <p>Bring called seed first of third give itself now ment</p>\n                        </div>\n                      </div>\n                    </div>\n              \n                    <div class=\"row\">\n                      <div class=\"col-lg-6\">\n                        <div class=\"new_product\">\n                          <h5 class=\"text-uppercase\">collection of 2019</h5>\n                          <h3 class=\"text-uppercase\">Men’s summer t-shirt</h3>\n                          <div class=\"product-img\">\n                            <img class=\"img-fluid\" src=\"../assets/img/product/new-product/new-product1.png\" alt=\"\" />\n                          </div>\n                          <h4>$120.70</h4>\n                          <a href=\"#\" class=\"main_btn\">Add to cart</a>\n                        </div>\n                      </div>\n              \n                      <div class=\"col-lg-6 mt-5 mt-lg-0\">\n                        <div class=\"row\">\n                          <div class=\"col-lg-6 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img class=\"img-fluid w-100\" src=\"../assets/img/product/new-product/n1.jpg\" alt=\"\" />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Nike latest sneaker</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n              \n                          <div class=\"col-lg-6 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img class=\"img-fluid w-100\" src=\"../assets/img/product/new-product/n2.jpg\" alt=\"\" />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>Men’s denim jeans</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n              \n                          <div class=\"col-lg-6 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img class=\"img-fluid w-100\" src=\"../assets/img/product/new-product/n3.jpg\" alt=\"\" />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>quartz hand watch</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n              \n                          <div class=\"col-lg-6 col-md-6\">\n                            <div class=\"single-product\">\n                              <div class=\"product-img\">\n                                <img class=\"img-fluid w-100\" src=\"../assets/img/product/new-product/n4.jpg\" alt=\"\" />\n                                <div class=\"p_icon\">\n                                  <a href=\"#\">\n                                    <i class=\"ti-eye\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-heart\"></i>\n                                  </a>\n                                  <a href=\"#\">\n                                    <i class=\"ti-shopping-cart\"></i>\n                                  </a>\n                                </div>\n                              </div>\n                              <div class=\"product-btm\">\n                                <a href=\"#\" class=\"d-block\">\n                                  <h4>adidas sport shoe</h4>\n                                </a>\n                                <div class=\"mt-3\">\n                                  <span class=\"mr-4\">$25.00</span>\n                                  <del>$35.00</del>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </section>\n                <!--================ End New Product Area =================-->\n              \n                <!--================ Inspired Product Area =================-->\n                <section class=\"inspired_product_area section_gap_bottom_custom\">\n                  <div class=\"container\">\n                    <div class=\"row justify-content-center\">\n                      <div class=\"col-lg-12\">\n                        <div class=\"main_title\">\n                          <h2><span>Inspired products</span></h2>\n                          <p>Bring called seed first of third give itself now ment</p>\n                        </div>\n                      </div>\n                    </div>\n              \n                    <div class=\"row\">\n                      <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"single-product\">\n                          <div class=\"product-img\">\n                            <img class=\"img-fluid w-100\" src=\"../assets/img/product/inspired-product/i1.jpg\" alt=\"\" />\n                            <div class=\"p_icon\">\n                              <a href=\"#\">\n                                <i class=\"ti-eye\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-heart\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-shopping-cart\"></i>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"product-btm\">\n                            <a href=\"#\" class=\"d-block\">\n                              <h4>Latest men’s sneaker</h4>\n                            </a>\n                            <div class=\"mt-3\">\n                              <span class=\"mr-4\">$25.00</span>\n                              <del>$35.00</del>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n              \n                      <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"single-product\">\n                          <div class=\"product-img\">\n                            <img class=\"img-fluid w-100\" src=\"../assets/img/product/inspired-product/i2.jpg\" alt=\"\" />\n                            <div class=\"p_icon\">\n                              <a href=\"#\">\n                                <i class=\"ti-eye\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-heart\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-shopping-cart\"></i>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"product-btm\">\n                            <a href=\"#\" class=\"d-block\">\n                              <h4>Latest men’s sneaker</h4>\n                            </a>\n                            <div class=\"mt-3\">\n                              <span class=\"mr-4\">$25.00</span>\n                              <del>$35.00</del>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n              \n                      <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"single-product\">\n                          <div class=\"product-img\">\n                            <img class=\"img-fluid w-100\" src=\"../assets/img/product/inspired-product/i3.jpg\" alt=\"\" />\n                            <div class=\"p_icon\">\n                              <a href=\"#\">\n                                <i class=\"ti-eye\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-shopping-cart\"></i>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"product-btm\">\n                            <a href=\"#\" class=\"d-block\">\n                              <h4>Latest men’s sneaker</h4>\n                            </a>\n                            <div class=\"mt-3\">\n                              <span class=\"mr-4\">$25.00</span>\n                              <del>$35.00</del>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n              \n                      <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"single-product\">\n                          <div class=\"product-img\">\n                            <img class=\"img-fluid w-100\" src=\"../assets/img/product/inspired-product/i4.jpg\" alt=\"\" />\n                            <div class=\"p_icon\">\n                              <a href=\"#\">\n                                <i class=\"ti-eye\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-heart\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-shopping-cart\"></i>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"product-btm\">\n                            <a href=\"#\" class=\"d-block\">\n                              <h4>Latest men’s sneaker</h4>\n                            </a>\n                            <div class=\"mt-3\">\n                              <span class=\"mr-4\">$25.00</span>\n                              <del>$35.00</del>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      \n                      <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"single-product\">\n                          <div class=\"product-img\">\n                            <img class=\"img-fluid w-100\" src=\"../assets/img/product/inspired-product/i5.jpg\" alt=\"\" />\n                            <div class=\"p_icon\">\n                              <a href=\"#\">\n                                <i class=\"ti-eye\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-heart\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <!-- <i class=\"ti-shopping-cart\"></i> -->\n                                <i class=\"fas fa-cart-plus\"></i>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"product-btm\">\n                            <a href=\"#\" class=\"d-block\">\n                              <h4>Latest men’s sneaker</h4>\n                            </a>\n                            <div class=\"mt-3\">\n                              <span class=\"mr-4\">$25.00</span>\n                              <del>$35.00</del>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n              \n                      <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"single-product\">\n                          <div class=\"product-img\">\n                            <img class=\"img-fluid w-100\" src=\"../assets/img/product/inspired-product/i6.jpg\" alt=\"\" />\n                            <div class=\"p_icon\">\n                              <a href=\"#\">\n                                <i class=\"ti-eye\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-heart\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-shopping-cart\"></i>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"product-btm\">\n                            <a href=\"#\" class=\"d-block\">\n                              <h4>Latest men’s sneaker</h4>\n                            </a>\n                            <div class=\"mt-3\">\n                              <span class=\"mr-4\">$25.00</span>\n                              <del>$35.00</del>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n              \n                      <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"single-product\">\n                          <div class=\"product-img\">\n                            <img class=\"img-fluid w-100\" src=\"../assets/img/product/inspired-product/i7.jpg\" alt=\"\" />\n                            <div class=\"p_icon\">\n                              <a href=\"#\">\n                                <i class=\"ti-eye\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-heart\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-shopping-cart\"></i>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"product-btm\">\n                            <a href=\"#\" class=\"d-block\">\n                              <h4>Latest men’s sneaker</h4>\n                            </a>\n                            <div class=\"mt-3\">\n                              <span class=\"mr-4\">$25.00</span>\n                              <del>$35.00</del>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n              \n                      <div class=\"col-lg-3 col-md-6\">\n                        <div class=\"single-product\">\n                          <div class=\"product-img\">\n                            <img class=\"img-fluid w-100\" src=\"../assets/img/product/inspired-product/i8.jpg\" alt=\"\" />\n                            <div class=\"p_icon\">\n                              <a href=\"#\">\n                                <i class=\"ti-eye\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-heart\"></i>\n                              </a>\n                              <a href=\"#\">\n                                <i class=\"ti-shopping-cart\"></i>\n                              </a>\n                            </div>\n                          </div>\n                          <div class=\"product-btm\">\n                            <a href=\"#\" class=\"d-block\">\n                              <h4>Latest men’s sneaker</h4>\n                            </a>\n                            <div class=\"mt-3\">\n                              <span class=\"mr-4\">$25.00</span>\n                              <del>$35.00</del>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </section>\n                <!--================ End Inspired Product Area =================-->\n              \n                <!--================ Start Blog Area =================-->\n                <section class=\"blog-area section-gap\">\n                  <div class=\"container\">\n                    <div class=\"row justify-content-center\">\n                      <div class=\"col-lg-12\">\n                        <div class=\"main_title\">\n                          <h2><span>latest blog</span></h2>\n                          <p>Bring called seed first of third give itself now ment</p>\n                        </div>\n                      </div>\n                    </div>\n              \n                    <div class=\"row\">\n                      <div class=\"col-lg-4 col-md-6\">\n                        <div class=\"single-blog\">\n                          <div class=\"thumb\">\n                            <img class=\"img-fluid\" src=\"../assets/img/b1.jpg\" alt=\"\">\n                          </div>\n                          <div class=\"short_details\">\n                            <div class=\"meta-top d-flex\">\n                              <a href=\"#\">By Admin</a>\n                              <a href=\"#\"><i class=\"ti-comments-smiley\"></i>2 Comments</a>\n                            </div>\n                            <a class=\"d-block\" href=\"single-blog.html\">\n                              <h4>Ford clever bed stops your sleeping\n                                partner hogging the whole</h4>\n                            </a>\n                            <div class=\"text-wrap\">\n                              <p>\n                                Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light\n                                Forth.\n                              </p>\n                            </div>\n                            <a href=\"#\" class=\"blog_btn\">Learn More <span class=\"ml-2 ti-arrow-right\"></span></a>\n                          </div>\n                        </div>\n                      </div>\n                      \n                      <div class=\"col-lg-4 col-md-6\">\n                        <div class=\"single-blog\">\n                          <div class=\"thumb\">\n                            <img class=\"img-fluid\" src=\"../assets/img/b2.jpg\" alt=\"\">\n                          </div>\n                          <div class=\"short_details\">\n                            <div class=\"meta-top d-flex\">\n                              <a href=\"#\">By Admin</a>\n                              <a href=\"#\"><i class=\"ti-comments-smiley\"></i>2 Comments</a>\n                            </div>\n                            <a class=\"d-block\" href=\"single-blog.html\">\n                              <h4>Ford clever bed stops your sleeping\n                                partner hogging the whole</h4>\n                            </a>\n                            <div class=\"text-wrap\">\n                              <p>\n                                Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light\n                                Forth.\n                              </p>\n                            </div>\n                            <a href=\"#\" class=\"blog_btn\">Learn More <span class=\"ml-2 ti-arrow-right\"></span></a>\n                          </div>\n                        </div>\n                      </div>\n              \n                      <div class=\"col-lg-4 col-md-6\">\n                        <div class=\"single-blog\">\n                          <div class=\"thumb\">\n                            <img class=\"img-fluid\" src=\"../assets/img/b3.jpg\" alt=\"\">\n                          </div>\n                          <div class=\"short_details\">\n                            <div class=\"meta-top d-flex\">\n                              <a href=\"#\">By Admin</a>\n                              <a href=\"#\"><i class=\"ti-comments-smiley\"></i>2 Comments</a>\n                            </div>\n                            <a class=\"d-block\" href=\"single-blog.html\">\n                              <h4>Ford clever bed stops your sleeping\n                                partner hogging the whole</h4>\n                            </a>\n                            <div class=\"text-wrap\">\n                              <p>\n                                Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light\n                                Forth.\n                              </p>\n                            </div>\n                            <a href=\"#\" class=\"blog_btn\">Learn More <span class=\"ml-2 ti-arrow-right\"></span></a>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </section>\n              <!--================ End Offer Area =================-->\n            \n            <!--================ Feature Product Area =================-->\n            <script src=\"../assets/js/jquery-3.2.1.min.js\"></script>\n            <script src=\"../assets/js/popper.js\"></script>\n            <script src=\"../assets/js/bootstrap.min.js\"></script>\n            <script src=\"../assets/js/stellar.js\"></script>\n            <script src=\"../assets/vendors/lightbox/simpleLightbox.min.js\"></script>\n            <script src=\"../assets/vendors/nice-select/js/jquery.nice-select.min.js\"></script>\n            <script src=\"../assets/vendors/isotope/imagesloaded.pkgd.min.js\"></script>\n            <script src=\"../assets/vendors/isotope/isotope-min.js\"></script>\n            <script src=\"../assets/vendors/owl-carousel/owl.carousel.min.js\"></script>\n            <script src=\"../assets/js/jquery.ajaxchimp.min.js\"></script>\n            <script src=\"../assets/vendors/counter-up/jquery.waypoints.min.js\"></script>\n            <script src=\"../assets/vendors/counter-up/jquery.counterup.js\"></script>\n            <script src=\"../assets/js/mail-script.js\"></script>\n            <script src=\"../assets/js/theme.js\"></script>\n            <script src=\"https://kit.fontawesome.com/28f55bfa61.js\" crossorigin=\"anonymous\"></script>\n          \n            </body>\n          </html>\n          <router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" />\n  <link rel=\"icon\" href=\"../assets/img/favicon.png\" type=\"image/png\" />\n  <title>Eiser ecommerce</title>\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"../assets/css/bootstrap.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/linericon/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/font-awesome.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/themify-icons.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/flaticon.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/owl-carousel/owl.carousel.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/lightbox/simpleLightbox.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/nice-select/css/nice-select.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/animate-css/animate.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/jquery-ui/jquery-ui.css\" />\n  <!-- main css -->\n  <link rel=\"stylesheet\" href=\"../assets/css/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/responsive.css\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/brands.min.css\" integrity=\"sha256-UZFVAO0Fn854ajzdWnJ2Oze6k1X4LNqE2RJPW3MBfq8=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css\" integrity=\"sha256-/sdxenK1NDowSNuphgwjv8wSosSNZB0t5koXqd7XqOI=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/regular.min.css\" integrity=\"sha256-1xUFPzbRrl0qOLXDyBNYpuBMMThdiVPJEtZx24deLeg=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/solid.min.css\" integrity=\"sha256-8DcgqUGhWHHsTLj1qcGr0OuPbKkN1RwDjIbZ6DKh/RA=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/svg-with-js.min.css\" integrity=\"sha256-JYHDEdWyJZOBj9BG3bP4M/jNGY6Mq+bYCjZPQsA0EVc=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/v4-shims.min.css\" integrity=\"sha256-L4B/tCDq4GACEVL8PJebMOHv1j+ry0TFsUOdJzjdw5M=\" crossorigin=\"anonymous\" />\n\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css\" integrity=\"sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=\" crossorigin=\"anonymous\" />\n</head>\n\n  <!--================Header Menu Area =================-->\n \n\n\n\n  <body>\n<section class=\"banner_area\">\n        <div class=\"banner_inner d-flex align-items-center\">\n          <div class=\"container\">\n            <div\n              class=\"banner_content d-md-flex justify-content-between align-items-center\"\n            >\n              <div class=\"mb-3 mb-md-0\">\n                <h2>Customer Login</h2>\n                <p>Tvd shoppe:-everything You Need</p>\n              </div>\n              <div class=\"page_link\">\n                <a routerLink=\"\">Home</a>\n                <a routerLink=\"../register\">Customer Register</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      <!--================End Home Banner Area =================-->\n  \n     \n      <section class=\"checkout_area section_gap\">\n            <div class=\"container\">\n              <div class=\"returning_customer\">\n                <div class=\"check_title\">\n                  <h2>\n                    New User?\n                    <a routerLink=\"register\">Click here to Register</a>\n                  </h2>\n                </div>\n              <br>\n              <form\n                  class=\"row contact_form\"\n                  action=\"#\"\n                  method=\"post\"\n                  novalidate=\"novalidate\"\n                >\n              <div class=\"col-md-6 form-group p_star\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"email\"\n                  name=\"compemailany\"\n                  placeholder=\"Email Address\"\n                />\n              </div>\n              <div class=\"col-md-6 form-group p_star\">\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  id=\"password\"\n                  name=\"password\"\n                 placeholder=\"password\"\n                />\n                \n              </div>  \n                \n                <button type=\"submit\" value=\"submit\" class=\"btn submit_btn\">\n                  Login\n                </button>\n                </form>\n              </div>\n             \n            \n            </div>\n          </section>\n\n\n\n\n\n      <script src=\"../assets/js/jquery-3.2.1.min.js\"></script>\n      <script src=\"../assets/js/popper.js\"></script>\n      <script src=\"../assets/js/bootstrap.min.js\"></script>\n      <script src=\"../assets/js/stellar.js\"></script>\n      <script src=\"../assets/vendors/lightbox/simpleLightbox.min.js\"></script>\n      <script src=\"../assets/vendors/nice-select/js/jquery.nice-select.min.js\"></script>\n      <script src=\"../assets/vendors/isotope/imagesloaded.pkgd.min.js\"></script>\n      <script src=\"../assets/vendors/isotope/isotope-min.js\"></script>\n      <script src=\"../assets/vendors/owl-carousel/owl.carousel.min.js\"></script>\n      <script src=\"../assets/js/jquery.ajaxchimp.min.js\"></script>\n      <script src=\"../assets/vendors/counter-up/jquery.waypoints.min.js\"></script>\n      <script src=\"../assets/vendors/counter-up/jquery.counterup.js\"></script>\n      <script src=\"../assets/js/mail-script.js\"></script>\n      <script src=\"../assets/js/theme.js\"></script>\n      <script src=\"https://kit.fontawesome.com/28f55bfa61.js\" crossorigin=\"anonymous\"></script>\n    \n      </body>\n    </html>\n    <router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" />\n  <link rel=\"icon\" href=\"../assets/img/favicon.png\" type=\"image/png\" />\n  <title>Eiser ecommerce</title>\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"../assets/css/bootstrap.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/linericon/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/font-awesome.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/themify-icons.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/flaticon.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/owl-carousel/owl.carousel.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/lightbox/simpleLightbox.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/nice-select/css/nice-select.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/animate-css/animate.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/jquery-ui/jquery-ui.css\" />\n  <!-- main css -->\n  <link rel=\"stylesheet\" href=\"../assets/css/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/responsive.css\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/brands.min.css\" integrity=\"sha256-UZFVAO0Fn854ajzdWnJ2Oze6k1X4LNqE2RJPW3MBfq8=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css\" integrity=\"sha256-/sdxenK1NDowSNuphgwjv8wSosSNZB0t5koXqd7XqOI=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/regular.min.css\" integrity=\"sha256-1xUFPzbRrl0qOLXDyBNYpuBMMThdiVPJEtZx24deLeg=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/solid.min.css\" integrity=\"sha256-8DcgqUGhWHHsTLj1qcGr0OuPbKkN1RwDjIbZ6DKh/RA=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/svg-with-js.min.css\" integrity=\"sha256-JYHDEdWyJZOBj9BG3bP4M/jNGY6Mq+bYCjZPQsA0EVc=\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/v4-shims.min.css\" integrity=\"sha256-L4B/tCDq4GACEVL8PJebMOHv1j+ry0TFsUOdJzjdw5M=\" crossorigin=\"anonymous\" />\n\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css\" integrity=\"sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=\" crossorigin=\"anonymous\" />\n</head>\n\n  <!--================Header Menu Area =================-->\n \n\n\n\n  <body>\n<section class=\"banner_area\">\n        <div class=\"banner_inner d-flex align-items-center\">\n          <div class=\"container\">\n            <div\n              class=\"banner_content d-md-flex justify-content-between align-items-center\"\n            >\n              <div class=\"mb-3 mb-md-0\">\n                <h2>Customer register</h2>\n                <p>Very us move be blessed multiply night</p>\n              </div>\n              <div class=\"page_link\">\n                <a routerLink=\"\">Home</a>\n                <a routerLink=\"register\">Customer Register</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      <!--================End Home Banner Area =================-->\n  \n     \n      <section class=\"checkout_area section_gap\">\n            <div class=\"container\">\n              <div class=\"returning_customer\">\n                <div class=\"check_title\">\n                  <h2>\n                    Already Customer?\n                    <a routerLink=\"../login\">Click here to login</a>\n                  </h2>\n                </div>\n              <br>\n                <form\n                  class=\"row contact_form\"\n                  action=\"#\"\n                  method=\"post\"\n                  novalidate=\"novalidate\"\n                >\n                <div class=\"col-md-6 form-group p_star\">\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"first\"\n                    name=\"name\"\n                    placeholder=\"First Name\"\n                  />\n                </div>\n                <div class=\"col-md-6 form-group p_star\">\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"last\"\n                    name=\"name\"\n                    placeholder=\"Last Name\"\n                  />\n          \n                </div>\n                <div class=\"col-md-12 form-group p_star\">\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"add1\"\n                    name=\"add1\"\n                    placeholder=\"Email\"\n                  />\n                </div>\n                  <div class=\"col-md-6 form-group p_star\">\n                    <input\n                      type=\"password\"\n                      class=\"form-control\"\n                      id=\"name\"\n                      name=\"name\"\n                      placeholder=\"password\"\n                    >\n                  </div>\n                  <div class=\"col-md-6 form-group p_star\">\n                    <input\n                      type=\"password\"\n                      class=\"form-control\"\n                      id=\"password\"\n                      name=\"password\"\n                      placeholder=\"Confirm Password\"\n                    />\n                  </div>\n                 \n                  <div class=\"col-md-12 form-group\">\n                    <button type=\"submit\" value=\"submit\" class=\"btn submit_btn\">\n                      Register\n                    </button>\n                    <div class=\"creat_account\">\n                      <input type=\"checkbox\" id=\"f-option\" name=\"selector\" />\n                      <label for=\"f-option\">Remember me</label>\n                    </div>\n                    <a class=\"lost_pass\" href=\"#\">Lost your password?</a>\n                  </div>\n                </form>\n              </div>\n             \n            \n            </div>\n          </section>\n\n\n\n\n\n      <script src=\"../assets/js/jquery-3.2.1.min.js\"></script>\n      <script src=\"../assets/js/popper.js\"></script>\n      <script src=\"../assets/js/bootstrap.min.js\"></script>\n      <script src=\"../assets/js/stellar.js\"></script>\n      <script src=\"../assets/vendors/lightbox/simpleLightbox.min.js\"></script>\n      <script src=\"../assets/vendors/nice-select/js/jquery.nice-select.min.js\"></script>\n      <script src=\"../assets/vendors/isotope/imagesloaded.pkgd.min.js\"></script>\n      <script src=\"../assets/vendors/isotope/isotope-min.js\"></script>\n      <script src=\"../assets/vendors/owl-carousel/owl.carousel.min.js\"></script>\n      <script src=\"../assets/js/jquery.ajaxchimp.min.js\"></script>\n      <script src=\"../assets/vendors/counter-up/jquery.waypoints.min.js\"></script>\n      <script src=\"../assets/vendors/counter-up/jquery.counterup.js\"></script>\n      <script src=\"../assets/js/mail-script.js\"></script>\n      <script src=\"../assets/js/theme.js\"></script>\n      <script src=\"https://kit.fontawesome.com/28f55bfa61.js\" crossorigin=\"anonymous\"></script>\n    \n      </body>\n    </html>\n    <router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/single/single.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single/single.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html lang=\"en\">\n\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" />\n  <link rel=\"icon\" href=\"../assets/img/favicon.png\" type=\"image/png\" />\n  <title>Eiser ecommerce</title>\n  <!-- Bootstrap CSS -->\n  <link rel=\"stylesheet\" href=\"../assets/css/bootstrap.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/linericon/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/font-awesome.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/themify-icons.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/flaticon.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/owl-carousel/owl.carousel.min.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/lightbox/simpleLightbox.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/nice-select/css/nice-select.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/animate-css/animate.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/vendors/jquery-ui/jquery-ui.css\" />\n  <!-- main css -->\n  <link rel=\"stylesheet\" href=\"../assets/css/style.css\" />\n  <link rel=\"stylesheet\" href=\"../assets/css/responsive.css\" />\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n</head>\n<body>\n<section class=\"banner_area\">\n        <div class=\"banner_inner d-flex align-items-center\">\n          <div class=\"container\">\n            <div\n              class=\"banner_content d-md-flex justify-content-between align-items-center\"\n            >\n              <div class=\"mb-3 mb-md-0\">\n                <h2>Product Details</h2>\n                <p>Very us move be blessed multiply night</p>\n              </div>\n              <div class=\"page_link\">\n                <a href=\"index.html\">Home</a>\n                <a href=\"single-product.html\">Product Details</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      <!--================End Home Banner Area =================-->\n  \n      <!--================Single Product Area =================-->\n      <div class=\"product_image_area\">\n        <div class=\"container\">\n          <div class=\"row s_product_inner\">\n            <div class=\"col-lg-6\">\n              <div class=\"s_product_img\">\n                <div\n                  id=\"carouselExampleIndicators\"\n                  class=\"carousel slide\"\n                  data-ride=\"carousel\"\n                >\n                  <ol class=\"carousel-indicators\">\n                    <li\n                      data-target=\"#carouselExampleIndicators\"\n                      data-slide-to=\"0\"\n                      class=\"active\"\n                    >\n                      <img\n                        src=\"../assets/img/product/single-product/s-product-s-2.jpg\"\n                        alt=\"\"\n                      />\n                    </li>\n                    <li\n                      data-target=\"#carouselExampleIndicators\"\n                      data-slide-to=\"1\"\n                    >\n                      <img\n                        src=\"../assets/img/product/single-product/s-product-s-3.jpg\"\n                        alt=\"\"\n                      />\n                    </li>\n                    <li\n                      data-target=\"#carouselExampleIndicators\"\n                      data-slide-to=\"2\"\n                    >\n                      <img\n                        src=\"../assets/img/product/single-product/s-product-s-4.jpg\"\n                        alt=\"\"\n                      />\n                    </li>\n                  </ol>\n                  <div class=\"carousel-inner\">\n                    <div class=\"carousel-item active\">\n                      <img\n                        class=\"d-block w-100\"\n                        src=\"../assets/img/product/single-product/s-product-1.jpg\"\n                        alt=\"First slide\"\n                      />\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img\n                        class=\"d-block w-100\"\n                        src=\"../assets/img/product/single-product/s-product-1.jpg\"\n                        alt=\"Second slide\"\n                      />\n                    </div>\n                    <div class=\"carousel-item\">\n                      <img\n                        class=\"d-block w-100\"\n                        src=\"../assets/img/product/single-product/s-product-1.jpg\"\n                        alt=\"Third slide\"\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-5 offset-lg-1\">\n              <div class=\"s_product_text\">\n                <h3>Faded SkyBlu Denim Jeans</h3>\n                <h2>$149.99</h2>\n                <ul class=\"list\">\n                  <li>\n                    <a class=\"active\" href=\"#\">\n                      <span>Category</span> : Household</a\n                    >\n                  </li>\n                  <li>\n                    <a href=\"#\"> <span>Availibility</span> : In Stock</a>\n                  </li>\n                </ul>\n                <p>\n                  Mill Oil is an innovative oil filled radiator with the most\n                  modern technology. If you are looking for something that can\n                  make your interior look awesome, and at the same time give you\n                  the pleasant warm feeling during the winter.\n                </p>\n                <div class=\"product_count\">\n                  <label for=\"qty\">Quantity:</label>\n                  <input\n                    type=\"text\"\n                    name=\"qty\"\n                    id=\"sst\"\n                    maxlength=\"12\"\n                    value=\"1\"\n                    title=\"Quantity:\"\n                    class=\"input-text qty\"\n                  />\n                  <button\n                    onclick=\"var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;\"\n                    class=\"increase items-count\"\n                    type=\"button\"\n                  >\n                    <i class=\"lnr lnr-chevron-up\"></i>\n                  </button>\n                  <button\n                    onclick=\"var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;\"\n                    class=\"reduced items-count\"\n                    type=\"button\"\n                  >\n                    <i class=\"lnr lnr-chevron-down\"></i>\n                  </button>\n                </div>\n                <div class=\"card_area\">\n                  <a class=\"main_btn\" href=\"#\">Add to Cart</a>\n                  <a class=\"icon_btn\" href=\"#\">\n                    <i class=\"lnr lnr lnr-diamond\"></i>\n                  </a>\n                  <a class=\"icon_btn\" href=\"#\">\n                    <i class=\"lnr lnr lnr-heart\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--================End Single Product Area =================-->\n  \n      <!--================Product Description Area =================-->\n      <section class=\"product_description_area\">\n        <div class=\"container\">\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                id=\"home-tab\"\n                data-toggle=\"tab\"\n                href=\"#home\"\n                role=\"tab\"\n                aria-controls=\"home\"\n                aria-selected=\"true\"\n                >Description</a\n              >\n            </li>\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                id=\"profile-tab\"\n                data-toggle=\"tab\"\n                href=\"#profile\"\n                role=\"tab\"\n                aria-controls=\"profile\"\n                aria-selected=\"false\"\n                >Specification</a\n              >\n            </li>\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                id=\"contact-tab\"\n                data-toggle=\"tab\"\n                href=\"#contact\"\n                role=\"tab\"\n                aria-controls=\"contact\"\n                aria-selected=\"false\"\n                >Comments</a\n              >\n            </li>\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link active\"\n                id=\"review-tab\"\n                data-toggle=\"tab\"\n                href=\"#review\"\n                role=\"tab\"\n                aria-controls=\"review\"\n                aria-selected=\"false\"\n                >Reviews</a\n              >\n            </li>\n          </ul>\n          <div class=\"tab-content\" id=\"myTabContent\">\n            <div\n              class=\"tab-pane fade\"\n              id=\"home\"\n              role=\"tabpanel\"\n              aria-labelledby=\"home-tab\"\n            >\n              <p>\n                Beryl Cook is one of Britain’s most talented and amusing artists\n                .Beryl’s pictures feature women of all shapes and sizes enjoying\n                themselves .Born between the two world wars, Beryl Cook eventually\n                left Kendrick School in Reading at the age of 15, where she went\n                to secretarial school and then into an insurance office. After\n                moving to London and then Hampton, she eventually married her next\n                door neighbour from Reading, John Cook. He was an officer in the\n                Merchant Navy and after he left the sea in 1956, they bought a pub\n                for a year before John took a job in Southern Rhodesia with a\n                motor company. Beryl bought their young son a box of watercolours,\n                and when showing him how to use it, she decided that she herself\n                quite enjoyed painting. John subsequently bought her a child’s\n                painting set for her birthday and it was with this that she\n                produced her first significant work, a half-length portrait of a\n                dark-skinned lady with a vacant expression and large drooping\n                breasts. It was aptly named ‘Hangover’ by Beryl’s husband and\n              </p>\n              <p>\n                It is often frustrating to attempt to plan meals that are designed\n                for one. Despite this fact, we are seeing more and more recipe\n                books and Internet websites that are dedicated to the act of\n                cooking for one. Divorce and the death of spouses or grown\n                children leaving for college are all reasons that someone\n                accustomed to cooking for more than one would suddenly need to\n                learn how to adjust all the cooking practices utilized before into\n                a streamlined plan of cooking that is more efficient for one\n                person creating less\n              </p>\n            </div>\n            <div\n              class=\"tab-pane fade\"\n              id=\"profile\"\n              role=\"tabpanel\"\n              aria-labelledby=\"profile-tab\"\n            >\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td>\n                        <h5>Width</h5>\n                      </td>\n                      <td>\n                        <h5>128mm</h5>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h5>Height</h5>\n                      </td>\n                      <td>\n                        <h5>508mm</h5>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h5>Depth</h5>\n                      </td>\n                      <td>\n                        <h5>85mm</h5>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h5>Weight</h5>\n                      </td>\n                      <td>\n                        <h5>52gm</h5>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h5>Quality checking</h5>\n                      </td>\n                      <td>\n                        <h5>yes</h5>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h5>Freshness Duration</h5>\n                      </td>\n                      <td>\n                        <h5>03days</h5>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h5>When packeting</h5>\n                      </td>\n                      <td>\n                        <h5>Without touch of hand</h5>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        <h5>Each Box contains</h5>\n                      </td>\n                      <td>\n                        <h5>60pcs</h5>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <div\n              class=\"tab-pane fade\"\n              id=\"contact\"\n              role=\"tabpanel\"\n              aria-labelledby=\"contact-tab\"\n            >\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"comment_list\">\n                    <div class=\"review_item\">\n                      <div class=\"media\">\n                        <div class=\"d-flex\">\n                          <img\n                            src=\"../assets/img/product/single-product/review-1.png\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"media-body\">\n                          <h4>Blake Ruiz</h4>\n                          <h5>12th Feb, 2017 at 05:56 pm</h5>\n                          <a class=\"reply_btn\" href=\"#\">Reply</a>\n                        </div>\n                      </div>\n                      <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                        sed do eiusmod tempor incididunt ut labore et dolore magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                        ullamco laboris nisi ut aliquip ex ea commodo\n                      </p>\n                    </div>\n                    <div class=\"review_item reply\">\n                      <div class=\"media\">\n                        <div class=\"d-flex\">\n                          <img\n                            src=\"../assets/img/product/single-product/review-2.png\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"media-body\">\n                          <h4>Blake Ruiz</h4>\n                          <h5>12th Feb, 2017 at 05:56 pm</h5>\n                          <a class=\"reply_btn\" href=\"#\">Reply</a>\n                        </div>\n                      </div>\n                      <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                        sed do eiusmod tempor incididunt ut labore et dolore magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                        ullamco laboris nisi ut aliquip ex ea commodo\n                      </p>\n                    </div>\n                    <div class=\"review_item\">\n                      <div class=\"media\">\n                        <div class=\"d-flex\">\n                          <img\n                            src=\"../assets/img/product/single-product/review-3.png\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"media-body\">\n                          <h4>Blake Ruiz</h4>\n                          <h5>12th Feb, 2017 at 05:56 pm</h5>\n                          <a class=\"reply_btn\" href=\"#\">Reply</a>\n                        </div>\n                      </div>\n                      <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                        sed do eiusmod tempor incididunt ut labore et dolore magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                        ullamco laboris nisi ut aliquip ex ea commodo\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"review_box\">\n                    <h4>Post a comment</h4>\n                    <form\n                      class=\"row contact_form\"\n                      action=\"contact_process.php\"\n                      method=\"post\"\n                      id=\"contactForm\"\n                      novalidate=\"novalidate\"\n                    >\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            id=\"name\"\n                            name=\"name\"\n                            placeholder=\"Your Full name\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <input\n                            type=\"email\"\n                            class=\"form-control\"\n                            id=\"email\"\n                            name=\"email\"\n                            placeholder=\"Email Address\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            id=\"number\"\n                            name=\"number\"\n                            placeholder=\"Phone Number\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <textarea\n                            class=\"form-control\"\n                            name=\"message\"\n                            id=\"message\"\n                            rows=\"1\"\n                            placeholder=\"Message\"\n                          ></textarea>\n                        </div>\n                      </div>\n                      <div class=\"col-md-12 text-right\">\n                        <button\n                          type=\"submit\"\n                          value=\"submit\"\n                          class=\"btn submit_btn\"\n                        >\n                          Submit Now\n                        </button>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div\n              class=\"tab-pane fade show active\"\n              id=\"review\"\n              role=\"tabpanel\"\n              aria-labelledby=\"review-tab\"\n            >\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"row total_rate\">\n                    <div class=\"col-6\">\n                      <div class=\"box_total\">\n                        <h5>Overall</h5>\n                        <h4>4.0</h4>\n                        <h6>(03 Reviews)</h6>\n                      </div>\n                    </div>\n                    <div class=\"col-6\">\n                      <div class=\"rating_list\">\n                        <h3>Based on 3 Reviews</h3>\n                        <ul class=\"list\">\n                          <li>\n                            <a href=\"#\"\n                              >5 Star\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i> 01</a\n                            >\n                          </li>\n                          <li>\n                            <a href=\"#\"\n                              >4 Star\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i> 01</a\n                            >\n                          </li>\n                          <li>\n                            <a href=\"#\"\n                              >3 Star\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i> 01</a\n                            >\n                          </li>\n                          <li>\n                            <a href=\"#\"\n                              >2 Star\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i> 01</a\n                            >\n                          </li>\n                          <li>\n                            <a href=\"#\"\n                              >1 Star\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i>\n                              <i class=\"fa fa-star\"></i> 01</a\n                            >\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"review_list\">\n                    <div class=\"review_item\">\n                      <div class=\"media\">\n                        <div class=\"d-flex\">\n                          <img\n                            src=\"../assets/img/product/single-product/review-1.png\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"media-body\">\n                          <h4>Blake Ruiz</h4>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                        </div>\n                      </div>\n                      <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                        sed do eiusmod tempor incididunt ut labore et dolore magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                        ullamco laboris nisi ut aliquip ex ea commodo\n                      </p>\n                    </div>\n                    <div class=\"review_item\">\n                      <div class=\"media\">\n                        <div class=\"d-flex\">\n                          <img\n                            src=\"../assets/img/product/single-product/review-2.png\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"media-body\">\n                          <h4>Blake Ruiz</h4>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                        </div>\n                      </div>\n                      <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                        sed do eiusmod tempor incididunt ut labore et dolore magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                        ullamco laboris nisi ut aliquip ex ea commodo\n                      </p>\n                    </div>\n                    <div class=\"review_item\">\n                      <div class=\"media\">\n                        <div class=\"d-flex\">\n                          <img\n                            src=\"../assets/img/product/single-product/review-3.png\"\n                            alt=\"\"\n                          />\n                        </div>\n                        <div class=\"media-body\">\n                          <h4>Blake Ruiz</h4>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                          <i class=\"fa fa-star\"></i>\n                        </div>\n                      </div>\n                      <p>\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n                        sed do eiusmod tempor incididunt ut labore et dolore magna\n                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n                        ullamco laboris nisi ut aliquip ex ea commodo\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"review_box\">\n                    <h4>Add a Review</h4>\n                    <p>Your Rating:</p>\n                    <ul class=\"list\">\n                      <li>\n                        <a href=\"#\">\n                          <i class=\"fa fa-star\"></i>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"#\">\n                          <i class=\"fa fa-star\"></i>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"#\">\n                          <i class=\"fa fa-star\"></i>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"#\">\n                          <i class=\"fa fa-star\"></i>\n                        </a>\n                      </li>\n                      <li>\n                        <a href=\"#\">\n                          <i class=\"fa fa-star\"></i>\n                        </a>\n                      </li>\n                    </ul>\n                    <p>Outstanding</p>\n                    <form\n                      class=\"row contact_form\"\n                      action=\"contact_process.php\"\n                      method=\"post\"\n                      id=\"contactForm\"\n                      novalidate=\"novalidate\"\n                    >\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            id=\"name\"\n                            name=\"name\"\n                            placeholder=\"Your Full name\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <input\n                            type=\"email\"\n                            class=\"form-control\"\n                            id=\"email\"\n                            name=\"email\"\n                            placeholder=\"Email Address\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            id=\"number\"\n                            name=\"number\"\n                            placeholder=\"Phone Number\"\n                          />\n                        </div>\n                      </div>\n                      <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                          <textarea\n                            class=\"form-control\"\n                            name=\"message\"\n                            id=\"message\"\n                            rows=\"1\"\n                            placeholder=\"Review\"\n                          ></textarea>\n                        </div>\n                      </div>\n                      <div class=\"col-md-12 text-right\">\n                        <button\n                          type=\"submit\"\n                          value=\"submit\"\n                          class=\"btn submit_btn\"\n                        >\n                          Submit Now\n                        </button>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      </body>\n      </html>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
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
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single/single.component */ "./src/app/single/single.component.ts");









const routes = [
    { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'single', component: _single_single_component__WEBPACK_IMPORTED_MODULE_8__["SingleComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'shop';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single/single.component */ "./src/app/single/single.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _single_single_component__WEBPACK_IMPORTED_MODULE_6__["SingleComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartComponent = class CartComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoryComponent = class CategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")).default]
    })
], CategoryComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/single/single.component.css":
/*!*********************************************!*\
  !*** ./src/app/single/single.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS9zaW5nbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/single/single.component.ts":
/*!********************************************!*\
  !*** ./src/app/single/single.component.ts ***!
  \********************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SingleComponent = class SingleComponent {
    constructor() { }
    ngOnInit() {
    }
};
SingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/single/single.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single.component.css */ "./src/app/single/single.component.css")).default]
    })
], SingleComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\shopping\shop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map