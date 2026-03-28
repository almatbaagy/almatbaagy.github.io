import { jsx as _jsx } from "react/jsx-runtime";
export const ToggleSwitch = ({ checked, onChange, disabled = false }) => {
    return (_jsx("button", { type: "button", disabled: disabled, onClick: () => onChange(!checked), className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                  ${checked ? 'bg-tb-sienna' : 'bg-tb-sage-mist/40'}
                  ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`, children: _jsx("span", { className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                    ${checked ? 'translate-x-6' : 'translate-x-1'}` }) }));
};
