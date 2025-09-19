// Global toast provider for the app using sonner
import { Toaster } from "sonner";

export function ToastProvider() {
  return <Toaster richColors position="top-center" />;
}
