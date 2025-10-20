function calculateTips(mealPrice, customTip) {
  // strip symbols, keep digits and decimal point
  const P = parseFloat(String(mealPrice).replace(/[^0-9.]/g, ""));
  const c = parseFloat(String(customTip).replace(/[^0-9.]/g, ""));

  // compute tips and round to cents
  const tips = [0.15 * P, 0.20 * P, (c / 100) * P].map(v =>
    `$${v.toFixed(2)}`
  );

  return tips;
}