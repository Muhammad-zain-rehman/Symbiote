export const selectStyles = (error) => ({
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#ececec", // Common background color for control
        color: "#ffffff",
        borderRadius: "0.32rem",
        paddingTop: "0.5rem",
        paddingLeft: "0.4rem",
        paddingBottom: "0.5rem",
        border: state.isDisabled
            ? "1px solid #000000"
            : state.isFocused
            ? "1px solid #000000"
            : state.isSelected
            ? "1px solid #000000"
            : state.hasValue
            ? "1px solid #000000"
            : error
            ? "1px solid #ef4444"
            : "1px solid #000000",
        outline: "none", // Removes the blue border on focus
        boxShadow: "none", // Removes any additional shadow caused by focus
        "&:hover": {
            border: "1px solid #000000",
        },
        fontSize: "0.875rem",
        "@media (max-width:1024px)": {
            fontSize: "0.875rem",
        },
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isSelected
            ? "#1d1d1d" // Selected option background
            : "#ececec", // Same as control background
        color: state.isSelected ? "#ffffff" : "#white",
        "&:hover": {
            background: "#1d1d1d",
            color: "#ffffff",
        },
        fontSize: "1rem",
        "@media (max-width:1024px)": {
            fontSize: "0.875rem",
        },
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";

        return { ...provided, opacity, transition };
    },
});
