export default function useRouteAlert(title: string) {
  const route = useRoute();
  const alert = route.query.alert;
  if (alert) {
    const message = Array.isArray(alert) ? alert[0] : alert;
    console.log(message, "route.query.alert");
    if (message) {
      useSweetAlert("error", title, message);
    }
  }
}
