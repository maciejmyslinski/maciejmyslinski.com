// https://redfin.engineering/how-to-fix-the-refresh-button-when-using-service-workers-a8e27af6df68
let refreshed = false;

export const onServiceWorkerUpdateFound = () => {
  if (refreshed) return;
  refreshed = true;
  window.location.reload();
};
