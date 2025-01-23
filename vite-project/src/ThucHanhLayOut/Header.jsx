import React from "react";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-black">
        <div class="container bg-black text-white">
            <div class="navbar-brand">Bootstrap</div>
          <div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
