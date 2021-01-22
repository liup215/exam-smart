final List<dynamic> styles = [':host {\n  display: block;\n  outline: none;\n}\n\n.group-header {\n  display: block;\n  font-family: inherit;\n  font-size: 15px;\n  line-height: 32px;\n  padding: 0 24px;\n  position: relative;\n  white-space: nowrap;\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n  height: 24px;\n  line-height: 24px;\n  display: flex;\n  justify-content: space-between;\n}\n.group-header.disabled {\n  pointer-events: none;\n}\n.group-header ::ng-deep .material-list-item-primary {\n  color: rgba(0, 0, 0, 0.54);\n  width: 40px;\n}\n.group-header.disabled ::ng-deep .material-list-item-primary {\n  color: rgba(0, 0, 0, 0.38);\n}\n.group-header ::ng-deep .material-list-item-secondary {\n  color: rgba(0, 0, 0, 0.54);\n  margin-left: auto;\n}\n.group-header.disabled ::ng-deep .material-list-item-secondary {\n  color: rgba(0, 0, 0, 0.38);\n}\n.group-header ::ng-deep .submenu-icon {\n  transform: rotate(-90deg);\n}\n.group-header.is-collapsible {\n  cursor: pointer;\n}\n\n.expansion-icon {\n  align-items: center;\n  cursor: pointer;\n  margin-left: 8px;\n}\n\n.menu-item {\n  display: block;\n  font-family: inherit;\n  font-size: 15px;\n  line-height: 32px;\n  padding: 0 24px;\n  position: relative;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  min-height: 32px;\n  outline: none;\n}\n.menu-item.disabled {\n  pointer-events: none;\n}\n.menu-item ::ng-deep .material-list-item-primary {\n  color: rgba(0, 0, 0, 0.54);\n  width: 40px;\n}\n.menu-item.disabled ::ng-deep .material-list-item-primary {\n  color: rgba(0, 0, 0, 0.38);\n}\n.menu-item ::ng-deep .material-list-item-secondary {\n  color: rgba(0, 0, 0, 0.54);\n  margin-left: auto;\n}\n.menu-item.disabled ::ng-deep .material-list-item-secondary {\n  color: rgba(0, 0, 0, 0.38);\n}\n.menu-item ::ng-deep .submenu-icon {\n  transform: rotate(-90deg);\n}\n.menu-item:not([separator=present]):hover, .menu-item:not([separator=present]):focus, .menu-item:not([separator=present]).active {\n  background: #eeeeee;\n}\n.menu-item:not([separator=present]).disabled {\n  background: none;\n  color: rgba(0, 0, 0, 0.38);\n  cursor: default;\n  pointer-events: all;\n}\n.menu-item material-icon.disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n:host-context([dir=rtl]) .group-header ::ng-deep .submenu-icon, :host-context([dir=rtl]) .menu-item ::ng-deep .submenu-icon {\n  transform: rotate(90deg);\n}\n\n.menu-item.active ::ng-deep .secondary-icon.hover-icon {\n  opacity: inherit;\n}\n\n:host(.mouse-driven) .menu-item:not(:hover):not(:focus) {\n  background-color: inherit;\n}\n:host(.mouse-driven) .menu-item:hover ::ng-deep .secondary-icon.hover-icon {\n  opacity: inherit;\n}\n\n:host(.keyboard-driven) .menu-item:not(.active) {\n  background-color: inherit;\n}\n:host(.keyboard-driven) .menu-item.is-menu-parent {\n  background: #eeeeee;\n}\n\n.group:not(.empty):not(:first-child) {\n  border-top: 1px solid #e0e0e0;\n  margin-top: 7px;\n  padding-top: 8px;\n}\n\n.menu-item-label-section {\n  display: inline-flex;\n  flex: 1;\n  flex-direction: column;\n  line-height: normal;\n  padding: 4px 0;\n}\n\n.menu-item-secondary-label {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: rgba(0, 0, 0, 0.54);\n  font: 400 12px / 20px Roboto, Noto, sans-serif;\n  letter-spacing: 0.02em;\n}\n\n.label-annotation {\n  color: #0f9d58;\n  font-size: 10px;\n  font-weight: 700;\n  line-height: 10px;\n  text-transform: uppercase;\n}\n\n.item-group-list {\n  padding: 8px 0;\n}\n\n.suffix-list {\n  margin-left: 24px;\n}\n'];