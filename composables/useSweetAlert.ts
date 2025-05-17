import Swal from "sweetalert2";
import type { SweetAlertIcon } from "sweetalert2"; // Import correct type

export default function useSweetAlert(
  icon: SweetAlertIcon,
  title: string,
  text: string = '',
  confirmButtonText: string = "Ok"
) {
  Swal.fire({
    toast: true,
    position: "top-end",
    timer: 5000,
    timerProgressBar: true,
    title,
    text,
    icon,
    confirmButtonText,
    // `theme` is not a valid option in SweetAlert2 core
    // You might be using a custom theme loader/plugin. If not, remove this.
  });
}
