final List<dynamic> styles = ['.mdc-card {\n  border-radius: 4px;\n  background-color: #fff;\n  /* @alternate */\n  background-color: var(--mdc-theme-surface, #fff);\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n}\n\n.mdc-card--outlined {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e0e0e0;\n}\n\n.mdc-card__media {\n  position: relative;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.mdc-card__media::before {\n  display: block;\n  content: "";\n}\n\n.mdc-card__media:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n\n.mdc-card__media:last-child {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n.mdc-card__media--square::before {\n  margin-top: 100%;\n}\n\n.mdc-card__media--16-9::before {\n  margin-top: 56.25%;\n}\n\n.mdc-card__media-content {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  box-sizing: border-box;\n}\n\n.mdc-card__primary-action {\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  position: relative;\n  outline: none;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  overflow: hidden;\n}\n\n.mdc-card__primary-action:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n\n.mdc-card__primary-action:last-child {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n.mdc-card__actions {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 52px;\n  padding: 8px;\n}\n\n.mdc-card__actions--full-bleed {\n  padding: 0;\n}\n\n.mdc-card__action-buttons,\n.mdc-card__action-icons {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n.mdc-card__action-icons {\n  color: rgba(0, 0, 0, 0.6);\n  flex-grow: 1;\n  justify-content: flex-end;\n}\n\n.mdc-card__action-buttons + .mdc-card__action-icons {\n  /* @noflip */\n  margin-left: 16px;\n  /* @noflip */\n  margin-right: 0;\n}\n[dir=rtl] .mdc-card__action-buttons + .mdc-card__action-icons, .mdc-card__action-buttons + .mdc-card__action-icons[dir=rtl] {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 16px;\n}\n\n.mdc-card__action {\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  justify-content: center;\n  cursor: pointer;\n  user-select: none;\n}\n.mdc-card__action:focus {\n  outline: none;\n}\n\n.mdc-card__action--button {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 8px;\n  padding: 0 8px;\n}\n[dir=rtl] .mdc-card__action--button, .mdc-card__action--button[dir=rtl] {\n  /* @noflip */\n  margin-left: 8px;\n  /* @noflip */\n  margin-right: 0;\n}\n.mdc-card__action--button:last-child {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 0;\n}\n[dir=rtl] .mdc-card__action--button:last-child, .mdc-card__action--button:last-child[dir=rtl] {\n  /* @noflip */\n  margin-left: 0;\n  /* @noflip */\n  margin-right: 0;\n}\n\n.mdc-card__actions--full-bleed .mdc-card__action--button {\n  justify-content: space-between;\n  width: 100%;\n  height: auto;\n  max-height: none;\n  margin: 0;\n  padding: 8px 16px;\n  /* @noflip */\n  text-align: left;\n}\n[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button, .mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl] {\n  /* @noflip */\n  text-align: right;\n}\n\n.mdc-card__action--icon {\n  margin: -6px 0;\n  padding: 12px;\n}\n\n.mdc-card__action--icon:not(:disabled) {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.mdc-card__primary-action {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n}\n.mdc-card__primary-action::before, .mdc-card__primary-action::after {\n  position: absolute;\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n  content: "";\n}\n.mdc-card__primary-action::before {\n  transition: opacity 15ms linear, background-color 15ms linear;\n  z-index: 1;\n}\n.mdc-card__primary-action.mdc-ripple-upgraded::before {\n  transform: scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-card__primary-action.mdc-ripple-upgraded::after {\n  top: 0;\n  /* @noflip */\n  left: 0;\n  transform: scale(0);\n  transform-origin: center center;\n}\n.mdc-card__primary-action.mdc-ripple-upgraded--unbounded::after {\n  top: var(--mdc-ripple-top, 0);\n  /* @noflip */\n  left: var(--mdc-ripple-left, 0);\n}\n.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation::after {\n  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;\n}\n.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation::after {\n  animation: mdc-ripple-fg-opacity-out 150ms;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n.mdc-card__primary-action::before, .mdc-card__primary-action::after {\n  top: calc(50% - 100%);\n  /* @noflip */\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n.mdc-card__primary-action.mdc-ripple-upgraded::after {\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n}\n.mdc-card__primary-action::before, .mdc-card__primary-action::after {\n  background-color: #000;\n}\n.mdc-card__primary-action:hover::before {\n  opacity: 0.04;\n}\n.mdc-card__primary-action.mdc-ripple-upgraded--background-focused::before, .mdc-card__primary-action:not(.mdc-ripple-upgraded):focus::before {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-card__primary-action:not(.mdc-ripple-upgraded)::after {\n  transition: opacity 150ms linear;\n}\n.mdc-card__primary-action:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 75ms;\n  opacity: 0.12;\n}\n.mdc-card__primary-action.mdc-ripple-upgraded {\n  --mdc-ripple-fg-opacity: 0.12;\n}\n'];