export const ADMIN_EMAIL = "annoh.karlgusta@gmail.com";

export function isAdminEmail(email = "") {
  return email.toLowerCase().trim() === ADMIN_EMAIL;
}
