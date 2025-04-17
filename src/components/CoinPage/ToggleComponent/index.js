import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}
    >
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={(e) => {
          handlePriceTypeChange(e);
        }}
        sx={{
          "&.Mui-selected": {
            color: "var(--yellow) !important",
          },
          borderColor: "var(--yellow)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--yellow)!important",
            borderColor: "unset",
            color: "var(--yellow) !important ",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--yellow) !important",
          },
        }}
      >
        <ToggleButton value="prices">Valuation</ToggleButton>
        <ToggleButton value="market_caps">Capitalization</ToggleButton>
        <ToggleButton value="total_volumes">Trade Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
