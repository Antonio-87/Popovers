/**
 * Entry point of app: don't change this
 */
import InnFormPopover from "./popover";
// don't write your code here

window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");
  new InnFormPopover(button);
});
