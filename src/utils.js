import * as yup from "yup";

export const selectStyles = error => (
    {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: state.isDisabled ? "#fff" : "#fff",
            borderRadius: "0.375rem",
            paddingTop:"0.5rem",
            paddingBottom:"0.5rem",
            border: state.isDisabled ? "2px solid #e4e4e4" : state.isFocused ? "2px solid #242656" :  state.isSelected ? "2px solid #242656" : state.hasValue ? "1px solid #242656": error ? "2px solid #ef4444": "2px solid #cbd5e1",
            "&:hover": {
                border: "2px solid #242656",
                boxShadow: "0px 0px 4px #242656"
            },
            fontSize: "1rem",
            "@media (max-width:1024px)": {
                fontSize: "0.875rem"
            }
            
        }),
        option: (provided, state) => {
            return ({
                ...provided,
                background: state.isSelected ? "#242656" : "white",
                color: state.isSelected ? "#ffffff" : "#500",
                "&:hover": {
                    "background": "#242656",
                    color: "#ffffff"
                },
                fontSize: "1rem",
                "@media (max-width:1024px)": {
                    fontSize: "0.875rem"
                }
            })
        },
        
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';
    
            return { ...provided, opacity, transition };
        }
    }
)

export function stringNotEmpty() {
    return yup.mixed().test({
        name: 'stringNotEmpty',
        exclusive: false,
        message: "Required",
        test: function (value) {
            if (value !== undefined && value !== false) {
                return value.trim() !== "";
            } else if (value === undefined) {
                return false
            }
        },
    });
}