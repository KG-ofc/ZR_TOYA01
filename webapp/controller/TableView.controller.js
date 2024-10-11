sap.ui.define([
    "sap/ui/core/mvc/Controller",
],




    function (Controller) {
        "use strict";

        return Controller.extend("zrtoya01.controller.TableView", {
            onInit: function () {

            },

            backButton: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteStartView");
            }

        });

    });